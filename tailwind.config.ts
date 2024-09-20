import type { Config } from 'tailwindcss';
import { addDynamicIconSelectors } from '@iconify/tailwind';

interface PluginParams {
  addBase: (baseStyles: Record<string, Record<string, string>>) => void;
  theme: (path: string) => string;
}

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './app/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        firago: ['var(--font-firago)'],
        helvetica: ['var(--font-helvetica)'],
        helveticaNeue: ['var(--font-helveticaNeue)'],
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.75rem',
      },
      colors: {
        'gray-primary': '#dbdbdb',
        'gray-dark': '#808a93',
        'gray-light': '#f3f3f3',
        'black-primary': '#021526',
        'black-primary-70': 'rgba(2,21,38,0.7)',
        'black-primary-50': 'rgba(2,21,38,0.5)',
        'black-dark': '#1a1a1f',
        'black-light': '#2d3648',
        'red-primary': '#f93b1d',
        'red-hover': '#df3014',
        'green-primary': '#45a849',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1600px',
        '4xl': '1920px',
      },
      spacing: {
        '1': '32px',
        '2': '96px',
        '3': '162px',
      },
    },
  },
  plugins: [
    addDynamicIconSelectors(),
    function ({ addBase, theme }: PluginParams): void {
      addBase({
        ':root': {
          '--gray-primary': theme('colors.primary-gray'),
          '--gray-dark': theme('colors.gray-dark'),
          '--gray-light': theme('colors.gray-light'),
          '--black-primary': theme('colors.black-primary'),
          '--black-primary-70': theme('colors.black-primary-70'),
          '--black-primary-50': theme('colors.black-primary-50'),
          '--black-dark': theme('colors.black-dark'),
          '--black-light': theme('colors.black-light'),
          '--red-primary': theme('colors.red-primary'),
          '--red-hover': theme('colors.red-hover'),
          '--green-primary': theme('colors.green-primary'),
        },
      });
    },
  ],
};

export default config;
