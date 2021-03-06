import Queue from '../lib/Queue'

class UserController{
    async store(req, res) {
        const {name, email, password} = req.body
        const user = {
            name,
            email,
            password
        }

        await Queue.add('RegistrationMail',{user})
        await Queue.add('UserReport',{user})

        return res.json(user)
    }
}

export default new UserController()