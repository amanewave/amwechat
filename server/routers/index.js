const Router = require('express')
const router = new Router()
const userRouter = require('../routers/userRouter.js')
const messageRouter = require('../routers/messageRouter.js')

router.use('/user', userRouter)
router.use('/message',messageRouter)
module.exports = router
