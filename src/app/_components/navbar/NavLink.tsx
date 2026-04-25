'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
    href: string;
    label: string;
}

function NavLink({ href, label }: NavLinkProps) {
    const pathname = usePathname();
    const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);

    return (
        <Link
            href={href}
            prefetch={false}
            className={`flex h-full items-center justify-center border-b px-6 transition-colors hover:border-primary hover:text-primary ${
                isActive
                    ? 'border-primary text-primary'
                    : 'border-transparent text-text'
            }`}>
            {label}
        </Link>
    );
}

export default NavLink;
