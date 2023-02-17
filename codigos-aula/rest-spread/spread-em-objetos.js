const objetoA = {
    umAtributo: 'algo',
    umaFuncao: () => {},    
}

const objetoB = {
    ...objetoA,
    outroAtributo: 'outra coisa',
}
//a mesma coisa que isso
const objetoB2 = {
    umAtributo: objetoA.umAtributo,
    umaFuncao: objetoA.umaFuncao,
    outroAtributo: 'outra coisa',
} 

console.log(objetoA);
console.log(objetoB);