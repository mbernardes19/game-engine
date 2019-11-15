/* eslint-disable no-undef */
import Spritesheet from '../Spritesheet.js';
import Sprite from '../Sprite.js';
import { URL_IMAGEM_TESTE } from "./constantes.js";


describe('Spritesheet', () =>{
    /**@type {Spritesheet} */
    let spritesheet;
    let spritesheet2;
    let newSpritesheet;
    beforeEach(() => {
        spritesheet = new Spritesheet('teste',URL_IMAGEM_TESTE,800,600);
        spritesheet2 = new Spritesheet('teste',URL_IMAGEM_TESTE);
    });

    it('deve ser criado', () => {
        expect(spritesheet).toBeTruthy();
    });

    it('ao inicializar, deve sempre ter o parâmetro imagemUrl preenchido', () => {
        expect(spritesheet.imagem).toBeTruthy();
    });

    it('ao inicializar, se largura ou altura não forem preenchidos, deve assumir a largura e altura da imagem', () => {
        expect(spritesheet2.largura).toBe(spritesheet2.imagem.naturalWidth);
        expect(spritesheet2.altura).toBe(spritesheet2.imagem.naturalHeight);
    });

    it('se id não for preenchido, deve lançar um erro', () => {
        expect(() => newSpritesheet = new Spritesheet()).toThrow(Error('Spritesheet deve ter o parâmetro `id` preenchido'))
    });

    it('se imagemUrl não for preenchido, deve lançar um erro', () => {
        expect(() => newSpritesheet = new Spritesheet('teste')).toThrow(Error('Spritesheet deve ter o parâmetro `urlImagem` preenchido'))
    });
});