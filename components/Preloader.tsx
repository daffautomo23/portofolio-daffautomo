'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // 1.5s total preloader duration
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-background pointer-events-none"
                    initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
                    exit={{
                        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                        transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] }
                    }}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }}
                        exit={{ scale: 0.9, opacity: 0, transition: { duration: 0.4 } }}
                        className="text-6xl md:text-8xl font-black text-ink tracking-tighter"
                    >
                        DU
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
