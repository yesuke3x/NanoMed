import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Orbitron'", "monospace"],
        sans:    ["'Exo 2'", "sans-serif"],
        mono:    ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        // Synthwave biohack palette — namespace kept ("nano-cyan" etc.)
        // for component compatibility, but values now magenta/violet/acid.
        nano: {
          bg:        "#0A0014",
          bgAlt:     "#15042A",
          card:      "#1F0840",
          cyan:      "#FF2A9D",   // hot magenta (primary accent)
          blue:      "#B026FF",   // electric violet
          green:     "#C6FF00",   // acid lime
          purple:    "#FFB800",   // warning amber
          white:     "#F4E5FF",   // lavender white
          medBlue:   "#6B0FBA",
          medLight:  "#B026FF",
        },
        bio: {
          white: "#F4E5FF",
          black: "#0A0014",
          lime:  "#FF2A9D",
          red:   "#FF2A9D",
          gray:  "rgba(244,229,255,0.55)",
          light: "#15042A",
          mid:   "rgba(255,42,157,0.25)",
          dark:  "#1F0840",
        },
      },
      backgroundImage: {
        "nano-grid":
          "repeating-linear-gradient(135deg, transparent 0 23px, rgba(255,42,157,0.045) 23px 24px), repeating-linear-gradient(45deg, transparent 0 23px, rgba(176,38,255,0.04) 23px 24px)",
        "nano-radial":
          "radial-gradient(ellipse at top, #15042A 0%, #0A0014 70%)",
        "dot-grid":
          "radial-gradient(circle, rgba(255,42,157,0.18) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-40": "40px 40px",
        "dot-20":  "22px 22px",
      },
      boxShadow: {
        "glow-cyan":         "0 0 18px rgba(255,42,157,0.55), 0 0 38px rgba(255,42,157,0.18)",
        "glow-cyan-strong":  "0 0 28px rgba(255,42,157,0.85), 0 0 56px rgba(255,42,157,0.35)",
        "glow-blue":         "0 0 20px rgba(176,38,255,0.55)",
        "glow-green":        "0 0 18px rgba(198,255,0,0.55)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up":   { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        marquee:          { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        "slide-up":       { from: { opacity: "0", transform: "translateY(24px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        "fade-in":        { from: { opacity: "0" }, to: { opacity: "1" } },
        "pulse-glow": {
          "0%,100%": { boxShadow: "0 0 12px rgba(255,42,157,0.4)" },
          "50%":     { boxShadow: "0 0 30px rgba(255,42,157,0.85), 0 0 60px rgba(176,38,255,0.45)" },
        },
        "blink-pulse": {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%":     { opacity: "0.35", transform: "scale(0.85)" },
        },
        "spin-slow":   { from: { transform: "rotate(0)" }, to: { transform: "rotate(360deg)" } },
        "scan-line": {
          "0%":   { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "grid-move": {
          "0%":   { backgroundPosition: "0 0, 0 0" },
          "100%": { backgroundPosition: "48px 48px, -48px 48px" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-12px)" },
        },
        glitch: {
          "0%,100%": { transform: "translate(0)" },
          "20%":     { transform: "translate(-1px, 1px)" },
          "40%":     { transform: "translate(-1px, -1px)" },
          "60%":     { transform: "translate(1px, 1px)" },
          "80%":     { transform: "translate(1px, -1px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
        marquee:          "marquee 26s linear infinite",
        "slide-up":       "slide-up 0.6s cubic-bezier(0.25,0.8,0.25,1) both",
        "fade-in":        "fade-in 0.8s ease both",
        "pulse-glow":     "pulse-glow 2.4s ease-in-out infinite",
        "blink-pulse":    "blink-pulse 1.6s ease-in-out infinite",
        "spin-slow":      "spin-slow 24s linear infinite",
        "scan-line":      "scan-line 4s linear infinite",
        "grid-move":      "grid-move 14s linear infinite",
        float:            "float 6s ease-in-out infinite",
        glitch:           "glitch 0.8s steps(2) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
