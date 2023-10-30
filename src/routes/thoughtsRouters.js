const express = require("express")

const ThoughtsController = require('../controllers/thoughtsController')
const router = express.Router()

//Rota responsável por redirecionar para a página de Dasboard
router.get('/thoughts/dashboard', ThoughtsController.dashboard)

// rota responsável por redirecionar para página de cadastrar pensamentos
router.get("/thoughts-create", ThoughtsController.registerThought)
router.post("/thoughts/create", ThoughtsController.createThought)
// Rota responsável por cadastrar o pensamento na aplicação
router.get("/thoughts/edit/:id", ThoughtsController.showPageEditThought)
router.post("/thoughts/update/:id", ThoughtsController.updateThought)

// rota responsável por deletar um pensamento na aplicação
router.post("/thoughts/remove/:id", ThoughtsController.deleteThought)

module.exports = router;