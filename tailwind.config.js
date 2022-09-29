/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-500": "#00BD95",
        "primary-300": "#2AFA93",
        "primary-800": "#155750",
        "secondary-500": "#171C23",
        "secondary-300": "#21272F",
        text: "#F7F7F7",
      },
    },
  },
  plugins: [],
};
