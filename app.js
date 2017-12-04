const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(port, (req, res) => {
  console.log(port, 'listeninggggg')
})
