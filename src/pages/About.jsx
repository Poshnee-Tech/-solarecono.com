import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Target, Eye, Heart, Award } from 'lucide-react'
import './About.css'

const VALUES = [
  {
    icon: CheckCircle2,
    title: 'Transparency',
    desc: 'No hidden fees, no surprises. We provide honest quotes, clear timelines, and straightforward communication every step of the way.',
    color: '#1A3F7A',
  },
  {
    icon: Award,
    title: 'Uncompromising Quality',
    desc: 'We exclusively install Tier 1 panels and certified components backed by industry-leading warranties. Quality is non-negotiable.',
    color: '#059669',
  },
  {
    icon: Heart,
    title: 'Customer First',
    desc: 'Your satisfaction drives everything we do. We remain partners long after installation, ensuring your system performs at its best for decades.',
    color: '#F5A623',
  },
  {
    icon: Eye,
    title: 'Sustainability',
    desc: 'We\'re on a mission to reduce carbon emissions one rooftop at a time. Every installation brings us closer to a cleaner, greener world.',
    color: '#7C3AED',
  },
]


const MILESTONES = [
  { year: '2009', event: 'Founded in Austin, TX with a team of 3 engineers.' },
  { year: '2013', event: 'Expanded to commercial installations, completing our 100th project.' },
  { year: '2017', event: 'Launched our battery storage division and energy monitoring platform.' },
  { year: '2021', event: 'Surpassed 400 installations and $1.5M in total customer savings.' },
  { year: '2024', event: 'Celebrating 500+ installations and $2.5M+ in lifetime savings generated.' },
]

const About = () => (
  <div className="about">

    {/* ── Page Hero ──────────────────────────────────────────── */}
    <section className="page-hero">
      <div
        className="page-hero-bg"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1920&q=80')" }}
      />
      <div className="container page-hero-content">
        <div className="section-tag">Our Story</div>
        <h1>Powering Communities<br />Since 2009</h1>
        <p>
          We started with a simple belief: clean energy should be accessible and
          affordable for everyone. Today, we're one of the region's most trusted
          solar providers.
        </p>
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>About Us</span>
        </div>
      </div>
    </section>

    {/* ── Our Story ──────────────────────────────────────────── */}
    <section className="section">
      <div className="container about-story">
        <div className="story-content">
          <div className="section-tag">Who We Are</div>
          <h2 className="section-heading">Built on a Mission to Make<br />Solar Accessible</h2>
          <p className="section-sub" style={{ maxWidth: '100%' }}>
            SolarEcono was founded in Austin, Texas in 2009 by a team of passionate
            engineers who believed that clean energy shouldn't be a luxury. What began
            as a small operation out of a garage has grown into a trusted regional solar
            provider with a dedicated team of 50+ professionals.
          </p>
          <p style={{ marginTop: 16, fontSize: 16, color: 'var(--text-muted)', lineHeight: 1.75 }}>
            Over the past 15 years, we've completed more than 500 installations for
            homeowners and businesses, generating over $2.5 million in total energy
            savings. We're not just a solar company — we're your long-term energy partner,
            committed to maximizing your investment from day one through the life of your
            system.
          </p>
          <div className="story-stats">
            <div><strong>500+</strong><span>Installations</span></div>
            <div><strong>$2.5M+</strong><span>Total Savings</span></div>
            <div><strong>50+</strong><span>Team Members</span></div>
          </div>
        </div>
        <div className="story-image">
          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80"
            alt="SolarEcono team installing solar panels"
            loading="lazy"
          />
          <div className="story-badge">
            <span>Est.</span>
            <strong>2009</strong>
          </div>
        </div>
      </div>
    </section>

    {/* ── Mission & Vision ───────────────────────────────────── */}
    <section className="section mission-section">
      <div className="container">
        <div className="mission-grid">
          <div className="mission-card mission-left">
            <Target size={36} className="mission-icon" />
            <h3>Our Mission</h3>
            <p>
              To accelerate the transition to clean energy by making solar power
              affordable, accessible, and hassle-free for every homeowner and
              business — without compromise on quality or service.
            </p>
          </div>
          <div className="mission-card mission-right">
            <Eye size={36} className="mission-icon" />
            <h3>Our Vision</h3>
            <p>
              A future where every rooftop generates clean energy, every family
              saves on electricity, and communities thrive on the power of the
              sun — leaving a healthier planet for generations to come.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ── Values ─────────────────────────────────────────────── */}
    <section className="section values-section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 52 }}>
          <div className="section-tag">What Drives Us</div>
          <h2 className="section-heading">Our Core Values</h2>
          <p className="section-sub center">
            These principles guide every decision, every installation, and every
            interaction we have with our customers.
          </p>
        </div>
        <div className="values-grid">
          {VALUES.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="value-card">
              <div className="value-icon" style={{ background: `${color}12`, color }}>
                <Icon size={26} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Timeline ───────────────────────────────────────────── */}
    <section className="section timeline-section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 52 }}>
          <div className="section-tag">Our Journey</div>
          <h2 className="section-heading">15 Years of Growth</h2>
        </div>
        <div className="timeline">
          {MILESTONES.map(({ year, event }) => (
            <div key={year} className="timeline-item">
              <div className="timeline-year">{year}</div>
              <div className="timeline-dot" />
              <div className="timeline-event">{event}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

{/* ── CTA ────────────────────────────────────────────────── */}
    <section className="about-cta">
      <div className="container about-cta-inner">
        <h2>Ready to Join Our Solar Community?</h2>
        <p>
          Get your free solar assessment today and become part of a growing
          movement toward clean, affordable energy.
        </p>
        <Link to="/contact" className="btn btn-primary btn-lg">
          Get Free Quote <ArrowRight size={18} />
        </Link>
      </div>
    </section>

  </div>
)

export default About
