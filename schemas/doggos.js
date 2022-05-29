const { default: mongoose } = require('mongoose')

const doggoSchema = new mongoose.Schema({
  name: String,
  breed: String,
  age: Number,
})

const puppy = mongoose.model('Puppy', doggoSchema)
