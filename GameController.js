import GameView from "./GameView.js";
import GameModel from "./GameModel.js";
import InputHandler from "./utilidades/InputHandler.js";
import GerenciadorCena from "./cena/GerenciadorCena.js";
import GerenciadorAnimacao from "./animacao/GerenciadorAnimacao.js";
import GerenciadorCenario from "./cenario/GerenciadorCenario.js";

export default class GameController {
    /**@type {GameView} */
    view;
    /**@type {GameModel} */
    model;
    /**@type {InputHandler} */
    input
    /**@type {Map<String, Function>} */
    comandos
    /** 
     * @param {GameView} view 
     * @param {GameModel} model 
     */
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.comandos = new Map();
        this.input = new InputHandler();
        this._tratarInput();
        this._gameLoop();

        this.adicionarComando('direita',() => this.model.jogador.x += this.model.jogador.velocidadeX)
        this.adicionarComando('esquerda',() => this.model.jogador.x -= this.model.jogador.velocidadeX)
        this.adicionarComando('cima',() => this.model.jogador.y -= this.model.jogador.velocidadeY)
        this.adicionarComando('baixo',() => this.model.jogador.y += this.model.jogador.velocidadeY)
    }
    /**
     * @private
     * Método privado
     */
    _tratarInput() {
        document.addEventListener('cima',() => this.executarComando('cima'));
        document.addEventListener('baixo',() => this.executarComando('baixo'));
        document.addEventListener('esquerda',() => this.executarComando('esquerda'));
        document.addEventListener('direita',() => this.executarComando('direita'));
    }

    adicionarComando(idComando, acao) {
        this.comandos.set(idComando, acao);
    }

    executarComando(idComando) {
        this.comandos.get(idComando)();
    }

    removerComando(idComando) {
        this.comandos.delete(idComando);
    }
    /**
     * Game Loop do jogo.
     * Através dele a View é sempre atualizada quando o Model é atualizado.
     */
    _gameLoop() {
        // this.model.pegarAnimacoes();
        this.model.pegarCenas();
        this.model.pegarCenaAtual();
        this.view.atualizar(this.model);
        requestAnimationFrame(this._gameLoop.bind(this));
    }
    
}