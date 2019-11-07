import Spritesheet from '../animacao/Spritesheet.js';
import Sprite from '../animacao/Sprite.js';

describe('Spritesheet', () =>{
    let spritesheet;
    beforeEach(() => {
        spritesheet = new Spritesheet(800,600,new Image());
    });

    it('deve ser criado', () => {
        expect(spritesheet).toBeTruthy();
    });

    it('ao inicializar, deve ter todos os parâmetros preenchidos', () => {
        expect(spritesheet.largura).toBeTruthy();
        expect(spritesheet.altura).toBeTruthy();
        expect(spritesheet.imagem).toBeTruthy();
    });

    it('se algum parâmetro não for preenchido, deve lançar um erro', () => {
        let newSpritesheet;
        expect(() => newSpritesheet = new Spritesheet(500)).toThrow(Error('Todos os parâmetros de Spritesheet devem ser preenchidos'))
    })

    it('criarSprites() deve retornar um array de sprites configurados', () => {
        const sprites = spritesheet.criarSprites(0,0,32,32,5);
        expect(sprites instanceof Array).toBeTruthy();
        expect(sprites.length).toBe(5);

        sprites.map(sprite => {
            expect(sprite.altura).toBe(32);
            expect(sprite.largura).toBe(32);
        });
    });
});