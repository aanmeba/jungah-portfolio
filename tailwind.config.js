/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      highlighter: "#30f6af",
      navy: {
        50: "#eff6ff",
        100: "#dbeafe",
        400: "#5f659f",
        600: "#2f3577",
        900: "#131954",
      },
      slate: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        900: "#0f172a",
      },
    },
    fontFamily: {
      // sans: ["Graphik", "sans-serif"],
      // serif: ["Merriweather", "serif"],
      // ubuntu: ["Ubuntu", "sans-serif"],
      // bebas: ["'Bebas Neue'", "sans-serif"],
      roboto: ["'Roboto Condensed'", "sans-serif"],

      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "'Liberation Mono'",
        "'Courier New'",
        "monospace",
      ],
    },
    // extend: {},
  },
  plugins: [],
};
