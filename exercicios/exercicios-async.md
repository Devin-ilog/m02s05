# Programação assíncrona

Você pode usar estas funções para auxiliar a simular os cenários dos exercícios

Função que simula um processo demorado de forma **síncrona**. Um processo demorado pode ser um acesso a uma API, a abertura de um arquivo ou um processamento pesado.

```js
function tempoDeProcessamentoSincrono() {
    const milliseconds = Math.random() * 5000;// vai simular tempo aleatórios entre 0 e 5 segundos
    const start = new Date().getTime();
    let end = 0;
    while ((end - start) < milliseconds) {
        end = new Date().getTime();
    }
    return milliseconds / 1000;
}
```

Função que simula um processo demorado de forma **assíncrona**. Um processo demorado pode ser um acesso a uma API, a abertura de um arquivo ou um processamento pesado.

```js
function tempoDeProcessamentoAssincrono(cb) {
    const milliseconds = Math.random() * 5000;// vai simular tempo aleatórios entre 0 e 5 segundos
    setTimeout(() => cb(milliseconds / 1000), milliseconds);
}
```

## 1

Escreva uma função que recebe um "identificador" como parâmetro e que ela chame a função tempoDeProcessamento e armzene seu valor na variável "tempo", depois da chamada da função tempo de processamento, retorne a string `Finalizando a execução ${identificador} em ${tempo} segundos`;

Depois disso chame esta sua função 3 vezes passando identificadores diferentes armazenando em variáveis distintas e depois imprima estas variáveis. Na última linha escreva no console`Este texto foi escreto após a execução de todas as chamadas de métodos`

## 2

Refaça o exercício **1** retornando uma promise na sua função e utilize o simulador tempoDeProcessamentoAssincrono. Ajuste o código para que tudo continue funcionando. Compare os comportamentos.

## 3

Dado o código:

```js
function requisicaoAssincrona (identificador) {
    return new Promise(resolve => {
        const chave = identificador * 7 + '#um-hash'
        tempoDeProcessamentoAssincrono(() => resolve(chave));
    })
}

const resultado = requisicaoAssincrona(1);
console.log(resultado);
```

Porque não está imprimindo "7#um-hash"?

Corrija o código para que funcione corretamente.

## 4

Escreva uma função que retorne a soma de dois números. O retorno deve ser uma promise e deve ser "resolvida" somente se os dois números forem menores que 10 cada. Caso algum seja superior a 10 deve "rejeitar" o pedido. Utilize a versão de classe (new Promise...)

Também escreva códigos que comsumam esta função nas duas possibilidades - "resolver" e "rejeitar".

## 5
Refaça o exercício 4 usando a forma direta da promise (Promise.resolve e Promise.reject);

## 6

Utilizando o exercício **4** como referência faça que tanto no sucesso ou no erro seja impresso "Final da execução". Isto deve estar junto a cada promise e não em um console.log separado.

## 7

Pensando no encadeamento de promises, utilizando a função criada de soma assincrona do exercício **4**, excreva um código que some 2 + 2, com o resultado some + 2 e novamente some + 2 e aí sim imprima o resultado final.

## 8

Refaça o exercício  **7** passando tudo para o formato async/await. Você pode criar uma nova função para encapsular o código de cálculo.

## 9

Dado o código:

```js
const retornaMeuNome = async function () {    
        return 'Luis Carlos Elias'
}

async function imprimeNome() {
    let nome = retornaMeuNome();    
    console.log(nome);
}

imprimeNome();
```

Ao executar viu-se que ele não está funcionando corretamente. Onde é o erro? Arrume o código para que ele funcione corretamente;

## 10

Crie uma função assíncrona que dê um reject usando o modelo async/await e depois crie uma função que irá chamar esta função capturando o erro.

# Solução
## 1

