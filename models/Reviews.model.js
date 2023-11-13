const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    name: String,
    reviewBookId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Book'
    },
})

const Reviews = mongoose.model('Reviews', reviewsSchema)

mudule.exports = Reviews