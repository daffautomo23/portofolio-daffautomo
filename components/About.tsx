'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const bioText = "I'm a dedicated ERP Developer specialized in Odoo, bridging the gap between complex business processes and scalable technical solutions. Whether it's streamlining operations for enterprise clients or helping small businesses digitize their workflows, I build robust systems that drive real efficiency. Currently leading enterprise internal systems at Otoproject Group using Odoo 17, Laravel, and React.js.";

export default function About() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.8", "start 0.2"]
    });

    const words = bioText.split(" ");

    return (
        <section
            id="about"
            ref={containerRef}
            className="relative flex min-h-[80vh] w-full flex-col justify-center px-4 sm:px-6 py-16 sm:py-24 md:px-12 lg:px-24 bg-surface"
        >
            <div className="max-w-5xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-12">About Me</p>

                <h3 className="text-deskripsi max-w-4xl flex flex-wrap gap-x-1.5 md:gap-x-2.5">
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + (1 / words.length);
                        // We create a generic array map, inside we cannot use hooks in loop in normal React, 
                        // but we can pass just calculate the opacity manually utilizing useTransform for each word.
                        // A more componentized way is needed for proper useTransform per word. 
                        // However, Motion supports doing this natively via stagger or custom components.
                        return <Word key={i} word={word} progress={scrollYProgress} range={[start, end]} />;
                    })}
                </h3>

                <div className="mt-16 sm:mt-20 flex flex-wrap gap-8 sm:gap-12 md:gap-20 border-t border-border pt-10 sm:pt-12">
                    <div>
                        <span className="block text-4xl md:text-6xl font-light text-ink">+2</span>
                        <span className="text-xs font-semibold text-muted mt-4 block uppercase tracking-wider">Years Experience</span>
                    </div>
                    <div>
                        <span className="block text-4xl md:text-6xl font-light text-ink">3</span>
                        <span className="text-xs font-semibold text-muted mt-4 block uppercase tracking-wider">Companies</span>
                    </div>
                    <div>
                        <span className="block text-4xl md:text-6xl font-light text-ink">20+</span>
                        <span className="text-xs font-semibold text-muted mt-4 block uppercase tracking-wider">Projects</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Word({ word, progress, range }: { word: string, progress: any, range: [number, number] }) {
    const opacity = useTransform(progress, range, [0.2, 1]);
    return (
        <motion.span style={{ opacity }} className="relative inline-block">
            {word}
        </motion.span>
    );
}
