import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary-100': 'rgb(95, 215, 50)',
        'primary-200': 'rgb(58, 214, 0)',
        'dark-100': 'rgb(29, 30, 48)',
        'dark-200': 'rgb(44, 44, 62)',
        'dark-300': 'rgb(23, 24, 40)',
        'dark-400': 'rgb(42, 42, 57)',
        'dark-500': 'rgb(27, 28, 46)',
      },
      textColor: {
        'primary-100': 'rgb(95, 215, 50)',
        'primary-200': 'rgb(58, 214, 0)',
        'secondary-100': 'rgb(169, 169, 202)',
      },
      borderColor: {
        'primary-100': 'rgb(95, 215, 50)',
        'primary-200': 'rgb(58, 214, 0)',
        'dark-100': 'rgb(29, 30, 48)',
        'dark-200': 'rgb(44, 44, 62)',
        'dark-300': 'rgb(23, 24, 40)',
        'dark-400': 'rgb(42, 42, 57)',
      },
      gradientColorStops: {
        'primary-100': 'rgb(95, 215, 50)',
        'primary-200': 'rgb(58, 214, 0)',
        'dark-100': 'rgb(29, 30, 48)',
        'dark-200': 'rgb(44, 44, 62)',
        'dark-300': 'rgb(23, 24, 40)',
        'dark-400': 'rgb(42, 42, 57)',
        'dark-500': 'rgb(27, 28, 46)',
        'dark-600': 'rgb(41, 41, 64)',
      },
      width: {
        content: 'max-content',
      },
      zIndex: {
        '48': '48',
        '49': '49',
      },
    },
  },
  plugins: [],
};
export default config;
