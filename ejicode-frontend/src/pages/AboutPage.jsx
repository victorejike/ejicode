// pages/AboutPage.jsx

import { Link } from 'react-router-dom'
import IMG_TEAM_STORY from '../assets/images/img2.jpg'

// ─── Online images ───

const IMG_TEAM_COLLAB = 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1400&q=85'
const IMG_APEX        = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80'
const IMG_MIRA        = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80'
const IMG_ORION       = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=80'
const IMG_VERA        = 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=80'

const projects = [
  { title: 'Apex Banking Platform', img: IMG_APEX, chip: 'Web Application' },
  { title: 'Mira Health App',       img: IMG_MIRA, chip: 'Mobile' },
  { title: 'Orion Cloud Suite',     img: IMG_ORION, chip: 'Cloud & Infrastructure' },
  { title: 'Vera e-Commerce',       img: IMG_VERA, chip: 'Web + Design System' },
]

const values = [
  {
    icon: '◈',
    title: 'Human-first',
    desc: 'We listen deeply before we build. Every pixel, every interaction serves a real person with real needs.',
  },
  {
    icon: '◉',
    title: 'Craft over convenience',
    desc: 'We take the harder path when it leads to a better outcome. Quality is non-negotiable.',
  },
  {
    icon: '◎',
    title: 'Independent spirit',
    desc: 'No outside investors. No shortcuts. Just a team that cares about the work — and the people using it.',
  },
]

function AboutPage() {
  return (
    <>
      {/* ─── OUR STORY ─── */}
      <section className="section" style={{ background: 'var(--creamDk)', paddingTop: 120 }}>
        <div className="section-inner">
          <div className="reveal" style={{ marginBottom: 16 }}>
            <span className="section-label">Our story</span>
          </div>
          <h1
            className="reveal"
            style={{
              fontFamily: 'var(--font-serif)', fontWeight: 300,
              fontSize: 'clamp(2.8rem,7vw,6.5rem)', letterSpacing: '-.03em',
              lineHeight: 0.98, maxWidth: 900, marginBottom: 60,
            }}
          >
            Independent spirit,<br />
            <em style={{ color: 'var(--accent)' }}>obsessive</em> craft.
          </h1>

          <div className="about-story-grid">
            <div className="reveal">
              <div className="about-img-wrap">
                <img src={IMG_TEAM_STORY} alt="ejicode team" loading="lazy" />
              </div>
            </div>
            <div className="reveal" style={{ transitionDelay: '0.15s', paddingTop: 40 }}>
              <p style={{
                fontFamily: 'var(--font-serif)', fontWeight: 300, fontStyle: 'italic',
                fontSize: '1.4rem', lineHeight: 1.6, color: 'var(--ink)', marginBottom: 32,
              }}>
                "eji" means to grow, to give form, to create. Paired with "code" — the language of machines — it captures everything we believe in.
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.85, marginBottom: 24 }}>
                Founded in 2020, ejicode is a fully independent studio. We operate without outside investors or agency overheads, which means one thing: every decision we make is in the interest of the work. Our team of twelve engineers, designers and strategists have shipped products used by millions across fintech, health, education and beyond.
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.85, marginBottom: 40 }}>
                We put people first — understanding that a well-crafted product significantly impacts the lives of those who use it. By empowering users, we solve unique problems, accelerate progress, and unlock potential for our clients.
              </p>
              <Link to="/lets-talk" className="btn-primary">
                Work with us
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="section" style={{ background: 'var(--creamDk)', paddingTop: 0 }}>
        <div className="section-inner">
          <h2
            className="reveal"
            style={{
              fontFamily: 'var(--font-serif)', fontWeight: 300,
              fontSize: 'clamp(1.8rem,3vw,2.5rem)', letterSpacing: '-.02em', marginBottom: 60,
            }}
          >
            What drives us
          </h2>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className="value-card reveal" style={{ transitionDelay: `${i * 0.1}s` }} key={i}>
                <div style={{ fontSize: '1.6rem', color: 'var(--accent)', marginBottom: 16 }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: '1.2rem', marginBottom: 12 }}>{v.title}</h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.75, fontSize: '.88rem' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM IMAGE ─── */}
      <section className="section reveal" style={{ background: 'var(--creamDk)', paddingTop: 0 }}>
        <div className="section-inner">
          <div className="team-image-frame">
            <img src={IMG_TEAM_COLLAB} alt="Team collaborating" loading="lazy" />
          </div>
        </div>
      </section>

      {/* ─── SELECTED WORK ─── */}
      <section className="section" id="work">
        <div className="section-inner">
          <div
            className="reveal"
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 20 }}
          >
            <div>
              <span className="section-label">Selected work</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-.02em' }}>
                What we've made
              </h2>
            </div>
            <Link to="/lets-talk" className="btn-outline" style={{ flexShrink: 0 }}>
              Start yours
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="work-grid work-grid-two reveal" style={{ transitionDelay: '0.1s' }}>
            {projects.slice(0, 2).map((p, i) => (
              <div className="work-card" key={i}>
                <img src={p.img} alt={p.title} loading="lazy" />
                <div className="work-card-overlay" />
                <div className="work-card-info">
                  <span className="chip chip-white" style={{ marginBottom: 10 }}>{p.chip}</span>
                  <p className="work-title">{p.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="work-grid work-grid-reverse reveal" style={{ transitionDelay: '0.2s' }}>
            {projects.slice(2).map((p, i) => (
              <div className="work-card" key={i}>
                <img src={p.img} alt={p.title} loading="lazy" />
                <div className="work-card-overlay" />
                <div className="work-card-info">
                  <span className="chip chip-white" style={{ marginBottom: 10 }}>{p.chip}</span>
                  <p className="work-title">{p.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage