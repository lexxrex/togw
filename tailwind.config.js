/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    // relative: true,
    // files: [
    //   './pages/**/*.{html,js}',
    //   './components/**/*.{html,js}',
    // ],
  },
  safelist: [
    // 'hover:bg-zinc-200',
  ],
  theme: {
    extend: {
      colors: {
        // TFM colors
        brand: {
          50: '#f1edff',
          100: '#dbd3ff',
          200: '#c9beff',
          300: '#a18eff',
          400: '#7a5eff',
          500: '#6342ff',
          600: '#5337d7',
          700: '#3e28a3',
          800: '#2b1c70',
          900: '#1f1258',
          950: '#0f082b'
        }
      }
    },
    fontFamily: {
      'sans': ['Assistant', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
      // 'body': ['"Miriam Libre"'],
    }
  },
  plugins: [],
}

