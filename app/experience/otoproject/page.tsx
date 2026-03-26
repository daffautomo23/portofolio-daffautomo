'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight, Calendar, Briefcase, MapPin } from 'lucide-react';

const techStack = [
    { icon: '⚙️', name: 'Odoo 17', desc: 'ERP Platform' },
    { icon: '🐍', name: 'Python', desc: 'Backend & ORM' },
    { icon: '📄', name: 'XML / QWeb', desc: 'Views & Reports' },
    { icon: '🗄️', name: 'PostgreSQL', desc: 'Database Engine' },
    { icon: '🔗', name: 'REST API', desc: 'Forstock Integration' },
    { icon: '🐧', name: 'Linux / Ubuntu', desc: 'Server Management' },
];

const challenges = [
    {
        title: 'Race Conditions in Real-Time Stock Updates',
        problem:
            'Concurrent API pushes from simultaneous warehouse transactions produced duplicate stock updates on Forstock, causing inventory figures to desync.',
        solution:
            'Implemented a distributed write lock using PostgreSQL advisory locks within the Odoo ORM transaction lifecycle. Augmented with an idempotency key pattern on the API layer to deduplicate retried requests — reducing sync errors by 95%.',
    },
    {
        title: 'Large-Volume Query Optimization',
        problem:
            'Reconciliation queries joining stock.quant, product.template, and product.product across 80,000+ records caused 12-second timeouts, blocking the cron scheduler.',
        solution:
            'Rewrote ORM-based queries to raw PostgreSQL using env.cr.execute() with selective column fetching and composite index creation on (product_id, location_id, company_id). Query time dropped from 12 s → 0.9 s — a 92% improvement.',
    },
    {
        title: 'Resilient API Mapping Across Schema Changes',
        problem:
            "Forstock's API underwent several breaking field-name changes, requiring repeated module redeployments and causing downtime.",
        solution:
            'Abstracted all field mappings into a configurable res.config.settings record and a JSON mapping UI editable from Odoo settings — decoupling business configuration from code. Future schema changes need zero code deployment.',
    },
];

const impacts = [
    { value: '~0', label: 'Overselling Incidents\n(was daily)' },
    { value: '80%', label: 'Reduction in Manual\nData Entry Time' },
    { value: '92%', label: 'Faster Database\nQuery Execution' },
    { value: '98%', label: 'Inventory Data\nAccuracy Rate' },
    { value: '3×', label: 'Faster Order\nFulfillment Cycle' },
    { value: '99.9%', label: 'ERP System\nUptime' },
];

const liveLinks = [
    { name: 'Otoproject Portal', url: 'https://otoproject.co.id/web_otoproject/public/login' },
    { name: 'Odoo PIS', url: 'https://odoo-pis.otoproject.id/web/login' },
    { name: 'Odoo MMI', url: 'https://odoo-mmi.otoproject.id/web/login' },
    { name: 'Odoo AOS', url: 'https://odoo-aos.otoproject.id/web/login' },
];

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: i * 0.08 },
    }),
};

