import Animacao from "./Animacao.js";
import GerenciadorSprite from "../sprite/GerenciadorSprite.js";
import Armazenamento from "../utilidades/Armazenamento.js";

export default class GerenciadorAnimacao {
    /**@type {GerenciadorSprite} */
    gerenciadorSprites;
    /**@type {Animacao[]} */
    animacoes = [];

    /**
     * Gerenciador responsável por criar, armazenar e reproduzir animações em objetos
     * @param {Armazenamento} armazenamento
     * @param {GerenciadorSprites} gerenciadorSprites
     */
    constructor(armazenamento, gerenciadorSprites) {
        this.armazenamento = armazenamento;
        this.gerenciadorSprites = gerenciadorSprites;
    }
    /**
     * Verifica se uma determinada Animacao existe na array 'animacoes' a partir de seu id.
     * Se existir, retorna true, senão, retorna false.
     * @param {string} id 
     */
    animacaoExiste(id) {
        try {
            this.pegarAnimacaoPorId(id);
            return true;
        }
        catch(err) {
            return false;
        }
    }

    /**
     * Adiciona uma Animacao na array 'animacoes' do GerenciadorAnimacao 
     * @param {Animacao} animacao
     */
    adicionarAnimacao(animacao) {
        if(!animacao) {
            throw new Error('Parâmetro `animacao` não fornecido para adicionarAnimacao()')
        }
        this.animacoes.push(animacao);
    }

    /**
     * Cria um objeto de Animacao
     * @param {string} id 
     * @param {string} idSpriteGroup 
     * @param {number} duracao 
     * @param {number} fps 
     * @returns {Animacao} animacao
     */
    criarAnimacao(id, idSpriteGroup, duracao=5, fps=30) {
        if(!id) {
            throw new Error('Parâmetro `id` é obrigatório em criarAnimacao()');
        }
        if(!idSpriteGroup) {
            throw new Error('Parâmetro `idSpriteGroup` é obrigatório em criarAnimacao()');
        }
        const spriteGroup = this.gerenciadorSprites.pegarSpriteGroupPorId(idSpriteGroup);

        if(this.animacaoExiste(id)) {
            throw new Error(`Já existe uma Animacao com o id: ${id}`);
        }

        const novaAnimacao = new Animacao(id, spriteGroup, duracao, fps);
        this.animacoes.push(novaAnimacao);
        this.armazenamento.guardar('animacoes', this.animacoes);
        return novaAnimacao;
    }
    /**
     * Procura por uma Animacao na array 'animacoes' a partir do seu id. Se encontrar,
     * retornará a Animacao, senão, lançará um erro.
     * @param {string} id 
     * @throws {Error} 'Animacao não encontrada'
     */
    pegarAnimacaoPorId(id) {
        const animacaoEncontrada = this.animacoes.find((anim) => anim.id == id);
        if(!animacaoEncontrada) {
            throw new Error('Animacao não encontrada');
        } else {
            return animacaoEncontrada;
        }
    }

    /**
     * 
     * @param {string} id 
     */
    removerAnimacao(id) {

    }
}
