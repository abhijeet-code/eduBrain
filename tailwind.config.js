/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        colordark: "var(--colordark)",
        "colordark-lighter": "var(--colordark-lighter)",
        colorlight: "var(--colorlight)",
        "colorlight-darker": "var(--colorlight-darker)",
        fontlight: "var(--fontlight)",
        fontwhite: "var(--fontwhite)",
        "variable-collection-color-dull":
          "var(--variable-collection-color-dull)",
      },
    },
  },
  plugins: [],
};
