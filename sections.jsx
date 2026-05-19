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
function Hero() {
  return (
    <header id="top" className="hero page">
      <div className="hero-body">
        <div className="hero-text">
          <h1 className="hero-title">
            Communications strategist building brands <em>rooted in mission.</em>
          </h1>
          <p className="hero-meta">
            15 years. Asia + US.<br />
            Currently <strong>Director of Marketing</strong> at the Chicago Public Library Foundation.
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
function About() {
  return (
    <section id="about" className="about page">
      <div className="about-head">
        <Reveal as="h3" className="t-h3" style={{ margin: 0 }}>About</Reveal>
        <Reveal as="span" className="mono-cap" delay={120}>01 / Rica Bouso</Reveal>
      </div>
      <div className="about-grid">
        <div className="about-body">
          <Reveal as="p">
            For 15 years I have translated organizational purpose into measurable growth: at one of the largest library systems in the country, at a global business services company supporting 15,000 employees, and at agencies serving multi-industry clients.
          </Reveal>

          <Reveal as="blockquote" className="about-quote" delay={80}>
            I treat communications as <em>infrastructure</em>.
          </Reveal>

          <Reveal as="p" delay={60}>
            Build the system, ground it in mission, and the metrics follow. I work the full stack of integrated marketing communications: brand strategy, audience development, content systems, digital marketing, PR, crisis response, and stakeholder management.
          </Reveal>
          <Reveal as="p" delay={120}>
            I am equally comfortable in the strategy room and the content calendar. Big ideas matter; so does the email that ships on Tuesday.
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
const STATS = [
{ value: 22, suffix: "M+", prefix: "", decimals: 0, accent: true, label: "Views / Live from the Library" },
{ value: 800, suffix: "M", prefix: "", decimals: 0, accent: false, label: "PR impressions / 37 countries" },
{ value: 117, suffix: "%", prefix: "", decimals: 0, accent: false, label: "Lift in social engagement" },
{ value: 39, suffix: "%", prefix: "", decimals: 0, accent: false, label: "Email open rate / industry 21%" },
{ value: 2, suffix: "×", prefix: "", decimals: 0, accent: false, label: "Website traffic" },
{ value: 200, suffix: "+", prefix: "", decimals: 0, accent: false, label: "Qualified leads / single campaign" },
{ value: 81, suffix: "", prefix: "", decimals: 0, accent: false, label: "Branches / 77 neighborhoods" },
{ value: 2, suffix: "M", prefix: "$", decimals: 0, accent: false, label: "Event budget / 15,000-person programs" }];


function Stats({ duration = 1200 }) {
  return (
    <section className="stats page">
      <div className="stats-head">
        <Reveal as="div">
          <span className="mono-cap" style={{ color: "var(--terracotta)" }}>Results / 2010 to present</span>
        </Reveal>
        <Reveal as="h2" delay={80}>By the numbers.</Reveal>
      </div>

      <div className="stats-grid">
        {STATS.map((s, i) =>
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
const WORK = [
{
  year: "2020 — 2024",
  org: "Chicago Public Library Foundation",
  title: "Live from the Library",
  desc: "Led marketing for a flagship cultural program that reached 22M+ viewers and generated 800M PR impressions across 37 countries.",
  metric: "22M+",
  metricNote: "Viewers"
},
{
  year: "2022",
  org: "Chicago Public Library Foundation",
  title: "Donor Journey Campaign",
  desc: "Designed and shipped an end-to-end nurture pipeline that converted general audiences into 200+ high-quality leads.",
  metric: "200+",
  metricNote: "Qualified Leads"
},
{
  year: "2021",
  org: "Chicago Public Library Foundation",
  title: "Brand System Rebuild",
  desc: "Authored the brand voice and guide adopted across internal and external channels. Doubled site traffic. Lifted social engagement 117%. Pushed email open rates to 39%.",
  metric: "117%",
  metricNote: "Social Lift"
},
{
  year: "2020",
  org: "Chicago Public Library Foundation",
  title: "Live From Crisis: COVID-19 Communications",
  desc: "Led crisis communications across 81 library branches during the pandemic, holding brand coherence while the operating reality shifted weekly.",
  metric: "81",
  metricNote: "Branches Coordinated"
},
{
  year: "2012 — 2014",
  org: "Sykes Asia",
  title: "Employer Brand Reset",
  desc: "Built employee and recruitment branding initiatives that improved retention by 15% and lifted internal engagement by 25%.",
  metric: "+15%",
  metricNote: "Retention"
},
{
  year: "2014 — 2018",
  org: "Next Collision",
  title: "Client Growth Engine",
  desc: "Directed multi-client communication campaigns that lifted client site traffic from 50% to 70%.",
  metric: "50 → 70",
  metricNote: "Client Traffic, %"
}];


function SelectedWork() {
  return (
    <section id="work" className="work page">
      <Reveal as="div">
        <span className="mono-cap" style={{ color: "var(--terracotta)", display: "block", marginBottom: 24 }}>
          02 / Selected Work
        </span>
        <h2 className="work-title-h">Selected work.</h2>
      </Reveal>

      <div role="list">
        {WORK.map((w, i) =>
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
const EXPERIENCE = [
{ years: "Jan 2021 — Present", role: "Director of Marketing", org: "Chicago Public Library Foundation", now: true },
{ years: "Aug 2018 — Dec 2020", role: "Marketing Manager", org: "Chicago Public Library Foundation" },
{ years: "Mar 2014 — Aug 2018", role: "Consultant", org: "Next Collision" },
{ years: "Oct 2010 — Mar 2014", role: "Communication Specialist", org: "Sykes Asia" }];


function Experience() {
  return (
    <section id="experience" className="exp page">
      <Reveal as="div">
        <span className="mono-cap" style={{ color: "var(--terracotta)", display: "block", marginBottom: 24 }}>
          03 / Experience
        </span>
        <h2 className="exp-title">Experience.</h2>
      </Reveal>

      <div className="timeline">
        {EXPERIENCE.map((e, i) =>
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
const CAPS = [
{ h: "Strategy", items: [
  "Brand messaging",
  "Communications strategy",
  "Audience development",
  "Strategic campaign development",
  "Stakeholder management"]
},
{ h: "Execution", items: [
  "Copywriting and editing",
  "Digital marketing",
  "Social media strategy",
  "Content systems",
  "Website management"]
},
{ h: "Operations", items: [
  "Project management",
  "Crisis management",
  "Public relations",
  "Board committee management"]
},
{ h: "Tools", items: [
  "Blackbaud",
  "HubSpot",
  "MailChimp",
  "WordPress"]
}];


function Capabilities() {
  return (
    <section className="cap page">
      <Reveal as="div">
        <span className="mono-cap" style={{ color: "var(--terracotta)", display: "block", marginBottom: 24 }}>
          04 / Capabilities
        </span>
        <h2 className="cap-title">Capabilities.</h2>
      </Reveal>

      <div className="cap-grid">
        {CAPS.map((c, ci) =>
        <Reveal key={c.h} as="div" className="cap-col" delay={ci * 80}>
            <h3>{c.h}</h3>
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
function EduAff() {
  return (
    <section className="eduaff page">
      <div className="eduaff-col">
        <Reveal as="h3">Education</Reveal>
        <Reveal as="div" delay={60}>
          <h4 className="edu-name">University of the Philippines</h4>
          <p className="edu-meta">Magna Cum Laude, 2007</p>
        </Reveal>
      </div>
      <div className="eduaff-col">
        <Reveal as="h3">Affiliations</Reveal>
        <Reveal as="ul" className="aff-list" delay={60}>
          <li>Chicago Women in Philanthropy &mdash; Women Leadership Mentoring Program</li>
          <li>Young Catholic Professionals</li>
        </Reveal>
      </div>
    </section>);

}

/* --------------------------------------------------------------------------
   CONTACT / FOOTER
   -------------------------------------------------------------------------- */
function Contact() {
  return (
    <section id="contact" className="contact page">
      <Reveal as="h2" className="contact-title">
        Tell me your <em style={{ fontStyle: "italic", color: "var(--terracotta)" }}>story.</em>
      </Reveal>
      <Reveal as="p" className="contact-sub" delay={80}>
        I read every email. Most of the good ones turn into work.
      </Reveal>

      <Reveal as="div" className="contact-cta-wrap" delay={120}>
        <a
          href="mailto:ricagestrada@gmail.com?subject=Hello%20Rica"
          className="cta"
          aria-label="Write to Rica at ricagestrada@gmail.com">
          
          <span className="cta-ticker" aria-hidden="true">
            <span>Open inbox</span>
            <span className="cta-dot"></span>
            <span>Replies within 48 hours</span>
            <span className="cta-dot"></span>
            <span>Chicago, IL</span>
          </span>

          <span className="cta-body">
            <span className="cta-line cta-line-primary">
              <span className="cta-stack">
                <span className="cta-stack-a">Write to Rica</span>
                <span className="cta-stack-b">Say hello</span>
              </span>
            </span>
            <span className="cta-mail">
              ricagestrada<span className="cta-at">@</span>gmail.com
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

        <a href="tel:+13129785027" className="cta-secondary">
          <span className="ck">Phone</span>
          <span className="cta-secondary-num">(312) 978&middot;5027</span>
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
        <span className="foot-mark">Rica Bouso</span>
        <span className="foot-meta">DESIGNED & BUILT IN CHICAGO  /  2026</span>
      </footer>
    </section>);

}

Object.assign(window, {
  Nav, Hero, About, Stats, SelectedWork, Experience, Capabilities, EduAff, Contact
});