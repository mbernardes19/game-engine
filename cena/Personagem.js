import Objeto from "./Objeto.js";

export default class Personagem extends Objeto {
    tipo;
    constructor(id,tipo=undefined,x=0,y=0,altura=50,largura=50){
        super(id,x,y,altura,largura,Objeto.DINAMICO);
        this.tipo = tipo;
    }
}

Personagem.INIMIGO = 'inimigo';
Personagem.JOGADOR = 'jogador';