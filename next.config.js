const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  cssModules: true,
  webpack(config, options) {
    return config
  }
})