export default function OtoprojectDetail() {
    return (
        <main className="relative w-full min-h-screen bg-background text-ink">
            {/* ── Top Bar ── */}
            <header className="fixed top-0 left-0 right-0 z-50 grid grid-cols-3 items-center px-4 sm:px-6 py-4 sm:py-5 md:px-12 lg:px-24 bg-background/90 backdrop-blur-sm border-b border-border">
                {/* Left: Back */}
                <Link
                    href="/#experience"
                    className="flex items-center gap-2 text-sm font-medium text-muted hover:text-ink transition-colors justify-self-start"
                >
                    <ArrowLeft size={16} /> Back to Experience
                </Link>

                {/* Center: Brand */}
                <Link href="/" className="text-2xl font-light tracking-widest text-ink transition-transform hover:scale-105 justify-self-center">
                    DU
                </Link>

                {/* Right: Action */}
                <a
                    href="mailto:daffautomo54@gmail.com"
                    className="flex items-center gap-1.5 text-sm font-semibold text-ink border border-ink rounded-full px-4 py-1.5 hover:bg-ink hover:text-white transition-all duration-300 justify-self-end"
                >
                    Hire Me <ArrowUpRight size={13} />
                </a>
            </header>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 pt-32 pb-24">

                {/* ── Hero Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                    className="mb-20"
                >
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
                        Otoproject Group
                    </p>
                    <h1 className="text-judul text-ink mb-5">
                        ERP Developer<br />(Odoo) Specialist
                    </h1>

                    {/* Meta info — below title, with icons */}
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-8">
                        <span className="flex items-center gap-1.5 text-sm text-muted">
                            <Calendar size={13} strokeWidth={1.8} /> Jan 2025 – Present
                        </span>
                        <span className="flex items-center gap-1.5 text-sm text-muted">
                            <Briefcase size={13} strokeWidth={1.8} /> Contract
                        </span>
                        <span className="flex items-center gap-1.5 text-sm text-muted">
                            <MapPin size={13} strokeWidth={1.8} /> Jakarta, Indonesia
                        </span>
                    </div>

                    <p className="text-deskripsi max-w-2xl">
                        Integrasi Odoo–Forstock (Omnichannel) — real-time bidirectional sync of inventory, listings, and
                        sales orders between Odoo 17 and the Forstock marketplace platform, serving three live production databases.
                    </p>
                </motion.div>

                {/* ── Section: Project Overview ── */}
                <Section index={0} label="01 — Project Overview">
                    <p className="text-deskripsi">
                        As the sole <strong>ERP Developer (Odoo)</strong> at Otoproject Group, I own the end-to-end development and
                        maintenance of the company's Odoo ERP ecosystem across three live production databases —{' '}
                        <em>PIS, MMI, and AOS</em> — that serve as the operational backbone of a multi-brand automotive retail group.
                    </p>
                    <p className="text-deskripsi mt-4">
                        The flagship initiative is the <strong>Odoo–Forstock Omnichannel Integration</strong>: a real-time,
                        event-driven pipeline that eliminates manual inventory management across marketplace channels.
                    </p>
                    <Highlight>
                        <strong>Core Project:</strong> Custom Odoo module bridging Odoo 17 stock management with Forstock REST API —
                        eliminating manual data entry and overselling across all sales channels.
                    </Highlight>
                </Section>

                {/* ── Section: The Problem ── */}
                <Section index={1} label="02 — The Problem">
                    <p className="text-deskripsi mb-8">
                        Without real-time sync, Otoproject's multi-brand stores struggled with four core bottlenecks:
                    </p>
                    <ul className="space-y-6">
                        {[
                            ['Stock Desynchronization', 'Inventory updated manually, causing daily overselling and stockout incidents across marketplace channels.'],
                            ['Operational Inefficiency', 'Staff duplicated data entry across systems, consuming significant working hours per day with zero business value.'],
                            ['Order Processing Delays', 'Incoming marketplace orders required manual import into Odoo, slowing fulfillment and increasing error rates.'],
                            ['Lack of Visibility', 'Management had no unified real-time view of inventory, making demand forecasting unreliable.'],
                        ].map(([title, desc], i) => (
                            <li key={i} className="flex gap-4 items-start">
                                <span className="mt-1 text-xs font-bold text-muted shrink-0 pt-1">0{i + 1}</span>
                                <div>
                                    <p className="font-semibold text-ink mb-1">{title}</p>
                                    <p className="text-deskripsi">{desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Section>

                {/* ── Section: My Solution ── */}
                <Section index={2} label="03 — My Solution & Key Features">
                    <p className="text-deskripsi mb-8">
                        I designed and built a <strong>custom Odoo module</strong> orchestrating a bidirectional,
                        event-driven data pipeline between Odoo 17 and Forstock's REST API:
                    </p>
                    <ul className="space-y-6">
                        {[
                            ['Custom Odoo Module (Python + XML)', 'Built forstock_connector following Odoo\'s ORM architecture, extending stock.quant and sale.order models to trigger API calls on inventory movements and confirmed orders.'],
                            ['REST API Integration', 'Engineered a secure API client layer with OAuth2 token management, request retry logic, and structured error logging — ensuring reliable communication under network variability.'],
                            ['Scheduled Cron Jobs', 'Implemented Odoo\'s ir.cron for automated periodic reconciliation via ir.cron, pushing delta stock changes to Forstock every 15 minutes as a failsafe over the event-driven approach.'],
                            ['API Field Mapping Layer', 'Developed a configurable mapping table (via Odoo settings) to translate Forstock SKUs, category IDs, and warehouse codes to Odoo internal references — without hardcoding business logic.'],
                            ['Inbound Order Webhook Handler', 'Created a JSON webhook endpoint in ir.http to receive and auto-create sale.order records from Forstock — reducing manual order entry to zero.'],
                            ['Multi-Database Support', 'Maintained distinct module configs per company database (PIS, MMI, AOS) using Odoo multi-company parameters — enabling channel-specific business logic without code duplication.'],
                        ].map(([title, desc], i) => (
                            <li key={i} className="flex gap-4 items-start border-b border-border pb-6 last:border-0 last:pb-0">
                                <span className="mt-1 text-xs font-bold text-muted shrink-0 pt-1">0{i + 1}</span>
                                <div>
                                    <p className="font-semibold text-ink mb-1">{title}</p>
                                    <p className="text-deskripsi">{desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Section>

                {/* ── Section: Technical Challenges ── */}
                <Section index={3} label="04 — Technical Challenges">
                    <div className="space-y-0">
                        {challenges.map((c, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-60px' }}
                                variants={fadeUp}
                                className="border-b border-border py-8 last:border-0"
                            >
                                <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-3">
                                    Challenge {i + 1}
                                </p>
                                <h3 className="text-xl font-normal text-ink mb-5">{c.title}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-[#F0F0F0] rounded-xl p-5">
                                        <p className="text-xs font-bold uppercase tracking-widest text-muted mb-2">Problem</p>
                                        <p className="text-deskripsi text-sm">{c.problem}</p>
                                    </div>
                                    <div className="bg-ink rounded-xl p-5">
                                        <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent)] mb-2">Solution</p>
                                        <p className="text-sm text-white/80 leading-relaxed">{c.solution}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Section>

                {/* ── Section: Business Impact ── */}
                <Section index={4} label="05 — Business Impact">
                    <p className="text-deskripsi mb-10">
                        Following production deployment across all three company databases, measurable improvements were achieved
                        across operations, accuracy, and team efficiency:
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-border">
                        {impacts.map((stat, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-40px' }}
                                variants={fadeUp}
                                className="bg-background p-6 sm:p-8 flex flex-col justify-between"
                            >
                                <p className="text-4xl sm:text-5xl font-light text-ink tracking-tight mb-3">{stat.value}</p>
                                <p className="text-xs font-semibold uppercase tracking-wider text-muted whitespace-pre-line">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                    <Highlight className="mt-8">
                        <strong>Business Outcome:</strong> Real-time stock visibility allowed Otoproject to scale marketplace
                        operations without additional headcount. Listing larger product catalogs directly contributed to growth
                        in marketplace-driven revenue.
                    </Highlight>
                </Section>

                {/* ── Section: Tech Stack ── */}
                <Section index={5} label="06 — Technical Stack">
                    <div className="flex flex-wrap gap-x-6 gap-y-3">
                        {techStack.map((t, i) => (
                            <span key={i} className="flex items-center gap-2 text-sm font-semibold text-ink uppercase tracking-widest">
                                <span>{t.icon}</span> {t.name}
                                {i < techStack.length - 1 && <span className="text-border ml-3">•</span>}
                            </span>
                        ))}
                    </div>
                </Section>

                {/* ── Section: Live Systems ── */}
                <Section index={6} label="07 — Live Systems">
                    <div className="flex flex-wrap gap-4">
                        {liveLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 border border-border rounded-full px-5 py-2.5 text-sm font-semibold text-ink hover:bg-ink hover:text-white hover:border-ink transition-all duration-300"
                            >
                                {link.name} <ArrowUpRight size={14} />
                            </a>
                        ))}
                    </div>
                </Section>

                {/* ── CTA ── */}
                <div className="flex items-center justify-between gap-4 pt-16 border-t border-border mt-16">
                    {/* Left: Back */}
                    <Link
                        href="/#experience"
                        className="flex items-center gap-2 text-sm font-semibold text-muted hover:text-ink transition-colors"
                    >
                        <ArrowLeft size={16} /> Back to Experience
                    </Link>

                    {/* Right: Action */}
                    <a
                        href="mailto:daffautomo54@gmail.com"
                        className="flex items-center gap-1.5 text-sm font-semibold text-ink border border-ink rounded-full px-5 py-2 hover:bg-ink hover:text-white transition-all duration-300"
                    >
                        Discuss Your ERP Project <ArrowUpRight size={14} />
                    </a>
                </div>
            </div>
        </main>
    );
}

/* ── Reusable Section Wrapper ── */
function Section({ index, label, children }: { index: number; label: string; children: React.ReactNode }) {
    return (
        <motion.section
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            className="mb-20"
        >
            <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-6">{label}</p>
            {children}
        </motion.section>
    );
}

/* ── Highlight Box ── */
function Highlight({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={`mt-6 bg-accent-light border-l-4 border-accent px-5 py-4 rounded-r-xl text-sm text-ink leading-relaxed ${className}`}>
            {children}
        </div>
    );
}
