const Book = require('../models/Books.model')
const User = require('../models/User.model')

const userController = {
    getUser : async (req, res) => {
        try {
            const user = await User.find();
            res.json(user)
        } catch (error) {
            res.json(error);
        }
    },
    getUserById : async (res, res) => {
        try {
            const user = await User.findById(req.params.id);
            res.json(user);
        } catch (error) {
            res.json(error)
            }
        },
        postUser : async (req, res) => {
            try {
                const user = await User.create({
                    name: req.body.name,
                    email: req.body.email,
                    userBookId: req.body.userBookId,
                    isAdmin: req.body.isAdmin,
                });
                res.json(user);
            } catch (error) {
                res.json(error); 
            }
        },
        patchUser : async (req, res) => {
            try {
                const user = await User.findByIdAndUpdate(req.params.id, {
                    name : req.body.name,
                });
                res.json(user);
            } catch (error) {
                res.json(error);
            }
        },
        deleteUser : async (req, res) => {
            try {
                const user = await User.findByIdAndRemove(req.params.id);
                res.json(user)
            } catch (error) {
                res.json(error)
            }
        },
        takeBook : async (req, res) => {
            try {
                const user = await User.findById(req.body.bookId)
                const book = await Book.findById(req.body.bookId)
                if (user.isBlocked === true) {
                    return res.json(`You're block . Сontact our support`)
                } else if (book.bookBorrowerId !== null) {
                return res.json(`Sorry, but this book is currently busy. Please wait`)
                } else if (user.userBookId.lenght >= 3) {
                    return res.json(`Sorry, but you took the maximum number of books`)
                } else {
                    await Book.findByIdAndUpdate(req.params.id, {
                        $addToSet: {
                      userBookId: req.body.bookId,
                        },
                    });
                    res.json(`Here's your book`);
                }
                res.json(`Everything is fine`);
            } catch (error) {
                res.json(error)
            }
        },
        returnBook : async (req, res) => {
                try {
                    await Book.findByIdAndUpdate(req.body.bookId, {
                        bookBorrowerId: "",
                    });
                    await User.findByIdAndUpdate(req.params.id, {
                        $pull: {
                            userBookId: req.body.bookId,
                        },
                    });
                    res.json(`The remove was successful`);
                } catch (error) {
                    res.json(error);
                }
            },   
    };

    module.exports = usersController