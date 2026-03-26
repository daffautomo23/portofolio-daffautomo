'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const experiences = [
    {
        role: "ERP Developer (Odoo) Specialist",
        company: "Otoproject Group",
        period: "Jan 2025 – Present",
        tech: ["Odoo 17", "Python", "PostgreSQL", "XML", "ERP Systems", "Laravel", "React.js", "MySQL", "PHP", "JavaScript"],
        links: [
            { name: "Otoproject", url: "https://otoproject.co.id/web_otoproject/public/login" },
            { name: "Odoo PIS", url: "https://odoo-pis.otoproject.id/web/login" },
            { name: "Odoo MMI", url: "https://odoo-mmi.otoproject.id/web/login" },
            { name: "Odoo AOS", url: "https://odoo-aos.otoproject.id/web/login" }
        ],
        description: "Leading enterprise internal systems development and ERP management.",
        detailUrl: "/experience/otoproject"
    },
    {
        role: "Odoo Developer",
        company: "PT. Wibicon Karya Indonesia",
        period: "Jul 2024 – Jan 2025",
        tech: ["Odoo 17", "Python", "PostgreSQL", "XML", "ERP Systems"],
        links: [
            { name: "Odoo Innojaya", url: "http://202.150.143.60:9680/web" }
        ],
        description: "Developed and customized Odoo ERP modules to streamline business processes."
    },
    {
        role: "Full-Stack Developer (Intern)",
        company: "Telkom University",
        period: "Jan 2023 – Jan 2024",
        tech: ["Node.js", "JavaScript", "HTML/CSS", "API Integration"],
        links: [
            { name: "FIT Telkom University", url: "https://sdmfit.telkomuniversity.ac.id/" },
            { name: "HR Telkom University", url: "https://hr.telkomuniversity.ac.id/" }
        ],
        description: "Built web applications and integrated APIs for internal campus systems."
    }
];

export default function Experience() {
    return (
        <section id="experience" className="relative w-full px-4 sm:px-6 py-16 sm:py-24 md:px-12 lg:px-24 bg-background">
            <div className="max-w-4xl mx-auto">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-16">Experience</p>

                <div className="flex flex-col space-y-24">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 sm:gap-8 md:gap-16 items-start border-t border-border pt-10 sm:pt-12"
                        >
                            {/* Left Column: Company & Period */}
                            <div>
                                <h4 className="text-xl md:text-2xl font-normal text-ink">{exp.company}</h4>
                                <span className="text-sm font-medium text-muted mt-2 block">{exp.period}</span>
                            </div>

                            {/* Right Column: Role & Details */}
                            <div>
                                <h3 className="text-2xl md:text-3xl font-normal text-ink mb-4">{exp.role}</h3>
                                <p className="text-deskripsi mb-8">{exp.description}</p>

                                {exp.links && (
                                    <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-sm">
                                        <span className="font-semibold text-ink uppercase tracking-wider text-xs">Live Links:</span>
                                        {exp.links.map(link => (
                                            <a key={link.name} href={link.url} target="_blank" rel="noreferrer" className="text-muted hover:text-ink transition-colors underline underline-offset-4 decoration-border hover:decoration-ink">
                                                {link.name}
                                            </a>
                                        ))}
                                    </div>
                                )}

                                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold text-muted uppercase tracking-widest mt-8">
                                    {exp.tech.map((tech, i) => (
                                        <span key={tech} className="flex items-center">
                                            {tech}
                                            {i < exp.tech.length - 1 && <span className="ml-3 text-ink/20">•</span>}
                                        </span>
                                    ))}
                                </div>

                                {(exp as any).detailUrl && (
                                    <Link
                                        href={(exp as any).detailUrl}
                                        className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-ink border-b border-ink pb-0.5 hover:opacity-60 transition-opacity"
                                    >
                                        View Details <ArrowUpRight size={14} />
                                    </Link>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
