import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const SolarIcon = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="38" height="38" rx="10" fill="#1A3F7A"/>
    <rect x="6" y="13" width="26" height="16" rx="2.5" fill="none" stroke="#F5A623" strokeWidth="1.8"/>
    <line x1="6" y1="21" x2="32" y2="21" stroke="#F5A623" strokeWidth="1.2"/>
    <line x1="19" y1="13" x2="19" y2="29" stroke="#F5A623" strokeWidth="1.2"/>
    <line x1="19" y1="4" x2="19" y2="10" stroke="#FCD34D" strokeWidth="2" strokeLinecap="round"/>
    <line x1="13.5" y1="5.8" x2="15.5" y2="9.2" stroke="#FCD34D" strokeWidth="1.6" strokeLinecap="round"/>
    <line x1="24.5" y1="5.8" x2="22.5" y2="9.2" stroke="#FCD34D" strokeWidth="1.6" strokeLinecap="round"/>
    <line x1="10" y1="8.5" x2="12.8" y2="10.5" stroke="#FCD34D" strokeWidth="1.4" strokeLinecap="round"/>
    <line x1="28" y1="8.5" x2="25.2" y2="10.5" stroke="#FCD34D" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
)

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }, [location])

  const toggleMenu = () => {
    setMenuOpen(prev => {
      document.body.style.overflow = !prev ? 'hidden' : ''
      return !prev
    })
  }

  const solid = !isHome || scrolled
  const navClass = `navbar${solid ? ' navbar-solid' : ' navbar-transparent'}${scrolled ? ' scrolled' : ''}`

  return (
    <nav className={navClass} role="navigation">
      <div className="container navbar-inner">
        <Link to="/" className="nav-logo">
          <SolarIcon />
          <span className="logo-text">Solar<span>Econo</span></span>
        </Link>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`nav-link${location.pathname === to ? ' active' : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/contact" className="btn btn-primary nav-cta">
              Get Free Quote
            </Link>
          </li>
        </ul>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
