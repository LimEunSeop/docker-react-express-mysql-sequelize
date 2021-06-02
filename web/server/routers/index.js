const express = require('express')
const api = express.Router()

api.get('/test', (req, res) => {
  res.send('API CALL Succeed!!')
})

module.exports = api
