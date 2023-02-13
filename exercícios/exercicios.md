# Arrow Function

## 1
Converta os códigos abaixo para arrow functions

### A
```js
const meusNumeros = [1,2,3,4,5,6,7,8];

meusNumeros.forEach(function (numero) {
    console.log('Meu número da vez é:', numero);
})
```

### B
```js
const meusFilmes = ['matrix', 'Rambo', 'Toy Story', 'it - a coisa'];

meusFilmes.forEach(function (filme, indice) {
    console.log(`Meu filme ${filme} está na posição ${indice}`);
})
```

### C
```js
function escrevaMeuNome() {
    console.log('Meu nome é Luis Carlos')
}

escrevaMeuNome();
```

### D
```js
function calculadora() {
    const soma = function (a,b) {
        console.log('Resultado da soma', a + b)
    }

    return {
        soma,
        subtracao: function (a, b) {
            console.log('Resultado da subtração', a - b)
        }
    }
}

const calc = calculadora();
calc.soma(2,2);
calc.subtracao(2,2);
```

# Solução
## 1
### A
### B
### C
### D