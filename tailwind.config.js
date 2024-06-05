// const colors = require('tailwindcss/colors')

module.exports = {
  content: ["*.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1616px", // Adjust as needed for extra extra large screens
      },
    },
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/typography')
    require("@tailwindcss/forms"),
  ],
};
