/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  colors: {
    transparent: 'transparent',
    current: 'currentColor',
    'white': '#ffffff',
    'tahiti': {
      100: '#cffafe',
      200: '#a5f3fc',
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#06b6d4',
      600: '#0891b2',
      700: '#0e7490',
      800: '#155e75',
      900: '#164e63',
        },
      'background': '#1a1c48',
      'main-blue': '#00d1de',
      'main-font-color': '#fff',
      'feature-card-green': '#33cc4c',
      'main-blue-hover': '#10afba',
      'main-grey': '#8e8e8e',
      'main-teste1': '#E08537',
      'main-bg': '#01193C',
      'blue-dark': '#45488a',
      'gray': '#a8a8b3',
    },
extend: {

},
  },
plugins: [],
}
