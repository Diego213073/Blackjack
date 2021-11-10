let cartas = [];
const tiposCartas = ['C', 'D', 'H', 'S'];
const tiposEspeciales = ['A', 'J', 'Q', 'K'];


const crearCartas = () => {
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposCartas) {
            cartas.push(i + tipo);
        }
    }
};



crearCartas();
console.log(cartas);