import { inicializarJuego } from "./InicializacionJuego.js";

const [unJugador, dosJugadores] = document.querySelectorAll('.modal_jugadores button');
const btnNuevoJuego = document.querySelector('.nuevo');
const mascara = document.querySelector('#modal-mascara');

unJugador.addEventListener('click', (e) => {
    mascara.classList.toggle('desaparecer')
    const className = obtenerNombreClase(e.target);
    inicializarJuego(className);
});

dosJugadores.addEventListener('click', (e) => {
    mascara.classList.toggle('desaparecer')
    const className = obtenerNombreClase(e.target);
    inicializarJuego(className);
});

btnNuevoJuego.addEventListener('click', () => mascara.classList.toggle('desaparecer'));

function obtenerNombreClase(target) {
    return target.className;
}