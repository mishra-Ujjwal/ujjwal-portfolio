import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SectionHeader from "../components/SectionHeader";
import { timeline } from "../data/portfolio";
import { revealUp } from "../utils/motion";

export default function Experience() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      revealUp(".timeline-card", { trigger: sectionRef.current, y: 46, stagger: 0.16 });
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 40%",
            scrub: true
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} data-section className="section-padding relative">
      <div className="section-shell">
        <SectionHeader
          number="04"
          eyebrow="Experience / Timeline"

        />

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-1/2" />
          <div ref={lineRef} className="absolute left-4 top-0 h-full w-px origin-top bg-gradient-to-b from-teal via-volt to-ember shadow-glow md:left-1/2" />

          <div className="grid gap-8">
            {timeline.map((item, index) => (
              <article
                key={`${item.year}-${item.title}`}
                className={`timeline-card relative pl-12 md:w-[calc(50%-2.5rem)] md:pl-0 ${
                  index % 2 ? "md:ml-auto" : ""
                }`}
              >
                <span className="absolute left-0 top-8 z-10 h-8 w-8 border border-teal/50 bg-void shadow-glow md:left-auto md:right-[-3.5rem] md:top-9">
                  <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 bg-volt" />
                </span>
                {index % 2 === 1 && (
                  <span className="absolute top-9 hidden h-8 w-8 border border-teal/50 bg-void shadow-glow md:left-[-3.5rem] md:block">
                    <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 bg-volt" />
                  </span>
                )}
                <div className="glass-panel group relative overflow-hidden p-6 transition duration-500 hover:-translate-y-2 hover:border-ember/35">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-teal to-transparent opacity-60" />
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-4xl font-black text-mercury">{item.year}</span>
                    <span className="border border-white/10 bg-white/[0.045] px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-teal">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-black tracking-tight text-mercury">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
