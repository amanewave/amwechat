const Router = require('express')
const router = new Router()
const messageController = require('../controllers/messageController')
const accessMiddleware = require('../middleware/accessMiddleware.js')

router.use(accessMiddleware)

router.post('/sendMessage',messageController.sendMessage)
router.get('/getChatMessages/:id', messageController.getChatMessages)
router.get('/getChats', messageController.getChats) 

module.exports = router