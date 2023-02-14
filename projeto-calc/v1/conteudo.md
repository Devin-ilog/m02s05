# index.html

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Calculadora</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <main class="principal"></main>
  <script src="main.js"></script>
</body>

</html>
```

# style.css

```css
html, body {
  height: 100%;
  width: 100%;
}

.principal {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.visor {
  width: 80%;
  height: 100px;
  text-align: right;
  flex: 1;
  border-bottom: 1px solid lightgray;
  font-size: 44px;
}

.botoes-container {
  width: 80%;
  height: 100px;
}

.linha {
  display: flex;
  flex-direction: row;
}

.botao {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 72px;
  min-width: 72px;
  max-height: 42px;
  min-height: 42px;
  font-size: 24px;
  text-align: center;
}

.botao:hover {
  background-color: lightcoral;
}

.botao:active {
  background-color: blue;
}

.botao-acao {
  color: darkorange;
}

.botao-resultado {
  color: white;
  background-color: darkorange; 
}
```

# main.js
```js
const tela = document.querySelector('.principal');
const visor = document.createElement('div');
visor.classList.add('visor')
visor.innerText = 0;

tela.appendChild(visor);

const botoesContainer = document.createElement('div');
botoesContainer.classList.add('botoes-container');

tela.appendChild(botoesContainer);

const linha5 = document.createElement('div');
linha5.classList.add('linha');

const botaoClear = document.createElement('div');
botaoClear.innerText = 'AC';
botaoClear.classList.add('botao');
botaoClear.classList.add('botao-acao');
linha5.appendChild(botaoClear);

const botaoDel = document.createElement('div');
botaoDel.innerText = '<=';
botaoDel.classList.add('botao');
botaoDel.classList.add('botao-acao');
linha5.appendChild(botaoDel);

const botaoVazio = document.createElement('div');
botaoVazio.innerText = ' ';
botaoVazio.classList.add('botao');
linha5.appendChild(botaoVazio);

const botaoDividir = document.createElement('div');
botaoDividir.innerText = '/';
botaoDividir.classList.add('botao');
botaoDividir.classList.add('botao-acao');
linha5.appendChild(botaoDividir);

botoesContainer.appendChild(linha5);


const linha4 = document.createElement('div');
linha4.classList.add('linha');

const botao7 = document.createElement('div');
botao7.innerText = 7;
botao7.classList.add('botao');
linha4.appendChild(botao7);

const botao8 = document.createElement('div');
botao8.innerText = 8;
botao8.classList.add('botao');
linha4.appendChild(botao8);

const botao9 = document.createElement('div');
botao9.innerText = 9;
botao9.classList.add('botao');
linha4.appendChild(botao9);

const botaoMultiplicar = document.createElement('div');
botaoMultiplicar.innerText = 'X';
botaoMultiplicar.classList.add('botao');
botaoMultiplicar.classList.add('botao-acao');
linha4.appendChild(botaoMultiplicar);

botoesContainer.appendChild(linha4);

const linha3 = document.createElement('div');
linha3.classList.add('linha');

const botao4 = document.createElement('div');
botao4.innerText = 4;
botao4.classList.add('botao');
linha3.appendChild(botao4);

const botao5 = document.createElement('div');
botao5.innerText = 5;
botao5.classList.add('botao');
linha3.appendChild(botao5);

const botao6 = document.createElement('div');
botao6.innerText = 6;
botao6.classList.add('botao');
linha3.appendChild(botao6);

const botaoSubtrair = document.createElement('div');
botaoSubtrair.innerText = '-';
botaoSubtrair.classList.add('botao');
botaoSubtrair.classList.add('botao-acao');
linha3.appendChild(botaoSubtrair);

botoesContainer.appendChild(linha3);

const linha2 = document.createElement('div');
linha2.classList.add('linha');

const botao1 = document.createElement('div');
botao1.innerText = 1;
botao1.classList.add('botao');
linha2.appendChild(botao1);

const botao2 = document.createElement('div');
botao2.innerText = 2;
botao2.classList.add('botao');
linha2.appendChild(botao2);

const botao3 = document.createElement('div');
botao3.innerText = 3;
botao3.classList.add('botao');
linha2.appendChild(botao3);

const botaoAdicionar = document.createElement('div');
botaoAdicionar.innerText = '+';
botaoAdicionar.classList.add('botao');
botaoAdicionar.classList.add('botao-acao');
linha2.appendChild(botaoAdicionar);

botoesContainer.appendChild(linha2);

const linha1 = document.createElement('div');
linha1.classList.add('linha');

const emptyButton = document.createElement('div');
emptyButton.innerText = ' ';
emptyButton.classList.add('botao');
linha1.appendChild(emptyButton);

const botao0 = document.createElement('div');
botao0.innerText = 0;
botao0.classList.add('botao');
linha1.appendChild(botao0);

const botaoVirgula = document.createElement('div');
botaoVirgula.innerText = ',';
botaoVirgula.classList.add('botao');
linha1.appendChild(botaoVirgula);

const botaoResultado = document.createElement('div');
botaoResultado.innerText = '=';
botaoResultado.classList.add('botao');
botaoResultado.classList.add('botao-acao');
botaoResultado.classList.add('botao-resultado');
linha1.appendChild(botaoResultado);

botoesContainer.appendChild(linha1);
```