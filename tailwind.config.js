/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '968px',
      xl: '1440px',

    },
    extend: {
      colors: {
          primary: '#2563EB',     // blue-600
          light: '#60a5fa',       // blue-100
          secondary: '#6366F1',   // indigo-500
          accent: '#2DD4BF',      // teal-400
          background: '#FAFAFA',  // zinc-50
          surface: '#FFFFFF',
          textPrimary: '#1F2937', // zinc-800
          textSecondary: '#6B7280', // zinc-500
          error: '#F43F5E',       // rose-500
          success: '#10B981',     // emerald-500
      },
    },
  },
  plugins: [],
}

