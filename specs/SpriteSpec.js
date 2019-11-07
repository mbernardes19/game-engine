import Animacao from "../animacao/Animacao.js";
import Sprite from "../animacao/Sprite.js";
import Spritesheet from "../animacao/Spritesheet.js";

describe('Sprite', () =>{
    let spritesheet;
    let spriteDefault;
    let sprite;
    let spriteNoParameter;

    beforeEach(() => {
        spritesheet = new Spritesheet(500,400,new Image());
        spriteDefault = new Sprite(spritesheet);
        sprite = new Sprite(spritesheet,16,16,0,0);
    });

    it('deve ser criado', () => {
        expect(spriteDefault).toBeTruthy();
        expect(sprite).toBeTruthy();
    })
    it('ao inicializar, deve ter todos os parâmetros obrigatórios preenchidos', () => {
        expect(spriteDefault.spritesheet).toBeTruthy();
        expect(spriteDefault.largura).toBeTruthy();
        expect(spriteDefault.altura).toBeTruthy();
        expect(sprite.spritesheet).toBeTruthy();
        expect(sprite.largura).toBeTruthy();
        expect(sprite.altura).toBeTruthy();
    });

    it('ao inicializar somente com parâmetro de stylesheet, as demais propriedades devem assumir valores padrões', () => {
        expect(spriteDefault.largura).toBe(32);
        expect(spriteDefault.altura).toBe(32);
        expect(spriteDefault.inicioX).toBe(0);
        expect(spriteDefault.inicioY).toBe(0);
    });

    it('ao inicializar somente com todos os parâmetros, as demais propriedades devem assumir esses valores', () => {
        expect(sprite.largura).toBe(16);
        expect(sprite.altura).toBe(16);
        expect(sprite.inicioX).toBe(0);
        expect(sprite.inicioY).toBe(0);
    });

    it('ao inicializar sem nenhum parâmetro, deve lançar um erro', () => {
        expect(() => spriteNoParameter = new Sprite()).toThrow(Error('Sprite deve pelo menos o stylesheet preenchido nos parâmetros `Sprite(stylesheet)`'));
    });
});