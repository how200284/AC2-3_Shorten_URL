const express = require('express')
const exphbs = require('express-handlebars')


require('./config/mongoose')
const URLs = require('./models/URLs')
const generateURL = require('./generateURL')


const app = express()
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
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
  const randomNumber = req.params.randomNumber
  URLs.findOne({"shortenURL": randomNumber})
    .then(data => data ? res.redirect(data.originalURL) : res.render('fail', { randomNumber } ))
    .catch(error => console.log(error))
})

app.listen( PORT, () => {
  console.log(`This app is running on http://localhost:${PORT}`)
})