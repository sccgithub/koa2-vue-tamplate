var path = require('path')

module.exports = {
  port: process.env.PORT || 3030,
  mongodb: {
    url: 'mongodb://127.0.0.1:27017/cms'
  },
  schemeConfig: path.join(__dirname, './default.scheme.js'),
  routerConfig: 'routers',
  routerCacheConfig: {}
}
