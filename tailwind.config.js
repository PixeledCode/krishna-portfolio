const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Karma", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        body: ["Nunito", "sans-serif"],
      },
      lineHeight: {
        display: "120%",
      },
      colors: {
        primary: "var(--color-primary)",
        bg: "var(--color-bg)",
        light: "var(--color-light)",
        dark: "var(--color-dark)",
        text: "var(--color-text)",
        "text-on-bg": "var(--color-text-on-bg)",
      },
      maxWidth: {
        240: "992px",
      },
    },
    container: {
      center: true,
      padding: "16px",
      screens: {
        xl: "1312px",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "auto-fill": (value) => ({
            gridTemplateColumns: `repeat(auto-fill, minmax(min(${value}, 100%), 1fr))`,
          }),
          "auto-fit": (value) => ({
            gridTemplateColumns: `repeat(auto-fit, minmax(min(${value}, 100%), 1fr))`,
          }),
        },
        {
          values: theme("width", {}),
        }
      );
    }),
  ],
};
