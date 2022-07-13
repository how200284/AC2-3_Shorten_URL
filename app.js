const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')

const app = express()

mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection
db.on('error', () => {
  console.log('MongoDB connect error!')
})
db.once('open', () => {
  console.log('MongoDB connected!')
})

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

const PORT = 3000


app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  res.render('success')
})

app.listen( PORT, () => {
  console.log(`This app is running on http://localhost:${PORT}`)
})