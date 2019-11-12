import GameView from "./GameView.js";
import Game from "./Game.js";
import GameModel from "./GameModel.js";
import InputHandler from "./InputHandler.js";

export default class GameController {
    /**@type {GameView} */
    view;
    /**@type {GameModel} */
    model;
    /**@type {InputHandler} */
    input
    /** 
     * @param {GameView} view 
     * @param {GameModel} model 
     */
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.input = new InputHandler();
        this._tratarInput();
        this._gameLoop();
    }
    /**
     * @private
     * Método privado
     */
    _tratarInput() {
        document.addEventListener('cima',() => this.paraCima());
        document.addEventListener('baixo',() => this.paraBaixo());
        document.addEventListener('esquerda',() => this.paraEsquerda());
        document.addEventListener('direita',() => this.paraDireita());
    }
    /**
     * Executa uma ação de mover o jogador para cima
     * diminuindo sua propriedade 'y' de acordo com sua 'velocidadeY'
     */
    paraCima() {
        this.model.jogador.y -= this.model.jogador.velocidadeY;
    }
    /**
     * Executa uma ação de mover o jogador para baixo
     * aumentando sua propriedade 'y' de acordo com sua 'velocidadeY'
     */
    paraBaixo() {
        this.model.jogador.y += this.model.jogador.velocidadeY;
    }
    /**
     * Executa uma ação de mover o jogador para esquerda
     * diminuindo sua propriedade 'x' de acordo com sua 'velocidadeX'
     */
    paraEsquerda() {
        this.model.jogador.x -= this.model.jogador.velocidadeX;
    }
    /**
     * Executa uma ação de mover o jogador para direita
     * aumentando sua propriedade 'x' de acordo com sua 'velocidadeX'
     */
    paraDireita() {
        this.model.jogador.x += this.model.jogador.velocidadeX;
    }
    /**
     * Game Loop do jogo.
     * Através dele a View é sempre atualizada quando o Model é atualizado.
     */
    _gameLoop() {
        this.view.atualizar(this.model);
        requestAnimationFrame(this._gameLoop.bind(this));
    }
    
}

GameController.view