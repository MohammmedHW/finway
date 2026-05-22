/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fiinway Brand Palette (from logo gradient)
        brand: {
          saffron:  '#E94E24', // bottom-left of logo
          gold:     '#F3C326', // middle of logo
          green:    '#69C281', // top-right of logo
          // tints for UI use
          'saffron-50':  '#FEF3EE',
          'saffron-100': '#FDDECF',
          'saffron-500': '#E94E24',
          'saffron-600': '#D0431C',
          'gold-50':     '#FFFBEA',
          'gold-100':    '#FFF3C2',
          'gold-500':    '#F3C326',
          'gold-600':    '#D9A91B',
          'green-50':    '#EDFAF1',
          'green-100':   '#C8EDD1',
          'green-500':   '#69C281',
          'green-600':   '#4DA866',
        },
        // Keep legacy alias so existing `primary` usage still works
        primary:   '#E94E24',
        secondary: '#69C281',
      },
      backgroundImage: {
        'brand-gradient':       'linear-gradient(135deg, #E94E24 0%, #F3C326 50%, #69C281 100%)',
        'brand-gradient-r':     'linear-gradient(to right, #E94E24, #F3C326, #69C281)',
        'brand-gradient-hover': 'linear-gradient(135deg, #D0431C 0%, #D9A91B 50%, #4DA866 100%)',
      },
    },
  },
  plugins: [],
};
