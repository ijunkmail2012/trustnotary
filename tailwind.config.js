/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef1f7',
          100: '#d4dcec',
          200: '#b7c5e0',
          300: '#96abd3',
          400: '#778fc5',
          500: '#5d77b6',
          600: '#4a62a1',
          700: '#3b4e88',
          800: '#2a3e6e', // Main navy blue
          900: '#1e2e4f',
        },
        gold: {
          50: '#fbf8e9',
          100: '#f7efc3',
          200: '#eeda83',
          300: '#e6c854',
          400: '#d4af37', // Main gold
          500: '#bd972a',
          600: '#9d7922',
          700: '#7d5e1c',
          800: '#604619',
          900: '#483517',
        },
        success: {
          500: '#10b981',
        },
        warning: {
          500: '#f59e0b',
        },
        error: {
          500: '#ef4444',
        },
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};