/* global React, Reveal, CountUp */
const { useEffect } = React;

/* --------------------------------------------------------------------------
   NAV — Work / About / Experience / Contact
   -------------------------------------------------------------------------- */
function Nav() {
  const items = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }];

  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`nav${scrolled ? " is-scrolled" : ""}`} aria-label="Primary">
      <div className="nav-inner">
        <a href="#top" className="nav-mark" aria-label="Rica Bouso, home" style={{ fontFamily: "Fraunces", fontSize: "18px" }}>
          Rica Bouso
        </a>
        <div className="nav-links">
          {items.map((it) =>
          <a key={it.label} href={it.href} className="nav-link">{it.label}</a>
          )}
        </div>
      </div>
    </nav>);

}

/* --------------------------------------------------------------------------
   HERO
   -------------------------------------------------------------------------- */
function Hero({ content }) {
  const { hero } = content;
  /* Split title so the final phrase renders in italic accent */
  const titleBase = hero.title.replace(/rooted in mission\.?$/, '');
  const metaRole = hero.metaLine2.replace(/^Currently /, '');
  return (
    <header id="top" className="hero page">
      <div className="hero-body">
        <div className="hero-text">
          <h1 className="hero-title">
            {titleBase}<em>rooted in mission.</em>
          </h1>
          <p className="hero-meta">
            {hero.metaLine1}<br />
            Currently <strong>{metaRole}</strong>
          </p>
        </div>
        <figure className="hero-portrait">
          <image-slot
            id="rica-portrait"
            shape="rect"
            placeholder="Drop a portrait of Rica"
            style={{ width: "100%", display: "block" }}>
          </image-slot>
          <figcaption className="photo-cap">
            <span className="ck">RICA BOUSO</span>
            <span>CHICAGO</span>
          </figcaption>
        </figure>
      </div>
    </header>);
}

/* --------------------------------------------------------------------------
   ABOUT — 4/7 asymmetric with pull quote
   -------------------------------------------------------------------------- */
function About({ content }) {
  const { about } = content;
  const quoteBase = about.pullQuote.replace(/infrastructure\.?$/, '');
  return (
    <section id="about" className="about page">
      <div className="about-head">
        <Reveal as="h3" className="t-h3" style={{ margin: 0 }}>About</Reveal>
        <Reveal as="span" className="mono-cap" delay={120}>01 / Rica Bouso</Reveal>
      </div>
      <div className="about-grid">
        <div className="about-body">
          <Reveal as="p">
            {about.paragraph1}
          </Reveal>

          <Reveal as="blockquote" className="about-quote" delay={80}>
            {quoteBase}<em>infrastructure</em>.
          </Reveal>

          <Reveal as="p" delay={60}>
            {about.paragraph2}
          </Reveal>
          <Reveal as="p" delay={120}>
            {about.paragraph3}
          </Reveal>
        </div>

        <Reveal as="figure" className="about-photo" delay={180}>
          <image-slot
            id="rica-working"
            shape="rect"
            placeholder="Drop an environment shot — desk, office, on-location"
            style={{ width: "100%", display: "block" }}>
          </image-slot>
          <figcaption className="photo-cap">
            <span className="ck">Plate 02</span>
            <span>Working. Loop, Chicago.</span>
          </figcaption>
        </Reveal>
      </div>
    </section>);

}

/* --------------------------------------------------------------------------
   STATS — 4-column (2×4) grid; one accented
   -------------------------------------------------------------------------- */
function Stats({ content, duration = 1200 }) {
  const stats = content.stats;
  return (
    <section className="stats page">
      <div className="stats-head">
        <Reveal as="div">
          <span className="mono-cap" style={{ color: "var(--terracotta)" }}>Results / 2010 to present</span>
        </Reveal>
        <Reveal as="h2" delay={80}>By the numbers.</Reveal>
      </div>

      <div className="stats-grid">
        {stats.map((s, i) =>
        <Reveal key={i} className="stat" delay={i * 60}>
            <CountUp
            value={s.value}
            prefix={s.prefix}
            suffix={s.suffix}
            decimals={s.decimals}
            accent={s.accent}
            duration={duration} />

            <span className="stat-label">{s.label}</span>
          </Reveal>
        )}
      </div>
    </section>);

}

/* --------------------------------------------------------------------------
   SELECTED WORK
   -------------------------------------------------------------------------- */
function SelectedWork({ content }) {
  const work = content.work;
  return (
    <section id="work" className="work page">
      <Reveal as="div">
        <span className="mono-cap" style={{ color: "var(--terracotta)", display: "block", marginBottom: 24 }}>
          02 / Selected Work
        </span>
        <h2 className="work-title-h">Selected work.</h2>
      </Reveal>

      <div role="list">
        {work.map((w, i) =>
        <Reveal key={i} as="article" className="work-row" delay={i * 40} role="listitem">
            <div className="work-meta">
              <b>{w.year}</b>
              {w.org}
            </div>
            <div>
              <h3 className="work-title">{w.title}</h3>
              <p className="work-desc">{w.desc}</p>
            </div>
            <div className="work-metric">
              {w.metric}
              <small>{w.metricNote}</small>
            </div>
          </Reveal>
        )}
      </div>
    </section>);

}

/* --------------------------------------------------------------------------
   EXPERIENCE — vertical timeline
   -------------------------------------------------------------------------- */
