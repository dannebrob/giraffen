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
      "greenLight": "#85A838",
      "sand": "#F2C48D",
      "lightSand": "#F7E3C0",
      "brown": "#733702",
      "white": "#FFFBFB",
      "infoSubtle": "#cff4fc",
      "info": "#0DCAF0",
    },
    extend: {
    },
  },
  plugins: [],
}
