import GameView from "../GameView.js";
import GameController from "../GameController.js";

export default class InputHandler{
    /**@type {GameView} */
    view;
    /**@type {GameController} */
    controller;
    teclaAtual
    cimaEvent = new Event('cima');
    baixoEvent = new Event('baixo');
    esquerdaEvent = new Event('esquerda');
    direitaEvent = new Event('direita');
    /**
     * @param {GameView} view 
     * @param {GameController} controller
     */
    constructor(view, controller) {
        this.view = view;
        this.controller = controller;
        document.addEventListener('keydown', (keyEvent) => {
            this.checkKeyInput(keyEvent);
        })
    }

    checkKeyInput(keyEvent) {
        switch(keyEvent.key) {
            case "ArrowUp":
                this.teclaAtual = InputHandler.CIMA;
                document.dispatchEvent(this.cimaEvent);
                break;
            case "ArrowDown":
                this.teclaAtual = InputHandler.BAIXO;
                document.dispatchEvent(this.baixoEvent);
                break;
            case "ArrowLeft":
                this.teclaAtual = InputHandler.ESQUERDA;
                document.dispatchEvent(this.esquerdaEvent);   
                break;             
            case "ArrowRight":
                this.teclaAtual = InputHandler.DIREITA;
                document.dispatchEvent(this.direitaEvent);     
                break;                           
        }
    }
}

InputHandler.CIMA = "cima";
InputHandler.BAIXO = "baixo";
InputHandler.ESQUERDA = "esquerda";
InputHandler.DIREITA = "direita";