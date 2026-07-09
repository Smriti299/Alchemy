/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070B14',
          900: '#0A1120',
          800: '#0D1526',
          700: '#111A2E',
          600: '#182339',
          500: '#243352',
        },
        brand: {
          blue: '#2563EB',
          blueLight: '#5B8DEF',
          orange: '#F59E0B',
          orangeLight: '#FBBF24',
        },
      },
      fontFamily: {
        display: ['"Archivo Black"', '"Arial Black"', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #2563EB 0%, #5B8DEF 45%, #F59E0B 100%)',
        'brand-gradient-radial': 'radial-gradient(circle at 30% 20%, rgba(37,99,235,0.25), transparent 55%), radial-gradient(circle at 80% 70%, rgba(245,158,11,0.18), transparent 50%)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(37,99,235,0.45)',
        'glow-orange': '0 0 40px -10px rgba(245,158,11,0.45)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease forwards',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
