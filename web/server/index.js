const express = require('express')

// Global
global.path = require('path')
global.appRoot = require('app-root-path').resolve('/server')

// Server
const app = express()
const PORT = process.env.SERVER_PORT || 3001

// Middlewares

// Routers
const apiRouter = require('./routers')

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

app.use(express.json())

app.use('/api', apiRouter)

app.listen(PORT, () => {
  console.log(`Find the server at: http://localhost:${PORT}`)
})
