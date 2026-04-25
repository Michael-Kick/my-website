import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import ContactConfirmationEmailTemplate from "../../../../emails/ContactConfirmationEmailTemplate";
import OwnerNotificationEmailTemplate from "../../../../emails/OwnerNotificationEmailTemplate";

// Rate limiting: simple in-memory store (use Redis in production for multi-instance)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in ms

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (!record || now > record.resetTime) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
        return false;
    }

    if (record.count >= RATE_LIMIT_MAX) {
        return true;
    }

    record.count++;
    return false;
}

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;
const MAX_SUBJECT_LENGTH = 200;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateInput(data: {
    email?: string;
    firstName?: string;
    lastName?: string;
    message?: string;
    subject?: string;
    phone?: string;
    company?: string;
}) {
    const errors: string[] = [];

    if (!data.email || typeof data.email !== 'string') {
        errors.push('Email is required');
    } else if (data.email.length > MAX_EMAIL_LENGTH) {
        errors.push('Email is too long');
    } else if (!EMAIL_REGEX.test(data.email)) {
        errors.push('Invalid email format');
    }

    if (!data.firstName || typeof data.firstName !== 'string') {
        errors.push('First name is required');
    } else if (data.firstName.length > MAX_NAME_LENGTH) {
        errors.push('First name is too long');
    }

    if (data.lastName && typeof data.lastName === 'string' && data.lastName.length > MAX_NAME_LENGTH) {
        errors.push('Last name is too long');
    }

    if (!data.message || typeof data.message !== 'string') {
        errors.push('Message is required');
    } else if (data.message.length > MAX_MESSAGE_LENGTH) {
        errors.push('Message is too long');
    }

    if (data.subject && typeof data.subject === 'string' && data.subject.length > MAX_SUBJECT_LENGTH) {
        errors.push('Subject is too long');
    }

    if (data.phone && typeof data.phone === 'string' && data.phone.length > MAX_NAME_LENGTH) {
        errors.push('Phone number is too long');
    }

    if (data.company && typeof data.company === 'string' && data.company.length > MAX_NAME_LENGTH) {
        errors.push('Company name is too long');
    }

    return errors;
}

const CONTACT_EMAIL = process.env.CONTACT_EMAIL;
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;
const TURNSTILE_BYPASS = process.env.TURNSTILE_BYPASS === 'true';
const turnstileBypassEnabled = TURNSTILE_BYPASS && process.env.NODE_ENV !== 'production';

type TurnstileVerificationResponse = {
    success: boolean;
    'error-codes'?: string[];
};

async function verifyTurnstile(token: string, ip: string | null) {
    const secret = TURNSTILE_SECRET_KEY;
    if (!secret) {
        return { success: false, 'error-codes': ['missing-secret'] } satisfies TurnstileVerificationResponse;
    }

    try {
        const formData = new URLSearchParams();
        formData.append('secret', secret);
        formData.append('response', token);
        if (ip) {
            formData.append('remoteip', ip);
        }

        const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            return { success: false, 'error-codes': ['verification-unreachable'] } satisfies TurnstileVerificationResponse;
        }

        return await response.json() as TurnstileVerificationResponse;
    } catch (error) {
        console.error('Turnstile verification error:', error);
        return { success: false, 'error-codes': ['verification-error'] } satisfies TurnstileVerificationResponse;
    }
}

function createTransporter() {
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: GMAIL_USER,
            pass: GMAIL_APP_PASSWORD,
        },
    });
}

export const POST = async (req: Request) => {
    try {
        if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !CONTACT_EMAIL || (!TURNSTILE_SECRET_KEY && !turnstileBypassEnabled)) {
            const missing: string[] = [];
            if (!GMAIL_USER) missing.push('GMAIL_USER');
            if (!GMAIL_APP_PASSWORD) missing.push('GMAIL_APP_PASSWORD');
            if (!CONTACT_EMAIL) missing.push('CONTACT_EMAIL');
            if (!TURNSTILE_SECRET_KEY && !turnstileBypassEnabled) missing.push('TURNSTILE_SECRET_KEY');
            console.error('Contact form configuration error:', missing.join(', '));
            return Response.json(
                { error: `Contact form is not configured. Missing: ${missing.join(', ')}.` },
                { status: 500 }
            );
        }

        const transporter = createTransporter();

        const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
                   req.headers.get('x-real-ip') ||
                   'unknown';

        if (isRateLimited(ip)) {
            return Response.json(
                { error: 'Too many requests. Please try again later.' },
                { status: 429 }
            );
        }

        const body = await req.json();
        const {
            email,
            firstName,
            lastName,
            message,
            subject,
            phone,
            company,
            honeypot,
            turnstileToken,
        } = body;

        if (typeof honeypot === 'string' && honeypot.trim() !== '') {
            return Response.json({ error: 'Failed to send message.' }, { status: 400 });
        }

        const validationErrors = validateInput({ email, firstName, lastName, message, subject, phone, company });
        if (validationErrors.length > 0) {
            return Response.json(
                { error: validationErrors.join(', ') },
                { status: 400 }
            );
        }

        if (!turnstileBypassEnabled) {
            if (!turnstileToken || typeof turnstileToken !== 'string') {
                return Response.json(
                    { error: 'Verification failed. Please try again.' },
                    { status: 400 }
                );
            }

            const turnstileResult = await verifyTurnstile(turnstileToken, ip === 'unknown' ? null : ip);
            if (!turnstileResult.success) {
                console.warn('Turnstile verification failed:', turnstileResult['error-codes']);
                return Response.json(
                    { error: 'Verification failed. Please try again.' },
                    { status: 403 }
                );
            }
        }

        const ownerHtml = await render(
            <OwnerNotificationEmailTemplate
                userEmail={email}
                userFirstname={firstName}
                userLastname={lastName}
                userMessage={message}
                userPhone={phone}
                userCompany={company}
                subject={subject}
            />
        );

        await transporter.sendMail({
            from: `Contact Form <${GMAIL_USER}>`,
            to: CONTACT_EMAIL,
            replyTo: email,
            subject: subject || `Contact from ${firstName} ${lastName || ''}`.trim(),
            html: ownerHtml,
        });

        let confirmationSent = true;
        try {
            const visitorHtml = await render(
                <ContactConfirmationEmailTemplate
                    userEmail={email}
                    userFirstname={firstName}
                    userMessage={message}
                />
            );

            await transporter.sendMail({
                from: `Michael Kick <${GMAIL_USER}>`,
                to: email,
                subject: 'Thank you for reaching out!',
                html: visitorHtml,
            });
        } catch (error) {
            console.error('Error sending confirmation email:', error);
            confirmationSent = false;
        }

        return Response.json({ success: true, confirmationSent });
    } catch (error: unknown) {
        console.error('Contact form error:', error);
        return Response.json({ error: 'An unexpected error occurred' }, { status: 500 });
    }
}
