import Cenario from "./Cenario.js";
import Tile from "./Tile.js";
import { SPRITESHEET } from "./CONSTANTES_TILES.js";
import { TIPOS_TILES } from "./CONSTANTES_TILES.js";
import Sprite from "../sprite/Sprite.js";

export default class CenarioBuider {
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

        const graficosTiles = {};

        for(let i = 0; i < this.colunas; i++) {
            for(let j = 0; j < this.linhas; j++) {
                if (!graficosTiles[i]) {
                    graficosTiles[i] = {};
                }
                if (!graficosTiles[j]) {
                    graficosTiles[j] = {};
                }
                switch(mapaGrafico[j][i]) {
                    case 1:
                        graficosTiles[i][j] = new Tile(this.tamanhoTile, new Sprite(SPRITESHEET, this.tamanhoTile, this.tamanhoTile, TIPOS_TILES[1].coluna*this.tamanhoTile, TIPOS_TILES[1].linha*this.tamanhoTile));
                        break;
                    case 2:
                        graficosTiles[i][j] = new Tile(this.tamanhoTile, new Sprite(SPRITESHEET, this.tamanhoTile, this.tamanhoTile, TIPOS_TILES[2].coluna*this.tamanhoTile, TIPOS_TILES[2].linha*this.tamanhoTile));
                        break;
                    case 3:
                        graficosTiles[i][j] = new Tile(this.tamanhoTile, new Sprite(SPRITESHEET, this.tamanhoTile, this.tamanhoTile, TIPOS_TILES[3].coluna*this.tamanhoTile, TIPOS_TILES[3].linha*this.tamanhoTile));
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