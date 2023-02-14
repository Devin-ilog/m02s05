class Impressora {
    constructor(listaDeTextos) {
        this._textos = listaDeTextos;
        this._data = new Date();
    }

    imprime() {
        this._textos.forEach(texto => {
            console.log('Imprimindo o texto', texto, 'em:', this._data);
        });
    }
}

const textos = ['Olá', 'tudo bem', 'como vai você?'];
const imp = new Impressora(textos);
imp.imprime();
