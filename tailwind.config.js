/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        ink: "#000000",
        paper: "#ffffff",
        haze: "#9a9a9a",
        line: "rgba(255,255,255,0.18)",
      },
      letterSpacing: {
        label: "0.18em",
      },
      fontSize: {
        display: ["clamp(2.75rem, 7.5vw, 6.5rem)", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        headline: ["clamp(2rem, 4.5vw, 3.75rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        label: ["0.6875rem", { lineHeight: "1", letterSpacing: "0.18em" }],
      },
      maxWidth: { shell: "1400px" },
    },
  },
  plugins: [],
};
