import Objeto from "./Objeto.js";

/*const canvas = document.querySelector('canvas');
const CANVAS_HEIGHT = canvas.height;
const CANVAS_WIDTH = canvas.width;*/

export default class Cenario extends Objeto {
    colunas;
    linhas;
    tileSet;
    tamanhoTile;
    constructor(id, imgUrl = undefined){
        super(id, 0, 0, 50, 50, Objeto.ESTATICO)
        if(this.imgUrl) {
            this.imagem = new Image()
            this.imagem.src = imgUrl;
        }
    }
    

}