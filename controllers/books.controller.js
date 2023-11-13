const Book = require('../models/Book.model')

const booksController = {
    getBook : async (req, res) => {
        try {
            const book = await Book.find()
            res.json(book)
        } catch (error) {
            res.json(error)
        }
    },
    postBook : async (req,res) => {
        try {
            const book = book = await Book.create({
                name : req.body.name,
                bookGenresId : req.body.bookBorrowerId
            })
            res.json(book)
        } catch (error) {
            res.json(error)
        }
    },
    patchBook : async (req,res) => {
        try {
            const book = await Book.findByIdAndUpdate(req.params.id , {
                name : req.body.name,
                bookGenresId : req.body.bookGenresId,
                bookBorrowerId : req.body.bookNBorrowerId
            })
            res.json(book)
        } catch (error) {
            res.json(error)
        }
    },
    getBookById : async (req, res) => {
        try {
            const book = await Book.findById(req.params.id)
            res.json(book)
        } catch (error) {
            res.json(error)
        }
    }
}

module.exports = booksController