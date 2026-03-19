'use client';

import MagneticButton from './MagneticButton';

export default function CtaSection() {
    return (
        <section id="contact" className="relative w-full px-4 sm:px-6 py-20 sm:py-32 md:px-12 lg:px-24 bg-background overflow-hidden border-t border-border">
            <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
                <h2 className="text-judul text-ink mb-6 max-w-4xl">
                    Let's Build Something Together
                </h2>

                <p className="text-deskripsi max-w-2xl mb-12">
                    Open to full-time roles, freelance projects, and interesting collaborations.
                </p>

                <MagneticButton as="a" href="mailto:daffautomo54@gmail.com">
                    <span className="group flex items-center justify-center gap-3 sm:gap-4 rounded-full bg-ink px-8 py-4 sm:px-12 sm:py-6 text-xs sm:text-sm font-medium tracking-wide uppercase text-white transition-colors hover:bg-white hover:text-ink border border-transparent hover:border-ink cursor-pointer">
                        Get In Touch
                        <svg
                            className="h-5 w-5 transition-transform group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </span>
                </MagneticButton>

                <div className="mt-16 sm:mt-24 p-6 sm:p-8 rounded-3xl border border-border max-w-2xl">
                    <p className="text-deskripsi">
                        <span className="font-semibold text-ink uppercase tracking-widest block mb-4 text-xs">Freelance Services</span> 
                        Need an ERP system or website for your business? I offer robust solutions for enterprises and SMEs.
                    </p>
                </div>
            </div>
        </section>
    );
}
