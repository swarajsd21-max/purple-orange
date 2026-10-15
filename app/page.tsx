"use client";

import { useState } from "react";

const work = [
  { n: "01", type: "PRODUCT FILM / CONCEPT", name: "A different kind of intelligence", tag: "AI / SOFTWARE", visual: "orbit" },
  { n: "02", type: "MOTION SYSTEM / LAUNCH", name: "Made to move data", tag: "SAAS / DATA", visual: "grid" },
  { n: "03", type: "CAMPAIGN / VISUAL WORLD", name: "The future, in focus", tag: "CONSUMER TECH", visual: "lens" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main>
      <nav className="nav">
        <a className="wordmark" href="#" aria-label="Purple Orange home">purple<span className="dot">.</span>orange<span className="reg">®</span></a>
        <div className="nav-right">
          <span className="availability"><i /> AVAILABLE FOR SELECT PROJECTS</span>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? "CLOSE −" : "MENU +"}</button>
        </div>
        {menuOpen && <div className="menu-panel"><a href="#work" onClick={() => setMenuOpen(false)}>Selected work ↗</a><a href="#services" onClick={() => setMenuOpen(false)}>What we do ↗</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact ↗</a></div>}
      </nav>

      <section className="hero">
        <div className="hero-kicker"><span>INDEPENDENT CREATIVE STUDIO</span><span>INDIA · WORKING EVERYWHERE</span></div>
        <h1>We make<br />technology <em>feel.</em></h1>
        <div className="hero-bottom">
          <p>Motion, design and film for technology brands with something to say.</p>
          <a className="round-link" href="#work" aria-label="Explore selected work">↘</a>
        </div>
        <div className="hero-art" aria-label="Abstract orange and violet motion artwork">
          <div className="art-label top">PO—001 / MOTION STUDY</div>
          <div className="orb orb-one" /><div className="orb orb-two" /><div className="art-ring" />
          <div className="art-cross">✳</div>
          <div className="art-label bottom">FORM IN MOTION. IDEAS IN FOCUS.</div>
        </div>
        <div className="scroll-note"><span className="scroll-line" /> SCROLL TO EXPLORE</div>
      </section>

      <section className="intro">
        <div className="section-index">01 / THE STUDIO</div>
        <div className="intro-copy"><p className="eyebrow">CLARITY, WITH CHARACTER.</p><h2>Complex ideas.<br /><span>Clear impact.</span></h2><p className="body-copy">We turn products, platforms and big ideas into visual stories people understand — and remember. Thoughtful creative, precise motion, no noise.</p></div>
      </section>

      <section id="work" className="work-section">
        <div className="section-head"><div><div className="section-index">02 / SELECTED WORK</div><h2>Made to <em>move.</em></h2></div><span className="small-note">CONCEPTS & CREATIVE STUDIES<br />MORE WORK IN PROGRESS</span></div>
        <div className="work-list">
          {work.map((item) => <article className="work-item" key={item.n}>
            <div className={`work-visual ${item.visual}`}>
              {item.visual === "orbit" && <><div className="orbit-ring ring-a" /><div className="orbit-ring ring-b" /><div className="orbit-core">AI<span>↗</span></div><div className="micro-label">THINK BEYOND</div></>}
              {item.visual === "grid" && <><div className="data-block block-a" /><div className="data-block block-b" /><div className="data-block block-c" /><div className="data-line" /><div className="data-caption">SIGNAL / 001</div></>}
              {item.visual === "lens" && <><div className="lens-shape"><div /></div><div className="lens-type">SEE<br />WHAT'S<br />NEXT.</div></>}
              <span className="visual-number">{item.n}</span>
            </div>
            <div className="work-meta"><div><span className="work-type">{item.type}</span><h3>{item.name}</h3></div><span className="work-tag">{item.tag}</span><span className="work-arrow">↗</span></div>
          </article>)}
        </div>
        <p className="work-disclaimer">Selected creative explorations. Built around the way tomorrow could look.</p>
      </section>

      <section id="services" className="services">
        <div className="section-index">03 / WHAT WE DO</div>
        <div className="services-content"><h2>Good ideas<br />deserve <em>great</em><br />execution.</h2>
          <div className="service-list">
            <div><span>01</span><p>Tech motion graphics</p><b>↗</b></div>
            <div><span>02</span><p>Product & launch films</p><b>↗</b></div>
            <div><span>03</span><p>Brand films & campaigns</p><b>↗</b></div>
            <div><span>04</span><p>Visual systems & explainers</p><b>↗</b></div>
          </div>
        </div>
      </section>

      <section className="process">
        <div className="section-index">04 / HOW WE WORK</div>
        <div className="process-row"><h2>Small team.<br /><em>Big picture.</em></h2><p>From the first rough thought to the final frame, every decision has a reason. We keep the process collaborative, considered and focused on what matters.</p></div>
        <div className="process-steps"><div><span>01</span><h3>Find the signal</h3><p>Understand the product, audience and one thing worth remembering.</p></div><div><span>02</span><h3>Shape the story</h3><p>Build the concept, visual language and rhythm before the pixels.</p></div><div><span>03</span><h3>Make it move</h3><p>Craft, refine and deliver work designed to make an impression.</p></div></div>
      </section>

      <footer id="contact" className="footer">
        <div className="section-index">05 / YOUR MOVE</div>
        <div className="footer-main"><h2>Have something<br />good in <em>mind?</em></h2><a className="contact-link" href="mailto:hello@purpleorange.studio">LET'S MAKE IT REAL <span>↗</span></a></div>
        <div className="footer-bottom"><a className="wordmark" href="#">purple<span className="dot">.</span>orange<span className="reg">®</span></a><span>INDEPENDENT BY DESIGN.</span><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">INSTAGRAM ↗</a><span>© PURPLE ORANGE 2026</span></div>
      </footer>
    </main>
  );
}
