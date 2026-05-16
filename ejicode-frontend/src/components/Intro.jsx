import { Link } from 'react-router-dom'

function Intro() {
  return (
    <section className="section" id="intro">
      <div className="section-inner">
        <div className="split-grid">
          <div className="reveal">
            <p style={{fontFamily:'var(--font-serif)',fontWeight:300,fontSize:'clamp(1.6rem,3vw,2.4rem)',lineHeight:1.35,color:'var(--ink)',letterSpacing:'-.01em'}}>
              We design, build and ship world-class digital products for forward-thinking brands — fusing
              <em style={{color:'var(--accent)'}}> human creativity</em> with
              <em style={{color:'var(--accent)'}}> technical precision</em>.
            </p>
          </div>
          <div className="reveal" style={{transitionDelay:'0.15s'}}>
            <p style={{color:'var(--muted)',lineHeight:1.8,fontSize:'.95rem',marginBottom:32}}>
              ejicode is an independent software studio born from a belief that the best digital experiences happen when empathy and engineering are inseparable. We don't just write code — we craft narratives that transform ideas into lived experiences.
            </p>
            <Link to="/about" className="btn-outline">
              About us
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
