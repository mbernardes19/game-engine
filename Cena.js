export default class Cena {
    id;
    objetos = [];
    cenario;
    constructor(id, objetos=[], cenario=undefined) {
        this.id = id;
        this.objetos = objetos;
        this.cenario = cenario;
    }

    adicionarObjetos(objetos) {
        this.objetos.push(objetos);
    }

    mudarCenario(cenario) {
        this.cenario = cenario;
    }



 
}