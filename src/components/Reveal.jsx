import {
  Children,
  Fragment,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from "react";

/**
 * Scroll reveal. One IntersectionObserver, two shapes:
 *
 *   text="…"   → word-by-word reveal. Headings and lead paragraphs.
 *   children   → direct children rise in sequence. Grids, lists, cards.
 *
 * Pure IO + CSS transitions — no scrub, no plugin, no per-instance leak.
 * Reduced motion is resolved during render (not in an effect) so nothing
 * hidden stays hidden, and SSR gets the final state for free.
 */
const reduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Reveal = ({
  text,
  as: Tag = "p",
  className = "",
  style,
  delay = 40,
  step = 70,
  // group=false → pure IO trigger, no stagger on children. For wrappers whose
  // children are driven by their own CSS (the Process connector, for one).
  group = true,
  children,
}) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(reduced);

  useEffect(() => {
    if (reduced()) return undefined;
    const el = ref.current;
    if (!el) return undefined;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShown(true);
        io.disconnect();
      },
      // 0.05, not 0.15: block-shape targets can be several viewport-heights tall
      // (the 7-item services list on mobile), and a high ratio is a lot harder
      // for a tall element to actually reach. Children start at opacity 0, so a
      // threshold that never fires means content that never appears.
      { threshold: 0.05, rootMargin: "0px 0px -12% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (text != null) {
    const words = String(text).split(/\s+/);
    return (
      <Tag
        ref={ref}
        className={className}
        style={style}
        data-shown={shown || undefined}
      >
        {words.map((word, i) => (
          // The separator must live OUTSIDE the span. `.reveal-word` is an
          // inline-block, and inline-block boxes drop trailing whitespace — a
          // space nested inside the span is discarded, jamming every word
          // together.
          <Fragment key={`${word}-${i}`}>
            <span
              className="reveal-word"
              style={{ transitionDelay: `${i * delay}ms` }}
            >
              {word}
            </span>
            {i < words.length - 1 ? " " : ""}
          </Fragment>
        ))}
      </Tag>
    );
  }

  return (
    <Tag
      ref={ref}
      className={`${group ? "rise-group " : ""}${className}`.trim()}
      style={style}
      data-shown={shown || undefined}
    >
      {Children.map(children, (child, i) =>
        isValidElement(child)
          ? cloneElement(child, {
              key: child.key ?? i,
              style: { ...child.props.style, "--rd": i * step },
            })
          : child,
      )}
    </Tag>
  );
};

export default Reveal;
