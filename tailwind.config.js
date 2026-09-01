/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          900: '#0a0a1a',
          800: '#1a1a2e',
          700: '#16213e',
          600: '#0f3460',
        },
        cosmic: {
          purple: '#9b59b6',
          blue: '#3498db',
          pink: '#e91e63',
          cyan: '#00bcd4',
        },
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 50%, #16213e 100%)',
        'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'stars': 'stars 100s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(155, 89, 182, 0.5)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(155, 89, 182, 0.8)' },
        },
        stars: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-1000px)' },
        },
      },
    },
  },
  plugins: [],
}
