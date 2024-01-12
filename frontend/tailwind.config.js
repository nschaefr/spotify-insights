/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ocean: "#222831",
        spotify: "#1DB954",
        spotifyhover: "#14873d",
        logout: "#e32d20",
      },
    },
  },
  plugins: [],
};
