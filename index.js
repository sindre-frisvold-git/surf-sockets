const { default: mongoose } = require('mongoose')
const { server } = require('./server')
require('dotenv').config()

const PORT = process.env.PORT || 3000

async function mongo() {
  await mongoose.connect(process.env.MONGO_URI)
}

mongo().catch(console.error)
const doggoSchema = new mongoose.Schema({
  name: String,
  breed: String,
  age: Number,
})

const puppy = mongoose.model('Puppy', doggoSchema)

const fido = new puppy({ name: 'fido', breed: 'cute', age: 2 })

fido.save()
server.listen(PORT, () => {
  console.log('listening on ' + PORT)
})
