import Cena from "./Cena.js";
import Cenario from './Cenario.js';

export default class GameView {
    gerenciadorCenas;
    gerenciadorAnimacao;
    canvasCtx;
    constructor(canvasCtx, gerenciadorCenas, gerenciadorAnimacao) {
        this.canvasCtx = canvasCtx;
        this.gerenciadorCenas = gerenciadorCenas || undefined;
        this.gerenciadorAnimacao = gerenciadorAnimacao || undefined;
    }

    renderizarCenario() {
        
        this.canvasCtx.drawImage(
            this.gerenciadorCenas.cenaAtual.cenario.imagem,
            this.gerenciadorCenas.cenaAtual.cenario.x,
            this.gerenciadorCenas.cenaAtual.cenario.y
        ); 

    }

    renderizarCena() {
        this.gerenciadorAnimacao.reproduzir('mario-andar');
    }

    renderizar() {
        setInterval(() => {
            this.renderizarCenario();
            this.renderizarCena();
        }, 2000);
    }
}