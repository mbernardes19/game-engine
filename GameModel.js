import Cena from "./cena/Cena.js";
import Personagem from "./cena/Personagem.js";
import Animacao from "./animacao/Animacao.js";
import Armazenamento from "./utilidades/Armazenamento.js";

export default class GameModel {
    /**@type {Cena} */
    cenaAtual
    /**@type {Cena[]} */
    cenas
    /**@type {Personagem} */
    jogador
    /**@type {Animacao[]} */
    animacoes
    /**@type {Armazenamento} */
    armazenamento
    constructor(armazenamento, cenaAtual=undefined) {
        this.cenaAtual = cenaAtual;
        this.jogador = this.cenaAtual ? this.cenaAtual.pegarJogador() : undefined;
        this.armazenamento = armazenamento;
        this.pegarAnimacoes();
    }

    pegarAnimacoes() {
        const animacoesPegas = this.armazenamento.pegar('animacoes')
        this.animacoes = animacoesPegas;
    }

    pegarCenas() {
        const cenasPegas = this.armazenamento.pegar('cenas');
        this.cenas = cenasPegas;
    }

    pegarCenaAtual() {
        const cenaAtualPega = this.armazenamento.pegar('cenaAtual');
        this.cenaAtual = cenaAtualPega;
    }
}