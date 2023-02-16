let textoOriginal = '';

const concatenaTexto = function (texto) {
    return new Promise(function (resolve) {
        textoOriginal += ` | ${texto}`;
        return resolve(textoOriginal);
    });
}

concatenaTexto('oi')
    .then(textoConcatenado => {
        console.log(textoConcatenado)
        return 'Um valor qualquer';
    }).then(textoConcatenado => {
        console.log(textoConcatenado)
    })