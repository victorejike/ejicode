import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/images/img3.jpg' // adjust path as needed

const words = ['extraordinary', 'delightful', 'beautiful', 'original', 'purposeful']

function Hero() {
  const [idx, setIdx] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setIdx(prev => (prev + 1) % words.length)
        setFading(false)
      }, 400)
    }, 2400)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero-wrap" id="hero">
      <div className="hero-bg">
        <img
          src={heroImage}
          alt="Team collaboration"
          loading="eager"
        />
        <div className="hero-bg-overlay"></div>
      </div>

      <div className="hero-content">
        <div style={{ marginBottom: 24 }}>
          <span className="chip chip-white">code + innovation</span>
        </div>

        <h1 className="hero-title">
          We craft<br />
          <em
            className="hero-rotating"
            style={{
              opacity: fading ? 0 : 1,
              transform: fading ? 'translateY(20px)' : 'translateY(0)'
            }}
          >
            {words[idx]}
          </em><br />
          digital products.
        </h1>

        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Link to="/lets-talk" className="btn-gold">
            Start a project
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 12L12 2M12 2H5M12 2V9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <Link to="/about" className="btn-outline btn-outline-white">
            View our work
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero