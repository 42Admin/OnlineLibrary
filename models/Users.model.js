const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    userBookId: [{
        type: Boolean,
        deafult: false
    }],
    isBlocked: {
            type: Boolean,
            deafult: false
        },
        isAdmin: Boolean
})

const User = mongoose.model('User', userSchema)

module.exports = User