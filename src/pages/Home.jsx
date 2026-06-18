import { Link } from 'react-router-dom'
import {
  Home as HomeIcon, Building2, BatteryCharging, Wrench,
  CheckCircle2, ArrowRight, Star, Quote,
  Sun, TrendingDown, ShieldCheck, Zap,
  ChevronRight
} from 'lucide-react'
import './Home.css'

const STATS = [
  { value: '500+', label: 'Solar Installations', icon: Sun },
  { value: '$2.5M+', label: 'Customer Savings', icon: TrendingDown },
  { value: '98%', label: 'Satisfaction Rate', icon: ShieldCheck },
  { value: '15+', label: 'Years Experience', icon: Zap },
]

const SERVICES = [
  {
    icon: HomeIcon,
    title: 'Residential Solar',
    desc: 'Custom solar panel systems designed for your home. Slash your electricity bill by up to 90% with panels built to last 25+ years.',
    color: '#1A3F7A',
  },
  {
    icon: Building2,
    title: 'Commercial Solar',
    desc: 'Scalable solar solutions for businesses and warehouses. Maximize ROI, reduce overhead costs, and meet sustainability goals.',
    color: '#059669',
  },
  {
    icon: BatteryCharging,
    title: 'Battery Storage',
    desc: 'Store excess solar energy for nights and outages. Achieve true energy independence with our smart battery systems.',
    color: '#F5A623',
  },
  {
    icon: Wrench,
    title: 'Maintenance & Monitoring',
    desc: 'Keep your system at peak performance with annual tune-ups, remote diagnostics, and 24/7 real-time monitoring.',
    color: '#7C3AED',
  },
]

const FEATURES = [
  '25-Year Panel Performance Warranty',
  'NABCEP-Certified Installation Experts',
  '$0 Down Financing Available',
  'Real-Time Energy Monitoring App',
  'Permit & Insurance Fully Handled',
  '24/7 Customer Support',
]

const STEPS = [
  {
    num: '01',
    title: 'Free Consultation',
    desc: 'We assess your energy needs, analyze your roof, and deliver a detailed savings projection — at no cost to you.',
  },
  {
    num: '02',
    title: 'Custom System Design',
    desc: 'Our engineers design a bespoke solar system optimized for your specific energy usage and roof layout.',
  },
  {
    num: '03',
    title: 'Expert Installation',
    desc: 'Our certified team installs your system safely and efficiently, typically completing the job in a single day.',
  },
  {
    num: '04',
    title: 'Start Saving',
    desc: 'Monitor clean energy production in real time and watch your electricity bills drop from day one.',
  },
]

const TESTIMONIALS = [
  {
    name: 'Michael Torres',
    location: 'Houston, TX',
    text: 'SolarEcono reduced our monthly electricity bill from $280 to just $38. The installation team was professional, on time, and done in a single day. Best investment we\'ve ever made.',
    stars: 5,
  },
  {
    name: 'Sarah Kim',
    location: 'Phoenix, AZ',
    text: 'From the first consultation to final activation, every step was seamless. We now produce more energy than we use and earn utility credits every month. Incredible experience.',
    stars: 5,
  },
  {
    name: 'David Reyes',
    location: 'San Diego, CA',
    text: 'They handled every permit, inspection, and utility form. We just said yes and it happened. Our system paid for itself in 6 years — and we still have 19 years of warranty remaining.',
    stars: 5,
  },
]

