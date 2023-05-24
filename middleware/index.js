const express = require('express')
const http = require('http')
const PORT = process.env.PORT || 3001
const cors = require('cors')
const bodyParser = require('body-parser')
const api = require('./api')

const app = express()

async function init() {
  app.use(
    cors({
      credentials: true
    })
  )
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  )

  app.use(bodyParser.json())
  app.use('/api', api)
  const server = http.createServer(app)

  server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
  })
  server.on('error', (e) => console.log('Error', e))
}

init()
