import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/**
 * Momentum scrolling. Native wheel scrolling is stepped and abrupt; lerping
 * the scroll position every frame makes it glide. Bails out entirely under
 * prefers-reduced-motion, and tears down both the rAF loop and the instance so
 * a remount never leaves two loops fighting over the scroll position.
 */
export default function SmoothScroll({ children }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // `anchors` is off in Lenis by default: without it every nav link and CTA
    // hard-jumps to its target, which reads as broken next to smoothed wheel
    // scrolling. `respectReducedMotion` is already Lenis's own default.
    const lenis = new Lenis({
      lerp: 0.09,
      wheelMultiplier: 1,
      anchors: true,
      stopInertiaOnNavigate: true,
    });
    let id = requestAnimationFrame(function loop(time) {
      lenis.raf(time);
      id = requestAnimationFrame(loop);
    });

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);

  return children;
}
