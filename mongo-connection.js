const mongoose = require('mongoose')
mongoose.connect('mongodb://0.0.0.0/BookSwap')

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('we are connected to mongodb!')
})