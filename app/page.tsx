import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Work from '@/components/Work'
import Skills from '@/components/Skills'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import CtaSection from '@/components/CtaSection'
import Footer from '@/components/Footer'
import Preloader from '@/components/Preloader'

export default function Home() {
    return (
        <main className="relative w-full min-h-screen">
            <Preloader />
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Work />
            <Skills />
            <Stats />
            <Testimonials />
            <CtaSection />
            <Footer />
        </main>
    )
}
