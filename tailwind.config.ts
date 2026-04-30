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
          DEFAULT: "#5B21F0",
          2: "#4516C7",
          3: "#2E0A8A",
          4: "#1A0658",
          soft: "#F4F0FF",
        },
        orange: {
          DEFAULT: "#F97316",
          2: "#EA580C",
          soft: "#FFF1E6",
        },
        ink: {
          DEFAULT: "#0E1530",
          2: "#1A2247",
          3: "#2A3568",
        },
        paper: {
          DEFAULT: "#FFFFFF",
          2: "#FBFBFE",
          3: "#F5F4FB",
          4: "#EBE9F7",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "sans-serif"],
        serif: ["var(--font-fraunces)", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
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
