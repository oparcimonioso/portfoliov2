// tailwind.config.js
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          800: '#1f2937',
          900: '#111827',
        },
        light: {
          50: '#f9fafb',
          100: '#f3f4f6',
        }
      }
    },
  },
  plugins: [],
}