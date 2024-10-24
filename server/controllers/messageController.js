const { query } = require('express')
const jwt = require('jsonwebtoken')

class messageController {
	async sendMessage(req, res) {
		try {
			const messageTo = req.body.message_to
			const messageValue = req.body.message_value
			const query =
				'INSERT INTO message (message_from, message_to, message_value) VALUES (?,?,?)'

			const token = req.headers.token.split(' ')[1]
			const decoded = jwt.decode(token)
            const userId = decoded.id

			req.db(query, [userId, messageTo, messageValue], (error, result) => {
				if (error) {
					console.log(error)
				}

				res.json(result)
			})
		} catch (e) {
            console.log(e);
            
			return res.json({ message: 'error' })
		}
	}

	async getMessages(req, res) {
		try {
			const query = 'SELECT * FROM message'
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

    async getChats(req,res){
        try{
            const token = req.headers.token.split(' ')[1]
			const decoded = jwt.decode(token)
			const userId = decoded.id
            const query = `
            SELECT DISTINCT 
                CASE 
                    WHEN message_from = ? THEN message_to 
                    ELSE message_from 
                END AS message_to
            FROM message
            WHERE message_from = ? OR message_to = ?
        `
			const params = [userId, userId, userId]

            req.db(query, params, (error, result)=>{
                if(error){
                    console.log(error);
                }

                console.log(result);

                return res.json(result)

            })
        } catch (e){
            console.log(e);
            
        }
    }

    async getChatMessages (req, res){
        const id = req.params.id
        const token = req.headers.token.split(' ')[1]
		const decoded = jwt.decode(token)
		const userId = decoded.id
        try{
            const query = `
            SELECT * 
            FROM message 
            WHERE (message_from = ? AND message_to = ?) 
               OR (message_from = ? AND message_to = ?)
        `

			const params = [userId, id, id, userId]

            req.db(query,params,(error, result)=>{
                if(error){
                    console.log(error);
                }

                res.json(result)
            })
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new messageController()