/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      "lightBlue": "#B4CBD9",
      "green": "#3E5902",
      "greenDark": "#2C4001",
      "sand": "#F2C48D",
      "brown": "#733702",
      "white": "#FFFBFB"
    },
    extend: {
    },
  },
  plugins: [],
}
