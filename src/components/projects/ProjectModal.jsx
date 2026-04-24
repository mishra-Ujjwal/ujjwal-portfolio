import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowUpRight, Github, X } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  const overlayRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!project) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKey);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        overlayRef.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.28, ease: "power2.out" }
      );

      gsap.fromTo(
        panelRef.current,
        { autoAlpha: 0, y: 36, scale: 0.96 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.44, ease: "power3.out" }
      );

      gsap.fromTo(
        ".modal-reveal",
        { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.07, ease: "power3.out", delay: 0.08 }
      );
    }, panelRef);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
      ctx.revert();
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleOverlayClick = (event) => {
    if (event.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[90] bg-black/52 px-4 py-6 backdrop-blur-xl sm:px-6 lg:px-8"
      onMouseDown={handleOverlayClick}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-center">
        <div
          ref={panelRef}
          className="relative max-h-[92vh] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#f4efe5] text-[#181717] shadow-[0_32px_120px_rgba(0,0,0,.36)]"
          onMouseDown={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            aria-label="Close modal"
            onClick={onClose}
            className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white/70 text-[#161616] backdrop-blur-xl transition hover:rotate-90"
          >
            <X size={18} />
          </button>

          <div className="max-h-[92vh] overflow-y-auto">
            <div className="relative min-h-[21rem] overflow-hidden sm:min-h-[25rem]">
              <div className="absolute inset-0" style={{ background: project.image }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] bg-[size:42px_42px] opacity-25 mix-blend-soft-light" />
              <div className="relative z-10 flex min-h-[21rem] flex-col justify-end px-6 pb-7 pt-20 text-white sm:min-h-[25rem] sm:px-8">
                <p className="modal-reveal text-xs font-bold uppercase tracking-[0.28em] text-white/72">{project.category}</p>
                <h3 className="modal-reveal mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                  {project.title}
                </h3>
                <p className="modal-reveal mt-5 max-w-3xl text-base leading-8 text-white/84">{project.summary}</p>
              </div>
            </div>

            <div className="grid gap-8 px-6 py-7 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-12 lg:py-10">
              <div className="grid gap-6">
                <Section title="Problem Statement" body={project.problem} />
                <Section title="My Role" body={project.role} />
                <Section title="Development Approach" body={project.approach} />
                <Section title="Final Outcome" body={project.outcome} />
              </div>

              <div className="grid gap-6">
                <Panel title="Tech Stack">
                  <div className="modal-reveal flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="border border-black/10 bg-black/[0.03] px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#49453d]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Panel>

                <Panel title="Key Features">
                  <ul className="grid gap-3">
                    {project.features.map((item) => (
                      <li key={item} className="modal-reveal border border-black/8 bg-white/45 px-4 py-3 text-sm leading-7 text-[#393632]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </Panel>

                <Panel title="Challenges Solved">
                  <ul className="grid gap-3">
                    {project.challenges.map((item) => (
                      <li key={item} className="modal-reveal border border-black/8 bg-white/45 px-4 py-3 text-sm leading-7 text-[#393632]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </Panel>

                <div className="modal-reveal flex flex-wrap gap-3 pt-2">
                  {/* Replace `liveUrl` in src/data/projectsData.js with your actual deployed project links. */}
                  <a
                    href={project.liveUrl}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#171717] bg-[#171717] px-5 text-sm font-bold uppercase tracking-[0.16em] text-[#f4efe5] transition hover:translate-y-[-2px]"
                  >
                    View Live
                    <ArrowUpRight size={16} />
                  </a>
                  {/* Replace `codeUrl` in src/data/projectsData.js with your actual repository links. */}
                  <a
                    href={project.codeUrl}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/12 bg-white/55 px-5 text-sm font-bold uppercase tracking-[0.16em] text-[#171717] transition hover:translate-y-[-2px]"
                  >
                    View Code
                    <Github size={16} />
                  </a>
                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-black/12 bg-transparent px-5 text-sm font-bold uppercase tracking-[0.16em] text-[#49453d] transition hover:border-black/20 hover:text-[#171717]"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, body }) {
  return (
    <section className="modal-reveal">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#7a7366]">{title}</p>
      <p className="mt-4 text-[15px] leading-8 text-[#312e2a]">{body}</p>
    </section>
  );
}

function Panel({ title, children }) {
  return (
    <section className="border border-black/8 bg-white/45 p-5">
      <p className="modal-reveal text-xs font-bold uppercase tracking-[0.22em] text-[#7a7366]">{title}</p>
      <div className="mt-4">{children}</div>
    </section>
  );
}
