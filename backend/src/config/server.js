const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const expressQueryInt = require('express-query-int')
const server = express()
const cors = require('./cors')

server.use(expressQueryInt())
server.use(cors)
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())

server.listen(port, () => {
    console.log(`Backend is running on port ${port}`)
})

module.exports = server