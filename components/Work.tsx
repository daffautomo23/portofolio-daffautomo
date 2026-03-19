'use client';

import { motion } from 'motion/react';

const projects = [
    {
        title: "Client Profile Website",
        tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        description: "Professional client profile site with course materials.",
        link: "#",
        live: true,
        colSpan: "md:col-span-2",
    },
    {
        title: "Cancer Detection App",
        tech: ["Kotlin", "ML", "TensorFlow", "Android"],
        description: "ML-powered Android app for cancer detection using medical APIs.",
        link: "#",
        colSpan: "md:col-span-1",
    },
    {
        title: "Lomath Educational Platform",
        tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
        description: "Math formula library with interactive quizzes & admin CMS.",
        link: "#",
        colSpan: "md:col-span-1",
    },
    {
        title: "SMPN 3 Tambun Utara Website",
        tech: ["HTML", "CSS", "JavaScript", "API"],
        description: "Official school website with responsive design & API integration.",
        link: "#",
        colSpan: "md:col-span-2",
    }
];

export default function Work() {
    return (
        <section id="work" className="relative w-full px-4 sm:px-6 py-16 sm:py-24 md:px-12 lg:px-24 bg-surface">
            <div className="max-w-7xl mx-auto">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-12">Featured Work</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                            whileHover="hover"
                            className="group relative flex flex-col justify-center overflow-hidden rounded-2xl bg-surface border border-border p-6 sm:p-8 md:p-12 min-h-[300px] transition-all duration-500 hover:shadow-2xl hover:shadow-ink/5 hover:-translate-y-2 hover:border-ink/20 cursor-pointer"
                        >
                            <div className="flex flex-col h-full justify-between z-10 relative">

                                <div>
                                    <h3 className="text-xl md:text-2xl font-normal text-ink mb-4">{project.title}</h3>
                                    <p className="text-deskripsi mb-6 max-w-sm">{project.description}</p>
                                    
                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold text-muted uppercase tracking-widest mb-10">
                                        {project.tech.map((t, i) => (
                                            <span key={t} className="flex items-center">
                                                {t}
                                                {i < project.tech.length - 1 && <span className="ml-3 text-ink/20">•</span>}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <a href={project.link} className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-wider text-ink transition-all group-hover:gap-5">
                                        View Project
                                        <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-ink/20 transition-all group-hover:bg-ink group-hover:text-white">
                                            <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
