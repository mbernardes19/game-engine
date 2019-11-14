import Animacao from "./Animacao.js";
import GerenciadorSprite from "../GerenciadorSprite.js";

export default class GerenciadorAnimacao {
    gerenciadorCena;
    /**@type {GerenciadorSprite} */
    gerenciadorSprites;
    cenaAtual;
    objetoAnimacoes = [];
    canvasCtx;
    constructor(canvasCtx, gerenciadorCena) {
        this.canvasCtx = canvasCtx;
        this.gerenciadorCena = gerenciadorCena || undefined;
        this.cenaAtual = this.gerenciadorCena ? this.gerenciadorCena.cenaAtual : undefined;
    }
    
    atualizar() {

    }

    criar(id, idSpriteGroup, idObjeto) {
        if (this.objetoExisteEmCena(idObjeto, this.cenaAtual)) {
            const spriteGroup = this.gerenciadorSprites.pegarSpriteGroupPorId(idSpriteGroup);

            const novaAnimacao = this.criarAnimacao(id, spriteGroup);

            const objetoAnimacao = {objeto: idObjeto, animacoes:[novaAnimacao]};
    
            const objetoAnimacoesFiltrados = this.objetoAnimacoes.find((item) => {
                return item.objeto.id === idObjeto;
            });
    
            if(!objetoAnimacoesFiltrados) {
                this.objetoAnimacoes.push(objetoAnimacao);
            }
            else {
                objetoAnimacoesFiltrados.animacoes.push(novaAnimacao);
            }
        }
        else {
            throw new Error('Objeto não existe na cena atual');
        }
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
        const animacoesIds = animacoes.map(anim => anim.id);
        const deleteIdx = animacoesIds.indexOf(animacao.id);
        this.animacoes.splice(deleteIdx, 1);
    }
}