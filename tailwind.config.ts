import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Theme-adaptive colors via CSS variables
        primary: {
          50:  "rgb(var(--c-p-50) / <alpha-value>)",
          100: "rgb(var(--c-p-100) / <alpha-value>)",
          500: "rgb(var(--c-p-500) / <alpha-value>)",
          600: "rgb(var(--c-p-600) / <alpha-value>)",
          700: "rgb(var(--c-p-700) / <alpha-value>)",
        },
        accent: {
          100: "rgb(var(--c-a-100) / <alpha-value>)",
          400: "rgb(var(--c-a-400) / <alpha-value>)",
          500: "rgb(var(--c-a-500) / <alpha-value>)",
        },
        warm: {
          50:  "#FAFAF8",
          100: "#f5f5f0",
          900: "#1C1917",
        },
      },
    },
  },
  plugins: [],
};

export default config;
