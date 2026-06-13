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
        brand: {
          teal: "#0F3D3E",
          tealDark: "#0B2F30",
          tealSoft: "#E7F0EE",
          gold: "#C89B3C",
          ivory: "#F8F5EF",
          charcoal: "#1F2933",
          muted: "#64748B",
          border: "#E5E1D8",
        },
      },
      fontFamily: {
        sans: ["Be Vietnam Pro", "Inter", "Arial", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 50px rgba(15, 61, 62, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
