// hammeadmin/new-projekt/new-projekt-d3c09ad53be8372598100322f6da2929998ff3b9/tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Make sure index.html is scanned by Tailwind
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { // Your main green
          50: '#e7f0eb', 
          100: '#cfe1d7', 
          200: '#b7d2c3', 
          300: '#9fc3af',
          400: '#87b49b', 
          500: '#588c73', 
          DEFAULT: '#0f402d', // HEX #0F402D
          600: '#0f402d', 
          700: '#0c3324', 
          800: '#09261b',
          900: '#061a12', 
          950: '#030d09',
        },
        brandBeige: '#f7f2e5', // Your main beige background
        secondary: { // UPDATED: Was indigo, now a lighter, earthy green palette
          50: '#f0f5f2',    // Very light green-gray
          100: '#ddebe3',   // Light green-gray
          200: '#c9e0d3',   // Pale green
          300: '#b5d5c4',   // Light muted green
          400: '#a1cab5',   // Muted green
          500: '#8dbfa5',   // Soft green
          DEFAULT: '#79b496', // Default secondary - a slightly more saturated soft green
          600: '#79b496',   
          700: '#609A7D',   // Medium muted green
          800: '#4A7C64',   // Darker muted green
          900: '#3A604F',   // Very dark muted green
          950: '#274035'    // Deepest muted green
        },
        accent: { // Your existing accent green, seems fine
          50: '#f0fdf4', 100: '#dcfce7', 200: '#bbf7d0', 300: '#86efac',
          400: '#60a561', 500: '#50c878', 600: '#16a34a', 700: '#15803d',
          800: '#166534', 900: '#14532d', 950: '#052e16',
        },
        warm: { // Your existing warm ambers, seems fine
          50: '#fffbeb', 100: '#fef3c7', 200: '#fde68a', 300: '#fcd34d',
          400: '#fbbf24', 500: '#f59e0b', 600: '#d97706', 700: '#b45309',
          800: '#92400e', 900: '#78350f', 950: '#451a03',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.05)',
        'modal': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}