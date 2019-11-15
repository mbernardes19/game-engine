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


describe('GerenciadorSprite', () =>{
    let spritesheet
    let sprite;
    let sprite2;
    let spriteGroup;
    let animacao;
    let animacaoDefault;
    let animacaoErr;
    /**@type {GerenciadorSprite}  */
    let gs;

    beforeEach(() => {
        spritesheet = new Spritesheet('teste',URL_IMAGEM_TESTE,500,400);
        sprite = new Sprite(spritesheet,16,16,0,0);
        sprite2 = new Sprite(spritesheet,16,16,0,0);
        spriteGroup = new SpriteGroup('teste', [sprite, sprite2]);

        animacao = new Animacao('testanim', spriteGroup, 1, 40);
        animacaoDefault = new Animacao('testanim2', spriteGroup);

        gs = new GerenciadorSprite();
        gs.adicionarSpriteGroup(spriteGroup);
        gs.adicionarSpritesheet(spritesheet);

        // gc = new GerenciadorCena([new Cena('teste')]);
        // ga = new GerenciadorAnimacao(gs);
    });

    it('deve ser criado', () => {
        expect(gs).toBeTruthy();
    })

    it('Se todos os parâmetros forem preenchidos, criarSpritesheet() deve retornar uma nova Spritesheet como todos os valores', () => {
        const spritesheet = gs.criarSpritesheet('teste', URL_IMAGEM_TESTE, 800, 600);
        expect(spritesheet instanceof Spritesheet).toBe(true);
        expect(spritesheet.id).toBe('teste');
        expect(spritesheet.imagem.src).toBe(URL_IMAGEM_TESTE);
        expect(spritesheet.altura).toBe(600);
        expect(spritesheet.largura).toBe(800);
    });

    it('Se somente os parâmetros obrigatórios forem preenchidos, criarSpritesheet() deve retornar uma nova Spritesheet com valores default', () => {
        const spritesheet = gs.criarSpritesheet('teste', URL_IMAGEM_TESTE)
        expect(spritesheet instanceof Spritesheet).toBe(true);
        expect(spritesheet.id).toBe('teste');
        expect(spritesheet.imagem.src).toBe(URL_IMAGEM_TESTE);
        expect(spritesheet.altura).toBe(spritesheet.imagem.naturalHeight);
        expect(spritesheet.largura).toBe(spritesheet.imagem.naturalWidth);
    });

    it('criarSpritesheet() deve inserir uma nova Spritesheet na array de spritesheets', () => {
        gs.criarSpritesheet('teste', URL_IMAGEM_TESTE);
        expect(gs.spritesheets[0] instanceof Spritesheet).toBe(true);
        expect(gs.spritesheets.length).toBeGreaterThan(0);
    });

    it('criarSpritesheet() deve lançar erro se parâmetro `id` não for preenchido', () => {
        expect(() => gs.criarSpritesheet())
            .toThrow(Error('Parâmetro `id` é obrigatório em criarSpritesheet()'));
    });

    it('criarSpritesheet() deve lançar erro se parâmetro `urlImagem` não for preenchido', () => {
        expect(() => gs.criarSpritesheet('teste'))
            .toThrow(Error('Parâmetro `urlImagem` é obrigatório em criarSpritesheet()'));
    });

    it('adicionarSpriteGroup() deve inserir um novo SpriteGroup na array de spritegroups', () => {
        const spriteGroup = new SpriteGroup('teste');
        gs.adicionarSpriteGroup(spriteGroup);
        expect(gs.spriteGroups.length).toBeGreaterThan(0);
    });

    it('adicionarSpriteGroup() deve lançar erro se parâmetro `spriteGroup` não for preenchido', () => {
        expect(() => gs.adicionarSpriteGroup())
            .toThrow(Error('Parâmetro `spriteGroup` não fornecido para adicionarSpriteGroup()'));
    });

    it('adicionarSpritesheet() deve inserir um novo Spritesheet na array de spritesheets', () => {
        const spritesheet = new Spritesheet('teste', URL_IMAGEM_TESTE);
        gs.adicionarSpritesheet(spritesheet);
        expect(gs.spritesheets.length).toBeGreaterThan(0);
    });

    it('adicionarSpritesheet() deve lançar erro se parâmetro `spriteGroup` não for preenchido', () => {
        expect(() => gs.adicionarSpritesheet())
            .toThrow(Error('Parâmetro `spritesheet` não fornecido para adicionarSpritesheet()'));
    });

    it('criarSpriteGroup() deve retornar um novo SpriteGroup com todos os valores dos parâmetros', () => {
        const spriteGroup = gs.criarSpriteGroup('teste', 'teste', {inicioX: 0, inicioY: 0, largura: 50, altura: 50}, 3);
        const sprite1 = new Sprite(gs.pegarSpritesheetPorId('teste'),50,50,0,0);
        const sprite2 = new Sprite(gs.pegarSpritesheetPorId('teste'),50,50,50,0);
        const sprite3 = new Sprite(gs.pegarSpritesheetPorId('teste'),50,50,100,0);
        const sprites = [sprite1, sprite2, sprite3];

        gs.criarSpriteGroup('teste', 'teste');
        expect(spriteGroup instanceof SpriteGroup).toBe(true);
        expect(spriteGroup.id).toBe('teste');
        expect(spriteGroup.sprites).toEqual(sprites);
    });

});