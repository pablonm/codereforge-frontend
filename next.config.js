const withCSS = require('@zeit/next-css')

const dotEnvResult = require('dotenv').config()

if (dotEnvResult.error) {
  throw dotEnvResult.error
}

const parsedVariables = dotEnvResult.parsed || {}
const dotEnvVariables = {}
Object.keys(parsedVariables).forEach(key => {
  dotEnvVariables[key] = process.env[key]
})

const configureLess = () => {
  /* eslint-disable */
  const withLess = require('@zeit/next-less')
  const lessToJS = require('less-vars-to-js')
  const fs = require('fs')
  const path = require('path')
  // Where your antd-custom.less file lives
  const themeVariables = lessToJS(
    fs.readFileSync(path.resolve(__dirname, './antd-theme.less'), 'utf8')
  )
  // fix: prevents error when .less files are required by node
  if (typeof require !== 'undefined') {
    require.extensions['.less'] = file => {}
  }
  return withCSS(
    withLess({
      lessLoaderOptions: {
        javascriptEnabled: true,
        modifyVars: themeVariables, // make your antd custom effective
      },
    })
  )
}

const less = configureLess()

module.exports = {
  env: {
    ...dotEnvVariables,
  },
  ...less,
}
