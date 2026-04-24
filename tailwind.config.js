/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        void: "#050507",
        carbon: "#0B0D10",
        graphite: "#11151B",
        mercury: "#E7E2D7",
        muted: "#928F86",
        ember: "#FF5C35",
        volt: "#D7FF72",
        teal: "#4BE3C1",
        steel: "#6F7D8E"
      },
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 42px rgba(75, 227, 193, 0.18)",
        ember: "0 0 44px rgba(255, 92, 53, 0.16)"
      },
      backgroundImage: {
        "radial-field":
          "radial-gradient(circle at 20% 20%, rgba(75,227,193,.18), transparent 28%), radial-gradient(circle at 80% 10%, rgba(255,92,53,.13), transparent 28%), linear-gradient(135deg, rgba(255,255,255,.06), rgba(255,255,255,0))"
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" }
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.35", transform: "scaleX(.7)" },
          "50%": { opacity: "1", transform: "scaleX(1)" }
        }
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "pulse-line": "pulseLine 2.2s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
