function tempoDeProcessamentoAssincrono(cb) {
    const milliseconds = Math.random() * 5000;// vai simular tempo aleatórios entre 0 e 5 segundos
    //faz uma coisa
    //faz outra coisa
    //mais alguma coisa
    //cb('alguma coisa');
    setTimeout(() => cb(milliseconds / 1000), milliseconds);
}

function assinc(cb) {
    //processando algo
    tempoDeProcessamentoAssincrono(cb);
}

function escreve(tempo) {
    console.log('Processou a tarefa a', 'no tempo', tempo)
}
assinc(escreve);
assinc(tempo => console.log('Processou a tarefa b', 'no tempo', tempo));
assinc(tempo => console.log('Processou a tarefa c', 'no tempo', tempo));
console.log('Aqui é uma instrução depois das chamadas');