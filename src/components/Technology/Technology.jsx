import Reveal from "../Reveal";

const TOOLS = [
  ["WhatsApp", "whatsapp.com"],
  ["Google", "google.com"],
  ["Google Maps", "https://static.vecteezy.com/system/resources/previews/022/484/507/original/google-maps-gmaps-icon-logo-symbol-free-png.png"],
  ["Google Drive", "https://static.vecteezy.com/system/resources/previews/022/484/494/original/google-drive-icon-logo-symbol-free-png.png"],
  ["Gmail", "https://static.vecteezy.com/system/resources/previews/022/613/021/original/google-mail-gmail-icon-logo-symbol-free-png.png"],
  ["Gemini", "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/gemini-color.png"],
  ["Instagram", "instagram.com"],
  ["TikTok", "tiktok.com"],
  ["Facebook", "facebook.com"],
  ["YouTube", "youtube.com"],
  ["Midtrans", "midtrans.com"],
  ["Xendit", "xendit.co"],
  ["QRIS", "qris.id"],
  ["n8n", "n8n.io"],
  ["Make", "make.com"],
  ["Zapier", "zapier.com"],
  ["Notion", "notion.so"],
  ["HubSpot", "hubspot.com"],
  ["Telegram", "telegram.org"],
  ["OpenAI", "openai.com"],
  ["Stripe", "stripe.com"],
];

/** Tool wall. Phones keep the neat wrap; from sm up the tiles fly out to a
 *  Vogel spiral (golden angle + sqrt radius) so the desktop layout reads as
 *  genuinely scattered rather than gridded. Offsets are percentages of the
 *  stage, so the constellation scales with the viewport and never overlaps
 *  (measured: 20px gap at 1200px wide, 11px at the 640px sm floor, against
 *  64px tiles). X is wide and Y flatter, so it spreads sideways across the
 *  section rather than stacking downwards. Both factors are fixed, so the
 *  spread is identical on every render — a random() call would jitter and
 *  cluster. */
const SPREAD = { x: 47, y: 41, angle: 2.39996 };

function OrbitArc() {
  return (
    <div className="relative mt-16">
      {/* Wandering blue blobs. No clip box and no inset edges — the blur bleeds
          past every side. `top` is derived from the blob's own size (40% of it
          is the upward offset), so even the biggest one plus its upward drift
          stays inside this band and never reaches the header text above. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {[0, 1, 2, 3].map((i) => {
          const size = 340 + i * 70;
          return (
            <span
              key={i}
              className="glow-drift absolute rounded-full blur-2xl"
              style={{
                backgroundColor: `rgba(22, 119, 255, ${[0.22, 0.06, 0.14, 0.09][i]})`,
                left: `${[4, 62, 30, 78][i]}%`,
                top: size * 0.42 + 8,
                width: size,
                height: size,
                transform: `translate(-42%, -40%)`,
                animationDuration: `${26 + i * 7}s`,
                animationDelay: `${-i * 5}s`,
              }}
            />
          );
        })}
      </div>

      {/* The stage is the Reveal element itself so the tiles are its direct children —
          that is what the scatter keyframes target. */}
      <Reveal
        as="div"
        step={60}
        className="tech-tiles relative z-10 flex flex-wrap items-center justify-center gap-3 sm:block sm:h-[520px]"
      >
        {TOOLS.map(([name, domain], i) => {
          const r = Math.sqrt((i + 0.5) / TOOLS.length);
          const a = i * SPREAD.angle;
          return (
            <span
              key={name}
              className="tech-tile block sm:absolute sm:-translate-x-1/2 sm:-translate-y-1/2"
              style={{
                "--x": `${r * SPREAD.x * Math.cos(a)}%`,
                "--y": `${r * SPREAD.y * Math.sin(a)}%`,
              }}
            >
              <span
                className="flex h-16 w-16 animate-floaty items-center justify-center rounded-2xl border border-white/60 bg-gradient-to-b from-white/60 to-white/25 shadow-[0_14px_28px_-12px_rgba(17,24,39,0.28),inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-3px_6px_rgba(17,24,39,0.08)]"
                style={{
                  rotate: `${(i % 5) - 2}deg`,
                  animationDelay: `${(i % 5) * 0.4}s`,
                }}
              >
                <img
                  src={domain.startsWith("http") ? domain : `https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
                  alt={name}
                  title={name}
                  loading="lazy"
                  className="h-3/5 w-3/5 object-contain"
                />
              </span>
            </span>
          );
        })}
      </Reveal>
    </div>
  );
}

export default function Technology() {
  return (
    <section id="teknologi" className="overflow-hidden bg-surface">
      <div className="shell py-24 md:py-32">
        <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="eyebrow text-brand">Technology</h2>

          <Reveal
            as="h2"
            text="Connect with your favorite tools"
            className="mt-8 text-[clamp(2rem,4.4vw,2.625rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink"
          />

          <Reveal
            as="p"
            text="We use reliable, current tooling so the products we hand over stay maintainable after launch"
            className="mt-5 text-base leading-[1.7] text-body"
            delay={18}
          />
        </div>

        <OrbitArc />
      </div>
    </section>
  );
}
