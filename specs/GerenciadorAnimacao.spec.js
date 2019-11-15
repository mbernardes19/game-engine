/* eslint-disable no-undef */
import Animacao from "../animacao/Animacao.js";
import Sprite from "../Sprite.js";
import Spritesheet from "../Spritesheet.js";
import SpriteGroup from "../SpriteGroup.js";
import GerenciadorAnimacao from "../animacao/GerenciadorAnimacao.js";
import GerenciadorCena from "../GerenciadorCena.js";
import Cena from "../Cena.js";
import GerenciadorSprite from "../GerenciadorSprite.js";
import { URL_IMAGEM_TESTE } from "./constantes.js";


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

    beforeEach(() => {
        spritesheet = new Spritesheet('teste', URL_IMAGEM_TESTE,500,400);
        sprite = new Sprite(spritesheet,16,16,0,0);
        sprite2 = new Sprite(spritesheet,16,16,0,0);
        spriteGroup = new SpriteGroup('teste', [sprite, sprite2]);

        animacao = new Animacao('testanim', spriteGroup, 1, 40);
        animacaoDefault = new Animacao('testanim2', spriteGroup);

        gs = new GerenciadorSprite();
        gs.adicionarSpriteGroup(spriteGroup);
        gs.adicionarSpritesheet(spritesheet);
        gc = new GerenciadorCena([new Cena('teste')]);
        ga = new GerenciadorAnimacao(gs);
    });

    it('deve ser criado', () => {
        expect(ga).toBeTruthy();
    })

    it('criar() deve emitir um evento de `novaAnimacao`', () => {
        let tratarEvento = (e) => console.log(e);
        tratarEvento = jasmine.createSpy().and.callThrough();
        document.addEventListener('novaAnimacao', tratarEvento);

        ga.criar('juju', 'teste');
        expect(tratarEvento).toHaveBeenCalled();
    });

   /* it('criar() deve retornar uma Animacao', () => {

    });*/

   /* it('ao inicializar sem o parâmetro `spriteGroup`, deve lançar um erro', () => {
        expect(() => animacaoErr = new Animacao('tst'))
            .toThrow(Error('Animacao deve ter o parâmetro `spriteGroup` preenchido'));
    });*/
});