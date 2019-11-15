/* eslint-disable no-undef */
import Animacao from "../animacao/Animacao.js";
import Sprite from "../Sprite.js";
import Spritesheet from "../Spritesheet.js";
import SpriteGroup from "../SpriteGroup.js";
import { URL_IMAGEM_TESTE } from "./constantes.js";

describe('SpriteGroup', () =>{
    let spriteGroup;
    let spriteGroupDefault;
    let spritesheet;
    let spriteGroupNoId;
    let sprite;
    let sprite2;

    beforeEach(() => {
        spritesheet = new Spritesheet('teste',URL_IMAGEM_TESTE,500,400);
        sprite = new Sprite(spritesheet,16,16,0,0);
        sprite2 = new Sprite(spritesheet,16,16,0,0);
        spriteGroup = new SpriteGroup('teste', [sprite, sprite2]);
        spriteGroupDefault = new SpriteGroup('teste');
    });

    it('deve ser criado', () => {
        expect(spriteGroup).toBeTruthy();
        expect(spriteGroupDefault).toBeTruthy();
    })

    it('se ao inicializar, a array de sprites não for preenchida, deve setar uma array vazia', () => {
        expect(spriteGroupDefault.sprites).toBeTruthy();
        expect(spriteGroupDefault.sprites.length).toBe(0);
    });

    it('se ao inicializar não for passado um parâmetro de id, deve lançar um erro', () => {
        expect(() => spriteGroupNoId = new SpriteGroup()).toThrow(Error('SpriteGroup deve ter o parâmetro `id` preenchido'));
    });
});