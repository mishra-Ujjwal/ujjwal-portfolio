import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { magneticButton } from "../utils/motion";

const variants = {
  primary: "border-teal/40 bg-teal text-void hover:bg-volt hover:border-volt",
  secondary: "border-white/15 bg-white/[0.035] text-mercury hover:border-ember/50 hover:text-ember",
  ghost: "border-white/10 bg-transparent text-muted hover:border-teal/45 hover:text-teal"
};

export default function MagneticButton({
  as: Component = "a",
  href,
  children,
  variant = "secondary",
  icon = true,
  className = "",
  ...props
}) {
  const ref = useRef(null);

  useEffect(() => magneticButton(ref.current, 0.28), []);

  return (
    <Component
      ref={ref}
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden border px-5 text-sm font-bold uppercase tracking-[0.16em] transition duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {icon && (
        <ArrowUpRight
          className="relative z-10 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          size={17}
        />
      )}
    </Component>
  );
}
