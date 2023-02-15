Utilize o replit para fazer os exercícios

# Módulos

## 1
Dado o index.html:

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>exrcícios de módulo</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <script src="script.js"></script>

</html>
```
E o js script.js:

```js
function escrevaMeuNome() {
  const titulo = document.createElement('h1');
  titulo.innerText = 'Luis Carlos Elias'
  document.body.appendChild(titulo);
}

escrevaMeuNome();
```

Separe a função escrevaMeuNome em um arquivo separado de script.js e refatore o html para que tudo continue funcionando. Aproveite e altere a função para receber o nome a ser renderizado na página.

Lembrando que isto deve ser feito sem utilizar módulos.

## 2
Dado o index.html:

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>exrcícios de módulo</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <script src="script.js"></script>

</html>
```

E o js script.js:
```js
function escrevaValor(valor) {
  const meuValor = document.createElement('h1');
  meuValor.innerText = valor
  document.body.appendChild(meuValor);
}

const soma = function(a, b) {
  return a + b;
}


const subtracao = function(a, b) {
  return a - b;
}

escrevaValor(soma(3, 5));
escrevaValor(subtracao(5, 3));
```

Separe em arquivos diferentes:
 * escrevaValor
 * soma
 * subtracao

Altere o arquivo index.html para que ele continue funcionando corretamente. Aproveite e transforme as funções some e subtração em arrow functions

## 3

Refaça o exercício **1** usando módulos e analise o que mudou de uma abordagem para outra.

## 4

Refaça o exercício **2** usando módulos e analise o que mudou de uma abordagem para outra.


## 5

Crie um módulo calculadora que exporte um objeto no seu export **default** que tenhas as funções soma, subtracao, multiplicacao e divisao. Cada uma desta funções deve executar o cálculo com dois operadores e dar um console.log do resultado.

Importe este módulo no script.js e execute cada uma das funções.

## 6

Com base no exercício **5**, transforme o export default em um específico para cada operação matemática.

Ajuste o script.js para que ele continue funcionando.

## 7

Com base no exercício **6**, sem alterar o nome das funções, renomeie os exports de soma para somar e de subtracao para subtrair.

No arquivo scripts.js ajuste para que tudo funcione corretamente.

## 8

Com base no exercício **6**, altere o nome das funções importadas no arquivo script.js para:
 * soma -> somar
 * subtracao -> subtrair
 * multiplicacao -> multiplicar
 * divisao -> dividir

Ajuste o código para que tudo continue funcionando

No arquivo scripts.js ajuste para que tudo funcione corretamente.

## 9

Com base no exercício **5**, pegue o módulo calculadora e crie módulos específicos para cada função e depois os importe para o módulo calculadora e os exporte como um objeto default.

Veja se tudo continua funcionando, caso não ajuste o que for necessário.

## 10

Com base no exercício **9**, no arquivo script.js, crie uma função "carregar" e nela você deve carregar de forma assíncrona o módulo calculadora e depois executar as funções.

Não esqueça de chamar a função "carregar"

# Solução

Este html deve servir para todos os exercícios

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>exrcícios de módulo</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <script type="module" src="script.js"></script>

</html>
```

## 1
index.html
```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>exrcícios de módulo</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <script src="escreva-meu-nome.js"></script>
  <script src="script.js"></script>

</html>
```

escreva-meu-nome.js
```js
function escrevaMeuNome(nome) {
  const titulo = document.createElement('h1');
  titulo.innerText = nome;
  document.body.appendChild(titulo);
}
```

script.js
```js
escrevaMeuNome('Luis Carlos Elias');
```
## 2
index.html
```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>exrcícios de módulo</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <script src="soma.js"></script>
  <script src="subtracao.js"></script>
  <script src="escreva-valor.js"></script>
  <script src="script.js"></script>

</html>
```

script.js
```js
escrevaValor(soma(2,2));
escrevaValor(subtracao(2,2));
```

escreva-valor.js
```js
function escrevaValor(valor) {
  const valorTexto = document.createElement('h1');
  valorTexto.innerText = valor;
  document.body.appendChild(valorTexto);
}
```
soma.js
```js
const soma = (a, b) => a + b;
```
subtracao.js
```js
const subtracao = (a, b) => a - b;
```

## 3

script.js
```js
import escrevaMeuNome from './escreva-meu-nome.js'

escrevaMeuNome('Luis Carlos Elias');
```

escreva-meu-nome.js
```js
export default function escrevaMeuNome(nome) {
  const meuNome = document.createElement('h1');
  meuNome.innerText = nome;
  document.body.appendChild(meuNome);
}
```

## 4
script.js
```js
import soma from './soma.js';
import subtracao  from './subtracao.js';
import escrevaValor from './escreva-valor.js';

