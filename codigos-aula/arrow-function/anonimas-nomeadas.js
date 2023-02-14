const numeros = [1,2,3,4,5,6];

//um forEach com uma função nomeada
/*numeros.forEach(function umNomeBacana(numero){
    throw new Error('Deu ruim no numero', numero);
});*/

//um forEach em uma função normal anônima
/*numeros.forEach(function (numero){
    throw new Error('Deu ruim no numero', numero);
});*/

/*numeros.forEach(numero => {
    throw new Error('Deu ruim no numero', numero);
})*/

/*function umaFuncaoBacaninha() {
    numeros.forEach(numero => {
        throw new Error('Deu ruim no numero', numero);
    })  
}

umaFuncaoBacaninha()*/

//Exemplo de uma função com "callback"
function umaFuncaoQueRecebeUmaFuncaoComoParametro(valor, fn) {
    fn(valor);
}

/* exemplo com função normal

umaFuncaoQueRecebeUmaFuncaoComoParametro('Luis', function(valor) {
    console.log('Eu sou uma função recebida por parametro e imprimo', valor);
});*/

//mesma implementação usando arrow function
//umaFuncaoQueRecebeUmaFuncaoComoParametro('Luis', valor => {
//    console.log('Eu sou uma função recebida por parametro e imprimo', valor);
//})


//Nomeadas
function umNome() {
    //faz algo
}

//dando um nome para arrow functions
/*const umNomeComArrow = numero => {
    throw new Error('Deu ruim no numero', numero);
}

//modo simplificado
numeros.forEach(umNomeComArrow);

//Por debaixo dos panos faz isso
numeros.forEach(numero => {
    umNomeComArrow(numero)
});*/

/*const umNomeFeio = function (numero) {
    throw new Error('Deu ruim no numero', numero);
}

numeros.forEach(umNomeFeio)*/

/*const escrevaMeuNome = () => {
    console.log('Meu nome é Luis Carlos')
}

console.log(escrevaMeuNome);
escrevaMeuNome();
numeros.forEach(escrevaMeuNome)
numeros.forEach(numero => {
    escrevaMeuNome()
})*/

const calculadora = () => {
    const soma = (a,b) => {
        console.log('Resultado da soma', a + b)
    }

    return {
        soma,
        subtracao: (a, b) => {
            console.log('Resultado da subtração', a - b)
        }
    }
}

const calc = calculadora();
calc.soma(2,2);
calc.subtracao(2,2);