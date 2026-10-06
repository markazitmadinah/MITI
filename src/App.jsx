import { useEffect, useState } from "react";
import {
  motion,
  MotionConfig,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import SmoothScroll from "./components/SmoothScroll";
import About from "./components/About/About";
import Expertise from "./components/Expertise/Expertise";
import Services from "./components/Services/Services";
import Technology from "./components/Technology/Technology";
import Process from "./components/Process/Process";
import Contact from "./components/Contact/Contact";
import { ArrowUp } from "lucide-react";
import { WHATSAPP } from "./data/contact";

// Order follows the sections top to bottom — hero, expertise, about, services,
// technology, process, contact — and each label is that section's own name, so
// the nav reads as a table of contents for the page rather than a separate menu.
const NAV_LINKS = [
  { label: "Expertise", href: "#expertise" },
  { label: "About", href: "#tentang" },
  { label: "Services", href: "#layanan" },
  { label: "Technology", href: "#teknologi" },
  { label: "Process", href: "#proses" },
  { label: "Contact", href: "#kontak" },
];

const SERVICE_LINKS = ["Web Development", "Application Development", "Automation", "AI Solutions"];

const HEADLINE_WORDS =
  "We Build Digital Solutions That Move Your Business Forward".split(" ");

// ─── Hero entrance ──────────────────────────────────────────────
// Motion is already a dependency and is the library ReactBits is built on,
// so the same effect vocabulary is used without adding a package. One
// parent drives the sequence; `stagger(…)` fans it out to each element, and
// the entrance is chosen per component: the headline is the focal point so it
// gets the blur-in word reveal, supporting copy just rises.
// One entrance curve for the whole page, mirroring `--ease-entrance` in
// index.css — keep the two in step or the hero stops matching the sections.
// easeOutExpo is deliberately not used: it is ~88% complete at t=0.3, so a long
// duration travels for a fraction of itself and then sits still, which reads as
// a snap followed by dead air rather than an ease.
const EASE = [0.4, 0, 0.2, 1];

const stagger = (staggerChildren, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

const blurWord = {
  hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: EASE },
  },
};

const rise = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

const COMPANY_LINKS = [
  { label: "About", href: "#tentang" },
  { label: "Process", href: "#proses" },
  { label: "Contact", href: "#kontak" },
  { label: "Email", href: "mailto:info@markazit.co.id" },
  { label: "Phone", href: `tel:+${WHATSAPP}` },
];

// lucide dropped brand icons, so the marks are inlined as plain 24×24 paths
// (Simple Icons geometry) and coloured by currentColor. Share-sheet tracking
// params (utm_*, sender_device, stkn) stripped — they belong to the copy button,
// not the link.
const SOCIAL_LINKS = [
  {
    label: "WhatsApp",
    href: `https://wa.me/${WHATSAPP}`,
    d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@mitiofficial",
    d: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/markazinternational.it",
    d: "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077",
  },
];

