/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        lightgreen: {
          "100": "#a1cf73",
          "200": "#73cf82",
        },
        whitesmoke: "#f7f7f7",
        black: "#000",
        darkkhaki: "#b7cf73",
        mediumseagreen: "#79c478",
        lime: "#05e300",
        lightgoldenrodyellow: {
          "100": "#eafbd5",
          "200": "#d1e7b6",
        },
        "black-fonts-headings": "#2d2e2e",
        gray: "rgba(0, 0, 0, 0.2)",
      },
      spacing: {},
      fontFamily: {
        lato: "Lato",
        "bebas-neue": "'Bebas Neue'",
        text: "Inter",
      },
      borderRadius: {
        "11xl": "30px",
        "402xl-5": "421.5px",
        "28xl": "47px",
        "31xl": "50px",
      },
    },
    fontSize: {
      "11xl": "30px",
      xl: "20px",
      "31xl": "50px",
      "77xl": "96px",
      "9xl": "28px",
      base: "16px",
      "29xl": "48px",
      "13xl": "32px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
