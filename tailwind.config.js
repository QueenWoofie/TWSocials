/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./feed/**/*.html",
    "./profile/**/*.html",
    "!./node_modules/**/*"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
