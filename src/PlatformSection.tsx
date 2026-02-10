import { Link } from 'react-router-dom'
import { Database, GitBranch, BarChart3, ArrowRight, Zap, Globe, Building2, Truck, Landmark, Activity } from 'lucide-react'
import { useLanguage } from './i18n/LanguageContext'

/* ── Illustration 1: Data → Structured Climate Info ── */
function DataFlowIllustration({ inputs, output, outputSub }: { inputs: readonly string[]; output: string; outputSub: string }) {
  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl border border-white/[0.08] bg-white/[0.03] overflow-hidden group">
      {/* Gradient glow */}
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent-purple/15 rounded-full blur-[80px] group-hover:bg-accent-purple/25 transition-all duration-700" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center gap-6 p-8">
        {/* Input cards */}
        <div className="flex gap-3">
          {inputs.map((label) => (
            <div key={label} className="px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-xs font-mono text-white/50">
              {label}
            </div>
          ))}
        </div>

        {/* Arrow flow */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-px h-6 bg-gradient-to-b from-white/30 to-accent-purple/60" />
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-pink via-accent-purple to-accent-violet flex items-center justify-center shadow-[0_0_24px_rgba(121,206,85,0.3)]">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div className="w-px h-6 bg-gradient-to-b from-accent-purple/60 to-white/30" />
        </div>

        {/* Output */}
        <div className="px-6 py-4 rounded-2xl bg-white/[0.06] border border-accent-purple/20">
          <div className="flex items-center gap-3">
            <Database className="w-5 h-5 text-accent-purple" />
            <div>
              <p className="text-sm font-semibold text-white">{output}</p>
              <p className="text-xs text-white/40 font-mono">{outputSub}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Illustration 2: Complex operations grid ── */
function ComplexOpsIllustration({ nodeLabels }: { nodeLabels: { operaciones: string; cadena: string; finanzas: string; terceros: string; actividad: string } }) {
  // Positions as percentages — nodes use transform to center on these points
  const nodes = [
    { icon: Building2, label: nodeLabels.operaciones, cx: 18, cy: 22 },
    { icon: Truck, label: nodeLabels.cadena, cx: 82, cy: 22 },
    { icon: Activity, label: nodeLabels.actividad, cx: 50, cy: 50 },
    { icon: Landmark, label: nodeLabels.finanzas, cx: 18, cy: 78 },
    { icon: Globe, label: nodeLabels.terceros, cx: 82, cy: 78 },
  ]

  const center = { cx: 50, cy: 50 }
  const corners = [
    { cx: 18, cy: 22 },
    { cx: 82, cy: 22 },
    { cx: 18, cy: 78 },
    { cx: 82, cy: 78 },
  ]

  // Shorten lines so they don't overlap the node boxes
  const shorten = (x1: number, y1: number, x2: number, y2: number, gap: number) => {
    const dx = x2 - x1, dy = y2 - y1
    const len = Math.sqrt(dx * dx + dy * dy)
    const ux = dx / len, uy = dy / len
    return { x1: x1 + ux * gap, y1: y1 + uy * gap, x2: x2 - ux * gap, y2: y2 - uy * gap }
  }

  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl border border-white/[0.08] bg-white/[0.03] overflow-hidden group">
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent-pink/15 rounded-full blur-[80px] group-hover:bg-accent-pink/25 transition-all duration-700" />

      {/* Connection lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-grad-purple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(121,206,85,0.3)" />
            <stop offset="100%" stopColor="rgba(121,206,85,0.05)" />
          </linearGradient>
          <linearGradient id="line-grad-pink" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(158,221,120,0.3)" />
            <stop offset="100%" stopColor="rgba(158,221,120,0.05)" />
          </linearGradient>
        </defs>
        {corners.map((c, i) => {
          const seg = shorten(c.cx, c.cy, center.cx, center.cy, 8)
          return (
            <line
              key={i}
              x1={`${seg.x1}%`}
              y1={`${seg.y1}%`}
              x2={`${seg.x2}%`}
              y2={`${seg.y2}%`}
              stroke={i < 2 ? 'url(#line-grad-purple)' : 'url(#line-grad-pink)'}
              strokeWidth="1"
            />
          )
        })}
      </svg>

      {/* Nodes — absolutely positioned with transform centering */}
      {nodes.map(({ icon: Icon, label, cx, cy }) => (
        <div
          key={label}
          className="absolute z-10 flex flex-col items-center gap-2"
          style={{ left: `${cx}%`, top: `${cy}%`, transform: 'translate(-50%, -50%)' }}
        >
          <div className="w-12 h-12 rounded-xl bg-[#0c0c0e] border border-white/10 flex items-center justify-center group-hover:border-accent-purple/40 transition-colors duration-500">
            <Icon className="w-5 h-5 text-white/50" />
          </div>
          <span className="text-[11px] text-white/50 font-medium text-center max-w-[90px] leading-tight">{label}</span>
        </div>
      ))}
    </div>
  )
}

/* ── Illustration 3: Unified vision dashboard ── */
function UnifiedVisionIllustration({ status }: { status: string }) {
  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl border border-white/[0.08] bg-white/[0.03] overflow-hidden group">
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-accent-violet/15 rounded-full blur-[80px] group-hover:bg-accent-violet/25 transition-all duration-700" />

      <div className="relative z-10 h-full flex flex-col justify-center p-8 gap-5">
        {/* Mini dashboard rows */}
        <div className="flex gap-3">
          <div className="flex-1 h-20 rounded-xl bg-white/[0.06] border border-white/10 p-3 flex flex-col justify-between">
            <span className="text-[10px] text-white/40 font-mono uppercase">Scope 1</span>
            <span className="text-lg font-bold text-white/90">1,240 <span className="text-xs font-normal text-white/40">tCO₂e</span></span>
          </div>
          <div className="flex-1 h-20 rounded-xl bg-white/[0.06] border border-white/10 p-3 flex flex-col justify-between">
            <span className="text-[10px] text-white/40 font-mono uppercase">Scope 2</span>
            <span className="text-lg font-bold text-white/90">890 <span className="text-xs font-normal text-white/40">tCO₂e</span></span>
          </div>
          <div className="flex-1 h-20 rounded-xl bg-white/[0.06] border border-white/10 p-3 flex flex-col justify-between">
            <span className="text-[10px] text-white/40 font-mono uppercase">Scope 3</span>
            <span className="text-lg font-bold text-accent-purple">5,670 <span className="text-xs font-normal text-white/40">tCO₂e</span></span>
          </div>
        </div>

        {/* Bar chart mockup */}
        <div className="flex-1 rounded-xl bg-white/[0.06] border border-white/10 p-4 flex items-end gap-2">
          {[40, 65, 50, 80, 55, 70, 90, 60, 75, 85, 45, 95].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-gradient-to-t from-accent-violet/60 to-accent-pink/40 group-hover:to-accent-pink/60 transition-all duration-500"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent-purple shadow-[0_0_8px_rgba(121,206,85,0.6)]" />
            <span className="text-xs text-white/50 font-mono">{status}</span>
          </div>
          <span className="text-xs text-white/40 font-mono">Q1–Q4 2025</span>
        </div>
      </div>
    </div>
  )
}

/* ── Main Export ── */
export function PlatformSection() {
  const { t } = useLanguage()
  const p = t.platform

  return (
    <div id="platform" className="border-t border-white/5">
      {/* ── Section 1: Data transformation ── */}
      <section className="py-24 md:py-32 relative z-10 bg-background">
        <div className="container mx-auto px-6">
          <div className="reveal mb-16 max-w-3xl">
            <p className="text-accent-purple font-semibold mb-3">{p.sectionLabel}</p>
            <h2
              className="text-4xl md:text-6xl font-black leading-tight normal-case text-white"
              style={{ letterSpacing: '-1px', lineHeight: 1.1 }}
            >
              {p.mainTitle1} <br />
              <span className="text-white/40">{p.mainTitle2}</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal-left">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center">
                  <Database className="w-5 h-5 text-accent-purple" />
                </div>
                <h3 className="text-xl font-bold text-white normal-case" style={{ letterSpacing: '-0.5px' }}>
                  {p.s1.title}
                </h3>
              </div>
              <p className="text-white/50 text-lg leading-relaxed mb-6">
                {p.s1.text}
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-accent-purple text-sm font-semibold hover:gap-3 transition-all">
                {p.s1.link} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="reveal-right">
              <DataFlowIllustration inputs={p.s1.inputs} output={p.s1.output} outputSub={p.s1.outputSub} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Complex realities ── */}
      <section className="py-24 md:py-32 relative z-10 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 reveal-left">
              <ComplexOpsIllustration nodeLabels={p.s2.nodes} />
            </div>

            <div className="order-1 lg:order-2 reveal-right">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent-pink/10 border border-accent-pink/20 flex items-center justify-center">
                  <GitBranch className="w-5 h-5 text-accent-pink" />
                </div>
                <h3 className="text-xl font-bold text-white normal-case" style={{ letterSpacing: '-0.5px' }}>
                  {p.s2.title}
                </h3>
              </div>
              <p className="text-white/50 text-lg leading-relaxed mb-6">
                {p.s2.text}
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-accent-purple text-sm font-semibold hover:gap-3 transition-all">
                {p.s2.link} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Unified vision ── */}
      <section className="py-24 md:py-32 relative z-10 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal-left">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent-violet/10 border border-accent-violet/20 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-accent-violet" />
                </div>
                <h3 className="text-xl font-bold text-white normal-case" style={{ letterSpacing: '-0.5px' }}>
                  {p.s3.title}
                </h3>
              </div>
              <p className="text-white/50 text-lg leading-relaxed mb-6">
                {p.s3.text}
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-accent-violet text-sm font-semibold hover:gap-3 transition-all">
                {p.s3.link} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="reveal-right">
              <UnifiedVisionIllustration status={p.s3.status} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
