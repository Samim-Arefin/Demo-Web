/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        Caveat: "'Caveat','Pacifico',sans-serif",
        Ubuntu: "'Ubuntu', sans-serif",
        Indie: "'Indie Flower',sans-serif",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
