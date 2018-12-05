console.log('hello!')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const config = require('./config/config')
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
var mongoose = require('mongoose')
// const MongoClient = require('mongodb').MongoClient

mongoose.connect('mongodb://vuer:vuewing2@ds125684.mlab.com:25684/vue-practice')
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function (callback) {
  console.log('Connection Succeeded')
})
console.log(`at ${config.port}`)
app.listen(process.env.PORT || config.port)

app.get('/status', (req, res) => {
  res.send({
    message: 'hello world!'
  })
})

app.post('/register', (req, res) => {
  // console.log(res)
  db.collection('register').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
  })
  res.send({
    message: `${req.body.email} you were registered`
  })
})
console.log('app ' + app)
app.get('/posts', (req, res) => {
  res.send(
    [{
      title: 'Hello World!',
      description: 'Hi there! How are you?'
    }]
  )
})
