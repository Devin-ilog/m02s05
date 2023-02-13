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

## 2

Passe para arrow function e deixe as funções o mais "enxutas" possíveis

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
        console.log('Você está somando'a, 'com', b);
        console.log('Resultado da soma', a + b);
    }

    return {
        soma,
        subtracao: function (a, b) {
            console.log('Você está subtraindo'b, 'de', a);
            console.log('Resultado da subtração', a - b)
        }
    }
}

const calc = calculadora();
calc.soma(2,2);
calc.subtracao(2,2);
```
## 3
Corrija o código abaixo levando em conta os escopos
### A
```js
class Time {
    constructor(listaDeJogadores) {
        this._jogadores = listaDeJogadores;
        this._data = new Date();
        this._estadio = 'Ressacada';
    }

    escalacao() {
        this._jogadores.forEach(function(jogador) {
            console.log('O jogador', jogador);
            console.log('Esta na escalação do dia', this._data);
            console.log('para jogar no estádio', this._estadio);
        });
    }
}

const jogadores = ['Tio patinhas', 'Huguinho', 'Zezinho', 'Luizinho'];
const time = new Time(jogadores);
time.escalacao();
```

# Solução
## 1
### A
```js
const meusNumeros = [1,2,3,4,5,6,7,8];

meusNumeros.forEach(numero => {
    console.log('Meu número da vez é:', numero);
})
```
### B

```js
const meusFilmes = ['matrix', 'Rambo', 'Toy Story', 'it - a coisa'];

meusFilmes.forEach((filme, indice) => {
    console.log(`Meu filme ${filme} está na posição ${indice}`);
})
```
### C
```js
const escrevaMeuNome = () => {
    console.log('Meu nome é Luis Carlos')
}

escrevaMeuNome();
```
### D
```js
const calculadora = () => {
    const soma = function (a,b) {
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
```