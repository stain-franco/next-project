/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // Ensure these match with .storybook/preview.js
  theme: {
    extend: {
      colors: {
        'White': '#ffffff',
        'backgroud': '#E6ECF5',
        'DarkBlue': '#07469C',
        'blue': '#0099E1',
        'Coral': '#EF3061',
        'DarkGrey': '#333333',
        'Grey': '#757575',
        'Ligthgray': '#F2F2F2'
      },
      width: {
        "344": "344px",
        "516": "516px",
        "540": "540px",
        "1280": "1280px"
      },
      height: {
        "55.92": "55.92px",
        "416": "416px",
        "1214": "1214px"

      },

      screens: {
        xs: '375px',
        sm: '600px',
        md: '900px',
        lg: '1200px',
        xl: '1536px',
      },
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
        Mulish: ["Mulish", "sans-serif"]
      },
      animation: {
        cursor: 'cursor .6s linear infinite alternate',
        type: 'type 1.8s ease-out .8s 1 normal both',
        'type-reverse': 'type 1.8s ease-out 0s infinite alternate-reverse both',
      },
      keyframes: {
        type: {
          '0%': { width: '0ch' },
          '5%, 10%': { width: '1ch' },
          '15%, 20%': { width: '2ch' },
          '25%, 30%': { width: '3ch' },
          '35%, 40%': { width: '4ch' },
          '45%, 50%': { width: '5ch' },
          '55%, 60%': { width: '6ch' },
          '65%, 70%': { width: '7ch' },
          '75%, 80%': { width: '8ch' },
          '85%, 90%': { width: '9ch' },
          '95%': { width: '10ch' },
        },
      },
    },
  },
}

