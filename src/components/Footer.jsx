import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { profile } from "../data/portfolio";

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: footerRef.current, start: "top 92%" }
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative z-10 border-t border-white/10 bg-void px-5 py-8">
      <div className="footer-line mb-8 h-px origin-left bg-gradient-to-r from-teal via-volt to-transparent" />
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>Designed and engineered by {profile.name}. Built with React, Tailwind, and GSAP.</p>
        <div className="flex gap-4">
          {profile.socials.map(({ label, href }) => (
            <a key={label} href={href} className="transition hover:text-teal">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
