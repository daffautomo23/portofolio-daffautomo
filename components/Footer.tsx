import Link from 'next/link';
import { Github, Linkedin, MessageSquare, Mail } from 'lucide-react';
import MagneticButton from './MagneticButton';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
];

export default function Footer() {
    return (
        <footer className="relative w-full bg-ink px-4 sm:px-6 py-16 sm:py-24 md:px-12 lg:px-24 text-white z-10">
            <div className="max-w-7xl mx-auto">
                


                <div className="flex flex-col md:flex-row justify-between items-start gap-16 border-t border-white/10 pt-16">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="text-3xl font-light tracking-widest text-white hover:text-white/80 transition-colors">
                            DAFFA UTOMO
                        </Link>
                        <p className="mt-4 text-sm font-medium text-muted uppercase tracking-wider">
                            Software Engineer · Odoo Specialist
                        </p>
                    </div>

                {/* Nav Links */}
                <nav className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-semibold text-white/80">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="hover:text-white/60 transition-colors">
                            {link.name}
                        </a>
                    ))}
                </nav>

                    {/* Social */}
                    <div className="flex gap-4">
                        <a href="mailto:daffautomo54@gmail.com" className="p-4 rounded-full border border-white/20 hover:border-white hover:bg-white hover:text-ink transition-all">
                            <Mail size={20} />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="p-4 rounded-full border border-white/20 hover:border-white hover:bg-white hover:text-ink transition-all">
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-4 rounded-full border border-white/20 hover:border-white hover:bg-white hover:text-ink transition-all">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://wa.me/6281519098562" target="_blank" rel="noreferrer" className="p-4 rounded-full border border-white/20 hover:border-white hover:bg-white hover:text-ink transition-all">
                            <MessageSquare size={20} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm font-medium text-muted">
                <p>© {new Date().getFullYear()} Daffa Utomo. All rights reserved.</p>
            </div>
        </footer>
    );
}
