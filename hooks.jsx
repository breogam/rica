/* global React */
const { useState, useEffect, useRef } = React;

const REDUCED = typeof window !== "undefined"
  && window.matchMedia
  && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Fade-up on scroll with IntersectionObserver. */
function Reveal({ children, as = "div", className = "", delay = 0, ...rest }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(REDUCED);
  useEffect(() => {
    if (REDUCED || !ref.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { setSeen(true); io.disconnect(); }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.05 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const style = delay && !REDUCED ? { transitionDelay: `${delay}ms`, ...(rest.style || {}) } : rest.style;
  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={`reveal ${seen ? "is-in" : ""} ${className}`}
      {...rest}
      style={style}
    >
      {children}
    </Tag>
  );
}

/* Count-up. Renders the formatted number. Triggers once when in view. */
function CountUp({ value, suffix = "", prefix = "", duration = 1200, decimals = 0, accent = false }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(REDUCED ? value : 0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (REDUCED || !ref.current) { setShown(value); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting && !started) setStarted(true); });
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [value, started]);

  useEffect(() => {
    if (!started || REDUCED) return;
    const start = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    let raf;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      setShown(value * ease(t));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setShown(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, value, duration]);

  const display = decimals > 0 ? Number(shown).toFixed(decimals) : Math.round(shown).toLocaleString("en-US");
  return (
    <span ref={ref} className={`stat-num${accent ? " accent" : ""}`}>
      {prefix}{display}{suffix}
    </span>
  );
}

window.Reveal = Reveal;
window.CountUp = CountUp;
window.REDUCED = REDUCED;
