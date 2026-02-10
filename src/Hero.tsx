import { useHlsVideo } from './hooks/useHlsVideo'
import { Zap } from 'lucide-react'
import { cn } from './lib/cn'
import { useLanguage } from './i18n/LanguageContext'

const VIDEO_POSTER =
  'https://image.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A/thumbnail.jpg'

export function Hero() {
  const { videoRef, isPlaying } = useHlsVideo()
  const { t } = useLanguage()

  return (
    <section className="hero relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ── Background Video ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={VIDEO_POSTER}
          alt=""
          aria-hidden="true"
          className={cn(
            'absolute inset-0 h-full w-full object-cover transition-opacity duration-1000',
            isPlaying ? 'opacity-0' : 'opacity-100',
          )}
        />
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={VIDEO_POSTER}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* ── Hero Content (centered) ── */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center pt-24 pb-16">
        {/* Badge pill */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-2">
          <Zap className="h-3.5 w-3.5 text-accent-purple" />
          <span className="text-sm text-white/70">
            {t.hero.badge}
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-black mb-6 normal-case text-white"
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
          }}
        >
          {t.hero.headline1}{' '}
          <span className="italic bg-gradient-to-r from-accent-pink via-accent-purple to-accent-violet bg-clip-text text-transparent">
            {t.hero.headline2}
          </span>
          <br />
          {t.hero.headline3}
        </h1>

        {/* Subtext */}
        <p className="mx-auto max-w-lg text-base sm:text-lg text-white/50 leading-relaxed mb-10">
          {t.hero.sub}
        </p>

        {/* CTA Button */}
        <a
          href="#problem"
          className="btn-brand inline-block px-8 py-4 text-sm font-bold"
        >
          {t.hero.cta}
        </a>
      </div>
    </section>
  )
}
