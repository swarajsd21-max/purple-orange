"use client";

import { useState } from "react";

const productFilms = [
  { n: "01", title: "Wellio", category: "HEALTHTECH · PRODUCT EXPLAINER", src: "/videos/promo-01.mp4" },
  { n: "02", title: "Elyxir", category: "SAAS · PRODUCT FILM", src: "/videos/promo-02.mp4" },
  { n: "03", title: "TORQ", category: "TECH · MOTION EXPLAINER", src: "/videos/promo-03.mp4" },
  { n: "04", title: "Product story", category: "PROMO · PRODUCT FILM", src: "/videos/promo-04.mp4" },
];

const adFilms = [
  { n: "01", title: "Lifestyle UGC", category: "VERTICAL · SOCIAL CREATIVE", src: "/videos/ad-01.mp4" },
  { n: "02", title: "Everyday moments", category: "VERTICAL · SOCIAL CREATIVE", src: "/videos/ad-02.mp4" },
  { n: "03", title: "Creator-style ad", category: "VERTICAL · SOCIAL CREATIVE", src: "/videos/ad-03.mp4" },
];

const services = [
  { n: "01", title: "Product & explainer videos", desc: "Make complex products easier to understand. We turn features, workflows and benefits into clear, engaging videos." },
  { n: "02", title: "Ad creatives", desc: "Communicate the right message to the right audience. We develop creative angles around customer problems and product benefits." },
  { n: "03", title: "Launch & campaign films", desc: "Introducing a product or feature? We build the story and supporting visuals to explain what is new and why it matters." },
];

const process = [
  { n: "01", title: "Understand", desc: "We learn about your product, audience, competitors and the problem you solve." },
  { n: "02", title: "Find the message", desc: "We identify the key benefit and build a concept and script around it." },
  { n: "03", title: "Plan the visuals", desc: "We storyboard the idea frame by frame before production begins." },
  { n: "04", title: "Create", desc: "We bring the concept to life with motion design, product footage, UI animation and sound." },
];

