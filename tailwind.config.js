/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Raleway',
      tertiary: 'Montserrat',
    },
    container: {
      padding:{
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#00a0a0a',
        accent: '#BB09C3',
      },
      backgroundImage: {
        'gradient-to-r': 'to right, rgba(0, 160, 160, 0.5), rgba(255, 255, 255, 0.5)',
      }
    },
  },
  plugins: [],
}

