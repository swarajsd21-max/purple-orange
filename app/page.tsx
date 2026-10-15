"use client";

import { useState } from "react";

const promoFilms = [
  { n: "01", title: "Wellio", category: "HEALTHTECH · SAAS EXPLAINER", src: "/videos/promo-01.mp4" },
  { n: "02", title: "Elyxir", category: "SAAS · PRODUCT FILM", src: "/videos/promo-02.mp4" },
  { n: "03", title: "TORQ", category: "TECH · MOTION EXPLAINER", src: "/videos/promo-03.mp4" },
  { n: "04", title: "Product story", category: "PROMO · PRODUCT FILM", src: "/videos/promo-04.mp4" },
];

const adCreatives = [
  { n: "01", title: "Lifestyle UGC", category: "VERTICAL · SOCIAL CREATIVE", src: "/videos/ad-01.mp4" },
  { n: "02", title: "Everyday moments", category: "VERTICAL · SOCIAL CREATIVE", src: "/videos/ad-02.mp4" },
  { n: "03", title: "Creator-style ad", category: "VERTICAL · SOCIAL CREATIVE", src: "/videos/ad-03.mp4" },
];

const services = [
  { n: "01", title: "Product launch films", desc: "Give a new product, feature or big announcement a clear story and a memorable visual system." },
  { n: "02", title: "SaaS & AI explainers", desc: "Turn complex workflows and technical ideas into product stories people understand quickly." },
  { n: "03", title: "Paid social creatives", desc: "Short-form motion and ad concepts built around a sharp hook, a clear benefit and a next step." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <nav className="nav">
        <a className="wordmark" href="#top" aria-label="Purple Orange home">purple<span className="dot">.</span>orange<span className="reg">®</span></a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#work">Our work</a>
          <a href="#vertical-ads">Vertical ads</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="mailto:hello@purpleorange.studio?subject=Project%20enquiry">Book a call <span>↗</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? "CLOSE −" : "MENU +"}</button>
        {menuOpen && <div className="menu-panel"><a href="#services" onClick={() => setMenuOpen(false)}>Services ↗</a><a href="#work" onClick={() => setMenuOpen(false)}>Our work ↗</a><a href="#vertical-ads" onClick={() => setMenuOpen(false)}>Vertical ads ↗</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact ↗</a></div>}
      </nav>

      <section id="top" className="hero">
        <div className="hero-kicker"><span>CREATIVE MOTION FOR TECH</span><span>INDIA · WORKING WORLDWIDE</span></div>
        <h1>Make software<br />worth <em>watching.</em></h1>
        <div className="hero-bottom">
          <p>Product films, SaaS explainers and ad creatives that make technology easier to understand — and harder to scroll past.</p>
          <a className="hero-cta" href="#contact">LET’S MAKE SOMETHING <span>↗</span></a>
        </div>
        <div className="hero-art" aria-label="Abstract product interface motion design">
          <div className="art-label top">PURPLE ORANGE / MOTION STUDY 001</div>
          <div className="hero-ui-window">
            <div className="ui-top"><span /><span /><span /><b>PRODUCT / OVERVIEW</b></div>
            <div className="ui-sidebar"><i /><i /><i /><i /></div>
            <div className="ui-main"><div className="ui-eyebrow">YOUR PRODUCT, IN MOTION</div><div className="ui-headline">Less friction.<br /><em>More flow.</em></div><div className="ui-bars"><i /><i /><i /><i /><i /></div><div className="ui-card"><span>WORKFLOW STATUS</span><b>Automated <i>↗</i></b><small>Time saved this week <strong>+38%</strong></small></div></div>
          </div>
          <div className="hero-stamp">IDEA → STORY → MOTION</div>
          <div className="art-label bottom">CONCEPT VISUAL · NOT A CLIENT PROJECT</div>
        </div>
        <div className="scroll-note"><span className="scroll-line" /> FROM COMPLEX PRODUCT TO CLEAR STORY</div>
      </section>

      <section className="proof-strip">
        <p>MADE FOR TEAMS BUILDING</p>
        <div><span>AI PRODUCTS</span><i>✳</i><span>SAAS PLATFORMS</span><i>✳</i><span>DEVELOPER TOOLS</span><i>✳</i><span>EMERGING TECH</span></div>
      </section>

      <section id="services" className="services-section">
        <div className="section-head"><div><div className="section-index">01 / WHAT WE DO</div><h2>Good products<br />deserve <em>great stories.</em></h2></div><p className="small-note">CONCEPT · STORY · MOTION<br />FROM FIRST BRIEF TO FINAL EXPORT</p></div>
        <div className="service-grid">
          {services.map((service) => <article className="service-card" key={service.n}>
            <span className="service-number">{service.n}</span>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <a href="#contact">Explore service <span>↗</span></a>
          </article>)}
        </div>
      </section>

      <section id="work" className="work-section">
        <div className="section-head"><div><div className="section-index">02 / SELECTED WORK</div><h2>Made to make<br /><em>an impression.</em></h2></div><p className="small-note">PRODUCT FILMS · EXPLAINERS<br />SHORT-FORM CREATIVE</p></div>
        <div className="gallery-heading"><span>01 — PROMO & PRODUCT FILMS</span><span>LANDSCAPE / 16:9</span></div>
        <div className="film-grid">
          {promoFilms.map((film) => <article className="film-card" key={film.n}>
            <div className="film-frame film-frame-wide"><video src={film.src} controls playsInline preload="metadata" aria-label={film.title} /><span className="film-index">{film.n}</span></div>
            <div className="film-meta"><div><span className="work-type">{film.category}</span><h3>{film.title}</h3></div><span className="film-arrow">↗</span></div>
          </article>)}
        </div>
      </section>

      <section id="vertical-ads" className="ad-creatives-section">
        <div className="section-head"><div><div className="section-index">03 / VERTICAL SOCIAL ADS</div><h2>Built for the<br /><em>vertical screen.</em></h2></div><p className="small-note">9:16 SOCIAL VIDEO<br />REELS · SHORTS · PAID ADS</p></div>
        <div className="gallery-heading"><span>VERTICAL AD CREATIVES</span><span>9:16 / MOBILE FIRST</span></div>
        <div className="ad-grid">
          {adCreatives.map((film) => <article className="film-card ad-card" key={film.n}>
            <div className="film-frame film-frame-vertical"><video src={film.src} controls playsInline preload="metadata" aria-label={film.title} /><span className="film-index">{film.n}</span></div>
            <div className="film-meta"><div><span className="work-type">{film.category}</span><h3>{film.title}</h3></div><span className="film-arrow">↗</span></div>
          </article>)}
        </div>
        <p className="work-disclaimer">Vertical creatives designed for mobile-first campaigns. Video playback depends on the portfolio assets being uploaded to the site.</p>
      </section>

      <section className="booking-section">
        <div className="section-index">04 / LET’S WORK TOGETHER</div>
        <div className="booking-content"><div><h2>Have a product<br />worth <em>showing?</em></h2><p>Tell us what you’re building, what needs explaining, and where the video will live. We’ll help you find the right format.</p></div><a className="booking-link" href="mailto:hello@purpleorange.studio?subject=Project%20enquiry">START A PROJECT <span>↗</span></a></div>
        <div className="booking-bottom"><span>NEW PROJECTS · SELECTIVE INTAKE</span><span>RESPONSE VIA EMAIL</span></div>
      </section>

      <footer id="contact" className="footer">
        <div className="footer-top"><a className="wordmark" href="#top">purple<span className="dot">.</span>orange<span className="reg">®</span></a><span>MOTION FOR SOFTWARE & TECH.</span></div>
        <div className="footer-main"><div><p className="footer-kicker">YOUR NEXT VIDEO STARTS HERE</p><h2>Let’s make it<br /><em>click.</em></h2></div><div className="footer-contact"><a href="mailto:hello@purpleorange.studio">hello@purpleorange.studio <span>↗</span></a><a href="#services">Services</a><a href="#work">Selected work</a></div></div>
        <div className="footer-bottom"><span>© PURPLE ORANGE 2026</span><span>INDEPENDENT CREATIVE STUDIO · INDIA</span><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">INSTAGRAM ↗</a></div>
      </footer>
    </main>
  );
}
