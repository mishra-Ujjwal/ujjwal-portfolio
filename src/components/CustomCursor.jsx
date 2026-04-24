import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { isCoarsePointer, prefersReducedMotion } from "../utils/motion";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion() || isCoarsePointer()) return undefined;

    const dotX = gsap.quickTo(dotRef.current, "x", { duration: 0.12, ease: "power3.out" });
    const dotY = gsap.quickTo(dotRef.current, "y", { duration: 0.12, ease: "power3.out" });
    const ringX = gsap.quickTo(ringRef.current, "x", { duration: 0.38, ease: "power3.out" });
    const ringY = gsap.quickTo(ringRef.current, "y", { duration: 0.38, ease: "power3.out" });

    const move = (event) => {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
      dotX(event.clientX);
      dotY(event.clientY);
      ringX(event.clientX);
      ringY(event.clientY);
    };

    const enter = () => gsap.to(ringRef.current, { scale: 1.65, borderColor: "rgba(215,255,114,.65)", duration: 0.25 });
    const leave = () => gsap.to(ringRef.current, { scale: 1, borderColor: "rgba(75,227,193,.45)", duration: 0.25 });

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, input, textarea").forEach((node) => {
      node.addEventListener("mouseenter", enter);
      node.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      document.querySelectorAll("a, button, input, textarea").forEach((node) => {
        node.removeEventListener("mouseenter", enter);
        node.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      <span
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 border border-teal/45 mix-blend-difference md:block"
      />
      <span
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[81] hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 bg-volt md:block"
      />
    </>
  );
}
