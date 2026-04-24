import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const isCoarsePointer = () =>
  typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;

export function revealUp(targets, options = {}) {
  if (prefersReducedMotion()) {
    gsap.set(targets, { opacity: 1, y: 0 });
    return null;
  }

  return gsap.fromTo(
    targets,
    { opacity: 0, y: options.y ?? 48 },
    {
      opacity: 1,
      y: 0,
      duration: options.duration ?? 0.9,
      stagger: options.stagger ?? 0.12,
      ease: options.ease ?? "power3.out",
      scrollTrigger: options.trigger
        ? {
            trigger: options.trigger,
            start: options.start ?? "top 78%",
            once: options.once ?? false
          }
        : undefined
    }
  );
}

export function magneticButton(element, strength = 0.35) {
  if (!element || prefersReducedMotion() || isCoarsePointer()) return () => {};

  const xTo = gsap.quickTo(element, "x", { duration: 0.45, ease: "power3.out" });
  const yTo = gsap.quickTo(element, "y", { duration: 0.45, ease: "power3.out" });

  const move = (event) => {
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    xTo(x * strength);
    yTo(y * strength);
  };

  const leave = () => {
    xTo(0);
    yTo(0);
  };

  element.addEventListener("mousemove", move);
  element.addEventListener("mouseleave", leave);

  return () => {
    element.removeEventListener("mousemove", move);
    element.removeEventListener("mouseleave", leave);
  };
}
