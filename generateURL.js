const URLs = require('./models/URLs')
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection
db.on('error', () => {
  console.log('MongoDB connect error!')
})
db.once('open', () => {
  console.log('generateURL.js MongoDB connected!')
})

function generateURL(URL) {
  // pool
  const numbers = '1234567890'
  const alphabet = 'abcdefghijklmnopqusruvwxyz'
  const uppercaseAlphabet = alphabet.toUpperCase()
  const pool = ''.concat(numbers, alphabet, uppercaseAlphabet).split('')

  // select
  let randomNumber = ''
  for (let i = 0; i < 5; i++) {
    let index = Math.floor(Math.random() * pool.length)
    randomNumber += pool[index]
  }

  // log down to mongoDB
  // db.on('open', () => {
    URLs.create({ originalURL: URL, shortenURL: randomNumber })
    console.log('created!')
  // })
}

// export
module.exports = generateURL