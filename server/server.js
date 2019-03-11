const next = require('next')
const dotenv = require('dotenv')
const express = require('express')
const routes = require('./routes')
const getSitemap = require('./sitemap')
const getRobots = require('./robots')

dotenv.load()
const PORT = parseInt(process.env.PORT, 10) || 3000
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  const server = express()
  server.get('/sitemap.xml', getSitemap)
  server.get('/robots.txt', getRobots)
  server.use(handler).listen(PORT)
})
