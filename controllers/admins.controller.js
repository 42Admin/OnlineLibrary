const Book = require('../model/Book.model')
const User = require('../model/User/model')

const adminsController = {
    blockUser : async (req, res) => {
 try {
    const deleteUser = await User.findById(req.params.id)
    deleteUser.userBook.forEach( async (element) => {
        await Book.findByIdAndUpdate(element, {bookBorrowerId : ""})
})
res.json(`This user is blocked`)
 } catch (error) {
    res.json(error) 
    }
 },
 unlockUser : async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.id , {
            isBlock : false
        })
        res.json(`This user is blocked`)
    } catch (error) {
        res.json(error)
    }
  }
}

module.exports = adminsController
