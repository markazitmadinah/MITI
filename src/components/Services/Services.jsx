import { ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";
import { SERVICES } from "../../data/services";

// Premium bento: asymmetric spans, soft blue-white cards, existing 3D
// illustrations positioned differently per card (right / bottom / centre)
// with plenty of negative space.
export default function Services() {
  return (
    <section id="layanan" className="bg-[#0A0A0A] md:bg-surface">
      <div className="shell py-16 md:py-24">
        <div className="svc-panel">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="eyebrow text-brand">Our Services</h2>

            <Reveal
              as="h2"
              text="Digital solutions built around your business"
              className="mt-8 text-[clamp(2rem,4.4vw,2.625rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-white"
            />

            <Reveal
              as="p"
              text="From websites and applications to automation and AI integration, we create solutions designed to solve real business problems"
              className="mt-5 text-base leading-[1.7] text-neutral-400"
              delay={18}
            />
          </div>

          <Reveal as="ul" className="svc-grid mt-16" step={60}>
          {SERVICES.map(({ id, num, icon: Icon, name, desc, image }) => (
            <li key={id} className="svc-card">
              <span className="svc-card__haze" aria-hidden="true" />
              <div className="svc-card__body">
                <h3 className="svc-card__name">
                  <Icon size={16} strokeWidth={1.8} className="svc-card__icon" />
                  {name}
                </h3>
                <p className="svc-card__desc">{desc}</p>
              </div>
              <img src={image} alt={name} className="svc-card__img" loading="lazy" />
              <span className="svc-card__edge" aria-hidden="true" />
              <span className="svc-card__cta" aria-hidden="true">
                <ArrowUpRight size={15} strokeWidth={2.2} />
              </span>
            </li>
          ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
