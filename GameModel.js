import GerenciadorCena from "./GerenciadorCena.js";
import GerenciadorAnimacao from "./animacao/GerenciadorAnimacao.js";
import Personagem from "./Personagem.js";

export default class GameModel {
    /**@type {GerenciadorCena} */
    gerenciadorCenas;
    /**@type {GerenciadorAnimacao} */
    gerenciadorAnimacao;
    /**@type {Personagem} */
    jogador
    constructor(gerenciadorCenas, gerenciadorAnimacao) {
        this.gerenciadorCenas = gerenciadorCenas;
        this.gerenciadorAnimacao = gerenciadorAnimacao;
        this.jogador = new Personagem('1');
    }

    atualizar() {

    }
}