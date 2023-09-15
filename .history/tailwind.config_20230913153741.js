/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      'White':' hsl(0, 0%, 100%)'
      'Black': 'hsl(0, 0%, 0%)'
      'Dark Gray': hsl(0, 0%, 55%)
      'Very Dark Gray': hsl(0, 0%, 41%)
    },
    fontFamily: {
      sans: ['Alata', 'sans-serif'],
      serif: ['Josefin Sans', 'sans-serif'],
    }
    extend: {},
  plugins: [],
}

