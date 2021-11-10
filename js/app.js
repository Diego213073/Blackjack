let cartas = [];
const tiposCartas = ['C', 'D', 'H', 'S'];
const tiposEspeciales = ['A', 'J', 'Q', 'K'];


const crearCartas = () => {


    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposCartas) {
            cartas.push(i + tipo);
        }
    }

    for (let especiales of tiposEspeciales) {
        for (let tipo of tiposCartas) {
            cartas.push(especiales + tipo);
        }
    }

    console.log(valorCarta(tomarUnaCarta(cartas)));

};


const tomarUnaCarta = (arr) => {
    const random = Math.round(Math.random() * arr.length);
    let carta = 'No hay cartas disponibles';
    arr.forEach((element, index) => {
        if (index === random) {
            carta = element;
            arr.splice(index, 1);
        }
    });
    return carta;
}


const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);

    if (isNaN(valor)) {
        return valor;
    }
    return parseInt(valor);
};


crearCartas();