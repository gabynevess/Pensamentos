// IMPORTANDO O MODEL THOUGHT
const { json } = require('sequelize')
const { findAll, update } = require('../model/Thoughts')
const Thought = require('../model/Thoughts')

module.exports ={
    // Função responsável por rederizar a página de Dashboard
    async dashboard(request, response){
        const thoughts = await Thought.findAll({raw:true})
       return response.render("thoughts/dashboard", {thoughts})
    },
    // Função responsável por redirecionar para a página de cadastrar o pensamento.
    async registerThought(request, response){
        return response.render("thoughts/register")
    },

    async createThought(request, response){
        const {title, description} = request.body
        const thought = await Thought.create({title, description})

        try{
            if(thought){
                return response.redirect("/thoughts/dashboard")
            }
        }catch(error){
            console.error(error)
        }
    },

    async showPageEditThought(request, response){
        const { id } = request.params
        const thought = await Thought.findOne({ where: { id: id}, raw: true})

        return response.render("thoughts/edit", { thought })
    },

    // Função responsável por buscar todos os pensamentos cadastrados
    async updateThought(request, response){
        const {id} = request.params 
        const {title, description} = request.body

        const thought = await Thought.update(
            {
                title, description
            },
            {
                where: { id : id  }
            }
        )

        try{
            if(thought){
                return response.redirect("/thoughts/dashboard")
            }
        }catch(error){
            console.error(error)
        }
    },

    async deleteThought(request, response){
        const {id} = request.params
        
        const thought = await Thought.destroy({where: {id:id}})
        
        try{
            if(thought){
                return response.redirect("/thoughts/dashboard")
            }
        }catch(error){
            console.error(error)
        }
    }
} 