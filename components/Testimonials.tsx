'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const testimonials = [
    {
        text: "Website toko online saya yang error udah 3 hari, dalam 1 hari langsung beres! Sekarang bisa jualan lagi.",
        author: "Bu Siti",
        role: "Toko Online Fashion"
    },
    {
        text: "Webnya rapi, cepat selesai, dan harganya masuk akal. Komunikasi juga gampang.",
        author: "Pak Budi",
        role: "UMKM Catering"
    },
    {
        text: "Awalnya gak ngerti soal website, tapi dijelasin dengan sabar sampai paham.",
        author: "Mbak Rina",
        role: "Usaha Kue Homemade"
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 4000); // 4s interval as requested
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full px-6 py-32 md:px-12 lg:px-24 bg-surface overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-16">Client Words</p>

                <div className="relative w-full min-h-[300px] md:min-h-[400px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }}
                            exit={{ opacity: 0, x: -20, transition: { duration: 0.5, ease: "easeIn" } }}
                            className="absolute w-full px-4"
                        >
                            <p className="text-2xl md:text-4xl font-light leading-snug text-ink mb-10 max-w-4xl mx-auto">
                                "{testimonials[currentIndex].text}"
                            </p>
                            <div>
                                <span className="block font-medium text-ink text-lg">{testimonials[currentIndex].author}</span>
                                <span className="block text-sm font-light text-muted uppercase tracking-wider mt-2">{testimonials[currentIndex].role}</span>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Dot Indicators */}
                <div className="mt-8 flex gap-3">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                            className={`h-1.5 transition-all duration-300 rounded-full ${index === currentIndex ? 'w-12 bg-ink' : 'w-4 bg-border hover:bg-muted'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
