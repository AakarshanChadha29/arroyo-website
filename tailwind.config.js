/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        arroyo: {
          bg: '#0A0F14',
          surface: '#111820',
          border: '#1E2D3D',
          accent: '#00B4D8',
          accentHi: '#48CAE4',
          textPrimary: '#F0F4F8',
          textSecondary: '#8FA5B8',
          textMuted: '#4A6275',
          danger: '#7C4040',
          footerBg: '#060B10'
        }
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['DM Mono', 'monospace']
      },
      borderRadius: {
        sharp: '2px',
        DEFAULT: '2px'
      }
    }
  },
  plugins: []
};
