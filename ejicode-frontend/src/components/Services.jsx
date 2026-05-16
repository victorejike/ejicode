import { Link } from 'react-router-dom'

const services = [
  { num:'01', title:'Web Engineering', desc:'Full-stack React and Next.js products built to perform at scale.' },
  { num:'02', title:'Mobile Development', desc:'Native iOS & Android experiences users return to every day.' },
  { num:'03', title:'Cloud & Infrastructure', desc:'Resilient, auto-scaling architecture with zero-downtime deployments.' },
  { num:'04', title:'AI Integration', desc:'Intelligent features — LLMs, vision, recommendations — woven into your product.' },
  { num:'05', title:'Design Systems', desc:'Cohesive component libraries that make your team move faster.' }
]

function Services() {
  return (
    <section className="section" id="services">
      <div className="section-inner">
        <div className="split-grid split-grid-start">
          <div className="reveal">
            <span className="section-label">What we do</span>
            <h2 style={{fontFamily:'var(--font-serif)',fontWeight:300,fontSize:'clamp(2rem,3.5vw,2.8rem)',letterSpacing:'-.02em',lineHeight:1.2,marginBottom:24}}>
              End-to-end digital<br /><em style={{color:'var(--accent)'}}>engineering</em>
            </h2>
            <p style={{color:'var(--muted)',lineHeight:1.8,maxWidth:360,marginBottom:40}}>
              From first pixel to final deployment, we handle every layer of the product — so you can focus on what you do best.
            </p>
            <Link to="/lets-talk" className="btn-primary">
              Start a project
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
          <div>
            {services.map((s, i) => (
              <div className="service-row reveal" style={{transitionDelay:`${i*0.08}s`}} key={i}>
                <div style={{display:'flex',gap:20,alignItems:'flex-start'}}>
                  <span style={{fontFamily:'var(--font-serif)',fontSize:'.85rem',fontWeight:300,color:'var(--muted)',paddingTop:3}}>{s.num}</span>
                  <div>
                    <p style={{fontWeight:500,fontSize:'1rem',marginBottom:4}}>{s.title}</p>
                    <p style={{color:'var(--muted)',fontSize:'.82rem',lineHeight:1.6}}>{s.desc}</p>
                  </div>
                </div>
                <span className="service-arrow">↗</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
