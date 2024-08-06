const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99, fragil: true },
  { nome: "Impresssora", qtde: 1, preco: 649.5, fragil: true },
  { nome: "Caderno", qtde: 4, preco: 27.1, fragil: false },
  { nome: "Lapis", qtde: 3, preco: 5.82, fragil: false },
  { nome: "Tesoura", qtde: 1, preco: 19.2, fragil: true },
];

// filter, map. reduce

// 1. fragil: true
//const verdadeiro = (item)=> item.fragil === true
//console.log(carrinho.filter(verdadeiro))

// 2. qtde e preco ->total
//const total = item => item.qtde * item.preco
//console.log(carrinho.map(total))

// 3. media dos totais, ex professor

const fragil = (objeto) => objeto.fragil;
const getTotal = (objeto) => objeto.qtde * objeto.preco;
const getMedia = (acc, el) => {
  const novaQtde = acc.qtde + 1;
  const novoTotal = acc.total + el;
  return {
    qtde: novaQtde,
    total: novoTotal,
    media: novoTotal / novaQtde,
  };
};
const mediaInicial = { qtde: 0, total: 0, media: 0 };

const media = carrinho
  .filter(fragil)
  .map(getTotal)
  .reduce(getMedia, mediaInicial);

console.log(media);

// Testes de retorno

//var a = [1, 2, "b", 0, {}, "", NaN, 3, undefined, null, 5, true, false];

//var b = a.filter(Boolean);  // [1, 2, "b", {}, 3, 5];
//console.log(b)
