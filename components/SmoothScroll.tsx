'use client';

import { ReactNode, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScroll({ children }: { children: ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        const handleClick = (e: MouseEvent) => {
            const target = (e.target as HTMLElement).closest('a');
            if (target && target.hash) {
                const href = target.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    lenis.scrollTo(target.hash, { offset: 0, duration: 4.5 });
                }
            }
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
