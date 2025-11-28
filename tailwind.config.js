/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         black: "var(--black)",
//         colordark: "var(--colordark)",
//         "colordark-lighter": "var(--colordark-lighter)",
//         colorlight: "var(--colorlight)",
//         "colorlight-darker": "var(--colorlight-darker)",
//         fontlight: "var(--fontlight)",
//         fontwhite: "var(--fontwhite)",
//         "variable-collection-color-dull":
//           "var(--variable-collection-color-dull)",
//       },
//     },
//   },
//   plugins: [],
// };

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        'background-soft': 'var(--color-background-soft)',
        'background-card': 'var(--color-background-card)',
        
        brand: 'var(--color-primary)',         // purple
        'brand-soft': 'var(--color-primary-soft)', // light purple
        
        accent: 'var(--color-accent)',         // orange
        'accent-hover': 'var(--color-accent-hover)',
        
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-brand': 'var(--color-text-brand)',
        
        border: 'var(--color-border)',
      },
    },
  },
  plugins: [],
};