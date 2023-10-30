const User = require('../model/User');

module.exports = {
     // FUNÇÃO RESPONSÁVEL POR BUSCAR TODOS OS PENSAMENTOS CADASTRADOS 
     async findAllUsers(request, response){
        const users = await User.findAll({ raw: true })
        return response.json(users)
    },

    async createUser(request, response){
        const { name, email, password, confirm_password } = request.body
        // A FUNÇÃO CREATE É RESPONSÁVEL POR CRIAR OU INSERIR OS DADOS.
        // NESSE CENÁRIO, A FUNÇÃO CREATE É RESPONSÁVEL POR CADASTRAR OS PENSAMENTOS NO BANCO DE DADOS NA TABELA DE THOUGHTS(PENSAMENTOS)
        const user = await User.create({ name, email, password, confirm_password })
        
        return  response.json(user)
    },

    async findUser(request, response){
        const { id } = request.params

        const user = await User.findOne({where: { id: id }})
        
        return response.json(user)
    },

    async updateUser(request, response){
        const { id } = request.params 
        const { name, email, password, confirm_password } = request.body

        const user = await User.update(
            {
                name, email, password, confirm_password
            },
            {
                where: {id:id}
            }
        )

        return response.json(user)
    },

    async deleteUser(request, response){
        const {id} = request.params

        const user = await User.destroy({where: {id:id}})
        
        return response.json({message: "Pensamento deletado com sucesso"})
    }
}