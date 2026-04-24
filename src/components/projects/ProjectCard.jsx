import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, onOpen, active = false }) {
  const BadgeIcon = project.badgeIcon;

  return (
    <button
      type="button"
      onClick={onOpen}
      className={`project-card group relative block min-h-[31rem] w-full shrink-0 overflow-hidden rounded-[2rem] border border-black/10 bg-[#f6f1e6] text-left text-[#161616] shadow-[0_28px_90px_rgba(18,18,18,.14)] transition duration-500 ${
        active ? "scale-[1.01]" : "scale-100"
      }`}
    >
      <div
        className="project-image absolute inset-0 scale-100 transition duration-700"
        style={{ background: project.image }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/18 to-transparent transition duration-500 group-hover:from-black/82 group-hover:via-black/38" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] bg-[size:34px_34px] opacity-25 mix-blend-soft-light" />

      <div className="absolute left-6 top-6 z-10 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-full border border-white/18 bg-black/22 text-white backdrop-blur-xl">
          <BadgeIcon size={18} />
        </span>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-white/72">{project.category}</p>
          <p className="mt-1 text-xs font-medium text-white/58">Case study</p>
        </div>
      </div>

      <div className="project-title-wrap absolute inset-x-0 bottom-0 z-10 p-6 sm:p-7">
        <div className="max-w-xl">
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-white/18 bg-white/10 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/88 backdrop-blur-xl"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="project-title text-3xl font-black tracking-tight text-white sm:text-[2.3rem]">
            {project.title}
          </h3>
          <p className="mt-4 max-w-lg text-sm leading-7 text-white/80 sm:text-[15px]">{project.description}</p>
        </div>

        <div className="mt-7 flex items-center justify-between">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-white/70">
            Open case study
            <ArrowRight size={14} />
          </span>
          <span className="project-arrow grid h-12 w-12 place-items-center rounded-full border border-white/18 bg-white/10 text-white backdrop-blur-xl transition duration-500">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </div>
    </button>
  );
}
