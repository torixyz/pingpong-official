// import px2Vw from 'postcss-px-to-viewport'

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-px-to-viewport-8-plugin': {
      // viewportWidth: 1920,
      viewportWidth: function (file) {
        if (file.indexOf('mobile') > -1) {
          return 393
        }
        return 1920
      },
      unitPrecision: 4,
      viewportUnit: 'vw',
      minPixelValue: 1,
      mediaQuery: false
    }
  },
  css: {

  }

};
