/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1677ff',
          dark: '#0958d9',
        }
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // This prevents Tailwind from conflicting with Ant Design's base styles
  },
}