import { useEffect, useRef, useState } from 'react'
import { useLanguage } from './i18n/LanguageContext'

const barColors = [
  'bg-accent-pink',
  'bg-accent-purple',
  'bg-accent-violet',
  'bg-accent-purple/60',
  'bg-accent-pink/40',
]

export function ProblemSection() {
  const { t } = useLanguage()
  const cardRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { setInView(entry.isIntersecting) },
      { threshold: 0.3, rootMargin: '-35% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="problem" className="py-24 md:py-32 relative z-10 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="reveal">
            <h2
              className="text-4xl md:text-6xl font-black mb-8 leading-tight normal-case text-white"
              style={{ letterSpacing: '-1px', lineHeight: 1.1 }}
            >
              {t.problem.title1} <br />
              <span className="text-white/40">{t.problem.title2}</span>
            </h2>

            <p className="text-white/50 text-lg mb-6 leading-relaxed">
              {t.problem.intro}
            </p>

            <ul className="space-y-4 mt-8">
              {t.problem.items.map((p, i) => (
                <li key={p.title} className="flex items-center gap-4">
                  <span className={`w-1 h-12 ${barColors[i]} block rounded`} />
                  <div>
                    <strong className="block text-white">{p.title}</strong>
                    <span className="text-sm text-white/50">{p.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Card illustration */}
          <div className="reveal-right">
            <div
              ref={cardRef}
              className="relative h-[400px] w-full rounded-2xl flex items-center justify-center overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-tr from-accent-violet/10 via-transparent to-transparent transition-opacity duration-700"
                style={{ opacity: inView ? 0.5 : 0.3 }}
              />

              {/* Floating debit card */}
              <div
                className="relative z-10 w-64 h-40 rounded-xl border border-white/10 shadow-xl flex flex-col justify-between p-4 transition-all duration-700 ease-out"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(16px)',
                  transform: inView ? 'rotate(0deg) scale(1.05)' : 'rotate(-6deg) scale(1)',
                }}
              >
                <div className="flex justify-between items-start">
                  <div className="w-8 h-5 bg-white/20 rounded" />
                  <div className="text-xs font-mono text-white/40">{t.problem.cardDebit}</div>
                </div>
                <div className="font-mono text-white/50 tracking-widest text-sm">**** 4291</div>
              </div>

              {/* Scroll-triggered labels */}
              <div className="absolute inset-0 pointer-events-none z-20">
                <span
                  className="absolute top-[22%] right-[12%] text-accent-pink font-mono text-xs font-bold transition-all duration-500 delay-100"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(16px)',
                  }}
                >
                  +2.4kg CO2e
                </span>
                <span
                  className="absolute bottom-[22%] left-[12%] text-accent-purple font-mono text-xs font-bold transition-all duration-500 delay-200"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(16px)',
                  }}
                >
                  Groceries
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
