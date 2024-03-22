/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Screen Sizes
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      // Portfolio Color Scheme
      colors:{
        bgColor: '#B3C2F9',
        primaryColor: '#0D1872',
        darkColor: '#363C54',
        whiteColor: 'rgb(2555, 255, 255)',
        lightColor: 'rgb(255, 255, 255, 0.6)',
      },
    },
  },
  plugins: [],
}

