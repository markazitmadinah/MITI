import { Fragment, useRef } from "react";
import {
  m,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

const LABEL = "ABOUT US";
const LEAD =
  "We build digital solutions that help businesses work smarter, move faster, and grow with confidence";

/**
 * `plain` blocks render as static text and take no part in the reveal. The
 * label is one of them: it is a quiet orientation cue and must already be
 * legible when the section arrives, not fade in with the headline.
 *
 * For animated blocks, `to` is the weight the text settles on and `tone` the
 * colour it settles on.
 */
const BLOCKS = [
  { text: LABEL, className: "about__label", plain: true },
  { text: LEAD, className: "about__lead", to: 600, tone: "#111111" },
];

/** Split into sentences; text with no terminal punctuation counts as one. */
const sentences = (text) => text.match(/[^.!?]+[.!?]*/g).map((s) => s.trim());

// Words per reveal beat. Two reads as a phrase; the last group of a sentence
// absorbs the remainder.
const CHUNK = 2;

/** Split into sentences, then into fixed-size word groups. */
const phrases = (text) =>
  sentences(text).flatMap((sentence) => {
    const words = sentence.split(/\s+/);
    const groups = [];
    for (let i = 0; i < words.length; i += CHUNK) {
      groups.push(words.slice(i, i + CHUNK).join(" "));
    }
    return groups;
  });

// Pair every phrase with its reveal index once, at module load, so render never
// mutates anything.
const BLOCK_UNITS = [];
let total = 0;

for (const block of BLOCKS) {
  // Plain blocks contribute no phrases, so they must not advance `total` —
  // otherwise the lead's reveal would be spread across a stride sized for text
  // that never animates and the last phrase would land before progress 1.
  if (block.plain) {
    BLOCK_UNITS.push([]);
    continue;
  }
  BLOCK_UNITS.push(
    phrases(block.text).map((text) => ({ text, index: total++ })),
  );
}

// Last unit must land exactly at progress 1, so the stride is derived from the
// unit count rather than overflowing the scroll range.
const FADE = 0.2;
const SPAN = 1 - FADE;

/**
 * About MITI — typography only.
 *
 * Every phrase starts faded and thin, then firms up to solid and bold as the
 * section scrolls into place. Driven by scroll position, not a play-once
 * animation: Motion resamples live scroll each frame, so scrolling back up
 * reverses it.
 */
/**
 * The scroll target is the inner content wrapper, NOT the <section>.
 *
 * The section carries 160px of top padding, so targeting it makes the effect
 * bracket empty space: progress starts while the text is still below the fold
 * and finishes before it is comfortably readable, and a normal wheel scroll
 * skips the whole range. Targeting the text itself keeps the reveal bracketed
 * to where the words actually are.
 */
export default function About() {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.25"],
  });

  return (
    <section id="tentang" className="about">
      <div className="shell" ref={ref}>
        {BLOCKS.map((block, b) => {
          const Tag = block.plain ? "h2" : "p";
          return (
          <Tag key={block.className} className={block.className}>
            {reduce || block.plain
              ? block.text
              : BLOCK_UNITS[b].map((unit) => (
                  <Fragment key={unit.index}>
                    <Unit
                      text={unit.text}
                      index={unit.index}
                      to={block.to}
                      tone={block.tone}
                      progress={scrollYProgress}
                    />
                    {" "}
                  </Fragment>
                ))}
          </Tag>
          );
        })}
      </div>
    </section>
  );
}

/**
 * One phrase, rendered once as an inline span.
 *
 * Colour, opacity and weight all read from the same scroll slice, so the group
 * arrives faded and thin and firms up to solid and bold as it is reached.
 *
 * A single copy of the text is deliberate: an earlier version stacked a regular
 * and a bold face and cross-faded them, but both copies are partly visible at
 * once and their glyph widths differ, so the word read as ghosted double text.
 *
 * This must be a `motion.span`, not a plain `span`. React cannot serialise a
 * MotionValue in the style prop of a plain element — it writes the string
 * "[object Object]" and the element renders with a broken inline style, so the
 * scroll animation never runs at all.
 */
function Unit({ text, index, to, tone, progress }) {
  const start = (index / Math.max(1, total - 1)) * SPAN;
  const mix = useTransform(progress, [start, start + FADE], [0, 1]);

  const color = useTransform(mix, [0, 1], ["#d9dde3", tone]);
  const opacity = useTransform(mix, [0, 1], [0.35, 1]);
  const weight = useTransform(mix, [0, 1], [350, to]);

  return (
    <m.span style={{ color, opacity, fontWeight: weight }}>{text}</m.span>
  );
}
