import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SectionHeader from "../components/SectionHeader";
import { services } from "../data/portfolio";
import { revealUp } from "../utils/motion";

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      revealUp(".service-card", { trigger: sectionRef.current, y: 40, stagger: 0.08 });
      gsap.fromTo(
        ".services-marquee",
        { xPercent: 0 },
        {
          xPercent: -18,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} data-section className="section-padding relative overflow-hidden">
      <div className="services-marquee pointer-events-none absolute top-10 whitespace-nowrap text-[12rem] font-black uppercase leading-none text-white/[0.025]">
        Build Systems Build Systems Build Systems
      </div>
      <div className="section-shell relative">
        <SectionHeader
          number="05"
          eyebrow="Services"
          title="What I build for startups, teams, and ambitious products."
          copy="Focused execution across the parts that matter: interfaces, dashboards, APIs, internal tools, and automation."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, icon: Icon, copy }) => (
            <article
              key={title}
              className="service-card group relative min-h-[18rem] overflow-hidden border border-white/10 bg-white/[0.035] p-6 transition duration-500 hover:-translate-y-2 hover:border-teal/45 hover:bg-white/[0.06]"
            >
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -right-10 -top-10 h-36 w-36 bg-teal/10 blur-2xl" />
                <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-ember via-teal to-transparent" />
              </div>
              <div className="relative z-10">
                <div className="grid h-14 w-14 place-items-center border border-white/10 bg-carbon text-teal">
                  <Icon size={23} />
                </div>
                <h3 className="mt-8 text-2xl font-black tracking-tight text-mercury">{title}</h3>
                <p className="mt-5 text-sm leading-7 text-muted">{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
