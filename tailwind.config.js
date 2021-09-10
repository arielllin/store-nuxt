module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: '#e68556',
        gray: '#738481',
        lightGray: '#e9eced',
        darkMask: '#111827',
        coffee: '#868288',
        border: '#e3e3e3'
      },
      width: {
        desktop: '1240px',
        article: '983px',
        1: '1%',
        100000: '10000%'
      },
      height: {
        map: '420px',
        banner: '515px',
        pic: '638px'
      },
      lineHeight: {
        '12': '3rem',
        '28': '7rem'
      },
      backgroundColor: theme => ({
        dark: '#222023',
        light: '#f7f4ed'
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
}
