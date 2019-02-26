const routes = require('next-routes')

module.exports = routes()
  .add('index', '/')
  .add('redirect', '/redirect')
  .add('post/new', '/post/new')
  .add('post', '/post/:postId')
  .add('sarasa', '/sarasa/:pid')
  .add('notfound', '/*')
