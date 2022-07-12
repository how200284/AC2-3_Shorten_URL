const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlSchema = new Schema({
  originalURL: { type: String },
  shortenURL: { type: String }
})

module.exports = mongoose.model('URLs', urlSchema)