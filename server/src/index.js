'use strict'

const express = require('express')
const path = require('path')
const cors = require('cors')

// 상수
const PORT = 8080
const HOST = '0.0.0.0'

const { sequelize } = require('../db/models')

// 앱
const app = express()
app.use(express.static(path.join(__dirname, 'build')))
app.use(cors())

app.get('/test', (req, res) => {
  res.send('api called successfully!')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
