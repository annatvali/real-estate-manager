import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        firago: ['var(--font-firago)'],
        helvetica: ['var(--font-helvetica)'],
        helveticaNeue: ['var(--font-helveticaNeue)'],
      },
      colors: {
        "primary-gray": '#dbdbdb',
        "gray-dark": "#808A93",
        "gray-light": "#f3f3f3",
        "black-primary": "#021526",
        "black-primary-70": "rgba(2,21,38,0.7)",
        "black-primary-50": "rgba(2,21,38,0.5)",
        "black-dark": "#1a1a1f",
        "black-light": "#2d3648",
        "red-primary": "#f93b1d",
        "red-hover": "#df3014",
        "green-primary": "#45A849"
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl':'1536px',
        '3xl': '1600px',
        '4xl': '1920px'
      },
      spacing: {
        '1': '32px',
        '2': '96px',
        '3': '162px'
      }
    },
  },
  plugins: [],
};
export default config;
