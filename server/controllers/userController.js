require('dotenv').config()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const generateAccessToken = (id, username) => {
	const payload = {
		id,
		username
	}
	return jwt.sign(payload, process.env.SECRET, {expiresIn:"1h"})
}

class userController {
	async register(req, res) {
		const password = req.body.password
		console.log(req.body.password);
		try {
			const hashPassword = bcrypt.hashSync(password, 8)
			const insertQuery =
				'INSERT INTO user (username, password, age, email) VALUES (?, ?, ?, ?)'
			const selectQuery = 'SELECT * FROM user'

			await new Promise((resolve, reject) => {
				req.db(
					insertQuery,
					[
						`${req.body.username}`,
						`${hashPassword}`,
						`${req.body.age}`,
						`${req.body.email}`,
					],
					(error, result) => {
						if (error) {
							console.log(error)
							return reject(error)
						}
						resolve(result)
					}
				)
			})

			const users = await new Promise((resolve, reject) => {
				req.db(selectQuery, [], (error, result) => {
					if (error) {
						console.log(error)
						return reject(error)
					}
					resolve(result)
				})
			})

			const dbId = users[users.length - 1].id_user
			const dbUserName = users[users.length - 1].username

			const token = generateAccessToken(dbId, dbUserName)
			return res.cookie('acessToken', token, { maxAge: 900000, httpOnly: true }).json({success: true})
		} catch (e) {
			console.error(e)
			return res.json({ message: 'Error' })
		}
	}

	async login(req, res) {
		try {
			const username = req.body.username
			const password = req.body.password
			const query = `SELECT * FROM user WHERE username=?`

			req.db(query, [username, password], (error, result) => {
				if (error) {
					console.log(error)
				}

				if (result.length === 0) {
					return res.json({ message: 'user doesnt exists' })
				}

				const validPassoword = bcrypt.compareSync(password, result[0].password)
				if (!validPassoword) {
					return res.json({ message: 'incorrect password' })
				}


				const dbUserName = result[0].username
				const dbId = result[0].id_user
				
				const token = generateAccessToken(dbId, dbUserName)

				return res
					.cookie('acessToken', token, { maxAge: 900000, httpOnly: true })
					.json({ success: true })
			})
		} catch (e) {
			console.log(e)
		}
	}

	async changePassword(req, res) {
		try {
			res.json('changed succ')
		} catch (e) {
			console.log(e)
		}
	}

	async getUsers(req, res) {
		try {
			const query = 'SELECT * FROM user'
			req.db(query, (error, result) => {
				if (error) {
					console.log(error)
					return res.json({ message: 'error' })
				}
				return res.json(result)
			})
		} catch (e) {
			console.log(e)
		}
	}

	async getUser(req, res) {
		try {
			const id = req.params.id
			const query = `SELECT * FROM user WHERE id_user = ${id}`

			req.db(query, [id], (error, result) => {
				if (error) {
					console.log(error)
					return res.json({ message: 'error' })
				}
				return res.json({ result })
			})
		} catch (e) {
			console.log(e)
		}
	}

	async getMe(req, res) {
		try{
			const token = req.cookies.acessToken
			const decoded = jwt.decode(token)
			console.log(decoded)
			return res.json({decoded})
		} catch (e) {
			console.log(e);
		}
	}

	async logOut(req, res) {
		try {
			return res.clearCookie('acessToken').json('logout true')
		} catch (e) {
			console.log(e);
		}
	}

}

module.exports = new userController()
