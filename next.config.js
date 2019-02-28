const withCSS = require('@zeit/next-css')
const withLess = require('@zeit/next-less')
const fs = require('fs')
const path = require('path')
const dotEnv = require('dotenv')
/* eslint-disable */
const lessToJS = require('less-vars-to-js')

const addEnv = conf => {
  const dotEnvResult = dotEnv.config()

  if (dotEnvResult.error) {
    throw dotEnvResult.error
  }

  const parsedVariables = dotEnvResult.parsed || {}
  const dotEnvVariables = {}
  Object.keys(parsedVariables).forEach(key => {
    dotEnvVariables[key] = process.env[key]
  })
  return {
    ...conf,
    env: {
      ...dotEnvVariables,
    },
  }
}

const addLess = () => {
  const themeVariables = lessToJS(
    fs.readFileSync(path.resolve(__dirname, './antd-theme.less'), 'utf8')
  )
  if (typeof require !== 'undefined') {
    require.extensions['.less'] = () => {}
  }
  return withLess({
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables,
    },
  })
}

module.exports = addEnv(withCSS(addLess()))
