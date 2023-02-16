const umaFuncaoAsync = async function() {
    return true;
}

const umaFuncaoComPromise = function() {
    return new Promise(resolve => {
        return resolve(true);
    });
}

async function leitor() {
    const resultado1 = await umaFuncaoAsync();
    console.log(resultado1);

    const resultado2 = await umaFuncaoComPromise();
    console.log(resultado2);
}


leitor();
