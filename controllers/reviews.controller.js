const Reviews = require('../models/Reviews.model')

const reviewsController = {
    getReviews : async (req, res) => {
    try {
        const reviews = await Reviews.find()
        res.json(reviews)
    } catch (error) {
        res.json(error)
    }
},
postReviews : async (req, res) => {
    try {
        const reviews = await Reviews.create({
            name : req.body.name,
            reviewsBookId : req.reviewsBookId
        })
        res.json(reviews)
    } catch (error) {
        res.json(error)
    }
},
}

module.export = reviewsController