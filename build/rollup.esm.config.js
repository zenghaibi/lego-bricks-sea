  const {  basicConfig, name, file } = require('./rollup.config')
  module.exports = {
    ...basicConfig,
    output: {
      name,
      file: file('esm'),
      format: 'es'
    }
  }