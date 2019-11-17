import Tile from "./Tile.js";

export default class GerenciadorCenario {
    gerenciadorSprites;
    colunas;
    linhas;
    cenarios = [];
    tileSets = [];
    constructor() {
        
    }

    criarTileSet(tamanhoTile) {
        const tileSet = [];
        const qtdTiles = this.colunas * this.linhas;
        Array.from({length: qtdTiles}).forEach(loop => {
            tileSet.push(new Tile(tamanhoTile));
        })
    }

    async pegarConfiguracaoDeJSON(level) {
            let response = await fetch(`./cenario/lvls/lvl${level}.json`)
            let data = await response.json();
            level = data;
            console.log(level);
            return level;
    }

    definirSpritesTiles(levelConfig) {
        const graficosLevel = levelConfig.mapa_grafico;
        for(let i = 0; i < this.columns; i++) {
            for(let j = 0; j < this.rows; j++) {
                    if (graficosLevel[j][i] === 1)
                        this.ctx.fillStyle = 'black'; 
                    if (graficosLevel[j][i] === 2)
                        this.ctx.fillStyle = 'blue'; 
                    if (graficosLevel[j][i] === 3)
                        this.ctx.fillStyle = 'red'; 
                this.ctx.fillRect(this.TILE_SIZE*i, this.TILE_SIZE*j, this.TILE_SIZE, this.TILE_SIZE);
            }
        }
    }

    atualizar() {
        
    }

}