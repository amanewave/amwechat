require('dotenv').config
const jwt = require('jsonwebtoken')

module.exports = function(req, res, next){
    if(req.method === 'OPTIONS'){
        next()
    }

    console.log(req.cookie)

    try{
        const token = req.headers.token.split(' ')[1]

        if(!token){
            return res.status(400).json({message: "user is not logged in"})
        }

        next()

    } catch (e) {
        return res.status(400).json({ message: 'user is not authorised' })
    }
}