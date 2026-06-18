import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Home, Building2, BatteryCharging, Wrench,
  BarChart2, DollarSign, ArrowRight, ChevronDown,
  CheckCircle2, ClipboardList, Cpu, Plug
} from 'lucide-react'
import './Services.css'

const SERVICES = [
  {
    icon: Home,
    title: 'Residential Solar Systems',
    desc: 'Custom solar panel systems for homes of all sizes. We analyze your energy usage, roof orientation, and shading to design a system that maximizes production and minimizes your electricity costs — often by 70–90%.',
    features: ['Roof suitability assessment', 'Custom panel layout design', 'Net metering enrollment', 'Smart monitoring app'],
    color: '#1A3F7A',
    img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Building2,
    title: 'Commercial Solar Solutions',
    desc: 'Scalable solar for businesses, warehouses, schools, and commercial buildings. We handle complex roof structures and large-scale arrays to deliver maximum ROI and help you meet corporate sustainability targets.',
    features: ['Large-scale system design', 'Commercial incentive guidance', 'Detailed ROI analysis', 'Priority maintenance plans'],
    color: '#059669',
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: BatteryCharging,
    title: 'Battery Energy Storage',
    desc: 'Pair your solar system with advanced battery storage to power your home through the night and during grid outages. Our battery systems give you true energy independence and protection against rising utility rates.',
    features: ['Tesla Powerwall certified', 'Seamless outage backup', 'Peak-hour usage shifting', 'Remote monitoring & control'],
    color: '#F5A623',
    img: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Wrench,
    title: 'Solar Maintenance & Monitoring',
    desc: 'Protect your investment with our comprehensive maintenance programs. Our technicians perform regular inspections, panel cleaning, inverter diagnostics, and proactive repairs to keep your system producing at peak efficiency.',
    features: ['Annual system tune-ups', 'Remote performance diagnostics', 'Professional panel cleaning', 'Monthly performance reports'],
    color: '#7C3AED',
    img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: BarChart2,
    title: 'Energy Efficiency Audit',
    desc: 'Before going solar, understand exactly how your property consumes energy. Our RESNET-certified auditors identify inefficiencies and provide a roadmap to maximize your solar investment and accelerate your payback period.',
    features: ['Full home energy analysis', 'Savings projection report', 'Incentive identification', 'Pre-solar optimization plan'],
    color: '#DC2626',
    img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: DollarSign,
    title: 'Solar Financing Solutions',
    desc: 'Going solar should never be a financial burden. We offer $0 down solar loans, lease programs, and expert guidance on federal and state incentives to make clean energy accessible regardless of your budget.',
    features: ['$0 down financing options', 'Federal 30% ITC guidance', 'State rebate navigation', 'Flexible loan structures'],
    color: '#0891B2',
    img: 'https://images.unsplash.com/photo-1584993616601-86892c0b9c80?auto=format&fit=crop&w=600&q=80',
  },
]

const PROCESS = [
  {
    icon: ClipboardList,
    step: '01',
    title: 'Initial Consultation',
    desc: 'We schedule a no-obligation visit to assess your property, analyze your energy bills, and deliver a personalized savings estimate.',
  },
  {
    icon: Cpu,
    step: '02',
    title: 'System Design',
    desc: 'Our engineers create a custom solar layout using 3D modeling, optimized for your roof angle, local weather, and energy usage.',
  },
  {
    icon: ClipboardList,
    step: '03',
    title: 'Permits & Approvals',
    desc: 'We handle all permit applications, HOA approvals, and utility interconnection paperwork — completely on your behalf.',
  },
  {
    icon: Plug,
    step: '04',
    title: 'Installation & Activation',
    desc: 'Our certified crew installs your system in as little as one day, followed by inspection and full grid activation.',
  },
]

