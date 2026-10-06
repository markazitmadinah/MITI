import Reveal from "../Reveal";
import TechText from "../TechText/TechText";
import PatternWaves from "../PatternWaves/PatternWaves";
import { PHONE_DISPLAY, WHATSAPP } from "../../data/contact";

// DESIGN.md §37/§38 — the CTA is the strongest block on the page: #111
// surface, 24px radius, 48px heading. §55 copy.
export default function Contact() {
  return (
    <section id="kontak" className="bg-surfacesoft">
      <div className="shell py-24 md:py-32">
        <div className="relative isolate overflow-hidden rounded-[24px] bg-ink">
          {/* Positioned by a wrapper rather than with `absolute` on the
              component: `.pattern-waves` ships `position: relative` as unlayered
              CSS, which ties a Tailwind `absolute` utility on specificity and
              needs import order to break the tie. In flow instead, the canvas
              claimed a slice of the box and pushed the copy below itself — the
              black surface and the waves read as two separate blocks. */}
          <div className="absolute inset-0" aria-hidden="true">
            {/* Silk waves on the same #111 as --color-ink, so the surface stays
                the CTA block DESIGN.md §37 calls for. `backgroundColor` is
                passed rather than left transparent because the Navbar's
                dark-surface probe walks up to the first opaque background to
                decide between the two logos — a transparent canvas would make it
                read the light `bg-surfacesoft` behind and flip the logo to its
                light variant over a dark section. */}
            <PatternWaves
              preset="silk"
              color="#ffffff"
              backgroundColor="#111111"
              fade="edges"
              fadeSize={0.55}
              interactive
              cursorSize={90}
              cursorStrength={0.45}
              opacity={0.28}
            />
          </div>

          {/* Sits over the waves, which stay decorative. */}
          <Reveal
            as="div"
            className="relative z-10 px-8 py-20 text-center md:px-16 md:py-28"
            step={90}
          >
            <h2 className="eyebrow text-white/45">Have an idea?</h2>

          {/* Canvas headline. Height goes through `style`, not a class: the
              component's own `.tech-text` rule is unlayered CSS and would win
              over a Tailwind utility of equal specificity. The h2 stays for the
              document outline. */}
          <h2 className="sr-only">Let's build something useful</h2>

          <TechText
            text="Let's build something useful"
            fontWeight={600}
            fontSize={120}
            letterSpacing={-0.02}
            color="#ffffff"
            accentColor="#1677ff"
            reveal="letter"
            reach={180}
            softness={0.7}
            dashLength={4}
            dashGap={2}
            strokeWidth={1.5}
            specks={12}
            speed={0.85}
            className="mx-auto mt-8 max-w-2xl"
            style={{ height: "clamp(56px, 11vw, 118px)" }}
          />

          <Reveal
            as="p"
            text="Tell us what you're trying to build and we'll help turn the idea into reality"
            className="mx-auto mt-5 max-w-lg text-base leading-[1.7] text-white/60"
            delay={18}
          />

          <Reveal
            as="div"
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
            step={80}
          >
            <a
              href="mailto:info@markazit.co.id"
              className="btn rounded-full bg-white px-6 py-3 text-sm font-medium text-ink hover:bg-brandsoft"
            >
              Start Project →
            </a>
            <a
              href={`tel:+${WHATSAPP}`}
              className="btn rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/70 hover:border-white/50 hover:text-white"
            >
              {PHONE_DISPLAY}
            </a>
          </Reveal>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
