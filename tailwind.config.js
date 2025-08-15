// tailwind.config.js
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#0000FF",
        text: "#1A1A1A",
        textLight: "#636363",
        background: "#f1f1f1",
        white: "#fff",
        dark: "#000"
      },
      fontFamily: {
        body: ["'Archivo SemiExpanded'", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto"],
        heading: ["'Archivo SemiExpanded'", "ui-sans-serif"]
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "2rem",
        "3xl": "3.125rem"
      },
      spacing: {
        0: "0",
        1: "0.25rem",
        2: "0.5rem",
        3: "1rem",
        4: "1.5rem",
        5: "2rem",
        6: "3rem",
        7: "3.75rem",
        10: "2.5rem",
        12: "3rem",
        50: "3.125rem",
        120: "7.5rem",
        250: "15.625rem"
      },
      borderRadius: {
        sm: "4px",
        md: "6px",
        lg: "8px",
        xl: "10px",
        "2xl": "12px",
        "3xl": "16px",
        pill: "50px"
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        scroll: "scroll 20s linear infinite"
      }
    }
  },
  plugins: [],
};