const FAQS = [
  {
    q: 'How much can I save on my electricity bill with solar?',
    a: 'Most SolarEcono customers see a 60–90% reduction in their electricity bills. The exact savings depend on your current energy usage, roof size and orientation, and your local utility rates. During your free consultation, we provide a detailed 25-year savings projection tailored to your home.',
  },
  {
    q: 'How long does the entire solar process take?',
    a: 'Most residential installations are completed in a single day. The full process — from initial consultation to final activation — typically takes 4–8 weeks, with most of that time spent on permitting and utility approvals, which we handle entirely on your behalf.',
  },
  {
    q: 'What warranties come with a SolarEcono installation?',
    a: 'Every SolarEcono installation includes a 25-year performance warranty on solar panels, a 12-year warranty on inverters, and a 10-year workmanship warranty on installation. Your investment is comprehensively protected for decades.',
  },
  {
    q: 'Do I need battery storage with my solar system?',
    a: 'Battery storage is optional but highly recommended if you experience frequent power outages, want to eliminate your electricity bill entirely, or wish to store energy for nighttime use. We provide a cost-benefit analysis during your consultation to help you decide.',
  },
  {
    q: 'What solar incentives and financing options are available?',
    a: 'The Federal Solar Investment Tax Credit (ITC) allows you to deduct 30% of your system cost from federal taxes. Additional state-level incentives, utility rebates, and net metering credits may further reduce your costs. We also offer $0-down financing so you can start saving immediately with no upfront investment.',
  },
]

const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen(o => !o)}>
        <span>{q}</span>
        <ChevronDown size={20} className="faq-chevron" />
      </button>
      <div className="faq-answer">
        <p>{a}</p>
      </div>
    </div>
  )
}

const Services = () => (
  <div className="services-page">

    {/* ── Page Hero ──────────────────────────────────────────── */}
    <section className="page-hero">
      <div
        className="page-hero-bg"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1920&q=80')" }}
      />
      <div className="container page-hero-content">
        <div className="section-tag">What We Do</div>
        <h1>Complete Solar Services<br />Under One Roof</h1>
        <p>
          From design to installation to long-term maintenance, SolarEcono covers
          every phase of your solar journey with certified expertise.
        </p>
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Services</span>
        </div>
      </div>
    </section>

    {/* ── Services Grid ───────────────────────────────────────── */}
    <section className="section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 56 }}>
          <div className="section-tag">Our Expertise</div>
          <h2 className="section-heading">Everything Solar, Done Right</h2>
          <p className="section-sub center">
            Six specialized services, one trusted provider. We match the right
            solution to your unique energy needs.
          </p>
        </div>
        <div className="svc-grid">
          {SERVICES.map(({ icon: Icon, title, desc, features, color, img }) => (
            <div key={title} className="svc-card">
              <div className="svc-image">
                <img src={img} alt={title} loading="lazy" />
                <div className="svc-icon-float" style={{ background: color }}>
                  <Icon size={22} color="white" />
                </div>
              </div>
              <div className="svc-body">
                <h3>{title}</h3>
                <p>{desc}</p>
                <ul className="svc-features">
                  {features.map(f => (
                    <li key={f}>
                      <CheckCircle2 size={15} style={{ color: 'var(--accent)' }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-navy" style={{ marginTop: 'auto' }}>
                  Request This Service <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Process ─────────────────────────────────────────────── */}
    <section className="section svc-process-section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 52 }}>
          <div className="section-tag">How It Works</div>
          <h2 className="section-heading">Your Path to Solar Savings</h2>
          <p className="section-sub center">
            Our streamlined process takes you from interested to energy-independent
            in just a few simple steps.
          </p>
        </div>
        <div className="svc-process-grid">
          {PROCESS.map(({ icon: Icon, step, title, desc }) => (
            <div key={step} className="svc-process-card">
              <div className="svc-process-num">{step}</div>
              <div className="svc-process-icon">
                <Icon size={24} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── FAQ ─────────────────────────────────────────────────── */}
    <section className="section faq-section">
      <div className="container faq-container">
        <div className="faq-header">
          <div className="section-tag">FAQ</div>
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="section-sub">
            Everything you need to know before making the switch to solar energy.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: 28 }}>
            Ask Us Anything <ArrowRight size={16} />
          </Link>
        </div>
        <div className="faq-list">
          {FAQS.map(faq => <FaqItem key={faq.q} {...faq} />)}
        </div>
      </div>
    </section>

    {/* ── Bottom CTA ──────────────────────────────────────────── */}
    <section className="svc-cta">
      <div className="svc-cta-bg" />
      <div className="container svc-cta-inner">
        <h2>Not Sure Which Service You Need?</h2>
        <p>
          Our solar advisors will assess your home and recommend the perfect
          solution — completely free of charge, with no sales pressure.
        </p>
        <Link to="/contact" className="btn btn-primary btn-lg">
          Book Free Consultation <ArrowRight size={18} />
        </Link>
      </div>
    </section>

  </div>
)

export default Services
