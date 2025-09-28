/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['SF Pro Display', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['SF Mono', 'monospace'],
      },
      colors: {
        'brand-orange': '#FF9F0A',
        'apple-blue': '#0A84FF',
        'apple-green': '#30D158',
        'apple-gray': {
          100: '#F5F5F7',
          200: '#E5E5E7',
          300: '#D2D2D7',
          400: '#A1A1A6',
          500: '#86868B',
          600: '#6E6E73',
          700: '#1D1D1F',
          800: '#121214',
          900: '#000000',
        },
      },
      backdropBlur: {
        'xl': '30px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.36)',
      },
    },
  },
  plugins: [],
}