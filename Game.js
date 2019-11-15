import GameView from "./GameView.js";
import GameController from "./GameController.js";
import GameModel from "./GameModel.js";
import GerenciadorCena from "./GerenciadorCena.js";
import Personagem from "./Personagem.js";
import GerenciadorAnimacao from "./animacao/GerenciadorAnimacao.js";
import GerenciadorCenario from "./GerenciadorCenario.js";
import GerenciadorSprite from "./GerenciadorSprite.js";

export default class Game {
    canvasCtx;
    /**@type {GameModel} */
    model;
    /**@type {GameView} */
    view;
    /**@type {GameController} */
    controller;
    /**@type {GerenciadorCena} */
    gerenciadorCenas;
    constructor(canvasCtx) {
        this.gerenciadorCenas = new GerenciadorCena();
        this.gerenciadorCenarios = new GerenciadorCenario();
        this.gerenciadorSprites = new GerenciadorSprite();
        this.gerenciadorAnimacoes = new GerenciadorAnimacao(this.gerenciadorSprites, this.gerenciadorCenas);

        const cena = this.gerenciadorCenas.criarCena('cena1');
        cena.adicionarObjetos(new Personagem('1', Personagem.JOGADOR));
        this.canvasCtx = canvasCtx;
        this.model = new GameModel(cena);
        this.view = new GameView(this.canvasCtx);
        this.controller = new GameController(this.view, this.model);

        /*this.gerenciadorSprites.criarSpritesheet('./images.png');
        this.gerenciadorSprites.criarSpriteGroup('s', {inicioX:0, inicioY:0, largura: 50, altura: 50}, 2);
        this.gerenciadorAnimacoes.criar('t', 's');*/
        
        
    }
}