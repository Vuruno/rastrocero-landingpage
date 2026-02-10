import { Link } from 'react-router-dom'
import { useLanguage } from './i18n/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="relative z-10 border-t border-white/5 bg-background">
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="flex flex-col items-center text-center gap-6">
          <Link to="/">
            <img
              src="/logoverde.png"
              alt="RastroCero"
              className="h-10 w-auto"
            />
          </Link>
          <p className="text-white/50 text-sm leading-relaxed max-w-md">
            {t.footer.description}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-center">
          <p className="text-xs text-white/40">{t.footer.copy}</p>
        </div>
      </div>
    </footer>
  )
}
