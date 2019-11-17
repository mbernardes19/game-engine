/* eslint-disable no-undef */
import Animacao from "../animacao/Animacao.js";
import Sprite from "../Sprite.js";
import Spritesheet from "../Spritesheet.js";
import SpriteGroup from "../SpriteGroup.js";
import GerenciadorAnimacao from "../animacao/GerenciadorAnimacao.js";
import GerenciadorCena from "../cena/GerenciadorCena.js/index.js";
import Cena from "../cena/Cena.js/index.js";
import GerenciadorSprite from "../sprite/GerenciadorSprite.js/index.js";
import { URL_IMAGEM_TESTE } from "./constantes.js";
import Armazenamento from "../utilidades/Armazenamento.js";


describe('GerenciadorAnimacao', () =>{
    let spritesheet
    let sprite;
    let sprite2;
    let spriteGroup;
    let animacao;
    let animacaoDefault;
    let animacaoErr;
    /**@type {GerenciadorAnimacao}  */
    let ga;
    let gc;
    let gs;
    let armz;

    beforeEach(() => {
        spritesheet = new Spritesheet('teste', URL_IMAGEM_TESTE,500,400);
        sprite = new Sprite(spritesheet,16,16,0,0);
        sprite2 = new Sprite(spritesheet,16,16,0,0);
        spriteGroup = new SpriteGroup('teste', [sprite, sprite2]);

        animacao = new Animacao('testanim', spriteGroup, 1, 40);
        animacaoDefault = new Animacao('testanim2', spriteGroup);

        armz = new Armazenamento();
        gs = new GerenciadorSprite();
        gs.adicionarSpriteGroup(spriteGroup);
        gs.adicionarSpritesheet(spritesheet);
        gc = new GerenciadorCena(armz, [new Cena('teste')]);
        ga = new GerenciadorAnimacao(armz, gs);
        ga.adicionarAnimacao(animacao);
    });

    it('deve ser criado', () => {
        expect(ga).toBeTruthy();
    })

    it('quando criarAnimacao() tiver todos os parâmetros preenchidos, deve retornar um objeto de Animacao configurado de acordo', () => {
        const animacao = ga.criarAnimacao('tst','teste',1,20);
        expect(animacao).toBeTruthy();
        expect(animacao instanceof Animacao).toBe(true);
        expect(animacao.duracao).toBe(1);
        expect(animacao.fps).toBe(20);
        expect(animacao.id).toBe('tst');
        expect(animacao.spriteGroup).toEqual(gs.pegarSpriteGroupPorId('teste'));
    });

    it('quando criarAnimacao() tiver somente os parâmetros obrigatórios preenchidos, deve retornar um objeto de Animacao configurado de acordo', () => {
        const animacao = ga.criarAnimacao('tst','teste');
        expect(animacao).toBeTruthy();
        expect(animacao instanceof Animacao).toBe(true);
        expect(animacao.duracao).toBe(5);
        expect(animacao.fps).toBe(30);
        expect(animacao.id).toBe('tst');
        expect(animacao.spriteGroup).toEqual(gs.pegarSpriteGroupPorId('teste'));
    });

    it('Ao final da execução, criarAnimacao() deve guardar a array atual de animacoes no localStorage usando o Armazenamento', () => {
        spyOn(ga.armazenamento, 'guardar');
        ga.criarAnimacao('tst', 'teste');
        expect(ga.animacoes.length).toBeGreaterThan(1);
        expect(ga.armazenamento.guardar).toHaveBeenCalledWith('animacoes', ga.animacoes);
    });

    it('criarAnimacao() deve lançar um erro se parâmetro `id` não for preenchido', () => {
        expect(() => ga.criarAnimacao())
            .toThrow(Error('Parâmetro `id` é obrigatório em criarAnimacao()'));
    });

    it('criarAnimacao() deve lançar um erro se parâmetro `idSpriteGroup` não for preenchido', () => {
        expect(() => ga.criarAnimacao('asd'))
            .toThrow(Error('Parâmetro `idSpriteGroup` é obrigatório em criarAnimacao()'));
    });

    it('criarAnimacao() deve lançar um erro se já existir uma Animacao usando o id preenchido', () => {
        expect(() => ga.criarAnimacao('testanim', 'teste'))
            .toThrow(Error(`Já existe uma Animacao com o id: testanim`));
    });

    it('animacaoExiste() deve retornar false se a Animacao pesquisada não existir na array de Animacao', () => {
        expect(ga.animacaoExiste('testanim')).toBe(true);
    });

    it('animacaoExiste() deve retornar false se a Animacao pesquisada não existir na array de Animacao', () => {
        expect(ga.animacaoExiste('tesasdasd')).toBe(false);
    });

    it('adicionarAnimacao() deve inserir uma nova Animacao na array de Animacao', () => {
        ga.adicionarAnimacao(animacaoDefault);
        expect(ga.animacoes.length).toBeGreaterThan(1);
    });

    it('adicionarAnimacao() deve lançar um erro se parâmetro `animacao` não for fornecido', () => {
        expect(() => ga.adicionarAnimacao()).toThrow(Error('Parâmetro `animacao` não fornecido para adicionarAnimacao()'));
    });

});