export default class Cena {
    id;
    objetos = [];
    cenario;
    constructor(id, objetos=[], cenario=undefined) {
        this.id = id;
        this.objetos = objetos;
        this.cenario = cenario;
        this.jogador = this.objetos ? this.pegarJogador() : undefined;
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