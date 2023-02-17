function soma() {
    let total = 0;
    for (let index = 0; index < arguments.length; index++) {
        total += arguments[index];        
    }
    return total;
}

let totalSoma = soma();
console.log(totalSoma);
totalSoma = soma(54); 
console.log(totalSoma);
totalSoma = soma(5,10,20); 
console.log(totalSoma);
