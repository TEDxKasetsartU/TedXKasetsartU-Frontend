
const express = require('express')
const compression = require('compression')
const bodyParser = require('body-parser')
const path = require('path')
const morgan = require('morgan')

const app = express()
const PORT = process.env.PORT

app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))

app.use(express.static(path.resolve(__dirname, '../build')))

app.listen(PORT, () => console.log(`TEDxKU Frontend is serving at ${PORT}`))