function Experience({ content }) {
  const experience = content.experience;
  return (
    <section id="experience" className="exp page">
      <Reveal as="div">
        <span className="mono-cap" style={{ color: "var(--terracotta)", display: "block", marginBottom: 24 }}>
          03 / Experience
        </span>
        <h2 className="exp-title">Experience.</h2>
      </Reveal>

      <div className="timeline">
        {experience.map((e, i) =>
        <Reveal key={i} as="article" className={`exp-row${e.now ? " is-now" : ""}`} delay={i * 60}>
            <div className="exp-year">
              <span>{e.years}</span>
              {e.now ? <span className="exp-now">Now</span> : null}
            </div>
            <div>
              <h3 className="exp-role">{e.role}</h3>
              <p className="exp-org">{e.org}</p>
            </div>
          </Reveal>
        )}
      </div>
    </section>);

}

/* --------------------------------------------------------------------------
   CAPABILITIES — 4-column indexed lists
   -------------------------------------------------------------------------- */
function Capabilities({ content }) {
  const caps = content.capabilities;
  return (
    <section className="cap page">
      <Reveal as="div">
        <span className="mono-cap" style={{ color: "var(--terracotta)", display: "block", marginBottom: 24 }}>
          04 / Capabilities
        </span>
        <h2 className="cap-title">Capabilities.</h2>
      </Reveal>

      <div className="cap-grid">
        {caps.map((c, ci) =>
        <Reveal key={c.heading} as="div" className="cap-col" delay={ci * 80}>
            <h3>{c.heading}</h3>
            <ul className="cap-list">
              {c.items.map((it, i) =>
            <li key={it} className="cap-item">
                  <span>{it}</span>
                  <span className="cap-item-idx">{String(i + 1).padStart(2, "0")}</span>
                </li>
            )}
            </ul>
          </Reveal>
        )}
      </div>
    </section>);

}

/* --------------------------------------------------------------------------
   EDUCATION + AFFILIATIONS
   -------------------------------------------------------------------------- */
function EduAff({ content }) {
  const { education, affiliations } = content;
  return (
    <section className="eduaff page">
      <div className="eduaff-col">
        <Reveal as="h3">Education</Reveal>
        <Reveal as="div" delay={60}>
          <h4 className="edu-name">{education.school}</h4>
          <p className="edu-meta">{education.credential}</p>
        </Reveal>
      </div>
      <div className="eduaff-col">
        <Reveal as="h3">Affiliations</Reveal>
        <Reveal as="ul" className="aff-list" delay={60}>
          {affiliations.map((a, i) =>
            <li key={i}>{a}</li>
          )}
        </Reveal>
      </div>
    </section>);

}

/* --------------------------------------------------------------------------
   CONTACT / FOOTER
   -------------------------------------------------------------------------- */
function Contact({ content }) {
  const { contact, footer } = content;
  const emailHref = `mailto:${contact.email}?subject=Hello%20Rica`;
  const phoneHref = `tel:${contact.phoneLink}`;
  const titleBase = contact.title.replace(/story\.?$/, '');
  const [emailUser, emailDomain] = contact.email.split('@');
  return (
    <section id="contact" className="contact page">
      <Reveal as="h2" className="contact-title">
        {titleBase}<em style={{ fontStyle: "italic", color: "var(--terracotta)" }}>story.</em>
      </Reveal>
      <Reveal as="p" className="contact-sub" delay={80}>
        {contact.subtitle}
      </Reveal>

      <Reveal as="div" className="contact-cta-wrap" delay={120}>
        <a
          href={emailHref}
          className="cta"
          aria-label={`Write to Rica at ${contact.email}`}>

          <span className="cta-ticker" aria-hidden="true">
            <span>Open inbox</span>
            <span className="cta-dot"></span>
            <span>Replies within 48 hours</span>
            <span className="cta-dot"></span>
            <span>{contact.location}</span>
          </span>

          <span className="cta-body">
            <span className="cta-line cta-line-primary">
              <span className="cta-stack">
                <span className="cta-stack-a">Write to Rica</span>
                <span className="cta-stack-b">Say hello</span>
              </span>
            </span>
            <span className="cta-mail">
              {emailUser}<span className="cta-at">@</span>{emailDomain}
            </span>
          </span>

          <span className="cta-arrow" aria-hidden="true">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <path
                d="M8 32 H54 M38 16 L54 32 L38 48"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="square"
                strokeLinejoin="miter" />
            </svg>
          </span>

          <span className="cta-fill" aria-hidden="true"></span>
        </a>

        <a href={phoneHref} className="cta-secondary">
          <span className="ck">Phone</span>
          <span className="cta-secondary-num">{contact.phone}</span>
          <span className="cta-secondary-meta">Voice, no texts</span>
        </a>
      </Reveal>

      <Reveal as="figure" className="signoff-photo" delay={160}>
        <image-slot
          id="rica-signoff"
          shape="rect"
          placeholder="Drop a candid — the sign-off"
          style={{ width: "100%", display: "block" }}>
        </image-slot>
        <figcaption className="photo-cap">
          <span className="ck">Plate 03</span>
          <span>Sign-off. Photograph by ___ .</span>
        </figcaption>
      </Reveal>

      <footer className="foot">
        <span className="foot-mark">{footer.mark}</span>
        <span className="foot-meta">{footer.meta}</span>
      </footer>
    </section>);

}

Object.assign(window, {
  Nav, Hero, About, Stats, SelectedWork, Experience, Capabilities, EduAff, Contact
});
