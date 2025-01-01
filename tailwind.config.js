/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      fontFamily: {
        bruno: ['Bruno Ace', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
        laila: ['Laila', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        spaceGrotesk: ['Space Grotesk', 'sans-serif'],
        syneMono: ['Syne Mono', 'monospace'],
        syne: ['Syne', 'sans-serif'],
      },

    },
  },
  plugins: [],
};
