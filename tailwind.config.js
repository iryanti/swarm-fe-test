/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2B2B2B",
        secondary: "#3B3B3B",
        brand: {
          light: "#93C5FD",
          DEFAULT: "#3B82F6",
          dark: "#1E40AF",
        },
        'soft-gray': '#cccccc',
      },
      fontFamily: {
        work: ['"Work Sans"', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
