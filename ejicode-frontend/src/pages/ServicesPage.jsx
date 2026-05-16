// pages/ServicesPage.jsx

import { useEffect } from 'react'
import { Link } from 'react-router-dom'

// ─── Online images per service (Unsplash) ───
const IMG_WEB     = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80'
const IMG_MOBILE  = 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=80'
const IMG_CLOUD   = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80'
const IMG_AI      = 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80'
const IMG_DESIGN  = 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=900&q=80'
const IMG_UX      = 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=900&q=80'

const services = [
  {
    num: '01', tag: 'Engineering', title: 'Web Engineering', icon: '⬡',
    headline: 'Built to perform. Designed to last.',
    description: 'We build full-stack web applications with React, Next.js, and Node.js — from marketing sites that need blazing-fast load times to complex SaaS dashboards handling millions of records. Every project is architected for performance, accessibility, and long-term maintainability.',
    capabilities: ['React & Next.js applications','REST & GraphQL APIs','Server-side rendering & static generation','Performance optimisation & Core Web Vitals','Accessibility (WCAG 2.1 AA)','Testing & CI/CD pipelines'],
    accent: '#0EA5A0', image: IMG_WEB, imageAlt: 'Code editor on screen',
  },
  {
    num: '02', tag: 'Mobile', title: 'Mobile Development', icon: '◎',
    headline: 'Apps people actually keep installed.',
    description: 'We craft native and cross-platform mobile experiences for iOS and Android using React Native and Swift/Kotlin where needed. From onboarding flows to real-time features, we obsess over the micro-interactions that make an app feel indispensable.',
    capabilities: ['React Native (iOS & Android)','Native Swift & Kotlin modules','Offline-first architecture','Push notifications & deep linking','App Store & Play Store submission','OTA updates with Expo EAS'],
    accent: '#0B8A85', image: IMG_MOBILE, imageAlt: 'Mobile app on phone',
  },
  {
    num: '03', tag: 'Infrastructure', title: 'Cloud & Infrastructure', icon: '⌁',
    headline: 'Scale without surprises.',
    description: 'We design and operate cloud-native architectures on AWS, GCP, and Vercel that grow with your product. Auto-scaling, zero-downtime deployments, observability, and cost efficiency — engineered from day one so you are never caught off-guard.',
    capabilities: ['AWS & GCP architecture design','Kubernetes & containerisation (Docker)','Terraform & infrastructure-as-code','Observability: logging, tracing, alerting','Zero-downtime blue/green deployments','Security hardening & compliance'],
    accent: '#0EA5A0', image: IMG_CLOUD, imageAlt: 'Cloud data center',
  },
  {
    num: '04', tag: 'Intelligence', title: 'AI Integration', icon: '✦',
    headline: 'Intelligent products, not just AI wrappers.',
    description: 'We embed AI capabilities that genuinely change how your product works — not bolted-on chat boxes. LLM-powered workflows, computer vision pipelines, semantic search, and personalisation engines, all integrated into your existing stack with careful attention to latency, cost, and safety.',
    capabilities: ['LLM integration (OpenAI, Anthropic, Gemini)','Retrieval-augmented generation (RAG)','Computer vision & image analysis','Semantic search & embeddings','Fine-tuning & prompt engineering','AI safety, evals & monitoring'],
    accent: '#0B8A85', image: IMG_AI, imageAlt: 'AI neural network visualisation',
  },
  {
    num: '05', tag: 'Design', title: 'Design Systems', icon: '⊞',
    headline: 'One source of truth. Infinite combinations.',
    description: 'We build component libraries and design tokens that bridge the gap between Figma and production code. The result: consistent, accessible interfaces that your team can ship faster — without re-inventing the same button for the fifth time.',
    capabilities: ['Token-based design architecture','React component library (Storybook)','Figma ↔ code synchronisation','Dark mode & theming support','Accessibility baked in at component level','Documentation & adoption support'],
    accent: '#0EA5A0', image: IMG_DESIGN, imageAlt: 'Design system UI components',
  },
  {
    num: '06', tag: 'Research', title: 'UX Research', icon: '◈',
    headline: 'Decisions backed by evidence, not opinions.',
    description: 'We run end-to-end UX research — from discovery interviews and usability tests to quantitative surveys and analytics analysis — then translate findings into clear, actionable design direction. We help you understand not just what users do, but why.',
    capabilities: ['User interviews & contextual enquiry','Usability testing (moderated & unmoderated)','Journey mapping & personas','Heuristic evaluation','A/B testing strategy','Research synthesis & reporting'],
    accent: '#0B8A85', image: IMG_UX, imageAlt: 'UX research whiteboard session',
  },
]

