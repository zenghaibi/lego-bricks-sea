const vue = require('rollup-plugin-vue')
const css = require('rollup-plugin-css-only')
const typescript = require('rollup-plugin-typescript2')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const { name } = require('../package.json')
const file = type => `dist/${name}.${type}.js`
const overrides = {
  compilerOptions: { declaration: true },
  exclude: [
    "node_modules",
    "src/App.vue",
    "src/main.ts",
    "tests/**/*.ts",
    "tests/**/*.tsx"
  ]
}
const basicConfig = {
  input: 'src/index.ts',
  output: {
    name,
    file: file('esm'),
    format: 'es'
  },
  plugins: [
    nodeResolve(),
    typescript({ tsconfigOverride: overrides }),
    vue(),
    css({ output: 'bundle.css' })
  ],
  external: ['vue', 'lodash-es']
}

module.exports = {
  basicConfig,
  name,
  file
}