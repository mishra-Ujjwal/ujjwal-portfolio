import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SectionHeader from "../components/SectionHeader";
import { skills } from "../data/portfolio";
import { revealUp } from "../utils/motion";

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      revealUp(".skill-card", { trigger: sectionRef.current, y: 42, stagger: 0.08 });
      gsap.to(".skill-orbit", {
        rotate: 360,
        duration: 38,
        repeat: -1,
        ease: "none"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} data-section className="section-padding relative overflow-hidden">
      <div className="section-shell">
        <SectionHeader
          number="02"
          eyebrow="Skills / Tech Stack"
          title="What I Work With"
          align="center"
        />

        <div className="relative mx-auto my-6 grid max-w-6xl gap-4 lg:grid-cols-5">
          <div className="skill-orbit  pointer-events-none absolute left-1/2 top-1/2 hidden h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10 lg:block" />
          {skills.map(({ category, icon: Icon, items }, index) => (
            <article
              key={category}
              className="skill-card group relative overflow-hidden border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-teal/45 hover:bg-white/[0.065]"
              style={{ marginTop: index % 2 ? "2.5rem" : "0" }}
            >
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal to-transparent" />
                <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-teal/10 blur-2xl" />
              </div>
              <div className="relative z-10">
                <div className="mb-7 grid h-12 w-12 place-items-center border border-white/10 bg-carbon text-teal transition group-hover:border-volt/40 group-hover:text-volt">
                  <Icon size={21} />
                </div>
                <h3 className="text-xl font-black tracking-tight text-mercury">{category}</h3>
                <div className="mt-6 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="border border-white/10 bg-void/45 px-3 py-2 text-xs font-semibold text-muted transition group-hover:border-white/15 group-hover:text-mercury"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
