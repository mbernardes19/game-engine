/* eslint-disable no-undef */
import Animacao from "../animacao/Animacao.js";
import Sprite from "../Sprite.js";
import Spritesheet from "../Spritesheet.js";
import SpriteGroup from "../SpriteGroup.js";
import { URL_IMAGEM_TESTE } from "./constantes.js";

describe('Animacao', () =>{
    let spritesheet
    let sprite;
    let sprite2;
    let spriteGroup;
    let animacao;
    let animacaoDefault;
    let animacaoErr;

    beforeEach(() => {
        spritesheet = new Spritesheet('teste', URL_IMAGEM_TESTE,500,400);
        sprite = new Sprite(spritesheet,16,16,0,0);
        sprite2 = new Sprite(spritesheet,16,16,0,0);
        spriteGroup = new SpriteGroup('teste', [sprite, sprite2]);

        animacao = new Animacao('testanim', spriteGroup, 1, 40);
        animacaoDefault = new Animacao('testanim2', spriteGroup);
    });

    it('deve ser criado', () => {
        expect(animacao).toBeTruthy();
        expect(animacaoDefault).toBeTruthy();
    })

    it('ao inicializar sem preencher parâmetros opcionais, deve ser preenchido com valores default', () => {
        expect(animacaoDefault.id).toBe('testanim2');
        expect(animacaoDefault.spriteGroup).toEqual(spriteGroup);
        expect(animacaoDefault.duracao).toBe(5);
        expect(animacaoDefault.fps).toBe(30);
    });

    it('ao inicializar com parâmetros, deve ser preenchido com esses valores', () => {
        expect(animacao.id).toBe('testanim');
        expect(animacao.spriteGroup).toEqual(spriteGroup);
        expect(animacao.duracao).toBe(1);
        expect(animacao.fps).toBe(40);
    });

    it('ao inicializar sem parâmetros, deve lançar um erro', () => {
        expect(() => animacaoErr = new Animacao())
            .toThrow(Error('Animacao deve ter o parâmetro `id` preenchido'));
    });

    it('ao inicializar sem o parâmetro `spriteGroup`, deve lançar um erro', () => {
        expect(() => animacaoErr = new Animacao('tst'))
            .toThrow(Error('Animacao deve ter o parâmetro `spriteGroup` preenchido'));
    });
});