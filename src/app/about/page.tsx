import React from 'react';
import BlogLayout from '../_components/BlogLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Me',
    description: 'Learn more about Michael Kick, a passionate software developer specializing in full-stack development, mobile apps, and AI solutions.',
    openGraph: {
        title: 'About Me | Michael Kick',
        description: 'Learn more about Michael Kick, a passionate software developer specializing in full-stack development, mobile apps, and AI solutions.',
    },
};

const aboutMeTitle = "About me";
const aboutMeIntro =
    "I am Michael Kick, a software engineer in Regensburg focused on building full-stack and mobile products that feel clear, fast, and reliable. My background spans Java and Spring Boot services as well as modern TypeScript and React interfaces.";
const aboutMeSections = [
    {
        title: "What I do",
        paragraphs: [
            "I design and build end-to-end features, from backend services and data flows to responsive user interfaces.",
            "Recent work includes mobile learning UX redesigns, project tracking dashboards, and AI-assisted customer support experiences.",
        ],
    },
    {
        title: "How I work",
        paragraphs: [
            "I start with the user journey, define the smallest valuable slice, and iterate based on feedback.",
        ],
        bullets: [
            "Translate goals into clear flows and interface hierarchy.",
            "Ship in small increments with measurable outcomes.",
            "Keep codebases readable with consistent patterns and documentation.",
        ],
    },
    {
        title: "Now",
        paragraphs: [
            "Currently I work as a Java Software Developer at TGW, focusing on reliable services and smooth handoffs with frontend experiences.",
            "I am also sharpening my TypeScript and Next.js practice to deliver product-focused UI.",
        ],
    },
    {
        title: "Freelance",
        paragraphs: [
            "Alongside my full-time role I am available for freelance software projects. I take on a limited number of projects at a time to keep quality high and communication clear.",
        ],
        bullets: [
            "Web applications with Next.js, React, and TypeScript.",
            "Backend services and REST APIs with Java or Node.js.",
            "UX improvements, performance tuning, and code quality reviews.",
        ],
    },
    {
        title: "Outside work",
        paragraphs: [
            "I enjoy exploring new tools and spending time outdoors to reset.",
        ],
    },
];
const quickFacts = [
    { label: "Location", value: "Regensburg, Germany" },
    { label: "Focus", value: "Full-stack, mobile UX, AI-assisted support" },
    { label: "Core stack", value: "TypeScript, React/Next.js, Java, Spring Boot" },
    { label: "Currently", value: "Java Software Developer at TGW" },
];
const aboutCta = [
    { text: "Contact me", href: "/contact" },
    { text: "View resume", href: "/resume" },
    { text: "See projects", href: "/projects" },
];

const About = () => {
    return (
        <div className="w-full">
            <BlogLayout
                blogTitle={aboutMeTitle}
                intro={aboutMeIntro}
                sections={aboutMeSections}
                quickFacts={quickFacts}
                cta={aboutCta}
            />
        </div>
    );
};

export default About;
