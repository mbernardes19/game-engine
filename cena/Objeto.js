import Animacao from "../animacao/Animacao.js";

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
    animacaoAtual;
    constructor(id = 'nao-definido',  x=0, y=0, altura=50, largura=50, tipoCorpo=Objeto.ESTATICO){
        this.id = id;
        this.x = x;
        this.y = y;
        this.altura = altura;
        this.largura = largura;
        this.tipoCorpo = tipoCorpo;
        this.velocidadeY = 10;
        this.velocidadeX = 10;
        // this.tipoColisao = tipoColisao || Objeto.NAOELASTICA;
    }

    setAnimacaoAtual(idAnimacao) {
        this.animacaoAtual = idAnimacao;
    }

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