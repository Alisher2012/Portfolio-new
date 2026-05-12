/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#030712',
        surface: '#0b1220',
        muted: '#94a3b8',
        neon: '#22d3ee',
        glass: 'rgba(255,255,255,0.03)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Sora', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 32px rgba(34, 211, 238, 0.25)',
        card: '0 18px 50px rgba(3, 7, 18, 0.5)',
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at 20% 20%, rgba(34,211,238,0.12) 0, transparent 36%), radial-gradient(circle at 80% 0, rgba(14,165,233,0.1) 0, transparent 30%)',
        border: 'linear-gradient(120deg, rgba(34,211,238,0.7), rgba(34,211,238,0.05), rgba(255,255,255,0.12))',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        shimmer: 'shimmer 2.6s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
};
