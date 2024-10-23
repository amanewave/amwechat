const Router = require('express')
const router = new Router
const userController = require('../controllers/userController.js')
const accessMiddleware = require('../middleware/accessMiddleware.js')

router.post('/register',userController.register)
router.get('/getUser/:id', userController.getUser)
router.get('/getUsers',accessMiddleware,userController.getUsers)
router.post('/login',userController.login)
router.post('/changePassword',userController.changePassword)
router.get('/getMe',accessMiddleware, userController.getMe)

module.exports = router