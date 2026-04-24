import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import MagneticButton from "../components/MagneticButton";
import { profile } from "../data/portfolio";
import { revealUp } from "../utils/motion";

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      revealUp(".contact-reveal", { trigger: sectionRef.current, y: 42, stagger: 0.1 });
      gsap.to(".contact-line", {
        scaleX: 1,
        duration: 1.3,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 72%" }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} data-section className="section-padding relative overflow-hidden">
      <div className="absolute inset-x-0 top-1/2 h-px bg-white/10" />
      <div className="contact-line absolute inset-x-0 top-1/2 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-teal to-transparent" />

      <div className="section-shell relative">
        <SectionHeader
          number="07"
          eyebrow="Contact"
          title="Have a product, system, or wild interface idea?"
          copy="Send the signal. I’ll help turn it into something sharp, fast, and genuinely usable."
        />

        <div className="grid gap-6 lg:grid-cols-[.85fr_1.15fr]">
          <aside className="contact-reveal glass-panel relative overflow-hidden p-6 sm:p-8">
            <div className="absolute -right-20 top-10 h-56 w-56 rounded-full bg-teal/10 blur-3xl" />
            <h3 className="relative z-10 text-2xl font-black tracking-tight text-mercury">Let&apos;s build with intent.</h3>
            <p className="relative z-10 mt-5 text-sm leading-7 text-muted">
              I’m open to full stack projects, dashboards, Frappe/ERPNext modules, internship opportunities, and
              frontend-heavy product experiences.
            </p>

            <div className="relative z-10 mt-8 grid gap-3">
              <a href={`mailto:${profile.email}`} className="group flex items-center gap-3 border border-white/10 bg-white/[0.035] p-4 text-muted transition hover:border-teal/40 hover:text-teal">
                <Mail size={18} />
                {profile.email}
              </a>
              <div className="flex items-center gap-3 border border-white/10 bg-white/[0.035] p-4 text-muted">
                <MapPin size={18} />
                {profile.location}
              </div>
              <a href="https://linkedin.com/" className="flex items-center gap-3 border border-white/10 bg-white/[0.035] p-4 text-muted transition hover:border-teal/40 hover:text-teal">
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a href="https://github.com/" className="flex items-center gap-3 border border-white/10 bg-white/[0.035] p-4 text-muted transition hover:border-teal/40 hover:text-teal">
                <Github size={18} />
                GitHub
              </a>
            </div>
          </aside>

          <form
            className="contact-reveal glass-panel relative overflow-hidden p-5 sm:p-8"
            onSubmit={(event) => {
              event.preventDefault();
              const form = event.currentTarget;
              const data = new FormData(form);
              const subject = encodeURIComponent(`Portfolio inquiry from ${data.get("name") || "visitor"}`);
              const body = encodeURIComponent(
                `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nProject: ${data.get("project")}\n\n${data.get("message")}`
              );
              window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
            }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,92,53,.11),transparent_35%)]" />
            <div className="relative z-10 grid gap-4 md:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" required />
              <Field label="Email" name="email" type="email" placeholder="you@email.com" required />
              <Field label="Project Type" name="project" placeholder="Dashboard, ERP, website..." className="md:col-span-2" />
              <label className="group md:col-span-2">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.22em] text-muted transition group-focus-within:text-teal">
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  rows="6"
                  placeholder="Tell me what you want to build."
                  className="w-full resize-none border border-white/10 bg-void/55 px-4 py-4 text-sm text-mercury outline-none transition placeholder:text-muted/50 focus:border-teal/50 focus:bg-carbon"
                />
              </label>
            </div>

            <div className="relative z-10 mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted">Typical reply: within 24 hours.</p>
              <MagneticButton  as="button" type="submit" variant="primary">

                Send Message
              </MagneticButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, className = "", required = false }) {
  return (
    <label className={`group ${className}`}>
      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.22em] text-muted transition group-focus-within:text-teal">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-14 w-full border border-white/10 bg-void/55 px-4 text-sm text-mercury outline-none transition placeholder:text-muted/50 focus:border-teal/50 focus:bg-carbon"
      />
    </label>
  );
}
