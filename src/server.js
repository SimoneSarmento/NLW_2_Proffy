//servidor
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses, savedRegistration } = require('./pages') 


//configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Inicio e configuração do servidor
//o use é configuração do servidor
server
//receber os dados do reg.body
.use(express.urlencoded({ extended: true }))
//configurar arquivos estaticos (css, scripts, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.get("/saved-registration", savedRegistration)

//start do servidor
.listen(5500);

