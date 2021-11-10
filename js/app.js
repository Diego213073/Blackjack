let cartas = [];
const tiposCartas = ['C', 'D', 'H', 'S'];
const tiposEspeciales = ['A', 'J', 'Q', 'K'];


const crearCartas = () => {
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposCartas) {
            cartas.push(i + tipo);
        }
    }
    console.log(tomarUnaCarta(cartas));
};


function tomarUnaCarta(arr) {
    const random = Math.round(Math.random() * arr.length);
    let carta = '';
    arr.forEach((element, index) => {
        if (index === random) {
            carta = element;
            arr.splice(index, 1);
        }
    });
    return carta;
}



crearCartas();