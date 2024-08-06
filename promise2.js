setTimeout(function () {
  console.log("Executando callback xD");

  setTimeout(function () {
    console.log("Executando callback xD");

    setTimeout(function () {
      console.log("Executando callback xD");
    }, 2000);
  }, 2000);
}, 2000);



function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando promise xD')
            resolve()
        }, tempo)
    })
}

esperarPor()
    .then(()=>esperarPor())
    .then(esperarPor)