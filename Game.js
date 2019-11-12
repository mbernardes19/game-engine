import GerenciadorCena from "./GerenciadorCena.js";
import GerenciadorAnimacao from "./animacao/GerenciadorAnimacao.js";
import Personagem from "./Personagem.js";
import GameView from "./GameView.js";
import GameController from "./GameController.js";
import GameModel from "./GameModel.js";

export default class Game {
    canvasCtx;
    /**@type {GerenciadorCena} */
    gerenciadorCenas;
    /**@type {GerenciadorAnimacao} */
    gerenciadorAnimacao;
    /**@type {GameModel} */
    model;
    /**@type {GameView} */
    view;
    /**@type {GameController} */
    controller;
    constructor(canvasCtx) {
        this.canvasCtx = canvasCtx;
        this.gerenciadorCenas = new GerenciadorCena();
        this.gerenciadorAnimacao = new GerenciadorAnimacao(this.canvasCtx,this.gerenciadorCenas);
        this.model = new GameModel(this.gerenciadorCenas, this.gerenciadorAnimacao);
        this.view = new GameView(this.canvasCtx);
        this.controller = new GameController(this.view, this.model);
    }

    atualizar() {     
        
    }
}