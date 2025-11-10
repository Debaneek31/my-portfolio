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
        { title: 'Certificates', href: '/certificates' },
        { title: 'Education', href: '/education' },
        { title: 'Technologies', href: '/technologies' },
        { title: 'Projects', href: '/projects' },
        { title: 'Contact', href: '/contact' },
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-slate-900/80 backdrop-blur-md shadow-lg shadow-black/20 border-b border-slate-700/50' : 'bg-transparent'}`}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex-shrink-0">
                            <Link href="/" className="text-cyan-400 font-mono font-bold text-xl hover:text-cyan-300 transition-colors">
                                &lt;DC/&gt;
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-1">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.title}
                                        href={link.href}
                                        className="text-slate-300 hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer hover:bg-slate-800/50 relative group"
                                    >
                                        {link.title}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 focus:outline-none z-50 transition-colors"
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
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-30 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsOpen(false)}
            ></div>

            {/* Mobile Menu Panel */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-slate-900 border-l border-slate-700 z-40 shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="pt-24 pb-5 px-4 space-y-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.title}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-slate-300 hover:bg-slate-800 hover:text-cyan-400 block px-4 py-3 rounded-lg text-base font-medium cursor-pointer transition-all duration-300 border-l-2 border-transparent hover:border-cyan-400"
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
