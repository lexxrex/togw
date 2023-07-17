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
        },
        main: {
          50: '#edfffb',
          100: '#dafff6',
          200: '#b5ffed',
          300: '#91ffe6',
          400: '#6cffdd',
          500: '#47ffd4',
          600: '#41ebc3',
          // 600: '#3cd7b3',
          700: '#31af91',
          800: '#268770',
          900: '#1b5f4f',
          950: '#0c2822'
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

