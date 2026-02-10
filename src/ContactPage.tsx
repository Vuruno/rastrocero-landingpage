import { useState } from 'react'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { useLanguage } from './i18n/LanguageContext'

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || ''

type Status = 'idle' | 'sending' | 'success' | 'error'

export function ContactPage() {
  const { t } = useLanguage()
  const f = t.contactPage

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    role: '',
    company: '',
    website: '',
    companyType: '',
    country: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState<Status>('idle')

  const set = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm((prev) => ({ ...prev, [key]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Nuevo contacto: ${form.firstName} ${form.lastName} — ${form.company}`,
          from_name: `${form.firstName} ${form.lastName}`,
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          role: form.role,
          company: form.company,
          website: form.website,
          company_type: form.companyType,
          country: form.country,
          message: form.message,
        }),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ firstName: '', lastName: '', role: '', company: '', website: '', companyType: '', country: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-accent-purple/50 focus:bg-white/[0.08] transition-all'

  const labelClass = 'block text-sm font-medium text-white/60 mb-2'

  const requiredStar = <span className="text-accent-pink ml-1">*</span>

  return (
    <div className="min-h-screen bg-background pt-10 sm:pt-14 pb-20">
      <div className="container mx-auto px-6 max-w-2xl">
        {/* Title */}
        <h1
          className="text-3xl md:text-5xl font-black normal-case text-white mb-12"
          style={{ letterSpacing: '-1px', lineHeight: 1.1 }}
        >
          {f.title}
        </h1>

        {status === 'success' ? (
          <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
            <CheckCircle className="w-12 h-12 text-accent-purple" />
            <p className="text-lg text-white/60 max-w-md">{f.success}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* ── Basic Info ── */}
            <div>
              <h2 className="text-lg font-bold text-white/90 mb-6 normal-case" style={{ letterSpacing: '-0.3px' }}>
                {f.basicInfo}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>{f.firstName}{requiredStar}</label>
                  <input
                    type="text"
                    value={form.firstName}
                    onChange={set('firstName')}
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>{f.lastName}{requiredStar}</label>
                  <input
                    type="text"
                    value={form.lastName}
                    onChange={set('lastName')}
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>{f.role}</label>
                  <input
                    type="text"
                    value={form.role}
                    onChange={set('role')}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>{f.company}{requiredStar}</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={set('company')}
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>{f.website}</label>
                  <input
                    type="url"
                    value={form.website}
                    onChange={set('website')}
                    placeholder="https://"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>{f.companyType}</label>
                  <select
                    value={form.companyType}
                    onChange={set('companyType')}
                    className={`${inputClass} appearance-none cursor-pointer`}
                  >
                    <option value="" disabled hidden />
                    {f.companyTypes.map((type) => (
                      <option key={type} value={type} className="bg-[#111] text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>{f.country}</label>
                  <input
                    type="text"
                    value={form.country}
                    onChange={set('country')}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>{f.email}{requiredStar}</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={set('email')}
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <p className="text-xs text-white/40 mt-4">
                <span className="text-accent-pink">*</span> {f.required}
              </p>
            </div>

            {/* ── Divider ── */}
            <div className="border-t border-white/10" />

            {/* ── How can we help ── */}
            <div>
              <h2 className="text-lg font-bold text-white/90 mb-2 normal-case" style={{ letterSpacing: '-0.3px' }}>
                {f.helpTitle}
              </h2>
              <p className="text-sm text-white/40 mb-6">{f.messagePlaceholder}</p>

              <label className={labelClass}>{f.message}</label>
              <textarea
                value={form.message}
                onChange={set('message')}
                rows={5}
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* ── Error message ── */}
            {status === 'error' && (
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {f.error}
              </div>
            )}

            {/* ── Submit ── */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent-pink via-accent-purple to-accent-violet text-white font-bold rounded-full transition-all hover:scale-105 hover:shadow-[0_10px_40px_rgba(121,206,85,0.3)] cursor-pointer disabled:opacity-60 disabled:hover:scale-100"
            >
              {status === 'sending' ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
              {status === 'sending' ? f.sending : f.submit}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
