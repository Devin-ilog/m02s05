function soma(...batatinha) {
    // let total = 0;
    // numeros.forEach(num => total += num);
    // return total;
    return batatinha.reduce((total, num) => total += num, 0)
}

let totalSoma = soma();
console.log(totalSoma);
totalSoma = soma(54); 
console.log(totalSoma);
totalSoma = soma(5,10,20); 
console.log(totalSoma);