escrevaValor(soma(2,2));
escrevaValor(subtracao(2,2));
```

escreva-valor.js
```js
export default function escrevaValor(valor) {
  const valorTexto = document.createElement('h1');
  valorTexto.innerText = valor;
  document.body.appendChild(valorTexto);
}
```

soma.js
```js
const soma = (a, b) => a + b;

export default soma;
```

subtracao.js
```js
const subtracao = (a, b) => a - b;

export default subtracao;
```

## 5

script.js
```js
import calculadora from './calculadora.js';

calculadora.soma(2,2);
calculadora.subtracao(2,2);
calculadora.multiplicacao(2,2);
calculadora.divisao(2,2);
```

calculadora.js
```js
const soma = (a, b) => {
  const resultado = a + b;
  console.log('Resultado da soma', resultado);
};

const subtracao = (a, b) => {
  const resultado = a - b;
  console.log('Resultado da subtracao', resultado);
};

const multiplicacao = (a, b) => {
  const resultado = a * b;
  console.log('Resultado da multiplicacao', resultado);
};

const divisao = (a, b) => {
  const resultado = a / b;
  console.log('Resultado da divisao', resultado);
};

export default {
  soma,
  subtracao,
  multiplicacao,
  divisao,
}
```

## 6

script.js
```js
import { soma, subtracao, divisao, multiplicacao } from './calculadora.js';

soma(2, 2);
subtracao(2, 2);
multiplicacao(2, 2);
divisao(2, 2);
```

calculadora.js
```js
export const soma = (a, b) => {
  const resultado = a + b;
  console.log('Resultado da soma', resultado);
};

export const subtracao = (a, b) => {
  const resultado = a - b;
  console.log('Resultado da subtracao', resultado);
};

export const multiplicacao = (a, b) => {
  const resultado = a * b;
  console.log('Resultado da multiplicacao', resultado);
};

export const divisao = (a, b) => {
  const resultado = a / b;
  console.log('Resultado da divisao', resultado);
};
```

## 7
script.js
```js
import { somar, subtrair, divisao, multiplicacao } from './calculadora.js';

somar(2, 2);
subtrair(2, 2);
multiplicacao(2, 2);
divisao(2, 2);
```

calculadora.js
```js
const soma = (a, b) => {
  const resultado = a + b;
  console.log('Resultado da soma', resultado);
};

const subtracao = (a, b) => {
  const resultado = a - b;
  console.log('Resultado da subtracao', resultado);
};

export const multiplicacao = (a, b) => {
  const resultado = a * b;
  console.log('Resultado da multiplicacao', resultado);
};

export const divisao = (a, b) => {
  const resultado = a / b;
  console.log('Resultado da divisao', resultado);
};

export { soma as somar, subtracao as subtrair }
```

## 8
script.js
```js
import { soma as somar, subtracao as subtrair, divisao as dividir, multiplicacao as multiplicar } from './calculadora.js';

somar(2, 2);
subtrair(2, 2);
multiplicar(2, 2);
dividir(2, 2);
```

calculadora.js
```js
export const soma = (a, b) => {
  const resultado = a + b;
  console.log('Resultado da soma', resultado);
};

export const subtracao = (a, b) => {
  const resultado = a - b;
  console.log('Resultado da subtracao', resultado);
};

export const multiplicacao = (a, b) => {
  const resultado = a * b;
  console.log('Resultado da multiplicacao', resultado);
};

export const divisao = (a, b) => {
  const resultado = a / b;
  console.log('Resultado da divisao', resultado);
};
```

## 9

script.js
```js
import calculadora from './calculadora.js';

calculadora.soma(2, 2);
calculadora.subtracao(2, 2);
calculadora.multiplicacao(2, 2);
calculadora.divisao(2, 2);
```

calculadora.js
```js
import soma from './soma.js';
import subtracao from './subtracao.js';
import multiplicacao from './multiplicacao.js';
import divisao from './divisao.js';

export default {
  soma,
  subtracao,
  multiplicacao,
  divisao,  
}
```

soma.js
```js
export default function soma(a, b) {
  const resultado = a + b;
  console.log('Resultado da soma', resultado);
};
```

subtracao.js
```js
export default function subtracao(a, b) {
  const resultado = a - b;
  console.log('Resultado da subtracao', resultado);
};
```

multiplicacao.js
```js
export default function multiplicacao(a, b) {
  const resultado = a * b;
  console.log('Resultado da multiplicacao', resultado);
};
```

divisao.js
```js
export default function divisao(a, b) {
  const resultado = a / b;
  console.log('Resultado da divisao', resultado);
};
```
## 10

script.js
```js
function carregar() {
  import('./calculadora.js').then(({ default: calculadora }) => {
    calculadora.soma(2, 2);
    calculadora.subtracao(2, 2);
    calculadora.multiplicacao(2, 2);
    calculadora.divisao(2, 2);
  });
}

carregar();
```
