/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx, ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#26313F',
        secondary: '#166534',
        accent: '#55E5A4',
        backgroundLight: '#F8FAFC',
        backgroundDark: '#0F172A',
        textLight: '#CBD5E1',
        accentSoft: '#FEEBCB',
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        signature: ['"Great Vibes"', 'cursive'],
      },

    },
  },
  plugins: [],
}