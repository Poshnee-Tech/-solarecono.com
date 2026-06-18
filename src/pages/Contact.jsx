import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react'
import './Contact.css'

const CONTACT_INFO = [
  {
    icon: MapPin,
    title: 'Visit Our Office',
    lines: ['4521 Solar Drive, Suite 200', 'Austin, TX 78701'],
    color: '#1A3F7A',
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['(800) 765-SOLAR', '(800) 765-7652'],
    color: '#059669',
    href: 'tel:+18007657652',
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['info@solarecono.com', 'quotes@solarecono.com'],
    color: '#F5A623',
    href: 'mailto:info@solarecono.com',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    lines: ['Mon–Fri: 8:00 AM – 6:00 PM', 'Saturday: 9:00 AM – 3:00 PM'],
    color: '#7C3AED',
  },
]

const SERVICE_OPTIONS = [
  'Residential Solar System',
  'Commercial Solar Solution',
  'Battery Energy Storage',
  'Solar Maintenance & Monitoring',
  'Energy Efficiency Audit',
  'Solar Financing',
  'General Inquiry',
]

const Contact = () => {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <div className="contact-page">

      {/* ── Page Hero ────────────────────────────────────────── */}
      <section className="page-hero">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584993616601-86892c0b9c80?auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="container page-hero-content">
          <div className="section-tag">Get In Touch</div>
          <h1>Let's Start Your<br />Solar Journey</h1>
          <p>
            Schedule a free consultation, request a quote, or just ask a question.
            Our solar advisors are ready to help.
          </p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </div>
        </div>
      </section>

      {/* ── Contact Cards ────────────────────────────────────── */}
      <section className="contact-cards-strip">
        <div className="container contact-cards-grid">
          {CONTACT_INFO.map(({ icon: Icon, title, lines, color, href }) => (
            <div key={title} className="contact-card">
              <div className="contact-card-icon" style={{ background: `${color}15`, color }}>
                <Icon size={24} />
              </div>
              <h3>{title}</h3>
              <div className="contact-card-lines">
                {lines.map((line, i) =>
                  href && i === 0 ? (
                    <a key={line} href={href}>{line}</a>
                  ) : (
                    <span key={line}>{line}</span>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Form + Map ───────────────────────────────────────── */}
      <section className="section contact-main">
        <div className="container contact-layout">

          {/* Form */}
          <div className="contact-form-wrap">
            <div className="section-tag">Free Assessment</div>
            <h2 className="section-heading">Request a Free Quote</h2>
            <p className="section-sub" style={{ maxWidth: '100%', marginBottom: 32 }}>
              Fill out the form below and one of our solar advisors will contact you
              within 1 business day with a personalized savings estimate.
            </p>

            {submitted ? (
              <div className="form-success">
                <CheckCircle2 size={52} />
                <h3>Thank you, {form.name.split(' ')[0]}!</h3>
                <p>
                  We've received your request and will reach out within 1 business day
                  with your personalized solar savings estimate.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      id="name" name="name" type="text" required
                      placeholder="John Smith"
                      value={form.name} onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      id="email" name="email" type="email" required
                      placeholder="john@example.com"
                      value={form.email} onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone" name="phone" type="tel"
                      placeholder="(555) 000-0000"
                      value={form.phone} onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Service Interest</label>
                    <select
                      id="service" name="service"
                      value={form.service} onChange={handleChange}
                    >
                      <option value="">Select a service...</option>
                      {SERVICE_OPTIONS.map(o => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message" name="message" rows={5}
                    placeholder="Tell us about your property and energy goals..."
                    value={form.message} onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg form-submit"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : (<>Send Message <Send size={17} /></>)}
                </button>
              </form>
            )}
          </div>

          {/* Map + Info */}
          <div className="contact-aside">
            <div className="contact-map">
              <div className="map-placeholder">
                <div className="map-pin-anim">
                  <MapPin size={36} />
                </div>
                <strong>SolarEcono Austin</strong>
                <span>4521 Solar Drive, Suite 200<br />Austin, TX 78701</span>
              </div>
            </div>
            <div className="contact-aside-info">
              <h3>What to Expect</h3>
              <ul>
                {[
                  'Response within 1 business day',
                  'No-obligation, 100% free consultation',
                  'Detailed savings estimate for your home',
                  'Certified solar advisor assigned to you',
                  'Zero pressure — just real information',
                ].map(item => (
                  <li key={item}>
                    <CheckCircle2 size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Contact
