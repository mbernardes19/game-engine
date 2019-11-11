import Objeto from "./Objeto.js";

export default class Cenario extends Objeto {
    constructor(id,x,y,altura,largura,imgUrl){
        super(id,x,y,altura,largura,Objeto.ESTATICO)
        this.img = new Image();
        this.img.src = imgUrl;
    };
}