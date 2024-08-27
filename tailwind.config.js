/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
    "./src/**/*.ejs",
  ],
  plugins: [],
  theme: {
    fontFamily: {
      lato: ['Lato', 'sans-serif'],
      sans: ["Roboto", "Noto Sans TC", "sans-serif"],
    },
    fontSize: {
      '12p': '12px',
      '14p': '14px',
      '16p': '16px',
      '24p': '24px',
    },
    extend: {
      fontSize: {
        base: ['16px', '1.5'],
      },
    },
    container: {
      center: true, // 将容器居中
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    extend: {
      colors: {
        primary: "#198754",
        secondary: "#6C757D",
        text: "#212529",

      },
      textDecoration: {
        revert: 'revert',
      },
    },
  },
};
