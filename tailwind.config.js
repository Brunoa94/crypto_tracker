/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        chakra: ["Chakra Petch"],
        fredoka: ["Fredoka, sans-serif"],
        audiowide: ["'Audiowide', cursive"],
        spacegrotesk: ["'Space Grotesk', sans-serif"],
      },
      screens: {
        responsive: "1100px",
      },
    },
  },
  plugins: [],
};
