import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const IconFacebook = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
const IconX = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)
const IconLinkedin = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v1.5A6 6 0 0 1 16 8zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)
const IconInstagram = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)
import './Footer.css'

const SolarIcon = () => (
  <svg width="34" height="34" viewBox="0 0 38 38" fill="none">
    <rect width="38" height="38" rx="10" fill="#1A3F7A"/>
    <rect x="6" y="13" width="26" height="16" rx="2.5" fill="none" stroke="#F5A623" strokeWidth="1.8"/>
    <line x1="6" y1="21" x2="32" y2="21" stroke="#F5A623" strokeWidth="1.2"/>
    <line x1="19" y1="13" x2="19" y2="29" stroke="#F5A623" strokeWidth="1.2"/>
    <line x1="19" y1="4" x2="19" y2="10" stroke="#FCD34D" strokeWidth="2" strokeLinecap="round"/>
    <line x1="13.5" y1="5.8" x2="15.5" y2="9.2" stroke="#FCD34D" strokeWidth="1.6" strokeLinecap="round"/>
    <line x1="24.5" y1="5.8" x2="22.5" y2="9.2" stroke="#FCD34D" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
)

const Footer = () => (
  <footer className="footer">
    <div className="footer-top">
      <div className="container footer-grid">
        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <SolarIcon />
            <span>Solar<em>Econo</em></span>
          </Link>
          <p>
            Clean energy solutions that reduce your bills and protect the planet.
            Trusted by 500+ homeowners and businesses across the region.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook"><IconFacebook /></a>
            <a href="#" aria-label="X (Twitter)"><IconX /></a>
            <a href="#" aria-label="LinkedIn"><IconLinkedin /></a>
            <a href="#" aria-label="Instagram"><IconInstagram /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/contact">Get Free Quote</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            <li><Link to="/services">Residential Solar</Link></li>
            <li><Link to="/services">Commercial Solar</Link></li>
            <li><Link to="/services">Battery Storage</Link></li>
            <li><Link to="/services">Solar Maintenance</Link></li>
            <li><Link to="/services">Energy Audit</Link></li>
            <li><Link to="/services">Solar Financing</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col footer-contact-col">
          <h4>Get In Touch</h4>
          <ul>
            <li>
              <MapPin size={15}/>
              <span>4521 Solar Drive, Suite 200<br/>Austin, TX 78701</span>
            </li>
            <li>
              <Phone size={15}/>
              <a href="tel:+18007655652">(800) 765-SOLAR</a>
            </li>
            <li>
              <Mail size={15}/>
              <a href="mailto:info@solarecono.com">info@solarecono.com</a>
            </li>
            <li>
              <Clock size={15}/>
              <span>Mon–Fri: 8AM–6PM<br/>Sat: 9AM–3PM</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="container footer-bottom-inner">
        <p>&copy; {new Date().getFullYear()} SolarEcono. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
