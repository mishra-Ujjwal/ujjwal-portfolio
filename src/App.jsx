import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUp } from "lucide-react";
import CustomCursor from "./components/CustomCursor.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import About from "./sections/About.jsx";
import Achievements from "./sections/Achievements.jsx";
import Contact from "./sections/Contact.jsx";
import Experience from "./sections/Experience.jsx";
import Hero from "./sections/Hero.jsx";
import Projects from "./sections/Projects.jsx";
import Services from "./sections/Services.jsx";
import Skills from "./sections/Skills.jsx";

export default function App() {
  const appRef = useRef(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const ctx = gsap.context(() => {
      gsap.utils.toArray("[data-section]").forEach((section) => {
        const label = section.querySelector("[data-section-label]");
        if (!label) return;

        gsap.fromTo(
          label,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 78%"
            }
          }
        );
      });
    }, appRef);

    return () => {
      window.removeEventListener("scroll", onScroll);
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div ref={appRef} className="relative min-h-screen overflow-x-clip bg-void text-mercury antialiased">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />
        <div className="absolute inset-0 noise-layer opacity-[0.055]" />
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-radial-field opacity-70 blur-3xl" />
      </div>

      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        {/* <Services /> */}
        {/* <Achievements /> */}
        <Contact />
      </main>

      <Footer />

      <button
        type="button"
        aria-label="Back to top"
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center border border-white/15 bg-carbon/75 text-mercury shadow-glow backdrop-blur-xl transition duration-300 hover:border-teal/50 hover:text-teal ${
          showTop ? "translate-y-0 opacity-100" : "translate-y-5 pointer-events-none opacity-0"
        }`}
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
}
