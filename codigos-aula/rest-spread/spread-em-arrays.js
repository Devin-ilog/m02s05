const arrayA = ['a','b', 'c'];
const arrayB = ['f', 'g', 'h'];

const finalArray = [...arrayA, 'd', 'e',...arrayB];
let arrayComConcat = [].concat(arrayA);
arrayComConcat.push('d');
arrayComConcat.push('e');
arrayComConcat = arrayComConcat.concat(arrayB);

console.log(finalArray);
console.log(arrayComConcat);