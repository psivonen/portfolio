// @type {import('tailwindcss').Config} //
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        '12': '5.0rem',
      },
      maxWidth: {
        'screen-xl': '1300px', // Adjust the value as needed
      },
      fontSize: {
        '5xl': ['2.25rem', {
          lineHeight: '3.5rem',
        }],
        '5xl': ['3.0rem', {
          lineHeight: '3.5rem',
        }],
      },
    },
  },
  plugins: [
  ],
}