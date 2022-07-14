const express = require('express')
const exphbs = require('express-handlebars')

require('./config/mongoose')
const routes = require('./routes')

const app = express()
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(routes)

const PORT = 3000

app.listen( PORT, () => {
  console.log(`This app is running on http://localhost:${PORT}`)
})