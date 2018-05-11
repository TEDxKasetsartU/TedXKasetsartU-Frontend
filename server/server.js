
const express = require('express')
const compression = require('compression')
const bodyParser = require('body-parser')
const path = require('path')
const morgan = require('morgan')
const dotEnv = require('dotenv')

dotEnv.config()

const app = express()
const PORT = process.env.PORT || 8765

app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))

app.use(express.static(path.resolve(__dirname, '../build')))

app.get('*', (request, response) => {
  const filePath = path.resolve(__dirname, '../build', 'index.html')
  response.sendFile(filePath)
})

app.listen(PORT, () => console.log(`TEDxKU Frontend is serving at ${PORT}`))
