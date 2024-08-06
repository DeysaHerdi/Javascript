function bomDia(){
    console.log('Bom dia')
}
const boaTarde = function(){
    console.log('Boa tarde')
}

//Passar uma função como parametro para outra função
function executarQualquerCoisa(fn){
    if(typeof fn === 'function'){
        fn()
    }
}

executarQualquerCoisa(3)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

// Retornar uma função apartir de uma outra função
function potencia(base){
    return function(exp){
        return Math.pow(base,exp)
    }
}
const potenciaDe2= potencia(2)
console.log(potenciaDe2(8)) 

const pot34 = potencia(3)(4)
console.log(pot34)

function falar(frase){
    return function(nome){
        return frase + nome
    }
}

const oi = falar("Oi ")
console.log(oi("Ysa"))

const boaNoite = falar("Boa Noite ")
console.log(boaNoite("Sol"))

function somando(numero1){
    return function(numero2){
        return numero1 + numero2
    }
}

const soma1E2 = somando(1)
console.log(soma1E2(2))

const somaSemO2= somando(1)
console.log(somaSemO2(0))

const resultado = somando(5)(5)
console.log(resultado) 