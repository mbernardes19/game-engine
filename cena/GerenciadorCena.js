import Cena from "./Cena.js";
import Cenario from '../cenario/Cenario.js';
import Objeto from "./Objeto.js";

export default class GerenciadorCena {
    cenas = [];
    cenaAtual;
    constructor(armazenamento, cenas = []) {
        this.cenas = cenas;
        this.armazenamento = armazenamento;
    }

    /**
     * Este método cria e retorna uma nova Cena
     * @param {string} id
     * id da nova cena
     * @param {Array<Objeto>} objetos 
     * objetos da nova cena
     * @param {Cenario} cenario 
     * cenário da nova cena
     * @returns {Cena} novaCena
     */
    criarCena(id, objetos=[], cenario=undefined) {
        let novaCena;
        if (cenario) {
            novaCena = new Cena(id, objetos, cenario);
        } else {
            novaCena = new Cena(id, objetos);
        }
        this.cenas.push(novaCena);
        this.definirAtual(id);
        return novaCena;
    }

    criarCenaDeJSON(urlJSON) {

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
}