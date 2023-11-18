let cartas = [];
const tiposCartas = ['C', 'D', 'H', 'S'];
const tiposEspeciales = ['A', 'J', 'Q', 'K'];
const valoresCartas = [2, 3, 4, 5, 6, 7, 8, 9, 10];

export const crearCartas = () => {
    for (let valor in valoresCartas) {
        for (let tipo of tiposCartas) {
            cartas.push(valoresCartas[valor] + tipo);
        }
    }
    for (let especiales of tiposEspeciales) {
        for (let tipo of tiposCartas) {
            cartas.push(especiales + tipo);
        }
    }
    cartas = _.shuffle(cartas);
};

export const tomarUnaCarta = () => {
    if (cartas.length === 0) {
        throw "No hay cartas disponibles";
    }
    return cartas.pop();
}

export const valorCarta = (carta) => {
    let valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor) ? (valor === 'A' ? 11 : 10) : parseInt(valor));
};

export const nuevaCarta = (carta) => {
    const nuevaCarta = document.createElement('img');
    nuevaCarta.src = `static/cartas/${carta}.png`;
    nuevaCarta.alt = "carta";
    nuevaCarta.width = "90";
    return nuevaCarta;
};