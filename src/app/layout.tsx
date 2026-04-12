import React from "react";
import './_ui/globals.css'
import Navbar from "./_components/navbar/Navbar";
import Footer from "./_components/Footer";
import Providers from "./providers";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
    title: {
        default: 'Michael Kick | Software Engineer',
        template: '%s | Michael Kick'
    },
    description: 'Portfolio of Michael Kick, a Software Engineer from Regensburg specializing in full-stack development, mobile apps, and AI solutions.',
    keywords: ['Software Engineer', 'Full Stack Developer', 'Mobile Development', 'AI Development', 'React', 'Next.js', 'TypeScript', 'Regensburg'],
    authors: [{ name: 'Michael Kick' }],
    creator: 'Michael Kick',
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: process.env.NEXT_PUBLIC_SITE_URL || 'https://michael-kick.com',
        siteName: 'Michael Kick Portfolio',
        title: 'Michael Kick | Software Engineer',
        description: 'Portfolio of Michael Kick, a Software Engineer from Regensburg specializing in full-stack development, mobile apps, and AI solutions.',
        images: [
            {
                url: '/images/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Michael Kick - Software Engineer'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Michael Kick | Software Engineer',
        description: 'Portfolio of Michael Kick, a Software Engineer from Regensburg specializing in full-stack development, mobile apps, and AI solutions.',
        images: ['/images/og-image.png']
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
};

export default function RootLayout({children}: { children: React.ReactNode }) {

    return (
        <html lang="en" suppressHydrationWarning>
        <body className="bg-background font-sans text-text text-base flex flex-col min-h-screen transition-colors duration-200">
        <Providers>
            {/* Layout UI */}
            {/* Place children where you want to render a page or nested layout */}
            <Navbar/>
            <main className="flex flex-grow w-full max-w-screen-2xl px-4 sm:px-8 md:px-16 lg:px-16 2xl:px-24 mx-auto pt-8 md:pt-16 pb-8 md:pb-16 justify-center">{children}</main>
            <Footer/>
        </Providers>
        </body>
        </html>
    );
}
