import Mail from '../lib/Mail'

export default {
    key:'RegistrationMail',
    async handle({data}){
        const {user} = data
        await Mail.sendMail({
            from: 'Teste <test@test.com>',
            to: `${user.name} ${user.email}`,
            subject: "Cadastro de usúario",
            html: `Olá ${user.name}, seu cadastro foi concluido com sucesso`
            
        })



    }
}