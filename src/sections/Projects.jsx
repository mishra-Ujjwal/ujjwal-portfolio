import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SectionHeader from "../components/SectionHeader";
import MagneticButton from "../components/MagneticButton";
import { projects } from "../data/portfolio";
import { isCoarsePointer, prefersReducedMotion, revealUp } from "../utils/motion";

const accentClass = {
  teal: "from-teal/30 via-teal/5",
  ember: "from-ember/30 via-ember/5",
  volt: "from-volt/25 via-volt/5",
  steel: "from-steel/30 via-steel/5"
};

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cleanups = [];

    const ctx = gsap.context(() => {
      revealUp(".project-card", { trigger: sectionRef.current, y: 62, stagger: 0.14 });

      gsap.utils.toArray(".project-card").forEach((card) => {
        gsap.fromTo(
          card.querySelector(".mockup-screen"),
          { scale: 0.92, opacity: 0.68 },
          {
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "bottom 40%",
              scrub: true
            }
          }
        );

        if (prefersReducedMotion() || isCoarsePointer()) return;

        const glow = card.querySelector(".project-glow");
        const image = card.querySelector(".project-tilt");
        const xTo = gsap.quickTo(glow, "x", { duration: 0.35, ease: "power3.out" });
        const yTo = gsap.quickTo(glow, "y", { duration: 0.35, ease: "power3.out" });

        const move = (event) => {
          const rect = card.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;
          xTo(x - rect.width / 2);
          yTo(y - rect.height / 2);
          gsap.to(image, {
            rotateY: (x / rect.width - 0.5) * 8,
            rotateX: -(y / rect.height - 0.5) * 6,
            duration: 0.45,
            ease: "power3.out"
          });
        };

        const leave = () => {
          gsap.to(image, { rotateX: 0, rotateY: 0, duration: 0.45, ease: "power3.out" });
        };

        card.addEventListener("mousemove", move);
        card.addEventListener("mouseleave", leave);
        cleanups.push(() => {
          card.removeEventListener("mousemove", move);
          card.removeEventListener("mouseleave", leave);
        });
      });
    }, sectionRef);

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      ctx.revert();
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} data-section className="section-padding relative overflow-hidden">
      <div className="section-shell">
        <SectionHeader
          number="03"
          eyebrow="Featured Projects"

        />

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <articletiom
              key={project.title}
              className={`project-card group relative overflow-hidden border border-white/10 rounded-2xl bg-graphite/55 p-4 shadow-glow backdrop-blur-xl sm:p-6 lg:grid lg:grid-cols-2 lg:gap-8 ${
                index % 2 ? "lg:[&_.project-copy]:order-2" : ""
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${accentClass[project.accent]} to-transparent opacity-60`} />
              <div className="project-glow pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 rounded-full bg-white/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

              <div className="project-copy relative z-10 flex flex-col justify-between p-2 sm:p-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-teal">{project.eyebrow}</p>
                  <h3 className="mt-4 max-w-xl text-3xl font-black tracking-tight text-mercury sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-muted">{project.summary}</p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    <div className="border border-white/10 bg-void/35 p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted">Problem</p>
                      <p className="mt-3 text-sm leading-7 text-mercury">{project.problem}</p>
                    </div>
                    <div className="border border-white/10 bg-void/35 p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted">Impact</p>
                      <p className="mt-3 text-sm leading-7 text-mercury">{project.impact}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  
                  <div className="flex flex-wrap gap-3">
                    {project.links.map(({ label, href }) => (
                      <MagneticButton key={label} href={href} variant={label === "GitHub" ? "ghost" : "secondary"} className="min-h-11">

                        {label}
                      </MagneticButton>
                    ))}
                  </div>
                </div>
              </div>

              <div className="project-tilt relative z-10 mt-8 border border-white/10 bg-carbon/60 p-4 [transform-style:preserve-3d] lg:mt-0">
  <div className="mockup-screen relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-void">
    <img
      src={project.image}
      alt={project.title}
      className="h-full w-full object-cover object-center  "
      loading="lazy"
    />
    
  </div><h2 className="mt-3">Tech Stack:</h2>
  <div className="mt-2 flex flex-wrap gap-2">
    
                    {project.tech.map((item) => (
                      <span key={item} className="border border-white/10 bg-white/[0.045] px-3 py-2 text-xs font-bold text-muted">
                        {item}
                      </span>
                    ))}
                  </div>
  
</div>
            </articletiom>
          ))}
        </div>
      </div>
    </section>
  );
}
