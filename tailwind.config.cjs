/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sec: '#5D3891',
        prime: '#D94b0f',
        base900: '#2f2f2f',
        base300: '#E8E2E2',
        base100: '#F5F5F5',
      },
      fontFamily: {
        Monument: ['Monument Extended'],
        Barlow: ['Barlow Condensed'],
        Unbound: ['Unbounded'],
        Gloock: ['Gloock'],
        Outfit: ['Outfit'],
        Bebas_Neue: ['Bebas Neue'],
        Fredoka_One: ['Fredoka One'],
        Big_Shoulders_Display: ['Big Shoulders Display'],
        Courgette: ['Courgette'],
        Sorts_Mills_Goudy: ['Sorts Mill Goudy'],
        Yeseva_One: ['Yeseva One'],
        Aquatico: ['Aquatico'],
        Aero: ['Aeroport'],
        Aero_mono: ['Aeroport Mono'],
        Cheorcy: ['Cheorcy'],
        Cyberion: ['Cyberion Demo'],
        Harmond: ['Harmond'],
        Poppins: ['Poppins'],
        Nunito: ['Nunito'],
      },
      zIndex: {
        1: '1',
      },
    },
  },
  plugins: [],
}
