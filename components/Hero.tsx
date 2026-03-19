'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import MagneticButton from './MagneticButton';

const tags = ["Odoo 17", "Laravel", "React.js", "PostgreSQL", "Business System"];

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative flex min-h-screen w-full flex-col justify-center px-4 sm:px-6 pt-20 sm:pt-24 md:px-12 lg:px-24 overflow-hidden"
        >
            <motion.div style={{ y: yText, opacity }} className="relative z-10 w-full max-w-7xl">
                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 1.5 } }}
                        className="text-judul text-ink"
                    >
                        Daffa Utomo
                    </motion.h1>
                </div>

                <div className="overflow-hidden">
                    <motion.h2
                        initial={{ y: "100%" }}
                        animate={{ y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 1.6 } }}
                        className="mt-6 text-xl md:text-3xl lg:text-4xl font-light tracking-tight text-ink"
                    >
                        ERP Developer (Odoo)
                    </motion.h2>
                </div>

                <div className="overflow-hidden mt-8">
                    <motion.p
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 1.7 } }}
                        className="text-deskripsi mt-8 max-w-2xl"
                    >
                        Crafting scalable, elegant enterprise solutions that drive business efficiency and growth. Let's elevate your workflow.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1, delay: 2 } }}
                    className="mt-10 sm:mt-12 flex flex-wrap gap-4 sm:gap-8 text-sm md:text-base font-medium text-muted uppercase tracking-widest"
                >
                    {tags.map((tag, i) => (
                        <MagneticButton key={tag}>
                            <span
                                className="relative inline-block cursor-pointer hover:text-ink transition-colors duration-300
                                after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-[-4px] 
                                after:left-0 after:bg-ink after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left"
                            >
                                {tag}
                            </span>
                        </MagneticButton>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 2.2 } }}
                    className="mt-12 sm:mt-16 md:mt-24 inline-block"
                >
                    <MagneticButton as="a" href="#about">
                        <span className="group flex items-center justify-center gap-4 rounded-full bg-ink px-10 py-5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-white hover:text-ink border border-transparent hover:border-ink cursor-pointer">
                            View
                            <svg
                                className="h-4 w-4 transition-transform group-hover:translate-y-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </span>
                    </MagneticButton>
                </motion.div>
            </motion.div>

            {/* Minimalist scroll indicator */}
            <motion.div
                style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%" }}
                className="absolute bottom-0 left-0 h-[1px] w-full bg-ink/20"
            />
        </section>
    );
}
