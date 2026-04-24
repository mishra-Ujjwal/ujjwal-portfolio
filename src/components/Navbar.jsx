import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";
import { navItems, profile } from "../data/portfolio";

export default function Navbar() {
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = ["hero", ...navItems.map((item) => item.href.replace("#", ""))];
    const observers = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean)
      .map((section) => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) setActive(section.id);
          },
          { rootMargin: "-42% 0px -50% 0px", threshold: 0 }
        );
        observer.observe(section);
        return observer;
      });

    const onScroll = () => {
      navRef.current?.classList.toggle("bg-void/75", window.scrollY > 40);
      navRef.current?.classList.toggle("border-white/10", window.scrollY > 40);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observers.forEach((observer) => observer.disconnect());
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuRef.current) return;
    gsap.to(menuRef.current, {
      autoAlpha: open ? 1 : 0,
      y: open ? 0 : -18,
      duration: 0.32,
      ease: "power3.out",
      pointerEvents: open ? "auto" : "none"
    });
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      ref={navRef}
      className="fixed inset-x-0 top-0 z-[60] border-b border-transparent px-4 py-4 backdrop-blur-xl transition duration-300"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#hero" className="group flex items-center gap-3" aria-label="Go to home">
          <span className="grid h-9 w-9 place-items-center border border-teal/30 bg-teal/10 font-black text-teal shadow-glow">
            UM
          </span>
          <span className="hidden text-sm font-semibold tracking-[0.18em] text-mercury sm:block">
            {profile.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-none border border-white/10 bg-white/[0.035] p-1 md:flex">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] transition ${
                  active === id ? "text-void" : "text-muted hover:text-mercury"
                }`}
              >
                {active === id && <span className="absolute inset-0 bg-volt" />}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </div>

        <a
          href="#contact"
          className="hidden border border-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-mercury transition hover:border-teal/50 hover:text-teal md:inline-flex"
        >
          Let&apos;s Build
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center border border-white/15 bg-white/[0.04] text-mercury md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <div
        ref={menuRef}
        className="invisible absolute left-4 right-4 top-[4.6rem] border border-white/10 bg-carbon/95 p-3 opacity-0 shadow-glow backdrop-blur-2xl md:hidden"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={closeMenu}
            className="flex border-b border-white/10 px-3 py-4 text-sm font-bold uppercase tracking-[0.18em] text-muted last:border-0 hover:text-teal"
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
