import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "lego-red": "#E3010A",
        "lego-yellow": "#F8C700",
        "lego-sand": "#DBD2C4",
      },
    },
  },
  plugins: [],
};
export default config;
