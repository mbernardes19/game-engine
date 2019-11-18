import Objeto from "./Objeto.js";

export default class Cena {
    id;
    /**@type {Objeto[]} */
    objetos = [];
    cenario;
    constructor(builder) {
        this.id = builder.id;
        this.objetos = builder.objetos;
        this.cenario = builder.cenario;
        this.jogador = builder.objetos ? this.pegarJogador() : undefined;
    }

    adicionarObjetos(objetos) {
        this.objetos.push(objetos);
    }

    mudarCenario(cenario) {
        this.cenario = cenario;
    }

    /**
     * 
     * @param {Array} objetos 
     */
    pegarJogador() {
        return this.objetos.find(obj => obj.tipo ? obj.tipo == 'jogador' : false)
    }



 
}