const faqs = [
  { q: "What kind of businesses do you work with?", a: "We focus on SaaS, AI, technology and digital-first brands. If your product needs a clearer explanation or stronger video creative, tell us about it." },
  { q: "What do you need from us to get started?", a: "A product overview, your target audience, the goal of the video and any existing brand assets are a useful starting point. We can help shape the message from there." },
  { q: "Can you make ads for different platforms?", a: "Yes. We can plan creative for website, product launch, paid social and vertical placements. Final formats are agreed in the project scope." },
  { q: "Does the monthly package include ad management?", a: "No. The monthly package covers creative production and planning, not media buying or campaign management." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main id="top">
      <div className="offer-ribbon">
        <span><i className="live-dot" /> OCTOBER OFFER</span>
        <p>Monthly Creative Stack <b>₹14,999</b> · Ends 25 October 2026</p>
        <a href="#pricing">View offer <span>↗</span></a>
      </div>

      <nav className="nav glass-panel">
        <a className="wordmark" href="#top" aria-label="Purple Orange home">purple<span className="dot">.</span>orange<span className="reg">®</span></a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#process">Our process</a>
          <a href="#pricing">Pricing</a>
        </div>
        <a className="nav-cta" href="mailto:hello@purpleorange.studio?subject=Project%20enquiry">Discuss a project <span>↗</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? "CLOSE −" : "MENU +"}</button>
        {menuOpen && <div className="menu-panel glass-panel"><a href="#services" onClick={() => setMenuOpen(false)}>Services ↗</a><a href="#work" onClick={() => setMenuOpen(false)}>Our work ↗</a><a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing ↗</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact ↗</a></div>}
      </nav>

      <section className="hero">
        <div className="hero-kicker"><span>PRODUCT VIDEOS · EXPLAINERS · AD CREATIVES</span><span>INDIA · WORKING WORLDWIDE</span></div>
        <div className="hero-copy">
          <div className="hero-offer-tag"><span className="live-dot" /> OCTOBER OFFER · UNTIL 25 OCT</div>
          <h1>Your product<br />deserves to be <em>understood.</em></h1>
          <div className="hero-bottom">
            <p>We help SaaS, AI and tech brands explain what their product does, why it matters, and why people should choose it.</p>
            <div className="hero-actions"><a className="primary-cta" href="#pricing">Explore the October offer <span>↗</span></a><a className="text-cta" href="#work">See our work <span>↓</span></a></div>
          </div>
        </div>
        <div className="hero-visual glass-panel" aria-label="Abstract animated product interface visual">
          <div className="visual-topline"><span>PURPLE ORANGE / PRODUCT COMMUNICATION</span><span>STUDY 001 — 2026</span></div>
          <div className="visual-grid" />
          <div className="glass-orb orb-purple" /><div className="glass-orb orb-orange" />
          <div className="floating-window window-main">
            <div className="window-bar"><span /><span /><span /><b>PRODUCT / OVERVIEW</b></div>
            <div className="window-content"><small>YOUR PRODUCT, CLEARLY EXPLAINED</small><h2>Less confusion.<br /><em>More clarity.</em></h2><div className="window-stats"><div><span>PRODUCT VALUE</span><b>Made clear</b></div><div><span>MESSAGE</span><b>Easy to follow ↗</b></div></div></div>
          </div>
          <div className="floating-note note-one">IDEA <span>→</span> STORY</div><div className="floating-note note-two">BUILT AROUND YOUR PRODUCT</div>
          <div className="visual-bottomline"><span>CONCEPT VISUAL</span><span>01 / 04</span></div>
        </div>
        <div className="hero-footnote"><span className="scroll-line" /> FROM COMPLEX PRODUCT TO CLEAR COMMUNICATION</div>
      </section>

      <section className="audience-strip">
        <span>MADE FOR TEAMS BUILDING</span><div><b>SAAS</b><i>✳</i><b>AI PRODUCTS</b><i>✳</i><b>FINTECH</b><i>✳</i><b>TECH & DIGITAL SERVICES</b></div>
      </section>

      <section className="problem-section section-pad">
        <div className="section-index">01 / THE PROBLEM</div>
        <div className="problem-content"><h2>Your audience can't value what they <em>don't understand.</em></h2><div><p>You know what makes your product different. Your customers might not.</p><p>Maybe the product is complicated to explain. Maybe your ads focus on features instead of benefits. We help close that communication gap.</p><a className="inline-link" href="#services">See how we help <span>↗</span></a></div></div>
      </section>

      <section id="services" className="services-section section-pad">
        <div className="section-head"><div><div className="section-index">02 / WHAT WE DO</div><h2>Make your product<br /><em>easier to get.</em></h2></div><p className="small-note">RESEARCH · CONCEPT · STORY · MOTION</p></div>
        <div className="service-grid">
          {services.map((service) => <article className="service-card glass-panel" key={service.n}><span className="service-number">{service.n}</span><h3>{service.title}</h3><p>{service.desc}</p><a href="#contact">Discuss this service <span>↗</span></a></article>)}
        </div>
      </section>

      <section id="work" className="work-section section-pad">
        <div className="section-head"><div><div className="section-index">03 / SELECTED WORK</div><h2>See how the story<br /><em>comes together.</em></h2></div><p className="small-note">PRODUCT FILMS · EXPLAINERS<br />SHORT-FORM AD CREATIVES</p></div>
        <div className="gallery-heading"><span>PRODUCT & PROMO FILMS</span><span>LANDSCAPE / 16:9</span></div>
        <div className="film-grid">
          {productFilms.map((film) => <article className="film-card glass-panel" key={film.n}><div className="film-frame film-frame-wide"><video src={film.src} controls playsInline preload="metadata" aria-label={film.title} /><span className="film-index">{film.n}</span></div><div className="film-meta"><div><span className="work-type">{film.category}</span><h3>{film.title}</h3></div><span className="film-arrow">↗</span></div></article>)}
        </div>
        <div className="gallery-heading vertical-heading"><span>VERTICAL AD CREATIVES</span><span>REELS · SHORTS · PAID SOCIAL</span></div>
        <div className="ad-grid">
          {adFilms.map((film) => <article className="film-card glass-panel" key={film.n}><div className="film-frame film-frame-vertical"><video src={film.src} controls playsInline preload="metadata" aria-label={film.title} /><span className="film-index">{film.n}</span></div><div className="film-meta"><div><span className="work-type">{film.category}</span><h3>{film.title}</h3></div><span className="film-arrow">↗</span></div></article>)}
        </div>
        <p className="work-disclaimer">Selected creative samples. Project details and performance results are shared where available and approved.</p>
      </section>

      <section id="process" className="process-section section-pad">
        <div className="section-head"><div><div className="section-index">04 / HOW WE WORK</div><h2>First, understand.<br /><em>Then, create.</em></h2></div><p className="small-note">A CLEAR PROCESS FROM BRIEF TO FINAL VIDEO</p></div>
        <div className="process-grid">{process.map((step) => <article className="process-card glass-panel" key={step.n}><span>{step.n}</span><h3>{step.title}</h3><p>{step.desc}</p></article>)}</div>
      </section>

      <section id="pricing" className="pricing-section section-pad">
        <div className="section-head"><div><div className="section-index">05 / PRICING</div><h2>What do you need<br />to <em>communicate?</em></h2></div><p className="small-note">ONE-OFF VIDEOS · MONTHLY CREATIVE · CAMPAIGNS</p></div>
        <div className="pricing-grid">
          <article className="price-card glass-panel"><div className="price-kicker">01 / ONE-TIME PROJECT</div><h3>One clear message.<br /><em>One focused video.</em></h3><p className="price-desc">For a product, feature or campaign that needs a clear explanation.</p><div className="price"><small>STARTING AT</small><strong>₹4,999</strong></div><div className="price-list"><span>Basic motion graphics</span><span>Product explainers from ₹9,999</span><span>Custom concept and visual direction</span><span>Advanced films quoted by scope</span></div><a className="price-cta" href="mailto:hello@purpleorange.studio?subject=One-time%20project">Discuss a project <span>↗</span></a></article>
          <article className="price-card price-featured glass-panel"><div className="price-kicker"><span className="live-dot" /> 02 / OCTOBER OFFER</div><div className="price-badge">ENDS 25 OCTOBER 2026</div><h3>Stop running out<br />of <em>ad creatives.</em></h3><p className="price-desc">A monthly stream of product videos and ad creatives to explain benefits and test different messages.</p><div className="price"><strong>₹14,999</strong><small>/ MONTH</small></div><div className="price-list"><span>2 product motion videos</span><span>4 short-form video creatives</span><span>2 campaign design assets</span><span>Monthly creative planning</span></div><p className="price-note">New clients who confirm and pay by 25 October 2026. Production starts after payment and briefing. Scope and revision limits agreed before production.</p><a className="price-cta primary-price-cta" href="mailto:hello@purpleorange.studio?subject=October%20Monthly%20Creative%20Stack">Claim the October offer <span>↗</span></a></article>
          <article className="price-card glass-panel"><div className="price-kicker">03 / LAUNCH CAMPAIGN</div><h3>Launching something<br /><em>new?</em></h3><p className="price-desc">For a product launch, new feature or campaign with multiple creative needs.</p><div className="price"><strong>₹29,999–₹49,999</strong></div><div className="price-list"><span>Product launch films</span><span>Short-form creative variations</span><span>Supporting campaign assets</span><span>Campaign concept and visual direction</span></div><a className="price-cta" href="mailto:hello@purpleorange.studio?subject=Launch%20campaign">Plan your campaign <span>↗</span></a></article>
        </div>
        <p className="pricing-footnote">All prices are starting points or indicative project ranges. Final scope, timeline, deliverables and revisions are confirmed before production. Ad spend and media buying are not included.</p>
      </section>

      <section className="faq-section section-pad">
        <div className="section-head"><div><div className="section-index">06 / COMMON QUESTIONS</div><h2>Before we<br /><em>get started.</em></h2></div><p className="small-note">THE PRACTICAL DETAILS</p></div>
        <div className="faq-list">{faqs.map((faq, i) => <article className="faq-item glass-panel" key={faq.q}><button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}><span>{faq.q}</span><b>{openFaq === i ? "−" : "+"}</b></button>{openFaq === i && <p>{faq.a}</p>}</article>)}</div>
      </section>

      <section id="contact" className="contact-section section-pad">
        <div className="contact-panel glass-panel"><div className="section-index">07 / START A PROJECT</div><div className="contact-content"><div><h2>Let's make your product<br /><em>easier to understand.</em></h2><p>Tell us what you're building, what needs explaining, and where the video will be used. We'll help you find the right creative approach.</p></div><a className="primary-cta" href="mailto:hello@purpleorange.studio?subject=Project%20enquiry">Tell us about your project <span>↗</span></a></div><div className="contact-bottom"><span>NEW PROJECT ENQUIRIES</span><a href="mailto:hello@purpleorange.studio">HELLO@PURPLEORANGE.STUDIO ↗</a></div></div>
      </section>

      <footer id="footer" className="footer">
        <div className="footer-top"><a className="wordmark" href="#top">purple<span className="dot">.</span>orange<span className="reg">®</span></a><span>PRODUCT COMMUNICATION THROUGH VIDEO</span></div>
        <div className="footer-main"><div><p className="footer-kicker">PURPLE ORANGE STUDIO</p><h2>Clear product.<br /><em>Clear message.</em></h2></div><div className="footer-contact"><a href="mailto:hello@purpleorange.studio">hello@purpleorange.studio <span>↗</span></a><a href="#services">Services</a><a href="#work">Selected work</a><a href="#pricing">Pricing</a><a href="#contact">Contact</a></div></div>
        <div className="footer-bottom"><span>© PURPLE ORANGE 2026</span><span>INDEPENDENT CREATIVE STUDIO · INDIA</span><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">INSTAGRAM ↗</a></div>
      </footer>
    </main>
  );
}
