class Produto {
    
    constructor(nome, preco, desc = 0.5){
        this._nome = nome
        this.preco = preco
        this.desc = desc
    }

    get nome(){
        return `Produto: ${this._nome}`
    }

    get precoFinal(){
        return this.preco * (1 - this.desc)
    }
}

const p1 = new Produto('Caneta' , 10)
console.log(p1.nome)

const p2 = new Produto('Geladeira' , 3000)
console.log(p2.preco)
console.log(p2.precoFinal)

const arr = ['a', 'b', 'c'];
arr.test = 'abc';

// Mostra "a, b, c"
for (let i = 0; i < arr.length; ++i) {
  console.log(arr[i]);
}