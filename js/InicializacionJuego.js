import { crearCartas } from "./Carta.js";
import { NOMBRE_JUGADORES } from "./Util.js";
import { Jugador } from "./Jugador.js";


export let jugadores = [];
export let contenedoresJugadores = null, strongList = null;

const contenedorJugadores = document.querySelector('.contenedor_jugadores');

export const inicializarJuego = (identificadorVista) => {
    crearCartas();
    if (jugadores.length > 0) {
        jugadores = [];
    }
    for (let i = 0; i < 2; i++) {
        let nombreJugador = null;
        if (identificadorVista === 'UnJugador') {
            nombreJugador = getNombreJugador(i, 2, identificadorVista);
        } else {
            nombreJugador = NOMBRE_JUGADORES.NOMBRE_JUGADOR;
        }
        jugadores.push(new Jugador(nombreJugador, i + 1));
    }
    jugadores.forEach(jugador => crearContenedorJugador(jugador));

    strongList = [...document.querySelectorAll('strong')];
    contenedoresJugadores = [...contenedorJugadores.children];


}

function crearContenedorJugador(jugador) {
    const elementoJugador = document.createElement('section');
    const titulo = document.createElement('h1');
    titulo.innerHTML = obtenerPlantillaPuntuacionJugador(jugador);
    const contenedorCartas = document.createElement('div');
    elementoJugador.append(titulo, contenedorCartas);
    contenedorJugadores.appendChild(elementoJugador);
}

function getNombreJugador(posicion, numeroJugadores, identificadorVista) {
    return (posicion === numeroJugadores - 1 && identificadorVista === 'UnJugador')
        ? NOMBRE_JUGADORES.NOMBRE_COMPUTADORA
        : NOMBRE_JUGADORES.NOMBRE_JUGADOR;
}

function obtenerPlantillaPuntuacionJugador(jugador) {
    return `${jugador.nombreJugador} ${jugador.nombreJugador === 'Jugador' ? '#' : ''}
    <span>${jugador.nombreJugador === 'Jugador' ? jugador.identificador : ''}</span>
    - puntuación: <strong></strong>`;
}

export function reiniciar() {
    jugadores = [];
    contenedorJugadores.innerHTML = '';
}