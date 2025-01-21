/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      bgGradient:{
        'orange-radial' : 'radial-gradient(#e78a00, transparent)',
      }
    },
  },
  plugins: [],
}

