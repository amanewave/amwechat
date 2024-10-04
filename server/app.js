require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const mysql = require('mysql2')
const router = require('./routers/index')
const connectionMiddleware = require('./middleware/connectionMiddleware')
const cookieParser = require('cookie-parser')


const port = process.env.PORT
app.use(cookieParser())
app.use(cors())
app.use(express.json())
app.use(connectionMiddleware)
app.use('/',router)

app.get('/',(req, res)=>{
    res.send('jasd')
})

const server = async() => {
    try{
        
        app.listen(port, () => {
		})
    } catch(e){
        console.log(e);
    }
}

server()