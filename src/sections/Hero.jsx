import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDown } from "lucide-react";
import MagneticButton from "../components/MagneticButton";
import { profile } from "../data/portfolio";
import { isCoarsePointer, prefersReducedMotion } from "../utils/motion";

export default function Hero() {
  const heroRef = useRef(null);
  const visualRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".hero-action, .hero-social", { autoAlpha: 1 });

      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
        onComplete: () => {
          gsap.set(".hero-action, .hero-social", { autoAlpha: 1, y: 0, x: 0 });
        }
      });
      tl.from(".loader-slice", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 0.55,
        stagger: 0.08
      })
        .to(".loader-slice", {
          scaleX: 0,
          transformOrigin: "right",
          duration: 0.55,
          stagger: 0.08
        })
        .from(".hero-kicker", { opacity: 0, y: 20, duration: 0.75 }, "-=0.28")
        .from(".hero-word", { yPercent: 112, duration: 0.9, stagger: 0.065 }, "-=0.48")
        .from(".hero-copy", { opacity: 0, y: 28, duration: 0.8 }, "-=0.45")
        .fromTo(
          ".hero-action",
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.08, immediateRender: false },
          "-=0.35"
        )
        .fromTo(
          ".hero-social",
          { autoAlpha: 0, x: -18 },
          { autoAlpha: 1, x: 0, duration: 0.55, stagger: 0.06, immediateRender: false },
          "-=0.35"
        )
        .from(".visual-card", { opacity: 0, y: 70, rotateX: -18, rotateZ: 4, duration: 1.05, stagger: 0.12 }, "-=0.9");

      gsap.to(".orbital-ring", {
        rotate: 360,
        duration: 28,
        repeat: -1,
        ease: "none"
      });

      gsap.to(".floating-chip", {
        y: (index) => (index % 2 ? 14 : -16),
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.25
      });
    }, heroRef);

    const onMouseMove = (event) => {
      if (!visualRef.current || prefersReducedMotion() || isCoarsePointer()) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      gsap.to(visualRef.current, {
        rotateY: x * 10,
        rotateX: -y * 8,
        x: x * 22,
        y: y * 18,
        duration: 0.7,
        ease: "power3.out"
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      ctx.revert();
    };
  }, []);

