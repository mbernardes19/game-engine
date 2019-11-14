import Sprite from "./Sprite.js";

export default class Spritesheet {

    constructor(largura, altura, imagemUrl) {
        if (altura == null || largura == null|| imagemUrl == null) {
            console.error('Todos os parâmetros de Spritesheet devem ser preenchidos')
            throw new Error('Todos os parâmetros de Spritesheet devem ser preenchidos');
        }
        this.altura = altura;
        this.largura = largura;
        this.imagem = new Image();
        this.imagem.src = imagemUrl;
    }
}