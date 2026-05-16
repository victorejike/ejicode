import { Link } from 'react-router-dom'

function BigCta() {
  return (
    <section className="big-cta reveal" id="bigCta">
      <div className="big-cta-glow"></div>
      <span className="section-label" style={{color:'rgba(238,242,247,0.4)'}}>Ready to begin?</span>
      <h2>Let's make something <em>extraordinary</em> together.</h2>
      <Link to="/lets-talk" className="btn-gold">
        Start a conversation
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </Link>
    </section>
  )
}

export default BigCta
