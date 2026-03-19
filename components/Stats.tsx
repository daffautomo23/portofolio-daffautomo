'use client';

import { motion, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const statsData = [
    { value: 20, suffix: "+", label: "Projects Completed" },
    { value: 3, suffix: "", label: "Companies Worked" },
    { value: 2, suffix: "+", label: "Years Experience" },
    { value: 100, suffix: "%", label: "Commitment" },
];

export default function Stats() {
    return (
        <section className="relative w-full px-6 py-32 md:px-12 lg:px-24 bg-ink text-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-8 divide-x-0 md:divide-x divide-white/10 border-t border-b border-white/10 py-16">
                    {statsData.map((stat, i) => (
                        <StatItem key={i} {...stat} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function StatItem({ value, suffix, label }: { value: number, suffix: string, label: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const duration = 2000; // 2s
            const increment = value / (duration / 16); // 60fps

            const timer = setInterval(() => {
                start += increment;
                if (start >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(Math.ceil(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <div ref={ref} className="flex flex-col items-center justify-center text-center px-4">
            <div className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-4 tracking-tight">
                {count}{suffix}
            </div>
            <div className="text-xs md:text-sm font-semibold uppercase tracking-widest text-muted">
                {label}
            </div>
        </div>
    );
}