const words = ["From", "concept", "to", "production,", "I", "build", "everything."];
  const particles = Array.from({ length: 24 }, (_, index) => index);

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen overflow-hidden pt-28">
      <div className="pointer-events-none absolute inset-0 z-20 grid grid-rows-4">
        {[0, 1, 2, 3].map((item) => (
          <span key={item} className="loader-slice origin-left bg-mercury" />
        ))}
      </div>

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal/10" />
        <div className="orbital-ring absolute left-1/2 top-[48%] h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10" />
        {particles.map((particle) => (
          <span
            key={particle}
            ref={(node) => {
              particlesRef.current[particle] = node;
            }}
            className="absolute h-1 w-1 bg-teal/50"
            style={{
              left: `${8 + ((particle * 37) % 86)}%`,
              top: `${16 + ((particle * 53) % 72)}%`,
              opacity: 0.25 + (particle % 4) * 0.12
            }}
          />
        ))}
      </div>

      <div className="section-shell flex items-center justify-center relative z-10  min-h-[calc(100vh-7rem)] items-center  pb-20 ">
        <div>
          <div className="hero-kicker mb-6 flex items-center justify-center inline-flex text-center items-center gap-3 border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-teal">
            <span className="h-1.5 w-1.5 bg-volt text-center shadow-[0_0_18px_rgba(215,255,114,.75)]" />
            {profile.role}
          </div>

          <h1 className="max-w-5xl text-balance text-5xl text-center font-black leading-[0.94] tracking-tight text-mercury sm:text-7xl lg:text-7xl">
            {words.map((word) => (
              <span key={word} className="mr-3 inline-block overflow-hidden pb-2 sm:mr-4">
                <span className="hero-word inline-block">{word}</span>
              </span>
            ))}
          </h1>

          {/* <p className="hero-copy mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            {profile.tagline} I combine full-stack engineering, refined interfaces, and practical product thinking
            for systems that feel sharp from first load to final click.
          </p> */}

          <div className="mt-9 flex items-center justify-center flex-col gap-3 sm:flex-row">
            <MagneticButton href="#projects" variant="primary" className="hero-action !opacity-100">
              View Projects
            </MagneticButton>
            {/* <MagneticButton href="#contact" className="hero-action">
              Contact Me
            </MagneticButton> */}
            <MagneticButton href="/ujjwal-resume.pdf" variant="ghost" className="hero-action !border-white/25 !bg-carbon/80 !text-mercury !opacity-100" download>
              Resume
            </MagneticButton>
          </div>

          {/* <div className="hero-social mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
            {profile.socials.map(({ label, handle, href, icon: Icon }) => {
              const SocialIcon = Icon || ExternalLink;
              const isExternal = href.startsWith("http");

              return (
              <a
                key={label}
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className="group relative flex min-h-20 items-center gap-3 overflow-hidden border border-white/12 bg-carbon/65 px-4 py-3 text-left shadow-[0_18px_60px_rgba(0,0,0,.24)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-teal/50 hover:bg-white/[0.065]"
              >
                <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-teal via-volt to-transparent transition duration-500 group-hover:scale-x-100" />
                <span className="grid h-10 w-10 shrink-0 place-items-center border border-white/10 bg-white/[0.045] text-teal transition group-hover:border-volt/40 group-hover:text-volt">
                  <SocialIcon size={18} strokeWidth={1.8} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-bold uppercase tracking-[0.2em] text-mercury">{label}</span>
                  <span className="mt-1 block truncate text-sm font-medium text-muted group-hover:text-teal">{handle}</span>
                </span>
              </a>
              );
            })}
          </div> */}

          {/* <div className="hero-social mt-3 max-w-2xl">
            <a
              href={`mailto:${profile.email}`}
              className="group flex min-h-14 items-center gap-3 border border-white/10 bg-white/[0.035] px-4 text-sm text-muted transition duration-300 hover:border-ember/45 hover:text-ember"
            >
              <span className="grid h-9 w-9 place-items-center border border-white/10 bg-white/[0.04] text-ember">
                <Mail size={16} />
              </span>
              <span className="truncate">{profile.email}</span>
            </a>
          </div> */}
        </div>

        {/* <div ref={visualRef} className="relative mx-auto w-full max-w-lg [perspective:1200px]">
          <div className="visual-card premium-border glass-panel relative min-h-[31rem] overflow-hidden p-6 shadow-glow">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_15%,rgba(75,227,193,.18),transparent_30%),radial-gradient(circle_at_85%_80%,rgba(255,92,53,.14),transparent_30%)]" />
            <div className="relative z-10 flex items-start justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted">Live Build System</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-mercury">Interface Engine</h2>
              </div>
              <span className="border border-volt/30 bg-volt/10 px-3 py-1 font-mono text-xs text-volt">ONLINE</span>
            </div>

            <div className="relative z-10 mt-10 grid gap-4">
              {["React Motion Layer", "Node API Core", "Frappe Workflow", "Mongo Data Mesh"].map((item, index) => (
                <div
                  key={item}
                  className="floating-chip flex items-center justify-between border border-white/10 bg-void/45 p-4 backdrop-blur-xl"
                  style={{ marginLeft: `${index * 18}px`, marginRight: `${(3 - index) * 10}px` }}
                >
                  <span className="text-sm font-semibold text-mercury">{item}</span>
                  <span className="h-2 w-16 bg-gradient-to-r from-teal via-volt to-transparent opacity-80" />
                </div>
              ))}
            </div>

            <div className="absolute bottom-6 left-6 right-6 z-10 border border-white/10 bg-carbon/80 p-4">
              <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-muted">
                <span>Launch Readiness</span>
                <span className="text-teal">97%</span>
              </div>
              <div className="h-2 bg-white/10">
                <div className="h-full w-[97%] bg-gradient-to-r from-teal to-volt" />
              </div>
            </div>
          </div>

          <div className="visual-card absolute -right-3 top-10 -z-10 h-full w-full border border-ember/20 bg-ember/5" />
          <div className="visual-card absolute -bottom-4 -left-4 -z-20 h-full w-full border border-teal/15 bg-teal/5" />
        </div> */}
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-muted md:flex"
      >
        <span>Scroll</span>
        <span className="grid h-12 w-7 place-items-center border border-white/15">
          <ArrowDown className="animate-bounce text-teal" size={15} />
        </span>
      </a>
    </section>
  );
}
