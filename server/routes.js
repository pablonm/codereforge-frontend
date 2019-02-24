const routes = require('next-routes')

module.exports = routes()
  .add('index', '/')
  .add('sarasa', '/sarasa/:pid')
  .add('notfound', '/*')
