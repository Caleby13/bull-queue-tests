import Mail from '../lib/Mail'

export default {
    key:'UserReport',
    async handle({data}){
        const {user} = data
        console.log(user)
    }
}