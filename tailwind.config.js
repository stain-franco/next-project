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
        White: '#fffff',
        backgroud: '#E6ECF5',
        DarkBlue: '#07469C',
        blue: '#0099E1',
        Coral: '#EF3061',
        DarkGrey: '#333333',
        Grey: '#757575',
        Ligthgray: '#F2F2F2',
      },
      screens: {
        xs: '375px',
        sm: '600px',
        md: '900px',
        lg: '1200px',
        xl: '1536px',
      },
    },
    plugins: [],
  },
};
