/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#50b5ff",
        lightBlue: "#dcf0ff",
        // border: "#7e8b9a",
        gray: "#fff",
        borderColor: "#f1f1f1",
        lightGray: "#f8f9fa",
        bodyColor: "#7e8b9a",
      },
    },
  },
  plugins: [],
};
