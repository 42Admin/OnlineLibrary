const {Router} = require('../controllers/book.controller')
const bookController = require('../controller/book.controller')

const router = Router()

router.get('', bookController.getBook)
router.get('/:id', bookController.getBookId)

module.exports = router