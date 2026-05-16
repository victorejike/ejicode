import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import LetsTalkPage from './pages/LetsTalkPage'
import AdminPage from './pages/AdminPage'
import ServicesPage from './pages/ServicesPage'

function App() {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    // Wait a tiny bit for the DOM to render after a route change,
    // then observe all un‑revealed elements.
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => observer.observe(el))
    }, 50)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [location.pathname])   // 👈 re‑runs on every page navigation

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/lets-talk" element={<LetsTalkPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/services"  element={<ServicesPage />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  )
}

export default App
