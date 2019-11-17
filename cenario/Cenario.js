import Objeto from "../cena/Objeto.js";

/*const canvas = document.querySelector('canvas');
const CANVAS_HEIGHT = canvas.height;
const CANVAS_WIDTH = canvas.width;*/

export default class Cenario {
    id;
    colunas;
    linhas;
    tamanhoTile;
    constructor(builder){
        this.id = builder.id;
        this.colunas = builder.colunas;
        this.linhas = builder.linhas;
        this.tamanhoTile = builder.tamanhoTile;
        this.graficosTiles = builder.graficosTiles;
        if(builder.urlImagem) {
            this.imagem = new Image()
            this.imagem.src = builder.urlImagem;
        }
    }
    

}