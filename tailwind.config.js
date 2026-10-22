/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#214B38',
          deep: '#18382A',
          light: '#2C5E47',
        },
        sage: {
          DEFAULT: '#A9B9A3',
          light: '#C4D1BF',
          dark: '#879781',
        },
        ivory: {
          DEFAULT: '#F7F6F0',
          dark: '#ECE9DF',
          soft: '#FDFCFA',
        },
        gold: {
          DEFAULT: '#B69A58',
          light: '#CEB67C',
          muted: '#A58B4D',
        },
        charcoal: {
          DEFAULT: '#252923',
          soft: '#3C4139',
          muted: '#595F54',
        },
      },
      fontFamily: {
        serif: ['"Lora"', 'Georgia', '"Times New Roman"', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      letterSpacing: {
        editorial: '0.18em',
        eyebrow: '0.12em',
      },
    },
  },
  plugins: [],
}