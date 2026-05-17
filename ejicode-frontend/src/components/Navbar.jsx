// components/Navbar.jsx
// Replace your existing Navbar.jsx with this file

import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'

function Navbar() {
  const [light, setLight] = useState(false)
  useEffect(() => {
    const onScroll = () => setLight(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLogoClick = () => window.scrollTo(0, 0)

  return (
    <nav className={`nav-pill${light ? ' light' : ''}`}>
      <button className="nav-logo" onClick={handleLogoClick}>
        <Link to="/"><img src={logo} alt="ejicode" /></Link>
      </button>
      <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Home</NavLink>
      <NavLink to="/about" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>About</NavLink>
      <NavLink to="/services" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Services</NavLink>
      <NavLink to="/lets-talk" className="nav-cta">Let's Talk</NavLink>
    </nav>
  )
}

export default Navbar