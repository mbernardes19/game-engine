export default class Cena {
    id;
    objetos = [];
    cenario;
    constructor(id, objetos, cenario) {
        this.id = id;
        this.objetos = objetos || [];
        this.cenario = cenario || undefined;
    }

    adicionarObjetos(objetos) {
        this.objetos.push(objetos);
    }



 
}