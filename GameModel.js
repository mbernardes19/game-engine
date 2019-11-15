import Cena from "./Cena.js";
import Personagem from "./Personagem.js";

export default class GameModel {
    /**@type {Cena} */
    cenaAtual
    /**@type {Personagem} */
    jogador
    constructor(cenaAtual=undefined) {
        this.cenaAtual = cenaAtual;
        this.jogador = this.cenaAtual ? this.cenaAtual.pegarJogador() : undefined;
        document.addEventListener('novaAnimacao', this.mostrar);
    }

    mostrar(e) {
        console.log(e);
    }
}