/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
        body:    ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        carbon: {
          950: '#080a0f',
          900: '#0d1117',
          800: '#161b25',
          700: '#1e2636',
          600: '#263042',
        },
        acid: {
          DEFAULT: '#b5ff2d',
          dim:     '#8fc922',
        },
        ember: {
          DEFAULT: '#ff5e1a',
          dim:     '#cc4b14',
        },
        sky:  '#38bdf8',
        warn: '#fbbf24',
        safe: '#4ade80',
        risk: '#f87171',
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(181,255,45,0.03) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(181,255,45,0.03) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'fade-in':    'fadeIn 0.4s ease forwards',
        'slide-up':   'slideUp 0.5s ease forwards',
        'glow':       'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn:  { from: { opacity: 0 }, to: { opacity: 1 } },
        slideUp: { from: { opacity: 0, transform: 'translateY(20px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        glow:    { '0%,100%': { boxShadow: '0 0 5px rgba(181,255,45,0.2)' }, '50%': { boxShadow: '0 0 20px rgba(181,255,45,0.5)' } },
      },
    },
  },
  plugins: [],
}
