let cartas = [];

const tiposCartas = ['C', 'D', 'H', 'S']
    , tiposEspeciales = ['A', 'J', 'Q', 'K']
    , valoresCartas = [2, 3, 4, 5, 6, 7, 8, 9, 10];

let puntosJugador = 0
    , puntosPC = 0;

const [puntajeJugador, puntajeComputadora] = document.querySelectorAll('span')
    , jugadorCartas = document.querySelector('#jugadorCartas')
    , ordenadorCartas = document.querySelector('#ordenadorCartas');


const pedirCarta = document.querySelector('.pedir')
    , detener = document.querySelector('.detener')
    , btnNuevoJuego = document.querySelector(".nuevo");


const crearCartas = () => {

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

};


crearCartas();

const tomarUnaCarta = () => {
    const random = Math.round(Math.random() * cartas.length + 1);
    if (cartas.length === 0) {
        throw "No hay cartas disponibles";
    }
    let carta = '';
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


const nuevaCarta = (carta) => {
    const nuevaCarta = document.createElement('img');
    nuevaCarta.src = `static/cartas/${carta}.png`;
    nuevaCarta.alt = "carta";
    nuevaCarta.width = "90";
    return nuevaCarta;
};


const computadora = (puntosMinimos) => {

    do {
        const carta = tomarUnaCarta();
        puntosPC += valorCarta(carta);
        puntajeComputadora.textContent = puntosPC;
        ordenadorCartas.appendChild(nuevaCarta(carta));

        if (puntosMinimos > 21) {
            break;
        }

        if (puntosMinimos == 21) {
            break;
        }

    } while ((puntosPC < puntosMinimos));

    setTimeout(() => verficarGanador(puntosPC, puntosMinimos), 20);

};


const verficarGanador = (puntosComputadora, puntosJugador) => {

    if (puntosJugador === 21) {
        alert("Has ganado la partida, puntos exactos");
    }

    if (puntosJugador > 21) {
        alert("Has perdido la partida, pasaste el límite de 21");
    }

    if (puntosComputadora === puntosJugador) {
        alert("Empate");
    }

    if (puntosComputadora > 21) {
        alert("Has ganado la partida, la computadora pasó el límite de 21");
    }

    if (puntosJugador < 21) {
        if ((puntosComputadora > puntosJugador) && (puntosComputadora <= 21)) {
            alert("Has perdido la partida, la computadora consiguió mayor puntaje y no superó el límite de 21");
        }
    }

}




pedirCarta.addEventListener('click', (event) => {

    btnNuevoJuego.disabled = false;

    const carta = tomarUnaCarta();
    puntosJugador += valorCarta(carta);
    puntajeJugador.innerText = puntosJugador;
    jugadorCartas.appendChild(nuevaCarta(carta));

    if (puntosJugador > 21) {
        event.target.disabled = true;
        detener.disabled = true;
        computadora(puntosJugador);
        return
    }

    if (puntosJugador === 21) {
        event.target.disabled = true;
        detener.disabled = true;
        console.log("Has ganado la partida");
        computadora(puntosJugador);
    }
});

detener.addEventListener('click', () => {

    detener.disabled = true;
    pedirCarta.disabled = true;
    btnNuevoJuego.disabled = false;
    computadora(puntosJugador);

});

btnNuevoJuego.addEventListener('click', () => {

    detener.disabled = false;
    pedirCarta.disabled = false;
    puntosJugador = 0;
    puntosPC = 0;
    puntajeJugador.innerText = 0;
    puntajeComputadora.innerText = 0;
    btnNuevoJuego.disabled = true;
    crearCartas();
    jugadorCartas.innerHTML = "";
    ordenadorCartas.innerHTML = "";

});








