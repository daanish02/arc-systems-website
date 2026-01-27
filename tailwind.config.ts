import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#f0f0f0",
        "dark-grey": "#0a0a0a",
        "medium-grey": "#222222",
        "border-grey": "#2a2a2a",
        "power-red": "#dc2626",
        "accent-red": "#dc2626",
      },
      fontFamily: {
        sans: ["var(--font-space)"],
        mono: ["var(--font-jetbrains-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;


