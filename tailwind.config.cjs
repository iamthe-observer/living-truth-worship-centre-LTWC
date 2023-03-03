/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        prime: '#5D3891',
        sec: '#D94b0f',
        base900: '#2f2f2f',
        base300: '#E8E2E2',
        base100: '#F5F5F5',
      },
    },
  },
  plugins: [],
}
