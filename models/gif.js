const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const GifSchema = new Schema({
  url: String
})

const Gif =  mongoose.model('Gif', GifSchema)

module.exports = Gif