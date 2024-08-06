const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname,'dados.txt')

function exibirConteudo(err,conteudo){
    console.log(conteudo.toString())
}
//Sem esperar resposta
fs.readFile(caminho, exibirConteudo)
fs.readFile(caminho,(_,conteudo)=> console.log(conteudo.toString()))

//Esperando resposta
console.log("Inicio")
const conteudo= fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log("Fim xD")