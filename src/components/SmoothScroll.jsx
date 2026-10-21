import { useEffect } from "react";

/**
 * Momentum scrolling. Native wheel scrolling is stepped and abrupt; lerping
 * the scroll position every frame makes it glide. Bails out entirely under
 * prefers-reduced-motion, and tears down both the rAF loop and the instance so
 * a remount never leaves two loops fighting over the scroll position.
 *
 * Lenis is imported dynamically so its parse cost (it pulls in a rAF loop and
 * event-delegation logic) does not land on the critical path. The user cannot
 * scroll far enough in the first 200ms to notice the ~1-frame delay.
 */
export default function SmoothScroll({ children }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let id = 0;
    let lenis = null;

    // `anchors` is off in Lenis by default: without it every nav link and CTA
    // hard-jumps to its target, which reads as broken next to smoothed wheel
    // scrolling. `respectReducedMotion` is already Lenis's own default.
    Promise.all([
      import("lenis"),
      import("lenis/dist/lenis.css"),
    ]).then(([{ default: Lenis }]) => {
      lenis = new Lenis({
        lerp: 0.09,
        wheelMultiplier: 1,
        anchors: true,
        stopInertiaOnNavigate: true,
      });
      function loop(time) {
        lenis.raf(time);
        id = requestAnimationFrame(loop);
      }
      id = requestAnimationFrame(loop);
    });

    return () => {
      cancelAnimationFrame(id);
      lenis?.destroy();
    };
  }, []);

  return children;
}