// Floating pill navbar: only the link group is glass. The logo and the CTA sit
// outside it as solid marks. `pt-4` leaves a transparent gap so content passes
// behind, not under a solid bar.
function Navbar() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Probing the surface under the navbar costs a forced layout
    // (elementsFromPoint) plus a forced style recalc per getComputedStyle in the
    // walk up the tree. As a raw scroll listener that measured ~4 recalcs and a
    // layout on EVERY animation frame — burning main-thread time the entrance
    // animations need. So: one probe per frame at most, and skip the walk
    // entirely while the probe lands on the same element, which is most frames
    // of an ordinary scroll.
    let frame = 0;
    let last = null;

    const probe = () => {
      frame = 0;
      const els = document.elementsFromPoint(window.innerWidth / 2, 80);
      const target = els.find((el) => !el.closest("header"));
      if (target === last) return;
      last = target;

      let node = target;
      let bg = "rgba(0, 0, 0, 0)";
      while (node) {
        const c = getComputedStyle(node).backgroundColor;
        if (c && c !== "rgba(0, 0, 0, 0)" && c !== "transparent") {
          bg = c;
          break;
        }
        node = node.parentElement;
      }
      const m = bg.match(/\d+(\.\d+)?/g)?.map(Number);
      if (m) {
        const lum = (0.2126 * m[0] + 0.7152 * m[1] + 0.0722 * m[2]) / 255;
        setDark(lum < 0.4);
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(probe);
    };

    // A resize can move the probe point onto a different element without any
    // scroll, so the cache has to be dropped.
    const onResize = () => {
      last = null;
      onScroll();
    };

    probe();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-30 pt-4 ${dark ? "nav-dark" : ""}`}>
      <div className="shell relative flex items-center">
        <a href="#top" className="shrink-0" aria-label="Markaz IT International">
          <img
            src={dark ? "/Logo1.png" : "/Logo.png"}
            alt="Markaz IT International"
            className="h-9 w-auto"
          />
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-4 rounded-full border border-line bg-surface/55 px-5 py-2.5 shadow-float backdrop-blur-xl backdrop-saturate-150 md:flex lg:gap-6 lg:px-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="link-grow text-sm font-medium text-body transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#kontak"
          className="btn ml-auto hidden rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white hover:bg-brand md:inline-flex"
        >
          Start Project
        </a>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="ml-auto rounded-full border border-line bg-surface/55 p-2.5 backdrop-blur-xl transition-transform duration-200 ease-out active:scale-90 md:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={`transition-transform duration-300 ${open ? "rotate-90" : "rotate-0"}`}>
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="shell absolute inset-x-0 top-full md:hidden">
          <nav className="nav-drop mt-3 flex flex-col gap-1 rounded-3xl border border-line bg-surface/80 p-4 shadow-float backdrop-blur-xl">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-body transition-colors hover:bg-surfaceblue hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontak"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-xl bg-ink px-3 py-2.5 text-center text-sm font-medium text-white"
            >
              Start Project
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

// The only blue in the hero is the haze behind the product visual. Everything
// else is flat white, so the atmosphere reads as light rather than a tint.
function Hero() {
  // Parallax only: the hero drifts down slower than the page scrolls, so it
  // lags behind instead of vanishing. No opacity fade — the brief is for the
  // image to still be there as it goes, just out of pace.
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, reduce ? 0 : 200]);

  // The only blue in the hero is the haze behind the product visual. Everything
  // else is flat white, so the atmosphere reads as light rather than a tint.
  return (
    <motion.section
      id="hero"
      className="relative overflow-hidden bg-surface"
      style={{ y }}
    >
      {/* Atmospheric blue glow behind the product visual only (§22) — the rest
          of the page stays flat white. Anchored to the image, not the section,
          so it stays centred as the composition resizes. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[46%] h-[26rem]"
        style={{
          background:
            "radial-gradient(ellipse 52% 50% at 50% 50%, rgba(22,119,255,0.16) 0%, rgba(22,119,255,0.06) 40%, transparent 72%)",
        }}
      />

      <MotionConfig reducedMotion="user">
        <div className="shell relative pb-28 pt-10 text-center md:pt-12">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger(0.14)}
            className="mx-auto flex max-w-4xl flex-col items-center"
          >
            <motion.h1
              variants={stagger(0.07)}
              className="max-w-3xl text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.12] tracking-[-0.03em] text-ink"
            >
              {HEADLINE_WORDS.map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  variants={blurWord}
                  className="mr-[0.25em] inline-block will-change-[transform,filter]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              variants={rise}
              className="mt-4 max-w-xl text-base leading-[1.7] text-body"
            >
              From websites and applications to automation and AI, we create
              technology that makes your business simpler, smarter, and more
              scalable.
            </motion.p>

            <motion.div
              variants={stagger(0.12)}
              className="mt-8 flex flex-wrap items-center justify-center gap-3"
            >
              <motion.a
                variants={rise}
                href="#kontak"
                className="btn rounded-full bg-ink px-4 py-2 text-xs font-medium text-white hover:bg-brand"
              >
                Start Project →
              </motion.a>
              <motion.a
                variants={rise}
                href="#layanan"
                className="btn rounded-full border border-line bg-surface px-4 py-2 text-xs font-medium text-ink hover:border-ink"
              >
                Explore Our Services
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Top half of the composition with the bottom edge faded out (§22), so the
              devices settle into the section instead of ending on a hard line.
              1346x954 source in a 1346x477 box = exact 1:1 top-half crop. */}
          {/* Slides up into place and pops in directly — no clip wipe (that cropped the
              composition as it revealed) and no scale (a zoom overshoots and
              reads as a pop). Just a rise from below with a plain fade.
              Deliberately slow: the image is the largest element on the page
              and a fast entrance reads as a jump cut once the headline has
              already settled. */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.7, ease: EASE, delay: 0.9 }}
            className="relative mx-auto mt-8 w-full max-w-4xl"
          >
            {/* Blue haze sits behind the composition and is clipped to the image's own
                height (scale-x only) — nothing bleeds past the bottom edge. */}
              <motion.div
                aria-hidden="true"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.6, ease: EASE, delay: 1.1 }}
                className="pointer-events-none absolute inset-0 z-0 scale-x-[1.5] blur-[70px]"
                style={{
                  background:
                    "radial-gradient(ellipse 75% 82% at 50% 42%, rgba(22,119,255,0.62) 0%, rgba(22,119,255,0.34) 32%, rgba(22,119,255,0.13) 56%, transparent 80%)",
                }}
              />

            <div className="relative z-10 overflow-hidden" style={{ aspectRatio: "1346 / 620" }}>
              <img
                src="/herooo.png"
                alt="Tiga produk digital MITI: aplikasi kesehatan Carely, marketplace properti HomeSpace, dan point-of-sale MITI POS"
                width={1346}
                height={620}
                draggable={false}
                className="h-full w-full object-cover object-top select-none"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, #000 70%, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.55) 88%, rgba(0,0,0,0.26) 94%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, #000 70%, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.55) 88%, rgba(0,0,0,0.26) 94%, transparent 100%)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </MotionConfig>
    </motion.section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="shell py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_auto] md:gap-16">
          <div>
            <img
              src="/Logo.png"
              alt="Markaz Information Technology International"
              className="h-12 w-auto"
            />
            {/* One line, per the brief — the `max-w-[16rem]` cap that used to
                wrap it across three lines is what forced the ragged block. */}
            <p className="mt-4 whitespace-nowrap text-sm font-semibold tracking-tight text-ink">
              Markaz Information Technology International
            </p>
            <p className="mt-2 max-w-xs text-sm leading-[1.7] text-body">
              Building digital solutions for modern businesses.
            </p>

            <ul className="mt-6 flex items-center gap-2.5">
              {SOCIAL_LINKS.map(({ label, href, d }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-body transition-colors hover:border-brand hover:text-brand focus-visible:border-brand focus-visible:text-brand"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-[18px] w-[18px]"
                      fill="currentColor"
                    >
                      <path d={d} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-muted">Services</p>
            <ul className="mt-5 space-y-3">
              {SERVICE_LINKS.map((label) => (
                <li key={label}>
                  <a
                    href="#layanan"
                    className="text-sm text-body transition-colors hover:text-brand"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-muted">Company</p>
            <ul className="mt-5 space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-body transition-colors hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Its own track, so nothing sits underneath the button. Sharing the
              Company column put About/Process/Contact/Email/Phone directly
              below it, which is what the brief rules out. Lenis runs with
              `anchors: true`, so a plain href scrolls to #top with the same
              easing as the wheel — no scroll listener needed. */}
          <div className="justify-self-end">
            <a
              href="#top"
              aria-label="Back to top"
              className="grid h-10 w-10 place-items-center rounded-full border border-line text-body transition-colors hover:border-brand hover:text-brand focus-visible:border-brand focus-visible:text-brand"
            >
              <ArrowUp size={18} strokeWidth={2} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-line pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 PT Markaz Information Technology International</p>
          <p>Jakarta, Indonesia</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <SmoothScroll>
      <div>
        <Navbar />

        <main id="top">
          <Hero />
          <Expertise />
          <About />
          <Services />
          <Technology />
          <Process />
          <Contact />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
