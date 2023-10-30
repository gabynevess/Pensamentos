const express = require("express")
const handlebars = require("express-handlebars")
require("./database/index")
const path = require('path')

const app = express()
app.use(express.json())

app.use(express.urlencoded({extended: true}))

const thoughtRoutes = require("./routes/thoughtsRouters")
const usersRoutes = require("./routes/usersRoutes")

app.engine('handlebars', handlebars.engine())
app.set('view engine','handlebars')

app.set('views', path.join(__dirname, 'views/'))

// Utilizando arquivos estáticos
app.use(express.static(__dirname +'/public'))

handlebars.create({
    partialsDir: path.join(__dirname, "views/partials")
})

// Utilizar os arquivos de rotas
app.use(thoughtRoutes)
app.use(usersRoutes)

app.listen(3333, console.log("Servidor rodando na porta 3333"))