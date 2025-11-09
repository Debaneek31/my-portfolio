'use client'

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);

        // Prevent scrolling when the menu is open
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.style.overflow = 'auto'; // ensure scroll is restored on unmount
        };
    }, [isOpen]);

    const navLinks = [
        { title: 'Home', href: '/' },
        { title: 'Work', href: '/work' },
        { title: 'Education', href: '/education' },
        { title: 'Technologies', href: '/technologies' },
        { title: 'Projects', href: '/projects' },
        { title: 'Contact', href: '/contact' },
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex-shrink-0">
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navLinks.map((link) => (
                                    <Link key={link.title} href={link.href} className="text-slate-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer">
                                        {link.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-blue-600 focus:outline-none z-50"
                                aria-label="Open menu"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-white/30 backdrop-blur-sm z-30 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsOpen(false)}
            ></div>

            {/* Mobile Menu Panel */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white z-40 shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="pt-24 pb-5 px-2 space-y-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.title}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-slate-700 hover:bg-blue-50 hover:text-blue-600 block px-3 py-3 rounded-md text-base font-medium cursor-pointer"
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navbar;
