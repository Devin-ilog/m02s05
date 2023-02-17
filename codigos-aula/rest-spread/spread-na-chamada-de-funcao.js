//Uma função feia, só para deixar claro que o operador ...(spread) na chamada
//de uma função decompõe um array em parâmetros
function imprimeNomes(nome1, nome2, nome3){
    console.log(nome1);
    console.log(nome2);
    console.log(nome3);
} 

const nomes = ['Luis', 'Karina', 'Pedro'];

imprimeNomes(...nomes);