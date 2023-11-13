const mongoose = require('mongoose')

const genresSchema = mongoose.Schema({
    name: String,
    description: String
})

const Genres = mongoose.model('Genres', genresSchema)

module.exports = Genres