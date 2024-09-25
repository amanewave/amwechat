const mysql = require('mysql2')

module.exports = function(req,res,next) {
    const connection = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: 'qwe123',
			database: 'amwechat',
		})

		connection.connect()

        req.db = connection.query.bind(connection)
            next()
}