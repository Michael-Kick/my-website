import {Button, Container, Head, Html, Body, Hr, Preview, Section, Text,} from '@react-email/components';
import * as React from 'react';

interface ContactConfirmationEmailProps {
    userFirstname: string;
    userEmail: string;
    userMessage: string;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://michas-tech.com';

export const ContactConfirmationEmailTemplate = ({
                                                     userFirstname,
                                                     userEmail,
                                                     userMessage,
                                                 }: ContactConfirmationEmailProps) => (
    <Html>
        <Head/>
        <Body style={main}>
            <Preview>Confirmation: Your message has been sent successfully</Preview>
            <Container style={container}>
                <Text style={heading}>Message Received!</Text>
                <Text style={paragraph}>Hi {userFirstname},</Text>
                <Text style={paragraph}>
                    Thank you for reaching out! I have received your message and will get back to you as soon as possible.
                </Text>
                <Section style={btnContainer}>
                    <Button style={button} href={siteUrl}>
                        Visit Website
                    </Button>
                </Section>
                <Text style={paragraph}>
                    Best regards,
                    <br/>
                    Michael Kick
                </Text>
                <Hr style={hr}/>
                <Text style={footer}>This is an automated confirmation email.</Text>
            </Container>
        </Body>
    </Html>
);

ContactConfirmationEmailTemplate.PreviewProps = {
    userFirstname: 'John',
    userEmail: 'john@example.com',
    userMessage: 'Hi, I am interested in working together on a project!',
} as ContactConfirmationEmailProps;

export default ContactConfirmationEmailTemplate;

const main = {
    backgroundColor: '#ffffff',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: '0 auto',
    padding: '20px 0 48px',
};

const heading = {
    fontSize: '22px',
    fontWeight: 'bold' as const,
    textAlign: 'center' as const,
    margin: '20px 0',
    color: '#4CAF50',
};

const paragraph = {
    fontSize: '16px',
    lineHeight: '26px',
};

const messageBox = {
    fontSize: '16px',
    lineHeight: '24px',
    padding: '10px',
    backgroundColor: '#f4f4f4',
    borderRadius: '5px',
};

const btnContainer = {
    textAlign: 'center' as const,
};

const button = {
    backgroundColor: '#5F51E8',
    borderRadius: '3px',
    color: '#fff',
    fontSize: '16px',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'block',
    padding: '12px',
};

const hr = {
    borderColor: '#cccccc',
    margin: '20px 0',
};

const footer = {
    color: '#8898aa',
    fontSize: '12px',
};
