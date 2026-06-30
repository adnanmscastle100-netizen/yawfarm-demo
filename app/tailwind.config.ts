import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: "#1B1410",
        char: "#2A211B",
        bark: "#5C3A28",
        copper: "#C17F3E",
        ember: "#E0A05B",
        cream: "#F4EBDD",
        parchment: "#EFE3D0",
        ash: "#A99884",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        steam: {
          "0%, 100%": { transform: "translateY(0) scaleX(1)", opacity: "0.5" },
          "50%": { transform: "translateY(-14px) scaleX(1.15)", opacity: "0.9" },
        },
        roastSweep: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) both",
        steam: "steam 4s ease-in-out infinite",
        roastSweep: "roastSweep 8s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
