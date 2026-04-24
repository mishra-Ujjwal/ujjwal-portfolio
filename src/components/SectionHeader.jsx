export default function SectionHeader({ eyebrow, title, copy, align = "left", number }) {
  const centered = align === "center";

  return (
    <div
      data-section-label
      className={`mb-12 max-w-3xl ${centered ? "mx-auto text-center" : ""}`}
    >
      <div className={`mb-4 flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
        {number && <span className="font-mono text-xs uppercase tracking-[0.28em] text-teal">{number}</span>}
        <span className="h-px w-12 bg-gradient-to-r from-teal to-transparent" />
        <p className="font-mono text-xs uppercase tracking-[0.32em] text-muted">{eyebrow}</p>
      </div>
      <h2 className="text-balance text-4xl font-black tracking-tight text-mercury sm:text-5xl lg:text-5xl">
        {title}
      </h2>
      {copy && <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">{copy}</p>}
    </div>
  );
}
