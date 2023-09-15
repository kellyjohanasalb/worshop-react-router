/** @type {import('tailwindcss').Config} 
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
  fontFamily: {
      sans: ['Alata', '"Josefin Sans"', 'sans-serif']
  },
  screens: {
      sm: '375px',
      md: '480px',
      lg: '768px',
      xl: '967px',
      xxl: '1440px'
  },
  extend: {
      colors: {
          'primary-1': 'hsl(0, 0%, 100%)',
          'primary-2': 'hsl(0, 0%, 0%)',
          'primary-3': 'hsl(0, 0%, 55%)',
          'primary-4': 'hsl(0, 0%, 41%)'
      }
  }
  },
  plugins: []
}
