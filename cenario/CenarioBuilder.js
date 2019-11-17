import Cenario from "./Cenario.js";
import Tile from "./Tile.js";
import { SPRITESHEET } from "./TiposSprites.js";
import { POSICOES_TILES } from "./TiposSprites.js";
import Sprite from "../sprite/Sprite.js";

export default class CenarioBuider {
    levelConfig;
    constructor() {}

    definirLevel(levelConfig) {
        this.definirId(levelConfig);
        this.definirColunas(levelConfig);
        this.definirLinhas(levelConfig);
        this.definirTamanhoTiles(levelConfig)
        this.definirGraficoTiles(levelConfig);
        return this;
    }

    definirId(levelConfig) {
        this.id = levelConfig.id; 
    }

    definirColunas(levelConfig) {
        this.colunas = levelConfig.colunas;
    }

    definirLinhas(levelConfig) {
        this.linhas = levelConfig.linhas;
    }

    definirTamanhoTiles(levelConfig) {
        this.tamanhoTile = levelConfig.tamanho_tile;
    }

    definirGraficoTiles(levelConfig) {
        const mapaGrafico = levelConfig.mapa_grafico;

        const graficosTiles = [];

        for(let i = 0; i < this.colunas; i++) {
            for(let j = 0; j < this.linhas; j++) {
                switch(mapaGrafico[j][i]) {
                    case 1:
                        graficosTiles.push(new Tile(this.tamanhoTile, new Sprite(SPRITESHEET, this.tamanhoTile, this.tamanhoTile, POSICOES_TILES[1].linha*this.tamanhoTile, POSICOES_TILES[1].coluna*this.tamanhoTile)));
                        break;
                    case 2:
                        graficosTiles.push(new Tile(this.tamanhoTile, new Sprite(SPRITESHEET, this.tamanhoTile, this.tamanhoTile, POSICOES_TILES[2].linha*this.tamanhoTile, POSICOES_TILES[2].coluna*this.tamanhoTile)));
                        break;
                }
            }
        }
        this.graficosTiles = graficosTiles;
    }

    definirColisaoTiles(levelConfig) {
        this.colisoesLevel = levelConfig.mapa_colisao;
    }

    definirURLImagem(levelConfig) {
        this.urlImagem = levelConfig.urlImagem;
    }

    pegarCenario() {
        return new Cenario(this);
    }
}