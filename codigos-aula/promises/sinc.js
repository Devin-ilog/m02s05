function tempoDeProcessamentoSincrono() {
    const milliseconds = Math.random() * 5000;// vai simular tempo aleatórios entre 0 e 5 segundos
    const start = new Date().getTime();
    let end = 0;
    while ((end - start) < milliseconds) {
        end = new Date().getTime();
    }
    return milliseconds / 1000;
}

function sinc(id) {
    //processando algo
    const tempo = tempoDeProcessamentoSincrono();
    //terminou de processar
    console.log('Processou a tarefa', id, 'no tempo', tempo);
}

sinc('a');
sinc('b');
sinc('c');
console.log('Aqui é uma instrução depois das chamadas');