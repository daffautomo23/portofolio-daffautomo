'use client';

import { Server, Layout, Settings } from 'lucide-react';
import { motion } from 'motion/react';

const skillsMarquee = [
    "Odoo ERP", "Python", "PostgreSQL", "Laravel", "React.js", "PHP", "MySQL",
    "Node.js", "JavaScript", "REST API", "Git", "Docker", "Linux"
];

const categories = [
    {
        title: "Enterprise Systems",
        icon: Server,
        color: "text-ink",
        bg: "bg-surface border border-border",
        skills: "Odoo ERP, ERP Customization, Module Development, PostgreSQL"
    },
    {
        title: "Web Development",
        icon: Layout,
        color: "text-ink",
        bg: "bg-surface border border-border",
        skills: "Laravel, React.js, Node.js, PHP, REST API, Responsive Design"
    },
    {
        title: "Tools & Workflow",
        icon: Settings,
        color: "text-ink",
        bg: "bg-surface border border-border",
        skills: "Git, Docker, Linux, VS Code, Agile, Postman"
    }
];

export default function Skills() {
    // Duplicate for seamless infinite scrolling
    const duplicatedMarquee = [...skillsMarquee, ...skillsMarquee];

    return (
        <section id="skills" className="relative w-full py-24 bg-background overflow-hidden">

            {/* Infinite Marquee */}
            <div className="relative flex overflow-x-hidden border-y border-border py-8 mb-24 bg-background">
                <div className="animate-marquee whitespace-nowrap flex items-center">
                    {duplicatedMarquee.map((skill, index) => (
                        <span key={index} className="flex items-center text-xl md:text-2xl lg:text-3xl font-light text-ink/30 mx-4 uppercase tracking-wider">
                            {skill}
                            <span className="mx-4 text-ink/20 text-lg md:text-xl">•</span>
                        </span>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-12 text-center">Core Competencies</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-t border-border pt-12">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="flex flex-col"
                        >
                            <div className={`mb-8 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${category.bg} ${category.color}`}>
                                <category.icon size={24} />
                            </div>
                            <h3 className="text-xl md:text-2xl font-light text-ink mb-4">{category.title}</h3>
                            <p className="text-base md:text-lg text-muted font-light leading-relaxed">{category.skills}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
