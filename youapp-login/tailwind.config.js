// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Ensure Tailwind applies to the app router structure
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#0b1f1f',
        'soft-gray': '#1a2b2b',
      },
      screens: {
        mobile: { max: '640px' },
      },
    },
  },
  plugins: [],
}

