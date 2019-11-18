import CenarioBuilder from "./CenarioBuilder.js";

export default class GerenciadorCenario {
    gerenciadorSprites;
    colunas;
    linhas;
    cenarios = [];
    tileSets = [];
    constructor() {}

    async pegarConfiguracaoDeJSON(id) {
        let response = await fetch(`./cenario/lvls/lvl${id}.json`)
        let cenario = await response.json();
        return cenario;
    }

    async criarCenario(id) {
        const levelConfig = await this.pegarConfiguracaoDeJSON(id);
        
        const cenario = new CenarioBuilder()
        .definirLevel(levelConfig)
        .pegarCenario();

        return cenario;
    }
}