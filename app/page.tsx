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

const offers = [
  { n: "01", name: "Product launch film", length: "30–45 seconds", desc: "Introduce a new product, feature or funding milestone with a tight story and a high-impact motion system.", includes: ["Creative concept + script", "Storyboard and visual direction", "UI animation + motion graphics", "Sound design and final exports"], fit: "For launches, announcements and landing pages" },
  { n: "02", name: "Product demo video", length: "45–75 seconds", desc: "Show how your software works without making people sit through a long screen recording.", includes: ["Product narrative and script", "Interface animation", "Feature-to-benefit storytelling", "Website and sales-ready versions"], fit: "For SaaS homepages, sales teams and onboarding" },
  { n: "03", name: "Paid social ad creatives", length: "15–30 seconds", desc: "Turn one product benefit into a set of sharp, platform-ready ads made to earn attention quickly.", includes: ["Hook and angle development", "Kinetic type + product visuals", "9:16, 1:1 and 16:9 exports", "Variant-ready creative direction"], fit: "For paid social, retargeting and feature campaigns" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const faqs = [
    { q: "What kind of companies do you work with?", a: "We focus on SaaS, AI, developer tools and technology businesses that need to explain a product, launch a feature or make paid creative more engaging." },
    { q: "Do you need a finished script or storyboard from us?", a: "No. We can take the project from brief to concept, script, storyboard, animation and final delivery. If you already have a script or design system, we can work from that too." },
    { q: "Can you animate our actual product UI?", a: "Yes. We can build motion around supplied screens, product recordings or Figma files, subject to the access and assets available for the project." },
    { q: "How do projects start?", a: "Send a short note about your product, what the video needs to achieve and your target launch date. We’ll reply with the best-fit format and next steps." },
  ];

  return (
    <main>
      <nav className="nav">
        <a className="wordmark" href="#" aria-label="Purple Orange home">purple<span className="dot">.</span>orange<span className="reg">®</span></a>
        <div className="nav-right">
          <span className="availability"><i /> TAKING ON SELECT PROJECTS</span>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? "CLOSE −" : "MENU +"}</button>
        </div>
        {menuOpen && <div className="menu-panel"><a href="#work" onClick={() => setMenuOpen(false)}>Promo & product films ↗</a><a href="#ad-creatives" onClick={() => setMenuOpen(false)}>Ad creatives ↗</a><a href="#services" onClick={() => setMenuOpen(false)}>Services ↗</a><a href="#offers" onClick={() => setMenuOpen(false)}>Video formats ↗</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact ↗</a></div>}
      </nav>

      <section className="hero">
        <div className="hero-kicker"><span>MOTION DESIGN FOR SOFTWARE</span><span>INDIA · WORKING WORLDWIDE</span></div>
        <h1>Make your<br />product <em>move.</em></h1>
        <div className="hero-bottom">
          <p>Promo films, SaaS explainers and scroll-stopping ad creatives for tech brands.</p>
          <a className="hero-cta" href="#contact">TELL US WHAT YOU’RE BUILDING <span>↗</span></a>
        </div>
        <div className="hero-art" aria-label="Abstract motion design study showing animated product interface elements">
          <div className="art-label top">PURPLE ORANGE / MOTION SYSTEM 001</div>
          <div className="hero-ui-window">
            <div className="ui-top"><span /><span /><span /><b>PRODUCT / OVERVIEW</b></div>
            <div className="ui-sidebar"><i /><i /><i /><i /><i /></div>
            <div className="ui-main"><div className="ui-eyebrow">YOUR PRODUCT, IN MOTION</div><div className="ui-headline">Less friction.<br /><em>More flow.</em></div><div className="ui-bars"><i /><i /><i /><i /><i /></div><div className="ui-card"><span>WORKFLOW STATUS</span><b>Automated <i>↗</i></b><small>Time saved this week <strong>+38%</strong></small></div></div>
          </div>
          <div className="hero-stamp">IDEA → STORY → MOTION</div>
          <div className="art-label bottom">CONCEPT VISUAL · NOT A CLIENT PROJECT</div>
        </div>
        <div className="scroll-note"><span className="scroll-line" /> FROM COMPLEX PRODUCT TO CLEAR STORY</div>
      </section>

      <section className="proof-strip">
        <p>BUILT FOR TEAMS SHIPPING</p>
        <div><span>AI PRODUCTS</span><i>✳</i><span>SAAS PLATFORMS</span><i>✳</i><span>DEVELOPER TOOLS</span><i>✳</i><span>EMERGING TECH</span></div>
      </section>

      <section id="work" className="work-section">
        <div className="section-head"><div><div className="section-index">01 / PROMO & PRODUCT FILMS</div><h2>Make the product<br /><em>impossible to ignore.</em></h2></div><span className="small-note">PRODUCT LAUNCHES · SAAS EXPLAINERS<br />MOTION-LED PROMOS</span></div>
        <div className="film-grid">
          {promoFilms.map((film) => <article className="film-card film-card-wide" key={film.n}>
            <div className="film-frame film-frame-wide">
              <video src={film.src} controls playsInline preload="metadata" aria-label={film.title} />
              <span className="film-index">{film.n} / PURPLE ORANGE</span>
            </div>
            <div className="film-meta"><div><span className="work-type">{film.category}</span><h3>{film.title}</h3></div><span className="film-arrow">↗</span></div>
          </article>)}
        </div>
        <p className="work-disclaimer">Promo and product films created to make complex products easier to understand and remember.</p>
      </section>

      <section id="ad-creatives" className="ad-creatives-section">
        <div className="section-head"><div><div className="section-index">02 / AD CREATIVES</div><h2>Built for the<br /><em>scroll.</em></h2></div><span className="small-note">UGC-STYLE ADS · SHORT-FORM<br />VERTICAL CREATIVE</span></div>
        <div className="ad-grid">
          {adCreatives.map((film) => <article className="film-card ad-card" key={film.n}>
            <div className="film-frame film-frame-vertical">
              <video src={film.src} controls playsInline preload="metadata" aria-label={film.title} />
              <span className="film-index">{film.n} / PURPLE ORANGE</span>
            </div>
            <div className="film-meta"><div><span className="work-type">{film.category}</span><h3>{film.title}</h3></div><span className="film-arrow">↗</span></div>
          </article>)}
        </div>
        <p className="work-disclaimer">Short-form creative made for social feeds, paid campaigns and product discovery.</p>
      </section>

      <section id="services" className="services">
        <div className="section-index">02 / WHAT WE MAKE</div>
        <div className="services-content"><div><h2>Made for<br />the way tech<br /><em>gets sold.</em></h2><p className="services-lede">Not motion for motion’s sake. Every video has a job: explain the product, make a launch land, or earn the next second of attention.</p></div>
          <div className="service-list">
            <div><span>01</span><p><strong>Product launch videos</strong><small>Feature launches, new products and announcements.</small></p><b>↗</b></div>
            <div><span>02</span><p><strong>SaaS & AI demos</strong><small>UI animation that makes complex workflows easier to get.</small></p><b>↗</b></div>
            <div><span>03</span><p><strong>Paid social creatives</strong><small>Short-form ads with a clear hook, benefit and CTA.</small></p><b>↗</b></div>
            <div><span>04</span><p><strong>Explainer motion graphics</strong><small>Turn technical features into a story people can follow.</small></p><b>↗</b></div>
          </div>
        </div>
      </section>

      <section id="offers" className="offers">
        <div className="offers-head"><div><div className="section-index">03 / VIDEO FORMATS</div><h2>What does your<br />product <em>need?</em></h2></div><p>Choose the job first. We’ll shape the length, story and visual treatment around it.</p></div>
        <div className="offer-grid">{offers.map((offer) => <article className="offer-card" key={offer.n}><div className="offer-top"><span>{offer.n} / FORMAT</span><span>{offer.length}</span></div><h3>{offer.name}</h3><p className="offer-desc">{offer.desc}</p><div className="offer-includes"><b>WHAT’S INCLUDED</b>{offer.includes.map((item) => <span key={item}>＋ {item}</span>)}</div><p className="offer-fit">{offer.fit}</p><a href={`mailto:hello@purpleorange.studio?subject=${encodeURIComponent("Enquiry: " + offer.name)}`}>DISCUSS THIS VIDEO <span>↗</span></a></article>)}</div>
      </section>

      <section className="process">
        <div className="section-index">05 / HOW IT WORKS</div>
        <div className="process-row"><h2>Clear process.<br /><em>Careful craft.</em></h2><p>You bring the product and the goal. We turn it into a focused story, then build the motion around what your audience needs to understand.</p></div>
        <div className="process-steps"><div><span>01</span><h3>Brief & strategy</h3><p>We learn the product, audience, key benefit and where the video will be used.</p></div><div><span>02</span><h3>Script & storyboard</h3><p>We agree on the story and visual direction before animation begins.</p></div><div><span>03</span><h3>Animate & deliver</h3><p>We craft the motion, sound and final exports for your chosen platforms.</p></div></div>
      </section>

      <section className="faq-section">
        <div className="section-index">06 / GOOD QUESTIONS</div>
        <div className="faq-layout"><h2>Before we<br /><em>get moving.</em></h2><div className="faq-list">{faqs.map((faq, i) => <div className="faq-item" key={faq.q}><button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}><span>{faq.q}</span><b>{openFaq === i ? "−" : "+"}</b></button>{openFaq === i && <p>{faq.a}</p>}</div>)}</div></div>
      </section>

      <footer id="contact" className="footer">
        <div className="section-index">07 / START A PROJECT</div>
        <div className="footer-main"><div><p className="footer-kicker">HAVE A PRODUCT WORTH SHOWING?</p><h2>Let’s make it<br /><em>click.</em></h2><p className="footer-copy">Tell us what you’re launching, what needs explaining, or what your next ad needs to do.</p></div><a className="contact-link" href="mailto:hello@purpleorange.studio?subject=Project%20enquiry">START A PROJECT <span>↗</span></a></div>
        <div className="footer-bottom"><a className="wordmark" href="#">purple<span className="dot">.</span>orange<span className="reg">®</span></a><span>MOTION FOR SOFTWARE & TECH.</span><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">INSTAGRAM ↗</a><span>© PURPLE ORANGE 2026</span></div>
      </footer>
    </main>
  );
}
