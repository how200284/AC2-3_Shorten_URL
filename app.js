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
app.use(express.urlencoded({ extended: true }))

const URLs = require('./models/URLs')
const generateURL = require('./generateURL')

const PORT = 3000


app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  if (!req.body.URL) return res.redirect('/')

  const result = generateURL()
  URLs.findOne({"originalURL": req.body.URL})
    .then(data => data ? data : URLs.create({ originalURL: req.body.URL, shortenURL: result }))
    .then(data => { res.render('success', { randomNumber : data.shortenURL })})
    .catch(error => console.log(error))
 })

app.get('/:randomNumber', (req, res) => {
  URLs.findOne({"shortenURL": req.params.randomNumber})
    .then(data => res.redirect(data.originalURL))
    .catch(error => console.log(error))
})

app.listen( PORT, () => {
  console.log(`This app is running on http://localhost:${PORT}`)
})