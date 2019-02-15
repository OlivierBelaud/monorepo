const path = require('path')

module.exports = function scensoSCSS(options) {
  // Add CSS
  this.options.css.push({src: '@scenso/styleguide/scss/scenso.scss', lang: 'scss'})
}

module.exports.meta = require('./package.json')