const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    name: String,
    bookGenresId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Genres'
    },
    bookBorrowerId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        default: null
    }
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book