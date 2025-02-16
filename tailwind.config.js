/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        openSans: ['OpenSans', 'sans-serif'],
      },
      fontSize: {
        xxs: '0.625rem',
        xxxs: '8px',
      },
      colors: {
        customGreen: '#065451',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        custom: '1600px',
      },
    },
  },
  plugins: [],
};
