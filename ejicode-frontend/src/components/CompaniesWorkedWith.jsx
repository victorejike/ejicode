// components/CompaniesWorkedWith.jsx

const companies = [
  {
    name: 'Upwork',
    initial: 'U',
    accent: '#14A800',
    desc: 'Freelance platform',
  },
  {
    name: 'Oneforma',
    initial: 'O',
    accent: '#0EA5A0',
    desc: 'Data annotation',
  },
  {
    name: 'Outlier',
    initial: 'O',
    accent: '#7C3AED',
    desc: 'AI training',
  },
  {
    name: 'TELUS',
    initial: 'T',
    accent: '#4B006E',
    desc: 'AI data services',
  },
  {
    name: 'Freelancer',
    initial: 'F',
    accent: '#0070BA',
    desc: 'Talent marketplace',
  },
  {
    name: 'GenAI',
    initial: 'G',
    accent: '#0EA5A0',
    desc: 'AI solutions',
  },
  {
    name: 'Atlas',
    initial: 'A',
    accent: '#E85D04',
    desc: 'Global operations',
  },
]

const doubled = [...companies, ...companies]

function CompaniesWorkedWith() {
  return (
    <section className="section companies-section">
      <div className="section-inner">

        <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>
            Experience & Collaboration
          </span>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 300,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            letterSpacing: '-.02em',
            lineHeight: 1.1,
          }}>
            Companies we've worked with
          </h2>
          <p style={{
            color: 'var(--muted)',
            marginTop: 16,
            fontSize: '0.95rem',
            lineHeight: 1.75,
            maxWidth: 480,
            margin: '16px auto 0',
          }}>
            Trusted by leading platforms and global teams across AI, tech, and beyond.
          </p>
        </div>

        <div className="companies-track-wrap reveal" style={{ transitionDelay: '0.15s' }}>
          <div className="companies-track">
            {doubled.map((c, i) => (
              <div className="company-card" key={i}>
                <div
                  className="company-card-avatar"
                  style={{ background: c.accent + '18', color: c.accent }}
                >
                  {c.initial}
                </div>
                <p className="company-card-name">{c.name}</p>
                <p className="company-card-desc">{c.desc}</p>
                <div className="company-card-dot" style={{ background: c.accent }} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default CompaniesWorkedWith