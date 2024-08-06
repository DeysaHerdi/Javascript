// MAP, ARRAY ...
const vestidos = [
    {cor:"Azul", quantia:10, vedido: 2},
    {cor:"Vermelho", quantia:5, vedido: 3},
    {cor:"Amarelo", quantia:1, vedido: 1},
]

const vestidosTotais = vestido => vestido.cor
console.log(vestidos.map(vestidosTotais)) 


const vestidosEmEstoque = vestido => vestido.quantia - vestido.vedido
console.log(vestidos.map(vestidosEmEstoque))

// ___________________________

