import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { profile } from "../data/portfolio";
import { isCoarsePointer, prefersReducedMotion, revealUp } from "../utils/motion";

export default function About() {
  const sectionRef = useRef(null);
  const posterRef = useRef(null);

  useEffect(() => {
    const cleanups = [];

    const ctx = gsap.context(() => {
      revealUp(".about-copy", { trigger: sectionRef.current, stagger: 0.1, y: 42 });
      revealUp(".about-card", { trigger: sectionRef.current, stagger: 0.08, y: 34 });
      revealUp(".about-social", { trigger: sectionRef.current, stagger: 0.07, y: 26 });

      gsap.fromTo(
        ".about-poster",
        { autoAlpha: 0, scale: 0.92, y: 56 },
        {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          duration: 1.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%"
          }
        }
      );

      gsap.to(".about-parallax", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.to(".about-scan", {
        yPercent: 180,
        duration: 4.8,
        repeat: -1,
        ease: "sine.inOut",
        yoyo: true
      });

      if (posterRef.current && !prefersReducedMotion() && !isCoarsePointer()) {
        const move = (event) => {
          const rect = posterRef.current.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;

          gsap.to(posterRef.current, {
            rotateY: x * 7,
            rotateX: -y * 6,
            x: x * 12,
            y: y * 10,
            duration: 0.45,
            ease: "power3.out"
          });
        };

        const leave = () => {
          gsap.to(posterRef.current, {
            rotateY: 0,
            rotateX: 0,
            x: 0,
            y: 0,
            duration: 0.55,
            ease: "power3.out"
          });
        };

        posterRef.current.addEventListener("mousemove", move);
        posterRef.current.addEventListener("mouseleave", leave);
        cleanups.push(() => {
          posterRef.current?.removeEventListener("mousemove", move);
          posterRef.current?.removeEventListener("mouseleave", leave);
        });
      }
    }, sectionRef);

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      ctx.revert();
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} data-section className="section-padding relative overflow-hidden">
      <div className="section-shell">
        <SectionHeader
          number="01"
          eyebrow="About Me"
        />

        <div className="grid gap-8 xl:grid-cols-[.95fr_1.05fr] xl:items-start">
          <div className="about-poster relative ">
            <div className="absolute -left-10 top-16 h-48 w-48 rounded-full bg-teal/10 blur-3xl" />
            <div className="absolute -right-4 bottom-12 h-56 w-56 rounded-full bg-ember/10 blur-3xl" />

            <div
              ref={posterRef}
              className="about-parallax relative overflow-hidden border border-white/10 bg-carbon/70 p-3 shadow-glow [transform-style:preserve-3d]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(75,227,193,.12),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(255,92,53,.12),transparent_28%)]" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-teal via-volt to-transparent" />
              <div className="absolute inset-x-6 top-0 h-20 bg-gradient-to-b from-teal/12 to-transparent" />
              <div className="about-scan pointer-events-none absolute inset-x-8 top-0 h-24 bg-gradient-to-b from-transparent via-white/10 to-transparent blur-xl" />

              <div className="relative overflow-hidden border border-white/10 bg-void/75">
                <img
  src="/dp.jpeg" // put inside public folder
  alt="Ujjwal Mishra"
  className="h-[580px] w-full object-cover rounded-lg"
/>
              </div>

              <div className="pointer-events-none absolute left-6 top-6 border border-white/10 bg-void/75 px-3 py-2 backdrop-blur-xl">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-teal">Profile Signal</p>
                <p className="mt-2 text-sm font-bold text-mercury">{profile.name}</p>
              </div>

              {/* <div className="absolute bottom-6 left-6 right-6 grid gap-3 sm:grid-cols-3">
                {aboutCards.map((card) => (
                  <div key={card.metric} className="about-card border border-white/10 bg-carbon/82 p-4 backdrop-blur-xl">
                    <p className="text-3xl font-black tracking-tight text-mercury">{card.metric}</p>
                    <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-teal">{card.label}</p>
                  </div>
                ))}
              </div> */}
            </div>
          </div>

          <div className="grid gap-5 -mt-5">
            <article className="about-copy glass-panel relative overflow-hidden p-6 sm:p-8">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-teal/15" />
              <div className="absolute -bottom-16 -left-12 h-48 w-48 rounded-full border border-ember/15" />

              {/* <div className="relative z-10 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-muted">
                <span className="border border-white/10 bg-white/[0.04] px-3 py-2 text-teal">Full Stack</span>
                <span className="border border-white/10 bg-white/[0.04] px-3 py-2">React / Node</span>
                <span className="border border-white/10 bg-white/[0.04] px-3 py-2">Frappe / ERPNext</span>
              </div> */}

              {/* <h3 className="relative z-10 mt-6 text-balance text-3xl font-black tracking-tight text-mercury sm:text-2xl">
                I turn business logic into interfaces that feel premium, clear, and fast to use.
              </h3> */}

              <div className="relative z-10 -mt-3 grid gap-3 text-base leading-8 text-muted">
                <p>
  I’m <span className="text-mercury">{profile.name}</span>, a full stack developer with hands-on experience in
  building scalable business applications using React, Node.js, and Frappe.
</p>

<p>
  I’ve developed systems like CRM lead management, HRMS modules, and custom dashboards where I handled both
  frontend architecture and backend integrations. My work involves designing APIs, managing data flow, and
  creating responsive, production-ready interfaces.
</p>

<p>
  I focus on building structured, maintainable systems where performance, usability, and clean design go
  hand in hand — especially in complex internal tools.
</p>
              </div>

              {/* <div className="relative z-10 mt-8 flex flex-wrap gap-2">
                {strengths.map((item) => (
                  <span
                    key={item}
                    className="about-card border border-white/10 bg-void/45 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted transition hover:border-teal/40 hover:text-teal"
                  >
                    {item}
                  </span>
                ))}
              </div> */}
            </article>

            <div className="grid gap-4 lg:grid-cols-[1.1fr_.9fr]">
              {/* <article className="about-copy border border-white/10 bg-white/[0.035] p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Mail size={18} className="text-ember" />
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted">Direct Contact</p>
                </div>
                <a href={`mailto:${profile.email}`} className="text-lg font-bold text-mercury transition hover:text-ember">
                  {profile.email}
                </a>
                <div className="mt-5 flex items-center gap-3 text-sm text-muted">
                  <MapPin size={16} className="text-teal" />
                  {profile.location}
                </div>
              </article> */}

              {/* <article className="about-copy border border-white/10 bg-white/[0.035] p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted">What I Build</p>
                <p className="mt-4 text-sm leading-7 text-mercury">
                  Product sites, full-stack apps, ERP modules, dashboard systems, admin panels, and interfaces that
                  need both engineering accuracy and visual confidence.
                </p>
              </article> */}
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {profile.socials.map(({ label, handle, href, icon: Icon }) => {
                const external = href.startsWith("http");
                return (
                  <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="about-social group relative overflow-hidden border border-white/10 bg-graphite/60 p-5 transition duration-300 hover:-translate-y-1 hover:border-teal/45 hover:bg-white/[0.06]"
                  >
                    <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-teal via-volt to-transparent transition duration-500 group-hover:scale-x-100" />
                    <div className="relative z-10 flex items-start justify-between gap-3">
                      <span className="grid h-11 w-11 place-items-center border border-white/10 bg-carbon text-teal transition group-hover:border-volt/40 group-hover:text-volt">
                        <Icon size={18} />
                      </span>
                      <ArrowUpRight size={18} className="text-muted transition group-hover:text-teal" />
                    </div>
                    <p className="relative z-10 mt-6 text-lg font-black tracking-tight text-mercury">{label}</p>
                    <p className="relative z-10 mt-2 text-sm text-muted">{handle}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
