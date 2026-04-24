import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SectionHeader from "../components/SectionHeader";
import { achievements } from "../data/portfolio";
import { revealUp } from "../utils/motion";

export default function Achievements() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      revealUp(".achievement-card", { trigger: sectionRef.current, y: 38, stagger: 0.09 });

      gsap.utils.toArray(".counter-value").forEach((node) => {
        const value = Number(node.dataset.value);
        const counter = { value: 0 };

        gsap.to(counter, {
          value,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: node,
            start: "top 86%",
            once: true
          },
          onUpdate: () => {
            node.textContent = Math.round(counter.value).toString();
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="achievements" ref={sectionRef} data-section className="section-padding relative">
      <div className="section-shell">
        <SectionHeader
          number="06"
          eyebrow="Achievements / Certifications"
          title="Compact proof points with the signal turned up."
          copy="A snapshot of training, project velocity, and the kind of product discipline I bring into builds."
          align="center"
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {achievements.map(({ value, suffix, label, icon: Icon }) => (
            <article
              key={label}
              className="achievement-card group relative overflow-hidden border border-white/10 bg-carbon/65 p-6 text-center transition duration-500 hover:-translate-y-2 hover:border-volt/40"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(215,255,114,.12),transparent_45%)] opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="relative z-10 mx-auto grid h-14 w-14 place-items-center border border-white/10 bg-white/[0.035] text-teal">
                <Icon size={23} />
              </div>
              <p className="relative z-10 mt-6 text-5xl font-black tracking-tight text-mercury">
                <span className="counter-value" data-value={value}>
                  0
                </span>
                {suffix}
              </p>
              <p className="relative z-10 mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-muted">{label}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {["Full Stack Development Certificate", "Workshop Certificate", "Internship Experience"].map((item) => (
            <div key={item} className="achievement-card border border-white/10 bg-white/[0.035] p-5 text-sm font-bold text-mercury">
              <span className="mr-3 font-mono text-xs text-teal">CERT</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
