/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '455px',
      sm: '576px',
      md: '768px',
      lg: '990px',
      xl: '1400px',
      // '2xl': '1600px',
    },
    extend: {
      gridTemplateColumns: {
        fluid: 'repeat(auto-fit,minmax(15rem,1fr))',
      },
      colors: {
        active: '#69b1ff',
        hover: '#C8E6FF',
        knGray: '#848484',
      },
      container: {
        padding: {
          DEFAULT: '2rem',
        },
      },
    },
  },
  plugins: [],
}
