// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#264653', // A custom primary color
        'text': '#e9c46a',
        'charcoal': '#264653',
        'persian-green': '#2a9d8f',
        'saffron': '#e9c46a',
        'sandy-brown': '#f4a261',
        'burnt-sienna': '#e76f51',

        'brand': {
          'light': '#3B82F6', // e.g., brand-light
          'dark': '#1E3A8A',  // e.g., brand-dark
        },
      },
    },
  },
  plugins: [],
}