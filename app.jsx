/* global React, ReactDOM, Nav, Hero, About, Stats, SelectedWork, Experience, Capabilities, EduAff, Contact,
   useTweaks, useContent, TweaksPanel, TweakSection, TweakColor, TweakSlider, TweakRadio */
const { useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#B8442A",
  "paper": "#F8F5EE",
  "statSpeed": 1200
}/*EDITMODE-END*/;

/* Accent options — never violet/blue/emerald. Editorial palette only. */
const ACCENT_OPTIONS = [
  "#B8442A", /* terracotta — system default */
  "#6E1A14", /* oxblood */
  "#9F6F1D", /* ochre */
  "#1E3C2A"  /* forest */
];

/* Paper background options — warm neutrals only, plus one deep-navy "inverted" mode. */
const PAPER_OPTIONS = [
  "#F8F5EE", /* paper (default) */
  "#EFE9DA", /* bone */
  "#FFFFFF", /* true white */
  "#101820"  /* deep navy — inverted */
];

/* When paper goes dark, flip ink + stones; otherwise keep system tokens. */
function applyTheme({ accent, paper }) {
  const root = document.documentElement;
  root.style.setProperty("--terracotta", accent);
  root.style.setProperty("--terracotta-deep", shade(accent, -0.15));
  root.style.setProperty("--terracotta-tint", tint(accent, 0.85));
  root.style.setProperty("--fg-accent", accent);
  root.style.setProperty("--link", accent);
  root.style.setProperty("--link-hover", shade(accent, -0.15));
  root.style.setProperty("--paper", paper);
  root.style.setProperty("--bg-page", paper);

  const dark = isDark(paper);
  if (dark) {
    root.style.setProperty("--ink", "#F2EBDF");
    root.style.setProperty("--ink-soft", "#D8D0C0");
    root.style.setProperty("--stone", "#9C968A");
    root.style.setProperty("--stone-light", "#6E6A60");
    root.style.setProperty("--paper-deep", shade(paper, 0.06));
    root.style.setProperty("--rule", "#2E3640");
    root.style.setProperty("--rule-soft", "#222931");
    root.style.setProperty("--fg1", "#F2EBDF");
    root.style.setProperty("--fg2", "#D8D0C0");
    root.style.setProperty("--fg3", "#9C968A");
    root.style.setProperty("--fg-on-ink", paper);
  } else {
    /* restore canonical values */
    root.style.setProperty("--ink", "#1A1814");
    root.style.setProperty("--ink-soft", "#2D2924");
    root.style.setProperty("--stone", "#6B6660");
    root.style.setProperty("--stone-light", "#A8A39B");
    root.style.setProperty("--paper-deep", "#EFEAE0");
    root.style.setProperty("--rule", "#D9D2C5");
    root.style.setProperty("--rule-soft", "#E8E2D5");
    root.style.setProperty("--fg1", "#1A1814");
    root.style.setProperty("--fg2", "#2D2924");
    root.style.setProperty("--fg3", "#6B6660");
    root.style.setProperty("--fg-on-ink", paper);
  }
}

function hexToRgb(h) {
  const m = h.replace("#", "");
  const v = m.length === 3 ? m.split("").map(c => c + c).join("") : m;
  return [parseInt(v.slice(0,2),16), parseInt(v.slice(2,4),16), parseInt(v.slice(4,6),16)];
}
function rgbToHex(r,g,b){
  return "#" + [r,g,b].map(x => Math.max(0, Math.min(255, Math.round(x))).toString(16).padStart(2,"0")).join("");
}
function shade(hex, amt) {
  /* amt > 0 lightens, amt < 0 darkens */
  const [r,g,b] = hexToRgb(hex);
  if (amt >= 0) return rgbToHex(r + (255-r)*amt, g + (255-g)*amt, b + (255-b)*amt);
  const k = 1 + amt;
  return rgbToHex(r*k, g*k, b*k);
}
function tint(hex, mix) {
  /* mix toward paper */
  const [r,g,b] = hexToRgb(hex);
  const [pr,pg,pb] = hexToRgb("#F8F5EE");
  return rgbToHex(r + (pr-r)*mix, g + (pg-g)*mix, b + (pb-b)*mix);
}
function isDark(hex) {
  const [r,g,b] = hexToRgb(hex);
  const lum = (0.299*r + 0.587*g + 0.114*b) / 255;
  return lum < 0.4;
}

function App() {
  const content = useContent();
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    applyTheme({ accent: t.accent, paper: t.paper });
  }, [t.accent, t.paper]);

  if (!content) return null;

  return (
    <>
      <Nav />
      <main>
        <Hero content={content} />
        <About content={content} />
        <Stats content={content} duration={t.statSpeed} />
        <SelectedWork content={content} />
        <Experience content={content} />
        <Capabilities content={content} />
        <EduAff content={content} />
        <Contact content={content} />
      </main>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Accent" />
        <TweakColor
          label="Color"
          value={t.accent}
          options={ACCENT_OPTIONS}
          onChange={(v) => setTweak("accent", v)}
        />
        <TweakSection label="Paper" />
        <TweakColor
          label="Background"
          value={t.paper}
          options={PAPER_OPTIONS}
          onChange={(v) => setTweak("paper", v)}
        />
        <TweakSection label="Motion" />
        <TweakSlider
          label="Stat count-up"
          value={t.statSpeed}
          min={600}
          max={2400}
          step={100}
          unit="ms"
          onChange={(v) => setTweak("statSpeed", v)}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