```js
function tempoDeProcessamento() {
    const milliseconds = Math.random() * 5000;// vai simular tempo aleatórios entre 0 e 5 segundos
    const start = new Date().getTime();
    let end = 0;
    while ((end - start) < milliseconds) {
        end = new Date().getTime();
    }
    return milliseconds / 1000;
}

function requisicaoSincrona (identificador) {
    const tempo = tempoDeProcessamento();
    return `Finalizando a execução ${identificador} em ${tempo} segundos`
}

const req1 = requisicaoSincrona(1)
console.log(req1);
const req2 = requisicaoSincrona(2)
console.log(req2);
const req3 = requisicaoSincrona(3)
console.log(req3);

console.log('Este texto foi escrito após a execução de todas as chamadas de métodos');
```

## 2

```js
function requisicaoAssincrona (identificador) {
    return new Promise(resolve => {
        tempoDeProcessamentoAssincrono(tempo => resolve(`Finalizando a execução ${identificador} em ${tempo} segundos`));
    });
}

requisicaoAssincrona(1).then(texto => console.log(texto));
requisicaoAssincrona(2).then(texto => console.log(texto));
requisicaoAssincrona(3).then(texto => console.log(texto));
console.log('Este texto foi escrito após a execução de todas as chamadas de métodos');
```

## 3
Não está imprimindo porque o valor armazenado na variável é uma promise e para acessar este valor é necessário o uso do then.

```js
function requisicaoAssincrona (identificador) {
    return new Promise(resolve => {
        const chave = identificador * 7 + 'um-hash'
        tempoDeProcessamentoAssincrono(() => resolve(chave));
    })
}

requisicaoAssincrona(1).then(console.log);
```

## 4
```js
const somaAsync = function (a, b) {
    return new Promise((resolve, reject) => {
        if (a > 10 || b > 10) {
            return reject('Números não permitidos');
        }

        return resolve(a + b);
    });
}

somaAsync(2,2).then(resultado => console.log('O resultado da soma é', resultado));
somaAsync(11,2).catch(error => console.log(error));
```

## 5
```js
const somaAsync = function (a, b) {    
        if (a > 10 || b > 10) {
            return Promise.reject('Números não permitidos');
        }
        return Promise.resolve(a + b);
};

somaAsync(2,2).then(resultado => console.log('O resultado da soma é', resultado));
somaAsync(11,2).catch(error => console.log(error));
```

## 6
```js
const somaAsync = function (a, b) {
    return new Promise((resolve, reject) => {
        if (a > 10 || b > 10) {
            return reject('Números não permitidos');
        }

        return resolve(a + b);
    });
}

somaAsync(2,2).then(resultado => console.log('O resultado da soma é', resultado)).finally(() => console.log('Final da execução'));
somaAsync(11,2).catch(error => console.log(error)).finally(() => console.log('Final da execução'));
```

## 7
```js
const somaAsync = function (a, b) {
    return new Promise((resolve, reject) => {
        if (a > 10 || b > 10) {
            return reject('Números não permitidos');
        }

        return resolve(a + b);
    });
}

somaAsync(2, 2)
    .then(r1 => somaAsync(r1, 2))
    .then(r2 => somaAsync(r2, 2))
    .then(console.log);
```

## 8
```js
const somaAsync = async function (a, b) {    
        if (a > 10 || b > 10) {
            throw new Error('Números não permitidos');
        }

        return a + b;
}

async function calcula() {
    let resultado = await somaAsync(2, 2);
    resultado = await somaAsync(resultado, 2);
    resultado = await somaAsync(resultado, 2);
    console.log(resultado);
}

calcula();

//bonus - testando o reject nesta forma
somaAsync(20,50).catch(error => console.log(error.message))
```

## 9

O problema esta na linha `let nome = retornaMeuNome()`, pois esta sem a palavra chave "await".

```js
const retornaMeuNome = async function () {    
        return 'Luis Carlos Elias'
}

async function imprimeNome() {
    let nome = await retornaMeuNome();    
    console.log(nome);
}
```

## 10
```js
const retornaMeuNome = async function () {
    throw new Error('Um erro qualquer');
}

async function imprimeNome() {
    try {
        await retornaMeuNome();
    } catch (error) {
        console.log('Deu ruim:', error.message);
    }
}

imprimeNome();
```