let cartas = [];
const tiposCartas = ['C', 'D', 'H', 'S'];
const tiposEspeciales = ['A', 'J', 'Q', 'K'];
let puntosJugador = 0;
let puntosPC = 0;
const span = document.querySelectorAll('span');
const jugadorCartas = document.querySelector('#jugadorCartas');



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


};


const tomarUnaCarta = () => {
    const random = Math.round(Math.random() * cartas.length);
    let carta = 'No hay cartas disponibles';
    cartas.forEach((element, index) => {
        if (index === random) {
            carta = element;
            cartas.splice(index, 1);
        }
    });
    return carta;
}


const valorCarta = (carta) => {
    let valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor) ? (valor === 'A' ? 11 : 10) : parseInt(valor));
};

crearCartas();


const pedirCarta = document.querySelector('.pedir');


pedirCarta.addEventListener('click', () => {

    const carta = tomarUnaCarta();
    puntosJugador += valorCarta(carta);
    span[0].innerText = puntosJugador;
    jugadorCartas.appendChild(nuevaCarta(carta));

});

const nuevaCarta = (carta) =>{
    const nuevaCarta = document.createElement('img');
    nuevaCarta.src = 'static/cartas/'+carta+'.png';
    nuevaCarta.alt = "carta";
    nuevaCarta.width = "90";
    return nuevaCarta;
};
