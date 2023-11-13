const { Router } = require('../controllers/reviews.controller')
const reviewsController = require('../controllers/reviews.controller')

const router = Router()

router.get('', reviewsController.getReviews)
router.post('', reviewsController.postReviews)
router.patch('', reviewsController.patchReviews)
router.delete('/:id', reviewsController.deleteReviews)

module.exports = router