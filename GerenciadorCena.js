import Cena from "./Cena.js";

export default class GerenciadorCena {
    cenas = [];
    cenaAtual;
    canvasCtx;
    constructor(canvasCtx, cenas) {
        this.canvasCtx = canvasCtx;
        this.cenas = cenas || [];
    }

    criar(id, objetos, cenario) {
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

}