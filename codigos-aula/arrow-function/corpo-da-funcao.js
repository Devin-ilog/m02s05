/*//arrow normal
const meuNome = () => {
    console.log('Meu nome é Luis Carlos');
}

//simplificado
const meuNomeEnxuto = () => console.log('Meu nome é Luis Carlos');

meuNome();
const resultado = meuNomeEnxuto();

console.log('O resultado é', resultado);
*/

/*
const ehPar = numero => {
    return numero % 2 === 0;
}

const ehParEnxuto = numero => numero % 2 === 0;

const resultado = ehParEnxuto(4);
const resultado2 = ehParEnxuto(5);

console.log(resultado);
console.log(resultado2);*/

/*const voltaObjeto = () => {
    return {
        nome: 'Luis Carlos',
        idade: 45
    };
}

const obj1 = voltaObjeto();
console.log(obj1);

const voltaObjetoEnxuto = () => ({ nome: 'Luis Carlos', idade: 45});

const obj2 = voltaObjetoEnxuto();
console.log(typeof obj2 );*/

const minhaFuncao = () => {
    return () => {
        console.log('Minha função bonitinha');
    };
};

const fn1 = minhaFuncao();
fn1();

const minhaFuncaoEnxuta = () => () => console.log('Minha função bonitinha enxuta');
const fn2 = minhaFuncaoEnxuta();
fn2();
