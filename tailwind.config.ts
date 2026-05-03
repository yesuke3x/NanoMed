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
        display: ["'Bebas Neue'", "sans-serif"],
        sans:    ["Inter", "sans-serif"],
        mono:    ["'Fira Code'", "monospace"],
      },
      colors: {
        bio: {
          white:  "#FAFAF8",
          black:  "#0C0C0C",
          lime:   "#B8FF00",
          red:    "#FF2D55",
          gray:   "#888880",
          light:  "#F0EFEA",
          mid:    "#D8D7D2",
          dark:   "#1C1C1A",
        },
      },
      backgroundImage: {
        "dot-grid":
          "radial-gradient(circle, #0C0C0C 1px, transparent 1px)",
        "line-h":
          "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(12,12,12,0.08) 39px, rgba(12,12,12,0.08) 40px)",
      },
      backgroundSize: {
        "dot-20": "20px 20px",
        "line-40": "100% 40px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
        marquee:          "marquee 18s linear infinite",
        "slide-up":       "slide-up 0.5s ease both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
