# Rest e Spread

## 1
Faça uma função que some uma quantidade de parâmetros indefinida

## 2
Faça uma função que receba o primeiro parâmtro um prefixo (string) e depois recebe uma quantidade indefinida de parâmetros que deverá retornar um array com todos os elementos com o prefixo.

## 3 
Dado o código abaixo:

```js
function escritorDeNome(primeiroNome, ...nomesDoMeio, sobreNome){
    let nomeCompleto = primeiroNome + ' ' + nomesDoMeio.join(' ') + ' ' + sobreNome;
    return nomeCompleto;
}

console.log(escritorDeNome('João', 'Elias', 'Gabriel', 'Cancelli', 'da', 'Silva'));
```
Descubra por esta dando erro e o corrija.

## 4
Faça uma função que converta uma string para um array que contenha as letras da string passada.

## 5
Escreva um código usando o operador spread, onde você tem o array `[1,2,3,4]` e você deve criar a partir deste array um novo array adicionando os valores `5,6,7` e também concatenar o array `[8,9,10]`;

## 6
## 6
Dado o obejto:
```js
const departameto = {
    nome: 'RH',
    gerente: 'Franscisco Ferdinando',
}
```

Você deve escrever um novo objeto que utilize o objeto departamento e acrescente as propriedades: `numeroDeFuncionarios = 53 e empresa = nestle`


# Solução
## 1
```js
function soma(...numeros){
    return numeros.reduce((total, numero) => total += numero, 0);
}

console.log(soma());
console.log(soma(5));
console.log(soma(5,5,5,5,5));
```

## 2
```js
function prefixador(prefixo, ...termos){
    return termos.map(termo => `${prefixo}${termo}`)
}

console.log(prefixador('prefix-', 'ola', 'tudo', 'bem'));
```

## 3
O operador rest deve ser sempre o último parâmetro na assinatura da função.

```js
function escritorDeNome(primeiroNome,  sobreNome, ...nomesDoMeio){
    let nomeCompleto = primeiroNome + ' ' + nomesDoMeio.join(' ') + ' ' + sobreNome;
    return nomeCompleto;
}

console.log(escritorDeNome('João', 'Elias', 'Gabriel', 'Cancelli', 'da', 'Silva'));
```

## 4
```js
function string2array(string){
    return [...string];
}

console.log(string2array('minha string'));
```

## 5
```js
const arrayA = [1, 2, 3, 4];
const arrayB = [8, 9, 10]
const finalArray = [...arrayA, 5, 6, 7, ...arrayB];

console.log(finalArray);
```
## 6
```js
## 6
Dado o obejto:
```js
const departameto = {
    nome: 'RH',
    gerente: 'Franscisco Ferdinando',
}
```

Você deve escrever um novo objeto que utilize o objeto departamento e acrescente as propriedades: `numeroDeFuncionarios = 53 e empresa = nestle`
```
