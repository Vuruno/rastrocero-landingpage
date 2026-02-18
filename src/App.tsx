import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { LanguageProvider } from './i18n/LanguageContext'
import { Navbar } from './Navbar'
import { Hero } from './Hero'
import { ProblemSection } from './ProblemSection'
import { PlatformSection } from './PlatformSection'
import { ContactSection } from './ContactSection'
import { Footer } from './Footer'
import { ContactPage } from './ContactPage'
import { useReveal } from './hooks/useReveal'

function LandingPage() {
  useReveal()

  return (
    <>
      <Hero />
      <ProblemSection />
      <PlatformSection />
      <ContactSection />
    </>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function ContactRoute() {
  return (
    <ContactPage />
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="bg-background text-white antialiased overflow-x-hidden">
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/contact" element={<ContactRoute />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  )
}
