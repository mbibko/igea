// const colors = require('tailwindcss/colors')

module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "600px", // Adjust as needed for small screens
        md: "728px", // Adjust as needed for medium screens
        lg: "984px", // Adjust as needed for large screens
        xl: "1240px", // Adjust as needed for extra large screens
        "2xl": "1680px", // Adjust as needed for extra extra large screens
      },
    },
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/typography')
  ],
};
