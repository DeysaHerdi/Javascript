const nums = [1, 2, 3, 4, 5];
const dobro = (n) => n * 2;
console.log(nums.map(dobro));

const nomes = ["Ana", "Carla", "Renato", "Guilherme", "Julia"];
const primeiraLetra = (texto) => texto[0];
console.log(nomes.map(primeiraLetra));

const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impresssora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

const getItens = item => item.nome
console.log(carrinho.map(getItens))

const getTotal = item => item.qtde * item.preco
const tudo = carrinho.map(getTotal)
console.log(tudo)

//__________________________________________________

//Versão manual do map

 Array.prototype.meuMap = function(fn){
  const novoArray = []
  for(let i =0; i < this.length; i++){
    const resultado = fn(this[i], i, this)
    novoArray.push(resultado)
  }
  return novoArray
 }

 const itens = item => item.nome
 console.log(carrinho.meuMap(itens))
 
 const total = item => item.qtde * item.preco
 const totais = carrinho.meuMap(total)
 console.log(totais)