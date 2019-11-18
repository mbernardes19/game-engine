import Personagem from "./Personagem.js";
import Objeto from "./Objeto.js";
import GerenciadorCenario from "../cenario/GerenciadorCenario.js";
import Cena from "./Cena.js";
import Armazenamento from "../utilidades/Armazenamento.js";

export default class CenaBuilder {
    /**@type {GerenciadorCenario} */
    gerenciadorCenarios
    /**@type {Armazenamento} */
    armazenamento
    constructor(gerenciadorCenarios, armazenamento) {
        this.gerenciadorCenarios = gerenciadorCenarios;
        this.armazenamento = armazenamento;
        this.objetos = [];
    }

    definirId(id) {
        this.id = id;
        return this;
    }

    criarJogador(id) {
        this.jogador = new Personagem(id, Personagem.JOGADOR);
        this.objetos.push(this.jogador);
        return this;
    }

    criarInimigo(id) {
        this.objetos.push(new Personagem(id, Personagem.INIMIGO));
        return this;
    }

    criarObjeto(id) {
        this.objetos.push(new Objeto(id));
        return this;
    }

    async criarCenario(id) {
        await this.gerenciadorCenarios.criarCenario(id)
            .then((cenario) => this.cenario = cenario);
    
        return this;
    }

    pegarCena() {
        const novaCena = new Cena(this);
        let cenas = [];
        if(this.armazenamento.pegar('cenas')) {
            cenas = this.armazenamento.pegar('cenas');
        }
        cenas.push(novaCena);
        this.armazenamento.guardar('cenas', cenas);
        this.armazenamento.guardar('cenaAtual', novaCena);
        return novaCena;
    }


 
}