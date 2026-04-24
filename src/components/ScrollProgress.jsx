import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const setProgress = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? scrollTop / height : 0;
      gsap.to(barRef.current, { scaleX: progress, duration: 0.2, ease: "power2.out" });
    };

    setProgress();
    window.addEventListener("scroll", setProgress, { passive: true });
    return () => window.removeEventListener("scroll", setProgress);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[70] h-px w-full bg-white/5">
      <div ref={barRef} className="h-full origin-left scale-x-0 bg-gradient-to-r from-teal via-volt to-ember" />
    </div>
  );
}
