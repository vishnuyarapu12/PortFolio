/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#07090e',         // Deep luxury obsidian
          surface: '#0b101a',    // Subtle dark slate
          card: '#0f1624',       // Sleek card background
          cardHover: '#141d2f',  // Refined hover state
          border: 'rgba(255, 255, 255, 0.08)', // Crisp hairline border
          borderHover: 'rgba(56, 189, 248, 0.35)',
        },
        electric: {
          400: '#38bdf8',
          500: '#0284c7',
          600: '#0369a1',
        },
        cyan: {
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
        },
        slate: {
          850: '#111827',
          950: '#030712',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.6), 0 0 1px 1px rgba(255, 255, 255, 0.05)',
        'card-hover': '0 20px 35px -10px rgba(0, 0, 0, 0.8), 0 0 15px -3px rgba(56, 189, 248, 0.15)',
        'btn-primary': '0 4px 14px 0 rgba(2, 132, 199, 0.25)',
      },
      backgroundImage: {
        'hero-ambient': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(56, 189, 248, 0.12), transparent 70%)',
      }
    },
  },
  plugins: [],
}
