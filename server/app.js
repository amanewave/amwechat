require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const mysql = require('mysql2')
const router = require('./routers/index')
const connectionMiddleware = require('./middleware/connectionMiddleware')
const cookieParser = require('cookie-parser')


const port = process.env.PORT
let corsOptions = {
	origin: ['http://localhost:3000'],
}
app.use(function (req, res, next) {
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9000');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
res.setHeader('Access-Control-Allow-Credentials', true);
next();
})
app.use(cors(corsOptions))
app.use(cookieParser())
app.use(express.json())
app.use(connectionMiddleware)
app.use('/',router)

app.get('/',(req, res)=>{
    res.send('jasd')
})

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qwe123',
    database: 'amwechat',
})

connection.connect()

const server = async() => {
    try{
        
        app.listen(port, () => {
		})
    } catch(e){
        console.log(e);
    }
}

server()