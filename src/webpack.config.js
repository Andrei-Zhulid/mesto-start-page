const MomentLocalesPlugin = require('moment-locales-webpack-plugin')

module.exports = {
  plugins: [
    // Strip all locales except “en” and “ru”
    // (“en” is built into Moment and can’t be removed)
    new MomentLocalesPlugin({
      localesToKeep: ['ru'],
    }),
  ],
}
