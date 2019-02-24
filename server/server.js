const next = require('next')
const dotenv = require('dotenv')
const express = require('express')
const routes = require('./routes')

dotenv.load()
const PORT = parseInt(process.env.PORT, 10) || 3000
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  express()
    .use(handler)
    .listen(PORT)
})
