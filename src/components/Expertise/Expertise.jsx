import {
  Code2,
  Layers,
  Share2,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";
import { m, useReducedMotion, useScroll, useTransform } from "motion/react";

/**
 * "Our Expertise" — a single looping capability strip.
 *
 * Deliberately the lightest section on the page: it sits between the hero and
 * the detailed Services list purely as a transition, so it carries no cards, no
 * illustration and no 3D. Flat type, hairline dots, one accent colour.
 *
 * The row is rendered twice and the track slides -50%, which is what makes the
 * loop seamless — the second copy is aria-hidden so it is not announced twice.
 */
const EXPERTISE = [
  { icon: Code2, label: "Web Development" },
  { icon: Smartphone, label: "App Development" },
  { icon: Workflow, label: "Business Automation" },
  { icon: Sparkles, label: "AI Solutions" },
  { icon: Share2, label: "API & Integration" },
  { icon: Layers, label: "Digital Products" },
];

function Row({ hidden = false }) {
  return (
    <ul className="strip__row" aria-hidden={hidden || undefined}>
      {EXPERTISE.map((item) => (
        <li key={item.label} className="strip__cell">
          <span className="strip__item">
            <item.icon size={15} strokeWidth={1.5} aria-hidden="true" />
            <span className="strip__label">{item.label}</span>
          </span>
          {/* Dot after every item, including the last: that keeps the rhythm
              even across the seam where the two copies meet. */}
          <span className="strip__dot" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
}

export default function Expertise() {
  // The strip drifts down as the page scrolls, so it lags behind instead of
  // riding up out of frame with everything else. Bounded to 90px, which is
  // less than the section's 112px bottom padding — so it never pushes into the
  // Services section below.
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 90]);

  return (
    <section id="expertise" className="expertise">
      <div className="shell">
        {/* Label and strip share one transform. Applying the parallax to the
            strip alone would drag it away from the label as you scroll, opening
            the gap from 22px to 112px. */}
        <m.div className="expertise__body" style={{ y }}>
          <h2 className="expertise__label">Our Expertise</h2>

          <div className="strip">
            <div className="strip__track">
              <Row />
              <Row hidden />
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
