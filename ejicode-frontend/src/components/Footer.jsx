import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'

function Footer() {
  return (
    <footer className="footer-wrap">
      <div className="footer-inner">
        <div>
          <p className="footer-cta-text">Let's make something<br /><em>extraordinary</em> together.</p>
          <Link to="/lets-talk" className="btn-gold">
            Start a project
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
        <div className="footer-links-grid">
          <div>
            <h5 className="footer-links-col">Navigate</h5>
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/about" className="footer-link">About</Link>
            <Link to="/lets-talk" className="footer-link">Consultation</Link>
          </div>
          <div>
            <h5 className="footer-links-col">Contact</h5>
            <p style={{color:'rgba(238,242,247,0.6)',fontSize:'.85rem',lineHeight:1.75}}>
              Lagos, Nigeria<br />
              hello@ejicode.io<br />
              +234 800 000 0000
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-brand"><img src={logo} alt="ejicode" /></span>
        <span className="footer-copy">© 2025 ejicode. All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Footer
