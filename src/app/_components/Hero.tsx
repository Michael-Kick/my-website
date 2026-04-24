import React from 'react';
import Image from "next/image";
import ButtonLink from "./ButtonLink";

function Hero() {
    const heroFirstName = "Michael";
    const heroLastName = "Kick";
    const heroImageSrc = "/images/profile.png";

    return (
        <section className="relative overflow-hidden rounded-2xl border border-border bg-contrast p-8 md:p-12">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-contrast via-contrast to-background opacity-80" />
            <div className="pointer-events-none absolute -right-20 -top-16 h-56 w-56 rounded-full bg-primary opacity-10 blur-3xl" />
            <div className="pointer-events-none absolute -left-24 -bottom-24 h-56 w-56 rounded-full bg-primary opacity-10 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center">
                <div className="space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                        <p className="text-xs uppercase tracking-[0.2em] text-secondary font-jetbrains">Software Engineer</p>
                        <span className="rounded-full border border-primary bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Available for freelance</span>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                            {heroFirstName}{' '}
                            <span className="text-primary">{heroLastName}</span>
                        </h1>
                        <p className="text-secondary text-lg leading-relaxed md:text-xl">
                            I design and build full-stack products that feel calm, clear, and reliable.
                            Based in Regensburg — available for freelance projects alongside my work at TGW.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm text-secondary">
                        <span className="rounded-full border border-border bg-contrastDark px-3 py-1">Full-stack delivery</span>
                        <span className="rounded-full border border-border bg-contrastDark px-3 py-1">Next.js + TypeScript</span>
                        <span className="rounded-full border border-border bg-contrastDark px-3 py-1">Java + Spring Boot</span>
                        <span className="rounded-full border border-border bg-contrastDark px-3 py-1">Product UX polish</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <ButtonLink text="Contact Me" href="/contact" />
                        <ButtonLink text="Download CV" href="/resume"/>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-xl border border-border bg-contrastDark p-4">
                            <p className="text-xs uppercase tracking-[0.2em] text-secondary font-jetbrains">Based in</p>
                            <p className="mt-2 text-sm text-secondary">Regensburg, Germany</p>
                        </div>
                        <div className="rounded-xl border border-border bg-contrastDark p-4">
                            <p className="text-xs uppercase tracking-[0.2em] text-secondary font-jetbrains">Freelance</p>
                            <p className="mt-2 text-sm text-secondary">Open to new projects</p>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="pointer-events-none absolute inset-0 -rotate-2 rounded-3xl border border-border bg-contrastDark" />
                    <div className="relative overflow-hidden rounded-3xl border border-border bg-contrastDark p-6">
                        <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-full border border-border bg-contrast ring-2 ring-primary/30">
                            <Image
                                src={heroImageSrc}
                                width={1000}
                                height={1000}
                                priority
                                quality={90}
                                sizes="(max-width: 1024px) 100vw, 45vw"
                                className="h-full w-full object-cover"
                                alt="Portrait illustration of Michael Kick"
                            />
                        </div>
                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            <div className="rounded-xl border border-border bg-contrast p-4">
                                <p className="text-xs uppercase tracking-[0.2em] text-secondary font-jetbrains">Focus</p>
                                <p className="mt-2 text-sm text-secondary">Reliable systems and clean UI</p>
                            </div>
                            <div className="rounded-xl border border-border bg-contrast p-4">
                                <p className="text-xs uppercase tracking-[0.2em] text-secondary font-jetbrains">Stack</p>
                                <p className="mt-2 text-sm text-secondary">TypeScript, React, Java</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
