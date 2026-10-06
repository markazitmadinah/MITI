import { Compass, PackageCheck, RefreshCw, Search, Sparkles } from "lucide-react";
import Reveal from "../Reveal";

const STEPS = [
  {
    num: "01",
    title: "Discover",
    text: "Understand the goals, needs, audience, and challenges.",
    icon: Search,
    tags: ["Goals", "Audience", "Brief"],
    pos: "md:left-[6%] md:top-[3%]",
  },
  {
    num: "02",
    title: "Strategy",
    text: "Define the right direction, scope, and solution.",
    icon: Compass,
    tags: ["Scope", "Roadmap", "Tech Stack"],
    pos: "md:left-[60%] md:top-[5%]",
  },
  {
    num: "03",
    title: "Create",
    text: "Build, design, automate, and produce the solution.",
    icon: Sparkles,
    tags: ["Web", "Mobile", "Automation", "Design"],
    pos: "md:left-[4%] md:top-[40%]",
  },
  {
    num: "04",
    title: "Refine",
    text: "Review, test, improve, and polish.",
    icon: RefreshCw,
    tags: ["Review", "Testing", "Revision"],
    pos: "md:left-[62%] md:top-[44%]",
  },
  {
    num: "05",
    title: "Deliver",
    text: "Launch a polished solution, ready to use.",
    icon: PackageCheck,
    tags: ["Launch", "Handover", "Support"],
    pos: "md:left-[33%] md:top-[74%]",
  },
];

const CHIPS = [
  { label: "Project Brief", pos: "md:left-[36%] md:top-[2%]" },
  { label: "Review", pos: "md:left-[66%] md:top-[37%]" },
  { label: "Approved", pos: "md:left-[10%] md:top-[76%]" },
];

/* One clock for the whole section: five cards, one per beat. --hop is that beat,
   so the connector's draw front walks node to node and reaches card n exactly
   as card n starts landing. Card duration and the hop count are the only
   timing inputs; CSS does the rest. */
const STEP = 320;
const CARD = 0.7;

/* The connector is one path per hop, not one long path, so each hop fills its own
   --hop window instead of racing the others. `len` is that hop's arc length in
   viewBox units, which doubles as its draw distance (stroke-dashoffset starts
   there and animates to 0) — one number per hop is all the CSS needs.
   ponytail: arc lengths hardcoded; recompute if the control points change. */
const HOPS = [
  { d: "M175 105 C 380 80, 520 90, 715 119", len: 542.15 },
  { d: "M715 119 C 560 180, 300 220, 155 357", len: 613.45 },
  { d: "M155 357 C 380 375, 560 380, 735 384", len: 580.72 },
  { d: "M735 384 C 700 480, 560 540, 445 588", len: 363.61 },
];

export default function Process() {
  return (
    <section
      id="proses"
      className="bg-white"
      style={{
        backgroundImage: "radial-gradient(circle, #dcdcdc 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    >
      <div className="shell py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="eyebrow text-brand">How we work</h2>

          <Reveal
            as="h2"
            text="From idea to launch"
            className="mt-8 text-[clamp(2rem,4.4vw,2.625rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink"
          />

          <p className="mx-auto mt-5 max-w-lg text-base leading-[1.7] text-body">
            The same simple five-step flow for every project — websites, apps,
            automation, design, or maintenance.
          </p>
        </div>

        <Reveal
          as="div"
          group={false}
          className="relative mt-16 process-group md:mx-auto md:h-[680px] md:max-w-4xl"
          style={{ "--card": `${CARD}s`, "--hop": `${STEP}ms`, "--march": `${HOPS.length * STEP}ms` }}
        >
          <div aria-hidden="true" className="absolute left-1/2 top-1/2 hidden h-72 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/5 blur-3xl md:block" />
          <svg
            aria-hidden="true"
            viewBox="0 0 1000 680"
            preserveAspectRatio="none"
            className="absolute inset-0 hidden h-full w-full md:block"
          >
            {HOPS.map(({ d, len }, i) => (
              <path
                key={i}
                className="process-line"
                d={d}
                style={{ "--len": `${len}px`, "--hop-delay": `${i * STEP}ms` }}
                fill="none"
                stroke="#1677FF"
                strokeLinecap="round"
                strokeOpacity="0.6"
                strokeWidth="1.5"
              />
            ))}
            {[
              [175, 105],
              [715, 119],
              [155, 357],
              [735, 384],
              [445, 588],
            ].map(([cx, cy], i) => (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r="4"
                fill="#1677FF"
                fillOpacity="0.6"
                className="process-dot"
                style={{ animationDelay: `${i * STEP}ms` }}
              />
            ))}
          </svg>

          {CHIPS.map((c) => (
            <span
              key={c.label}
              className={`pointer-events-none z-10 hidden rounded-full border border-line bg-surface px-3 py-1 text-[11px] font-medium tracking-wide text-muted shadow-sm md:absolute ${c.pos} md:inline-block`}
            >
              {c.label}
            </span>
          ))}

          <ul className="grid gap-6 md:block process-list">
            {STEPS.map(({ num, title, text, icon: Icon, tags, pos }, i) => (
              <li
                key={num}
                style={{ "--cd": `${i * STEP}ms` }}
                className={`relative rounded-[20px] border border-line bg-surface p-5 shadow-[0_18px_36px_-20px_rgba(17,24,39,0.25)] md:absolute md:w-[240px] ${pos}`}
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon size={15} strokeWidth={1.8} />
                  </span>
                  <span className="text-xs font-semibold tracking-[0.14em] text-brand">{num}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">{title}</h3>
                <p className="mt-1.5 text-[13px] leading-[1.6] text-body">{text}</p>
                <div className="mt-3 flex flex-wrap items-center gap-1.5 border-t border-line pt-3">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-ink px-2 py-0.5 text-[10px] font-medium tracking-wide text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
