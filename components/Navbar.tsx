'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import MagneticButton from './MagneticButton';

const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [clipOrigin, setClipOrigin] = useState("calc(100% - 3rem) 3rem");
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleOpen = () => {
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;
            setClipOrigin(`${x}px ${y}px`);
        } else {
            setClipOrigin("calc(100% - 3rem) 3rem");
        }
        setIsOpen(true);
    };

    return (
        <>
            {/* Desktop & Mobile Fixed Header */}
            <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 py-4 sm:py-6 md:px-12 lg:px-24 text-ink">
                <Link href="/" className="text-2xl font-light tracking-widest text-ink transition-transform hover:scale-105">
                    DU
                </Link>

                <button
                    ref={buttonRef}
                    onClick={handleOpen}
                    className="p-2 transition-transform hover:scale-110"
                    aria-label="Open Menu"
                >
                    <Menu size={28} />
                </button>
            </header>

            {/* Fullscreen Overlay Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ clipPath: `circle(0px at ${clipOrigin})` }}
                        animate={{ clipPath: `circle(150vmax at ${clipOrigin})`, transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] } }}
                        exit={{ clipPath: `circle(0px at ${clipOrigin})`, transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] } }}
                        className="fixed inset-0 z-[60] flex flex-col justify-between bg-ink px-4 sm:px-6 py-4 sm:py-6 md:px-12 lg:px-24"
                    >
                        {/* Overlay Header */}
                        <div className="flex items-center justify-between text-white">
                            <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl font-light tracking-widest text-white transition-transform hover:scale-105">
                                DU
                            </Link>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 text-white transition-transform hover:rotate-90"
                                aria-label="Close Menu"
                            >
                                <X size={32} />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <nav className="flex flex-col items-start gap-4 md:gap-8 mt-12">
                            {navLinks.map((link, i) => (
                                <div key={link.name} className="overflow-hidden">
                                    <motion.div
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0, transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.2 + i * 0.1 } }}
                                        exit={{ y: "100%", transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1], delay: i * 0.05 } }}
                                    >
                                        <MagneticButton>
                                            <a
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className="text-3xl sm:text-4xl md:text-5xl font-light text-white hover:text-muted transition-colors inline-block relative
                                                after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-[10%]
                                                after:left-0 after:bg-white after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left"
                                            >
                                                {link.name}
                                            </a>
                                        </MagneticButton>
                                    </motion.div>
                                </div>
                            ))}
                        </nav>

                        {/* Footer Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.5 } }}
                            exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
                            className="flex flex-col md:flex-row justify-between text-muted text-sm md:text-base gap-4 mt-auto pt-8 border-t border-white/10"
                        >
                            <div className="flex gap-6">
                                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
                                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                                <a href="https://wa.me/6281519098562" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
                            </div>
                            <a href="mailto:daffautomo54@gmail.com" className="hover:text-white transition-colors">daffautomo54@gmail.com</a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
