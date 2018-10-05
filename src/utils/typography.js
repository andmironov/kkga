import Typography from 'typography'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Roboto Condensed',
      styles: ['400', '400i', '700', '700i'],
    },
  ],
  baseFontSize: '18px',
  headerFontFamily: ['Roboto Condensed', 'sans-serif'],
  bodyFontFamily: ['Roboto Condensed', 'sans-serif'],
})

export default typography
