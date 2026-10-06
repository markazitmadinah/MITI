import Reveal from "../Reveal";
import ServiceCard3D from "../ServiceCard3D/ServiceCard3D";
import { AiCore, BrowserWindow, MitiCore, Nodes, Phone } from "./visuals";

/**
 * Capability hub — MITI at the centre with the four pillars in orbit.
 *
 * Not a literal diagram: the orbits are deliberately imperfect (one tilted, one
 * off-centre) and the cards sit at slightly different heights and offsets, so
 * the result reads as a floating ecosystem rather than an infographic. Full
 * detail for each service lives in Services; these cards only have to say "one
 * partner covers all four" at a glance.
 *
 * Sizes are ~25% up from the previous pass and pulled in toward the core —
 * the earlier gaps made the orbits read as empty space.
 */
const PILLARS = [
  {
    num: "01",
    slot: "top",
    title: ["Web", "Development"],
    tag: "Websites & digital experiences",
    visual: <BrowserWindow size={92} />,
    width: 375,
    height: 210,
    rotate: -3,
    depth: 76,
    dx: -14,
    dy: -6,
    objectSide: "right",
  },
  {
    num: "02",
    slot: "left",
    title: ["App", "Development"],
    tag: "Web & mobile applications",
    visual: <Phone size={62} />,
    width: 337,
    height: 235,
    rotate: 2.5,
    depth: 40,
    dx: 10,
    dy: 18,
    objectSide: "left",
  },
  {
    num: "03",
    slot: "bottom",
    title: ["Automation"],
    tag: "Smarter business workflows",
    visual: <Nodes size={86} />,
    width: 375,
    height: 200,
    rotate: 1.5,
    depth: 58,
    dx: -30,
    dy: 8,
    objectSide: "right",
  },
  {
    num: "04",
    slot: "right",
    title: ["AI", "Solutions"],
    tag: "Intelligent digital experiences",
    visual: <AiCore size={86} />,
    width: 325,
    height: 225,
    rotate: -2,
    depth: 22,
    dx: -8,
    dy: -16,
    objectSide: "left",
  },
];

const ECOSYSTEM = ["Digital Products", "Automation", "Intelligence"];

export default function Capability() {
  return (
    <section id="kemampuan" className="capability">
      <div className="shell">
        <header className="capability__head">
          <p className="eyebrow text-brand">What we do</p>

          <Reveal
            as="h2"
            text="One Technology Partner, Multiple Digital Solutions"
            className="mx-auto mt-8 max-w-3xl text-center text-[clamp(1.875rem,4.2vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-ink"
          />

          <Reveal
            as="p"
            text="From digital products to intelligent automation, we bring the technology your business needs under one roof"
            className="mx-auto mt-5 max-w-2xl text-center text-base leading-[1.7] text-body"
            delay={18}
          />
        </header>

        {/* Orbit stage. Narrower than the text shell on purpose — that pulls
            the cards in close enough to the core to read as one system. */}
        <div className="hub">
          <span className="hub__glow" aria-hidden="true" />
          <span className="hub__grid" aria-hidden="true" />

          <svg
            className="hub__orbits"
            viewBox="0 0 1024 800"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <ellipse cx="512" cy="400" rx="486" ry="268" />
            <ellipse
              cx="512"
              cy="400"
              rx="404"
              ry="212"
              transform="rotate(-17 512 400)"
            />
            <ellipse
              cx="486"
              cy="424"
              rx="286"
              ry="152"
              transform="rotate(9 486 424)"
            />
          </svg>

          <MitiCore />

          {PILLARS.map((pillar) => (
            <Reveal
              key={pillar.num}
              className={`hub__slot hub__slot--${pillar.slot}`}
              style={{ "--dx": `${pillar.dx}px`, "--dy": `${pillar.dy}px` }}
              step={0}
            >
              <ServiceCard3D {...pillar} />
            </Reveal>
          ))}
        </div>

        {/* Tells the story without anyone having to read four cards. */}
        <Reveal
          as="p"
          className="ecosystem"
          step={90}
        >
          {ECOSYSTEM.map((item, i) => (
            <span key={item} className="ecosystem__item">
              {i > 0 && <i className="ecosystem__dot" aria-hidden="true" />}
              {item}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
