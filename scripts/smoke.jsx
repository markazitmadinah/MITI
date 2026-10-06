import { renderToString } from "react-dom/server";
import App from "../src/App.jsx";

const html = renderToString(<App />);

const expect = [
  ["hero headline", ">Forward.<"],
  ["headline word reveal", "filter:blur(10px)"],
  ["hero visual", "/herooo.png"],
  // The hero visual rises into place on entry (slide up + fade), with no clip
  // wipe and no zoom.
  ["hero reveal slides up", "translateY(60px)"],
  ["expertise strip", 'id="expertise"'],
  ["strip track", "strip__track"],
  ["strip dot", "strip__dot"],
  ["strip api item", "API &amp; Integration"],
  // The strip duplicates its row to loop seamlessly; the copy must be hidden
  // from assistive tech or every capability is announced twice.
  ["strip duplicate hidden", 'class="strip__row" aria-hidden="true"'],
  ["about section", 'id="tentang"'],
  ["services section", 'id="layanan"'],
  ["technology section", 'id="teknologi"'],
  ["stack chip", "Laravel"],
  ["process section", 'id="proses"'],
  ["contact section", 'id="kontak"'],
  ["nav CTA", "Start a Project"],
  ["service 07", "IT Education"],
  ["rise group", "rise-group"],
  ["stagger stamp", "--rd:"],
  ["service rows", "svc-row"],
  // Guards the inline-block trailing-space trap: a separator nested inside
  // .reveal-word gets trimmed, silently jamming every heading together.
  ["heading word spacing", '</span> <span class="reveal-word"'],
// The reveal unit is a PHRASE (see CHUNK in About.jsx), so each group renders as
// one contiguous run. These fail if the grouping is dropped or re-chunked.
["about label", ">ABOUT US<"],
  // The label must NOT animate: its text has to sit directly in the <p>, not
  // inside an animated span.
  ["about label static", 'class="about__label">ABOUT US<'],
  ["about phrase 1", ">We build<"],
  ["about phrase 2", ">digital solutions<"],
  ["about phrase 3", ">that help<"],
  ["about phrase last", ">confidence.<"],
];

for (const [label, needle] of expect) {
  if (!html.includes(needle)) {
    console.error(`smoke FAIL: ${label} (missing ${JSON.stringify(needle)})`);
    process.exit(1);
  }
}

// Layering regression guard. The About section used to render every word twice
// (a regular face plus a bold face, cross-faded) which read as ghosted double
// text. Scoped to the About section, because these words also appear in the
// Hero and Technology copy elsewhere on the page.
const from = html.indexOf('id="tentang"');
const to = html.indexOf('id="layanan"', from);
const about = html.slice(from, to === -1 ? undefined : to);

const doubled = ["confidence.", "grow"].filter(
  (word) => about.split(word).length - 1 !== 1,
);

if (doubled.length) {
  console.error(
    `smoke FAIL: about words rendered ${doubled.length} time(s): ${doubled}`,
  );
  process.exit(1);
}

// The hero visual used to enter on opacity + scale, which read as a pop, and was
// briefly a clip wipe, which cropped the composition. It now rises into place, so
// neither the zoom nor the wipe may come back.
for (const banned of ["scale:0.95", "clip-path:inset(100"]) {
  if (html.includes(banned)) {
    console.error(`smoke FAIL: hero visual entrance regressed to ${banned}`);
    process.exit(1);
  }
}

// MotionValues cannot be serialised into the style prop of a PLAIN element —
// React writes "[object Object]" and the inline style is dead, so the scroll
// animation silently never runs. Motion components are required for any
// element driven by useScroll/useTransform.
if (html.includes("[object Object]")) {
  console.error(
    "smoke FAIL: MotionValue in a plain element style — use a motion.* component",
  );
  process.exit(1);
}

// The About reveal must ship in its faded state, not its final one.
if (!/id="tentang"[\s\S]*?opacity:0\.35/.test(html)) {
  console.error("smoke FAIL: About reveal does not start faded (opacity 0.35)");
  process.exit(1);
}

// The support line was cut from the About section. Guard it so a stray copy
// cannot creep back in from another section's markup.
if (html.includes("MITI turns ideas")) {
  console.error("smoke FAIL: removed About support line is still present");
  process.exit(1);
}

// The word weight is only interpolable if Inter loads as a variable font.
// Discrete static faces make the browser switch weights instead of animating.
// Read from cwd (npm runs this at the project root), not import.meta.url —
// the SSR bundle is emitted into node_modules and rewrites relative paths.
const fs = await import("node:fs");

if (!fs.readFileSync("index.html", "utf8").includes("wght@300..700")) {
  console.error("smoke FAIL: Inter must load as a variable font (wght@300..700)");
  process.exit(1);
}

console.log(
  `smoke ok — rendered ${html.length} bytes, ${expect.length + 2} assertions passed`,
);