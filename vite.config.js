import nunjucks from "vite-plugin-nunjucks";
const { resolve } = require("path");

export default {
  base: "/igea/",
  plugins: [nunjucks()],
  build: {
    rollupOptions: {
      input: [
        resolve(__dirname, "index.html"),
        resolve(__dirname, "catalog.html"),
      ],
    },
  },
};
