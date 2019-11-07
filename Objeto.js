export default class Objeto {
    altura;
    largura;
    meiaAltura;
    meiaLargura;
    x;
    y;
    vX;
    vY;
    aX;
    aY;
    tipoCorpo;
    tipoColisao;
    restituicao;
    constructor(x, y, altura, largura, vX, vY, aX, aY, tipoCorpo, tipoColisao){
        this.x = x;
        this.y = y;
        this.altura = altura;
        this.largura = largura;
        this.vX = vX || 0;
        this.vY = vY || 0;
        this.aX = aX || 0;
        this.aY = aY || 0;
        this.tipoCorpo = tipoCorpo || Objeto.ESTATICO;
        this.tipoColisao = tipoColisao || Objeto.NAOELASTICA;
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