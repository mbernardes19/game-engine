import GameView from "./GameView.js";
import GameController from "./GameController.js";
import GameModel from "./GameModel.js";
import GerenciadorCena from "./cena/GerenciadorCena.js";
import Personagem from "./cena/Personagem.js";
import GerenciadorAnimacao from "./animacao/GerenciadorAnimacao.js";
import GerenciadorCenario from "./cenario/GerenciadorCenario.js";
import GerenciadorSprite from "./sprite/GerenciadorSprite.js";
import Armazenamento from "./utilidades/Armazenamento.js";
import CenarioBuilder from "./cenario/CenarioBuilder.js";

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

    /**@type {Armazenamento} */
    armazenamento
    constructor(canvasCtx) {
        this.armazenamento = new Armazenamento();
        this.gerenciadorCenas = new GerenciadorCena(this.armazenamento);
        this.gerenciadorCenarios = new GerenciadorCenario();
        this.gerenciadorSprites = new GerenciadorSprite();
        this.gerenciadorAnimacoes = new GerenciadorAnimacao(this.armazenamento, this.gerenciadorSprites, this.gerenciadorCenas);

        const cena = this.gerenciadorCenas.criarCena('cena1');
        cena.adicionarObjetos(new Personagem('1', Personagem.JOGADOR));
        this.canvasCtx = canvasCtx;
        this.model = new GameModel(this.armazenamento, cena);
        this.view = new GameView(this.canvasCtx, this.gerenciadorAnimacoes);
        this.controller = new GameController(this.view, this.model);

        this.gerenciadorSprites.criarSpritesheet('tst','./specs/images.png');
        this.gerenciadorSprites.criarSpriteGroup('s', 'tst', {inicioX:0, inicioY:0, largura: 50, altura: 50}, 2);
        this.gerenciadorAnimacoes.criarAnimacao('t', 's');
        this.level()
    }

    async level() {
        const level = await this.gerenciadorCenarios.pegarConfiguracaoDeJSON(1);
        const cenario = new CenarioBuilder()
        .definirLevel(level)
        .pegarCenario();
    console.log(cenario);
    }
}