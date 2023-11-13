const Genres = require('../models/Genres.model')

const genresController = {
    getGenres : async (req,res) => {
        try {
            const genres = await Genres.find()
                res.json(genres)
            } catch (error) {
                res.json(error)
            }
        },
    postGenres : async (req, res) => {
        try {
            const genres = await Genres.create({
                name : req.body.name,
                description : req.body.description
            })
            res.json(genres)
        } catch (error) {
            res.json(error)
        }
    }, 
    patchGenres : async (req, res) => {
        try {
            const genres = await Genres.findByIdAndUpdate(req.params.id)
        res.json(genres)
            } catch (error) {
                res.json(error)
            }
        }
    }

    module.exports = genresController
