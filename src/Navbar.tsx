import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Globe } from 'lucide-react'
import { cn } from './lib/cn'
import { useLanguage } from './i18n/LanguageContext'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { locale, t, toggle } = useLanguage()
  const location = useLocation()
  const isContact = location.pathname === '/contact'

  const links = [
    { href: '/', label: t.nav.inicio },
    { href: '/#problem', label: t.nav.plataforma },
    { href: '/#platform', label: t.nav.tecnologia },
    { href: '/#contact', label: t.nav.contacto },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Handle hash links: if on a different page, navigate home first then scroll
  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    if (href.startsWith('/#')) {
      const hash = href.slice(1) // e.g. "#problem"
      if (location.pathname === '/') {
        // Already on home — just scroll
        const el = document.querySelector(hash)
        el?.scrollIntoView({ behavior: 'smooth' })
      } else {
        // Navigate to home, hash will be picked up
        window.location.href = href
      }
    }
  }

  return (
    <>
      {/* Floating island wrapper — fixed, centered, with top margin */}
      <div className={cn(
        'top-0 left-0 right-0 z-50 flex justify-center px-3 pt-4 sm:px-6 sm:pt-6',
        isContact ? 'relative' : 'fixed',
      )}>
        <nav
          className={cn(
            'w-full max-w-6xl',
            'flex items-center justify-between',
            'px-4 py-2.5 sm:px-8 sm:py-4',
            'rounded-2xl border',
            'backdrop-blur-xl',
            'transition-all duration-300',
            'border-white/[0.08] bg-[#111111]/80 shadow-[0_8px_32px_rgba(0,0,0,0.4)]',
            scrolled && 'bg-[#111111]/90 shadow-[0_8px_40px_rgba(0,0,0,0.6)]',
          )}
        >
          {/* ── Left: Logo ── */}
          <Link to="/" className="shrink-0">
            <img
              src="/logoverde.png"
              alt="RastroCero"
              className="h-10 sm:h-12 md:h-14 w-auto"
            />
          </Link>

          {/* ── Center: Links (desktop) ── */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) =>
              l.href === '/' ? (
                <Link
                  key={l.label}
                  to="/"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(l.href)
                  }}
                >
                  {l.label}
                </a>
              ),
            )}
          </div>

          {/* ── Right: Lang toggle + CTA + mobile toggle ── */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={toggle}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] hover:bg-white/[0.08] text-white/60 hover:text-white/90 text-xs font-medium transition-all cursor-pointer"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5" />
              {locale === 'es' ? 'EN' : 'ES'}
            </button>

            <Link
              to="/contact"
              className="hidden md:inline-block text-sm font-semibold rounded-full px-6 py-2.5 transition-all text-background bg-white hover:bg-white/90"
            >
              {t.nav.acceder}
            </Link>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 text-white/70"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* ── Mobile overlay ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#111]/95 backdrop-blur-md flex flex-col items-center justify-center gap-6 md:hidden">
          {links.map((l) =>
            l.href === '/' ? (
              <Link
                key={l.label}
                to="/"
                className="text-2xl font-bold text-white/70 hover:text-accent-purple transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.label}
                href={l.href}
                className="text-2xl font-bold text-white/70 hover:text-accent-purple transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(l.href)
                }}
              >
                {l.label}
              </a>
            ),
          )}

          {/* Mobile language toggle */}
          <button
            onClick={toggle}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.05] text-sm font-medium text-white/60 hover:text-white/90 transition-all cursor-pointer"
          >
            <Globe className="w-4 h-4" />
            {locale === 'es' ? 'English' : 'Español'}
          </button>

          <div className="mt-4">
            <Link
              to="/contact"
              className="text-sm font-semibold text-background bg-white rounded-full px-6 py-2.5"
              onClick={() => setMobileOpen(false)}
            >
              {t.nav.acceder}
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
