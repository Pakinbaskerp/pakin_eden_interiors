/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        walnut: {
          50: '#f7f3f0',
          100: '#ece2da',
          200: '#d8c3b2',
          300: '#c09e82',
          400: '#a97b5c',
          500: '#8b5f42',
          600: '#6f4a34',
          700: '#573a2a',
          800: '#3c2820',
          900: '#241813',
          950: '#160f0c',
        },
        brass: {
          50: '#faf6ec',
          100: '#f1e6c8',
          200: '#e4cd93',
          300: '#d6b264',
          400: '#c8983f',
          500: '#af8130',
          600: '#8c6626',
          700: '#6a4d1d',
        },
        ink: {
          50: '#f5f4f2',
          100: '#e6e3df',
          400: '#8a837c',
          600: '#524b44',
          800: '#2b2622',
          900: '#1a1613',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Jost"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
      },
    },
  },
  plugins: [],
};
