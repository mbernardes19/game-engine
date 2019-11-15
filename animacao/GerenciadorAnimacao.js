import Animacao from "./Animacao.js";
import GerenciadorSprite from "../GerenciadorSprite.js";
import GameView from "../GameView.js";
import GerenciadorCena from "../GerenciadorCena.js";

export default class GerenciadorAnimacao {
    gerenciadorCena;
    /**@type {GerenciadorSprite} */
    gerenciadorSprites;
    novaAnimacaoEvent;
    cenaAtual;
    animacoes = [];

    /**
     * Gerenciador responsável por criar, armazenar e reproduzir animações em objetos
     * @param {GerenciadorCena} gerenciadorCena 
     */
    constructor(gerenciadorSprites, gerenciadorCena=undefined) {
        this.gerenciadorCena = gerenciadorCena;
        this.gerenciadorSprites = gerenciadorSprites;
        this.cenaAtual = this.gerenciadorCena ? this.gerenciadorCena.cenaAtual : undefined;
    }

    emitirEvento(evento) {
        switch(evento) {
            case 'novaAnimacao':
                this.novaAnimacaoEvent = new CustomEvent(evento,{detail: this.animacoes.slice()});
                document.dispatchEvent(this.novaAnimacaoEvent);
                break;
        }

    }

    criar(id, idSpriteGroup) {
            const spriteGroup = this.gerenciadorSprites.pegarSpriteGroupPorId(idSpriteGroup);
            const novaAnimacao = this.criarAnimacao(id, spriteGroup);
            this.animacoes.push(novaAnimacao);
            this.emitirEvento('novaAnimacao');
            return novaAnimacao;
    }

    objetoExisteEmCena(objeto, cena) {
        if (cena) {
            const objetosIds = cena.objetos.map(obj => obj.id);
            return objetosIds.indexOf(objeto) > -1 ? true : false;
        }
    }

    criarAnimacao(id, spriteGroup) {
        return new Animacao(id, spriteGroup);
    }

    pegarObjetoAnimacaoPorIdObjeto(idObjeto) {
        return this.objetoAnimacoes.find((item) => item.objeto.id === idObjeto);
    }

    pegarObjetoAnimacaoPorIdAnimacao(idAnimacao) {
        return this.objetoAnimacoes.find((item) => item.animacoes.id == idAnimacao);
    }

    pegarAnimacao(idAnimacao) {
        const animacoesGerais = this.objetoAnimacoes.flatMap(item => item.animacoes);
        return animacoesGerais.find(animacao => animacao.id == idAnimacao);
    }

    pegarObjeto(idObjeto) {
        return this.cenaAtual.objetos.find(obj => obj.id == idObjeto);
    }

    reproduzir(animacaoPesq) {
        const objetoAnimacao = this.pegarObjetoAnimacaoPorIdAnimacao('mario-andar');
        const objeto = this.pegarObjeto('mario');
        const animacao = this.pegarAnimacao(animacaoPesq);
        let i = 0;
        let comeco = Date.now();
        
        const loop = setInterval(() => {
            const tempo = Date.now();
            if (animacao.duracao !== 0) {
                if (tempo >= comeco+animacao.duracao*1000) {
                    clearInterval(loop);
                }
            }
            
            this.canvasCtx.clearRect(objeto.x,objeto.y, objeto.largura, objeto.altura);     
            this.canvasCtx.drawImage(
                animacao.sprites[i].spritesheet.imagem,
                animacao.sprites[i].inicioX,
                animacao.sprites[i].inicioY,
                animacao.sprites[i].largura,
                animacao.sprites[i].altura,
                objeto.x,
                objeto.y,
                animacao.sprites[i].largura,
                animacao.sprites[i].altura,
                ); 

                i++;
                i = i % animacao.sprites.length;

                animacao.duracao === 0 && !animacao.sprites[i] ? i = 0 : null;
            !animacao.sprites[i] ? clearInterval(loop) : null;

        } , (animacao.fps*1000));
    }

    deletar(animacao) {
        const animacoesIds = this.objetoAnimacoes.map(anim => anim.id);
        const deleteIdx = animacoesIds.indexOf(animacao.id);
        this.animacoes.splice(deleteIdx, 1);
    }
}
