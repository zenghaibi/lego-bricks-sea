const {  basicConfig, file } = require('./rollup.config')
module.exports = {
  ...basicConfig,
  output: {
    name: 'LegoComponetns',
    file: file('umd'),
    format: 'umd',
    globals: {
      'vue': 'Vue',
      'lodash-es': '_'
    },
    exports: 'named'
  }
}