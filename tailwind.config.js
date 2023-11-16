/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "hsl(218, 23%, 16%)",
        "nn-green": "hsl(150, 100%, 66%)",
        "light-cyan": "hsl(193, 38%, 86%)",
        "box": "hsl(217, 19%, 24%)",
        "grayish-blue": "hsl(217, 19%, 38%)",
      },
      width: {
        "box": "520px",
        "box-sm": "320px",
      },
      height: {
        "box": "345px"
      },
      boxShadow: {
        "box": "10px 10px 20px -12px rgba(0, 0, 0, 1)",
      },
      fontSize: {
        "quote": "24px",
      },
      letterSpacing: {
        "advice": "4px"
      },
      top: {
        "dice": "292px"
      }
    },
  },
  plugins: [],
}

