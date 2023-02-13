/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-dupe-keys
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  theme: {
    extend: {
      width: {
        1360: "1360px",
        1024: "1024px",
        170: "170px",
        140: "140px",
        50: "50px",
      },
      height: {
        170: "170px",
        70: "70px",
        200: "200px",
        "1px": "1px",
      },
      lineHeight: {
        70: "70px",
        200: "200px",
      },
      margin: {
        70: "70px",
      },
      maxWidth: {
        170: "170px",
        50: "50px",
      },
      maxHeight: {
        170: "170px",
        50: "50px",
      },
    },
  },
  plugins: [],
};
