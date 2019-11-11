import Cena from "./Cena.js";
import Cenario from './Cenario.js';

export default class GerenciadorCena {
    cenas = [];
    cenaAtual;
    canvasCtx;
    constructor(canvasCtx, cenas) {
        this.canvasCtx = canvasCtx;
        this.cenas = cenas || [];
    }

    criarCena(id, objetos, cenario) {
        const novaCena = new Cena(id, objetos, cenario);
        this.cenas.push(novaCena);
        this.definirAtual(id);
        return novaCena;
    }

    definirAtual(idCena) {
        this.cenaAtual = this.pegarCena(idCena);
    }

    pegarCena(idCena) {
        return this.cenas.find(cena => cena.id == idCena);
    }

    criarCenario(idCenario, urlImg) {
        return new Cenario('fase1',0,0,50,50,urlImg);
    }

    mudarCenario(cenarioNovo) {
        this.cenaAtual.cenario = cenarioNovo;
    }

    renderizar() {
        setInterval(() => {
            this.canvasCtx.drawImage(this.cenaAtual.cenario.imagem, this.cenaAtual.cenario.x, this.cenaAtual.cenario.y); 
        }, 2000);
    }
}