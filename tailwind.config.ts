import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: {
          DEFAULT: "oklch(0.58 0.18 45)",
          2: "oklch(0.5 0.16 45)",
          3: "oklch(0.35 0.11 45)",
          4: "oklch(0.22 0.06 45)",
          soft: "oklch(0.96 0.02 45)",
        },
        orange: {
          DEFAULT: "oklch(0.58 0.18 45)",
          2: "oklch(0.5 0.16 45)",
          soft: "oklch(0.96 0.02 45)",
        },
        ink: {
          DEFAULT: "oklch(0.12 0.01 265)",
          2: "oklch(0.2 0.02 265)",
          3: "oklch(0.28 0.03 265)",
        },
        paper: {
          DEFAULT: "#FFFFFF",
          2: "oklch(0.985 0.004 265)",
          3: "oklch(0.96 0.01 265)",
          4: "oklch(0.92 0.01 265)",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "sans-serif"],
        serif: ["var(--font-outfit)", "sans-serif"],
        mono: ["var(--font-outfit)", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.45" },
        },
        flow: {
          to: { strokeDashoffset: "-26" },
        },
        hubPulse: {
          "0%, 100%": { transform: "translate(-50%, -50%) scale(1)" },
          "50%": { transform: "translate(-50%, -50%) scale(1.08)" },
        },
        reveal: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.9s ease both",
        pulse: "pulse 2s infinite",
        flow: "flow 2.5s linear infinite",
        "flow-reverse": "flow 3s linear infinite reverse",
        hubPulse: "hubPulse 2.4s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
