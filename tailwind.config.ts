import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#f3f1e6",
        accent: "#c7a558",
        muted: "#111111",
        border: "#1f1f1f"
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-playfair)"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(199, 165, 88, 0.15)"
      }
    }
  },
  plugins: [],
};

export default config;
