import { createContext, useContext, useState, type ReactNode } from 'react'
import { translations, type Locale, type TranslationStrings } from './translations'

interface LanguageContextType {
  locale: Locale
  t: TranslationStrings
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

function getInitialLocale(): Locale {
  const params = new URLSearchParams(window.location.search)
  const lang = params.get('lang')
  return lang === 'en' ? 'en' : 'es'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale)

  const toggle = () => setLocale((prev) => (prev === 'es' ? 'en' : 'es'))

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale], toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