const Home = () => (
  <div className="home">

    {/* ── Hero ─────────────────────────────────────────────── */}
    <section className="hero">
      <div className="hero-overlay" />
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            <Sun size={14} /> Clean Energy Solutions
          </div>
          <h1>
            Solar Energy That
            <br />
            <span className="hero-highlight">Pays for Itself</span>
          </h1>
          <p>
            SolarEcono delivers premium solar installations that cut your electricity bill
            by up to 90%. Professional, reliable, and built to last a lifetime.
          </p>
          <div className="hero-cta">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get Free Quote <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn btn-outline-white btn-lg">
              Explore Services
            </Link>
          </div>
          <div className="hero-trust">
            <div className="hero-stars">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#F5A623" color="#F5A623" />)}
            </div>
            <span>Rated 4.9/5 from 200+ verified reviews</span>
          </div>
        </div>
      </div>
      <div className="hero-scroll-hint">
        <span />
      </div>
    </section>

    {/* ── Stats ────────────────────────────────────────────── */}
    <section className="stats-bar">
      <div className="container stats-grid">
        {STATS.map(({ value, label, icon: Icon }) => (
          <div key={label} className="stat-item">
            <Icon size={28} className="stat-icon" />
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>

    {/* ── Services ─────────────────────────────────────────── */}
    <section className="section services-section">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-tag">What We Offer</div>
          <h2 className="section-heading">Comprehensive Solar Solutions</h2>
          <p className="section-sub center">
            From initial assessment to long-term maintenance, we handle every aspect of
            your solar journey with expert precision.
          </p>
        </div>
        <div className="services-grid">
          {SERVICES.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="service-card">
              <div className="service-icon" style={{ background: `${color}15`, color }}>
                <Icon size={26} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <Link to="/services" className="service-link">
                Learn more <ChevronRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Why SolarEcono ───────────────────────────────────── */}
    <section className="section why-section">
      <div className="container why-inner">
        <div className="why-image">
          <img
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80"
            alt="Solar technician installing panels"
            loading="lazy"
          />
          <div className="why-badge-float">
            <strong>25 Years</strong>
            <span>Panel Warranty</span>
          </div>
        </div>
        <div className="why-content">
          <div className="section-tag">Why Choose Us</div>
          <h2 className="section-heading">
            The Smarter Way to<br />Go Solar
          </h2>
          <p className="section-sub">
            We combine industry-leading technology, certified expertise, and white-glove
            service to make going solar the easiest and most rewarding decision you'll
            ever make.
          </p>
          <ul className="features-list">
            {FEATURES.map(f => (
              <li key={f}>
                <CheckCircle2 size={19} className="check-icon" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <Link to="/about" className="btn btn-navy">
            Learn About Us <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>

    {/* ── How It Works ─────────────────────────────────────── */}
    <section className="section process-section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 56 }}>
          <div className="section-tag">Our Process</div>
          <h2 className="section-heading">Going Solar in 4 Simple Steps</h2>
          <p className="section-sub center">
            We've streamlined the entire process so you can go from interested to
            energy-independent in weeks, not months.
          </p>
        </div>
        <div className="process-grid">
          {STEPS.map(({ num, title, desc }, i) => (
            <div key={num} className="process-step">
              <div className="process-num">{num}</div>
              {i < STEPS.length - 1 && <div className="process-connector" />}
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Testimonials ─────────────────────────────────────── */}
    <section className="section testimonials-section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 52 }}>
          <div className="section-tag">Customer Stories</div>
          <h2 className="section-heading">Real Savings. Real People.</h2>
          <p className="section-sub center">
            Don't take our word for it — hear from homeowners who made the switch and
            never looked back.
          </p>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map(({ name, location, text, stars }) => (
            <div key={name} className="testimonial-card">
              <Quote size={32} className="quote-icon" />
              <p className="testimonial-text">{text}</p>
              <div className="testimonial-stars">
                {[...Array(stars)].map((_, i) => (
                  <Star key={i} size={14} fill="#F5A623" color="#F5A623" />
                ))}
              </div>
              <div className="testimonial-author">
                <div>
                  <strong>{name}</strong>
                  <span>{location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── CTA Banner ───────────────────────────────────────── */}
    <section className="cta-banner">
      <div className="cta-banner-bg" />
      <div className="container cta-banner-inner">
        <div>
          <h2>Ready to Slash Your Energy Bill?</h2>
          <p>
            Join 500+ satisfied customers. Get your free solar assessment today —
            no obligation, no pressure, just real numbers.
          </p>
        </div>
        <div className="cta-banner-actions">
          <Link to="/contact" className="btn btn-primary btn-lg">
            Get Free Quote <ArrowRight size={18} />
          </Link>
          <Link to="/contact" className="btn btn-outline-white">
            Schedule a Call
          </Link>
        </div>
      </div>
    </section>

  </div>
)

export default Home
