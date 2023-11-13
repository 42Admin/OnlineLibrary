const { Router } = require('express')
const genresController = require('../controllers/genres.controller')


const router = Router()

router.get('', genresController.getGenres)

module.exports = router