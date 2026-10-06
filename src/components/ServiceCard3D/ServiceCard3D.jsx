import { ArrowUpRight } from "lucide-react";

/**
 * A single orbiting capability card.
 *
 * Size, rotation, depth and offset all come from props on purpose — four
 * identical cards is exactly what made the previous layout read as a
 * template. Material, rim light and shadow stay shared so the set still feels
 * like one system.
 *
 * The 3D object deliberately straddles the top edge instead of sitting inside
 * the card: an object breaking the frame is what stops this looking like a
 * standard UI card.
 */
export default function ServiceCard3D({
  num,
  title,
  tag,
  visual,
  width,
  height,
  rotate = 0,
  depth = 40,
  objectSide = "right",
  className = "",
}) {
  return (
    <article
      className={`cap-card ${className}`}
      style={{
        width,
        height,
        "--rot": `${rotate}deg`,
        "--z": `${depth}px`,
      }}
    >
      <span className="cap-card__rim" aria-hidden="true" />

      <span
        className={`cap-card__object cap-card__object--${objectSide}`}
        aria-hidden="true"
      >
        {visual}
      </span>

      <div className="cap-card__inner">
        <span className="cap-card__num">{num}</span>

        <h3 className="cap-card__title">
          {title[0]}
          <br />
          {title[1]}
        </h3>

        <p className="cap-card__tag">{tag}</p>
      </div>

      <span className="cap-card__cta" aria-hidden="true">
        <ArrowUpRight size={14} strokeWidth={2.4} />
      </span>
    </article>
  );
}
