const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],

  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: '#0C0C09',
        lead: { DEFAULT: '#F5A300', dark: '#FF9700' },
        light: { DEFAULT: '#F4F4F5', 200: '#A1A1AA', 300: '#71717A' },
        disabled: { DEFAULT: '#767676', dark: '#333333' },
      },
      backgroundColor: {
        dark: '#18181B',
        darker: '#09090B',
      },
    },
  },
  plugins: [],
};
