import Animacao from "./animacao/Animacao.js";

export default class Objeto {
    id;
    x = 0;
    y = 0;
    altura;
    largura;
    meiaAltura;
    meiaLargura;
    velocidadeX;
    velocidadeY;
    aceleracaoX;
    aceleracaoY;
    tipoCorpo;
    tipoColisao;
    restituicao;
    constructor(id,  x, y, altura, largura, tipoCorpo){
        this.id = id || 'nao-definido';
        this.x = x || 0;
        this.y = y || 0;
        this.altura = altura || 50;
        this.largura = largura || 50;
        this.tipoCorpo = tipoCorpo || Objeto.ESTATICO;
        // this.tipoColisao = tipoColisao || Objeto.NAOELASTICA;
    };

    getXMeio(){
        return this.x + this.meiaLargura;
    }
    getYMeio(){
        return this.y + this.meiaAltura;
    }
    getTopo(){
        return this.y;
    }
    getBase(){
        return this.y + this.altura;
    }
    getEsquerda(){
        return this.x;
    }
    getDireita(){
        return this.x + this.largura;
    }
}

// Constantes

// Constantes de tipo de corpo
Objeto.ESTATICO = 'estatico';
Objeto.DINAMICO = 'dinamico';

// Constantes de tipo de colisão
Objeto.ELASTICA = 'elastico';
Objeto.NAOELASTICA = 'naoelastico';