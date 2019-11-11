import Objeto from "./Objeto.js";

const canvas = document.querySelector('canvas');
const CANVAS_HEIGHT = canvas.height;
const CANVAS_WIDTH = canvas.width;

export default class Cenario extends Objeto {
    constructor(id, imgUrl){
        super(id, 0, 0, CANVAS_HEIGHT, CANVAS_WIDTH, Objeto.ESTATICO)
        this.imagem = new Image();
        this.imagem.src = imgUrl;
    };
    

}