import Cena from "./cena/Cena.js";
import Cenario from './cenario/Cenario.js';
import GameModel from "./GameModel.js";
import GerenciadorAnimacao from "./animacao/GerenciadorAnimacao.js";

export default class GameView {
    /**@type {CanvasRenderingContext2D} */
    canvasCtx;
    /**@type {GerenciadorAnimacao} */
    gerenciadorAnimacoes
    /**@type {GameModel} */
    model
    CANVAS_HEIGHT;
    CANVAS_WIDTH;
    /**
     * 
     * @param {CanvasRenderingContext2D} canvasCtx 
     */
    constructor(canvasCtx, gerenciadorAnimacoes) {
        this.canvasCtx = canvasCtx;
        this.gerenciadorAnimacoes = gerenciadorAnimacoes;
        this.CANVAS_WIDTH = this.canvasCtx.canvas.width;
        this.CANVAS_HEIGHT = this.canvasCtx.canvas.height;
    }
    /**
     * 
     * @param {GameModel} model 
     */
    atualizar(model) {
        this.model = model;
        this.canvasCtx.clearRect(0,0,this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
        this.canvasCtx.fillText('X do jogador',0,40);
        this.canvasCtx.fillText(model.jogador.x,0,50);
    }

    /**
     * 
     * @param {GameModel} model 
     */
    receberModel(model) {
        this.model = model;
    }

    reproduzirAnimacao(idObjeto, idAnimacao) {
        const objeto = this.model.cenaAtual.objetos.find(obj => obj.id == idObjeto);
        const animacao = this.gerenciadorAnimacoes.pegarAnimacaoPorId(idAnimacao);
        let i = 0;
        let comeco = Date.now();
        
        const loop = setInterval(() => {
            const tempo = Date.now();
            if (animacao.duracao !== 0) {
                if (tempo >= comeco+animacao.duracao*1000) {
                    clearInterval(loop);
                }
            }
            
            this.canvasCtx.clearRect(objeto.x,objeto.y, objeto.largura, objeto.altura);     
            this.canvasCtx.drawImage(
                animacao.sprites[i].spritesheet.imagem,
                animacao.sprites[i].inicioX,
                animacao.sprites[i].inicioY,
                animacao.sprites[i].largura,
                animacao.sprites[i].altura,
                objeto.x,
                objeto.y,
                animacao.sprites[i].largura,
                animacao.sprites[i].altura,
                ); 

                i++;
                i = i % animacao.sprites.length;

                animacao.duracao === 0 && !animacao.sprites[i] ? i = 0 : null;
            !animacao.sprites[i] ? clearInterval(loop) : null;

        } , (animacao.fps*1000));
    }

   /* renderizarCenario() {
        
        this.canvasCtx.drawImage(

        ); 

    }*/

   /* renderizarCena() {
        this.canvasCtx.fillText()
    }*/
}