function ServicesPage() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.08 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* ─── DARK HEADER matching hero aesthetic ─── */}
      <section style={{
        background: 'var(--charcoal)', paddingTop: 140, paddingBottom: 80,
        padding: '140px 40px 80px', position: 'relative', overflow: 'hidden',
      }}>
        {/* Glow orb */}
        <div style={{
          position: 'absolute', top: -140, right: -100, width: 560, height: 560,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,165,160,0.13) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <span style={{
            fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16, display: 'block',
          }}>
            What we do
          </span>
          <h1 style={{
            fontFamily: 'var(--font-serif)', fontWeight: 300,
            fontSize: 'clamp(2.4rem, 5vw, 4rem)', letterSpacing: '-0.03em',
            lineHeight: 1.05, color: 'var(--cream)', maxWidth: 600, marginBottom: 24,
          }}>
            Services built for{' '}
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>ambitious</em>{' '}
            products.
          </h1>
          <p style={{ color: 'rgba(238,242,247,0.55)', lineHeight: 1.8, maxWidth: 480, marginBottom: 48, fontSize: '0.95rem' }}>
            End-to-end capability under one roof. We handle every layer of the product so you get cohesive quality — not a patchwork of vendors.
          </p>
          {/* Service quick-nav pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {services.map((s) => (
              <span key={s.num} className="chip chip-white">{s.title}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICE CARDS ─── */}
      <section className="section" style={{ paddingTop: 60 }}>
        <div className="section-inner">
          <div style={{ display: 'grid', gap: 28 }}>
            {services.map((s, i) => (
              <div
                key={i}
                className="reveal service-detail-card"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                {/* Two-col layout: image left, content right */}
                <div className="service-detail-layout">

                  {/* Image */}
                  <div className="service-detail-img-wrap">
                    <img src={s.image} alt={s.imageAlt} className="service-detail-img" />
                    <div className="service-detail-img-overlay">
                      <span style={{
                        fontFamily: 'var(--font-serif)', fontSize: '3.5rem', fontWeight: 300,
                        color: 'rgba(255,255,255,0.18)', lineHeight: 1, userSelect: 'none',
                      }}>
                        {s.num}
                      </span>
                    </div>
                    <div style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0,
                      height: 3, background: s.accent,
                    }} />
                  </div>

                  {/* Content */}
                  <div className="service-detail-content">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
                      <span style={{ fontSize: '1.5rem', color: s.accent, lineHeight: 1 }}>{s.icon}</span>
                      <span className="chip">{s.tag}</span>
                    </div>
                    <h2 style={{
                      fontFamily: 'var(--font-serif)', fontWeight: 300,
                      fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', letterSpacing: '-0.02em',
                      color: 'var(--ink)', marginBottom: 8, lineHeight: 1.15,
                    }}>
                      {s.title}
                    </h2>
                    <p style={{
                      fontFamily: 'var(--font-serif)', fontStyle: 'italic',
                      fontSize: '1rem', color: s.accent, marginBottom: 16, lineHeight: 1.5,
                    }}>
                      {s.headline}
                    </p>
                    <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.8, marginBottom: 28 }}>
                      {s.description}
                    </p>

                    {/* Capabilities */}
                    <p style={{
                      fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em',
                      textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 14,
                    }}>
                      Capabilities
                    </p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {s.capabilities.map((c, j) => (
                        <li key={j} style={{
                          display: 'flex', alignItems: 'flex-start', gap: 12,
                          fontSize: '0.86rem', color: 'var(--ink)', lineHeight: 1.55,
                        }}>
                          <span style={{
                            width: 6, height: 6, borderRadius: '50%', background: s.accent,
                            flexShrink: 0, display: 'inline-block', marginTop: 7,
                          }} />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <div className="big-cta reveal">
        <div className="big-cta-glow" />
        <h2>
          Ready to build<br />
          <em>something great?</em>
        </h2>
        <Link to="/lets-talk" className="btn-gold">
          Start a project
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </>
  )
}

export default ServicesPage