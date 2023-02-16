const umaPromiseComClasse = function (temErro) {
    return new Promise(function (resolve, reject) {
        if (temErro) {
            return reject('Um erro qualquer');
        }

        return resolve('um valor');
    });
};

umaPromiseComClasse()
    .then(retorno => console.log(retorno));

umaPromiseComClasse(true)
    .then(retorno => console.log(retorno))
    .catch(erro => console.log('ERRO:', erro))
    .finally(() => console.log('Alguma coisa no final'))
