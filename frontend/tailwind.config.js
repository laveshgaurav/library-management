/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "2560px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1280px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1024px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "640px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        accent_primary: "#FA394A",
        text_primary: "#404145",
        text_secondary: "#7C7C7C",
      },
      spacing: {
        max_width: "1440px",
      },
      width: {
        max_width: "1440px",
      },
      fontSize: {
        ...Array.from({ length: 100 }, (_, i) => i + 1).reduce((acc, size) => {
          acc[size] = `${size}px`;
          return acc;
        }, {}),
      },
    },
  },
  plugins: [],
};
