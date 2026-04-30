/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        display: ["Outfit", "system-ui", "sans-serif"],
      },
      colors: {
        charcoal: {
          850: "#1a1b1f",
          925: "#121316",
          950: "#0a0b0d",
        },
      },
      boxShadow: {
        glow: {
          dark: "0 0 60px -18px rgba(0,0,0,0.6)",
          muted: "0 0 40px -16px rgba(30,30,30,0.6)",
        },
      },
      backgroundImage: {
        "grid-dark":
          "linear-gradient(to right, rgb(10 10 12 / 0.28) 1px, transparent 1px), linear-gradient(to bottom, rgb(10 10 12 / 0.28) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
