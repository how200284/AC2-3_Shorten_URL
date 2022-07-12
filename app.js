const express = require('express')
const mongoose = require('mongoose')

const app = express()
mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection
db.on('error', () => {
  console.log('MongoDB connect error!')
})
db.once('open', () => {
  console.log('MongoDB connected!')
})

const PORT = 3000


app.get('/', (req, res) => {
  res.send('ok')
})

app.listen( PORT, () => {
  console.log(`This app is running on http://localhost:${PORT}`)
})