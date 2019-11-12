import Cena from "./Cena.js";
import Cenario from './Cenario.js';
import GameModel from "./GameModel.js";

export default class GameView {
    /**@type {CanvasRenderingContext2D} */
    canvasCtx;
    CANVAS_HEIGHT;
    CANVAS_WIDTH;
    /**
     * 
     * @param {CanvasRenderingContext2D} canvasCtx 
     */
    constructor(canvasCtx) {
        this.canvasCtx = canvasCtx;
        this.CANVAS_WIDTH = this.canvasCtx.canvas.width;
        this.CANVAS_HEIGHT = this.canvasCtx.canvas.height;
    }
    /**
     * 
     * @param {GameModel} model 
     */
    atualizar(model) {
        this.canvasCtx.clearRect(0,0,this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
        this.canvasCtx.fillText('X do jogador',0,40);
        this.canvasCtx.fillText(model.jogador.x,0,50);
    }

   /* renderizarCenario() {
        
        this.canvasCtx.drawImage(

        ); 

    }*/

   /* renderizarCena() {
        this.canvasCtx.fillText()
    }*/
}