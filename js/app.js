
import { tomarUnaCarta, valorCarta, nuevaCarta } from "./carta.js";
import { inicializarJuego, reiniciar } from "./InicializacionJuego.js";
import { jugadores, contenedoresJugadores, strongList } from "./InicializacionJuego.js";

let identificador = 0;

const [btnNuevoJuego, pedirCarta, detener] = document.querySelectorAll('.botones > button');

btnNuevoJuego.addEventListener('click', () => {
    detener.disabled = false;
    pedirCarta.disabled = false;
    btnNuevoJuego.disabled = true;
    inicializarJuego();
    reiniciar();
    identificador = 0;
});

pedirCarta.addEventListener('click', (event) => {
    const jugador = jugadores.find(j => j.identificador === (identificador + 1));
    btnNuevoJuego.disabled = false;
    const carta = tomarUnaCarta();
    jugador.setPuntuacion = valorCarta(carta);
    strongList[identificador].textContent = jugador.getPuntuacion;
    const contenedorJugadorActual = contenedoresJugadores[identificador];
    agregarHijo(contenedorJugadorActual, carta);

    if (identificador === jugadores.length - 1) {
        const [jugadorUno, jugadorDos] = jugadores;
        const contenedorJugadorUno = contenedoresJugadores[identificador - 1];
        if ((jugadorDos.getPuntuacion > jugadorUno.getPuntuacion)
            && jugadorDos.getPuntuacion <= 21) {
            alert('Jugador 2 es el ganador!');
            pedirCarta.disabled = true;
            contenedorJugadorActual.classList.add('ganador');
            return;
        }
        if (jugadorDos.getPuntuacion > 21) {
            alert('Jugador 2 es el perdedor');
            pedirCarta.disabled = true;
            contenedorJugadorActual.classList.add('perdedor');
            return;
        }
    }

    if (jugador.getPuntuacion > 21) {
        identificador++;
        contenedorJugadorActual.classList.add('perdedor');
        if (identificador === jugadores.length - 1 && existeComputadora()) {
            computadora(jugador.getPuntuacion);
            return;
        }
        event.target.disabled = true;
        detener.disabled = true;
        alert(`Has perdido jugador #${jugador.identificador}`)
        return
    }

    if (jugador.getPuntuacion === 21) {
        event.target.disabled = true;
        detener.disabled = true;
        identificador++;
        contenedorJugadorActual.classList.add('ganador');
        const mensajeGanador = `Jugador #${jugador.identificador} eres el ganador!`;
        alert(mensajeGanador);
    }
});

detener.addEventListener('click', () => {
    detener.disabled = true;
    btnNuevoJuego.disabled = false;
    if (jugadores.length === 0) {
        throw 'no hay jugadores';
    }
    const juegoComputadora = existeComputadora();
    if (juegoComputadora) {
        pedirCarta.disabled = true;
        computadora(jugadores[0].getPuntuacion);
        return;
    }
    identificador++;

});

function existeComputadora() {
    return jugadores.some(jugadores => jugadores.nombreJugador === 'Computadora');
}

function computadora(puntosMinimos) {
    const computadora = jugadores[jugadores.length - 1];
    do {
        const carta = tomarUnaCarta();
        computadora.setPuntuacion = valorCarta(carta);
        const contenedorComputadora = contenedoresJugadores[contenedoresJugadores.length - 1];
        strongList[jugadores.length - 1].textContent = computadora.getPuntuacion;

        agregarHijo(contenedorComputadora, carta);

        if (puntosMinimos > 21) {
            break;
        }

        if (puntosMinimos == 21) {
            break;
        }

        if(computadora.getPuntuacion > puntosMinimos && computadora.getPuntuacion < 21) {
            contenedorComputadora.classList.add('ganador');
        }

    } while ((computadora.getPuntuacion < puntosMinimos));

    setTimeout(() => verficarGanador(computadora.getPuntuacion, puntosMinimos), 20);

};

function agregarHijo(contenedorCarta, carta) {
    contenedorCarta.children[1].appendChild(nuevaCarta(carta));
}

function verficarGanador(puntosComputadora, puntosJugador) {

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