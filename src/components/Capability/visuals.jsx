/**
 * Mini 3D objects for the capability hub.
 *
 * Deliberately not icon-in-a-box: each pillar gets a small *modelled* object
 * (a browser window, a phone, a node graph, an AI core) so the cards read as
 * physical panels rather than a feature list. Pure CSS/SVG — a raster asset per
 * object would cost four images and still not scale.
 */

function Frame({ size, variant, children }) {
  return (
    <span
      className={`mini3d mini3d--${variant}`}
      style={{ width: size, height: Math.round(size * 0.8) }}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

export function BrowserWindow({ size = 78 }) {
  return (
    <Frame size={size} variant="browser">
      <span className="mini3d__bar">
        <span />
        <span />
        <span />
      </span>
      <span className="mini3d__glyph">&lt;/&gt;</span>
    </Frame>
  );
}

export function Phone({ size = 54 }) {
  return (
    <Frame size={Math.round(size * 0.88)} variant="phone">
      <span className="mini3d__notch" />
      <span className="mini3d__glyph mini3d__glyph--xs">APP</span>
    </Frame>
  );
}

export function Nodes({ size = 74 }) {
  return (
    <svg
      className="mini3d mini3d--svg"
      width={size}
      height={size}
      viewBox="0 0 72 72"
      aria-hidden="true"
    >
      <g stroke="rgba(22,119,255,.26)" strokeWidth="1.2" fill="none">
        <path d="M36 34V13M36 34 15 52M36 34l21 18M15 52l42 0" />
      </g>
      <g fill="#1677FF">
        <circle cx="36" cy="13" r="4.5" />
        <circle cx="36" cy="34" r="5.5" />
        <circle cx="15" cy="52" r="4" />
        <circle cx="57" cy="52" r="4" />
      </g>
      <g fill="#B9D9FF">
        <circle cx="36" cy="13" r="1.6" />
        <circle cx="15" cy="52" r="1.4" />
        <circle cx="57" cy="52" r="1.4" />
      </g>
    </svg>
  );
}

export function AiCore({ size = 74 }) {
  return (
    <svg
      className="mini3d mini3d--svg"
      width={size}
      height={size}
      viewBox="0 0 72 72"
      aria-hidden="true"
    >
      <g stroke="rgba(22,119,255,.24)" strokeWidth="1.2" fill="none">
        <path d="M36 36 36 12M36 36 14 26M36 36 14 48M36 36l22-10M36 36l22 12M36 36v22" />
      </g>
      <g fill="#1677FF">
        <circle cx="36" cy="36" r="5" />
      </g>
      <g fill="#8FC2FF">
        <circle cx="36" cy="12" r="3.4" />
        <circle cx="14" cy="26" r="3" />
        <circle cx="14" cy="48" r="3" />
        <circle cx="58" cy="26" r="3" />
        <circle cx="58" cy="48" r="3" />
        <circle cx="36" cy="58" r="3" />
      </g>
    </svg>
  );
}

/**
 * The centrepiece. A rounded glass core carrying the black MITI mark, wrapped
 * in two thin blue orbit rings and a soft halo. It floats gently so it reads as
 * the live centre of the ecosystem rather than a static tile — the logo is
 * strong enough on its own, so the effect stays under the mark.
 */
export function MitiCore() {
  return (
    <div className="core">
      <span className="core__glow" aria-hidden="true" />
      <span className="core__ring core__ring--a" aria-hidden="true" />
      <span className="core__ring core__ring--b" aria-hidden="true" />

      <div className="core__float">
        <div className="core__body">
          <span className="core__inner" aria-hidden="true" />
          <img
            src="/Logo.png"
            alt="MITI"
            className="core__logo"
            width={148}
            height={64}
          />
          <p className="core__label">Digital Core</p>
        </div>
      </div>
    </div>
  );
}
