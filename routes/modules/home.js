const express = require('express')
const router = express.Router()

const URLs = require('../../models/URLs')
const generateURL = require('../../generateURL')


router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  if (!req.body.URL) return res.redirect('/')
  const result = generateURL()
  URLs.findOne({ "originalURL": req.body.URL })
    .then(data => data ? data : URLs.create({ originalURL: req.body.URL, shortenURL: result }))
    .then(data => { res.render('success', { randomNumber: data.shortenURL }) })
    .catch(error => console.log(error))
})

router.get('/:randomNumber', (req, res) => {
  const randomNumber = req.params.randomNumber
  URLs.findOne({ "shortenURL": randomNumber })
    .then(data => data ? res.redirect(data.originalURL) : res.render('fail', { randomNumber }))
    .catch(error => console.log(error))
})

module.exports = router