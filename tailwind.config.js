/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
   "./*.jsx*"
  ],
  theme: {
    extend: {
      colors: {
        'thm-blue': '#C0EEF2',
        "green-i":"#DFFFD8",
        "lpu-org":"#fd8a34",
        "the-blue2":"#537FE7",
      },
    },
  },
  plugins: [],
}