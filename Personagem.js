import Objeto from "./Objeto.js";

export default class Peronagem extends Objeto {
    constructor(id,x=0,y=0,altura=50,largura=50){
        super(id,x,y,altura,largura,Objeto.DINAMICO)
    };
}