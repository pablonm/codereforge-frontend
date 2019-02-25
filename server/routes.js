const routes = require('next-routes')

module.exports = routes()
  .add('index', '/')
  .add('redirect', '/redirect')
  .add('sarasa', '/sarasa/:pid')
  .add('notfound', '/*')
