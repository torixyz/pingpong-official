// import px2Vw from 'postcss-px-to-viewport'

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-px-to-viewport-8-plugin': {
      viewportWidth: 1440,
      unitPrecision: 4,
      viewportUnit: 'vw',
      minPixelValue: 1,
      mediaQuery: false
    }
  },
  css: {
    
  }

};
