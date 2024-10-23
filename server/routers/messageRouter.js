const Router = require('express')
const router = new Router()
const messageController = require('../controllers/messageController')
const accessMiddleware = require('../middleware/accessMiddleware.js')

router.use(accessMiddleware)

router.post('/sendMessage', accessMiddleware,messageController.sendMessage)
router.get('/getChatMessages/:id',accessMiddleware, messageController.getChatMessages)
router.get('/getChats',accessMiddleware, messageController.getChats) 

module.exports = router