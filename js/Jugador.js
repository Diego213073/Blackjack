export class Jugador {

    #identificador;
    #nombreJugador;
    #puntuacion;

    constructor(nombreJugador, identificador) {
        this.#nombreJugador = nombreJugador;
        this.#identificador = identificador;
        this.#puntuacion = 0;
    }
    set setPuntuacion(puntuacion) {
        this.#puntuacion += puntuacion;
    }

    get getPuntuacion() {
        return this.#puntuacion;
    }

    get identificador() {
        return this.#identificador;
    }

    get nombreJugador() {
        return this.#nombreJugador;
    }

    set nombreJugador(nombreJugador) {
        this.#nombreJugador = nombreJugador;
    }

    reiniciarValor() {
        this.#puntuacion = 0;
    }

}