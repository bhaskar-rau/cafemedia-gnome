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
        "light-beige": "#F9F5F1",
        "typewriter-text": "#2D2D2D",
        "dark-beige": "#8B7355",
      },
      fontFamily: {
        typewriter: ["Courier Prime", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
