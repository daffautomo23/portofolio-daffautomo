import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', weight: ['200', '300', '400', '500', '600', '700'] })

export const metadata: Metadata = {
    title: 'Daffa Utomo — Software Engineer',
    description: 'Portfolio of Daffa Utomo, Software Engineer specializing in Odoo ERP, Laravel, Full-Stack Web Development, and Enterprise Systems.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={manrope.variable}>
            <body className="font-sans antialiased bg-background text-ink selection:bg-ink selection:text-white">
                <SmoothScroll>
                    {children}
                </SmoothScroll>
            </body>
        </html>
    )
}
