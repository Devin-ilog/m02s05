const somaAsync = function (a, b) {
    return new Promise((resolve, reject) => {
        //abertura de arquivo
        if (a > 10 || b > 10) {
            return reject('Números não permitidos');
        }

        return resolve(a + b);
    });
}

somaAsync(2,2).then(resultado => console.log('O resultado da soma é', resultado));
somaAsync(11,2).catch(error => console.log(error));
