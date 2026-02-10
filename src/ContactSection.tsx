import { Link } from 'react-router-dom'
import { Mail, Send } from 'lucide-react'
import { useLanguage } from './i18n/LanguageContext'

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-24 md:py-32 relative z-10 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="reveal">
            <p className="text-accent-purple font-semibold mb-3">{t.contact.sectionLabel}</p>
            <h2
              className="text-4xl md:text-6xl font-black leading-tight normal-case text-white mb-6"
              style={{ letterSpacing: '-1px', lineHeight: 1.1 }}
            >
              {t.contact.title1} <br />
              <span className="text-white/40">{t.contact.title2}</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              {t.contact.text}
            </p>
          </div>

          <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent-pink via-accent-purple to-accent-violet text-white font-bold rounded-full transition-all hover:scale-105 hover:shadow-[0_10px_40px_rgba(121,206,85,0.3)]"
            >
              <Send className="w-4 h-4" />
              {t.contact.cta}
            </Link>
          </div>

          <div className="reveal mt-8 flex items-center justify-center gap-2 text-white/40 text-sm">
            <Mail className="w-4 h-4" />
            <span>{t.contact.emailLabel}</span>
            <a href="mailto:contacto@rastrocero.com.py" className="text-accent-purple hover:text-accent-pink transition-colors">
              contacto@rastrocero.com.py
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
