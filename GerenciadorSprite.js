import Spritesheet from './Spritesheet.js'
import Sprite from './Sprite.js';
import SpriteGroup from './SpriteGroup.js';

export default class GerenciadorSprite {
    /**@type {Spritesheet[]} */
    spritesheets = [];
    /**@type {SpriteGroup[]} */
    spriteGroups = [];

    constructor() {}

    criarSpritesheet(id, urlImagem, largura=undefined, altura=undefined) {
        if (!id) {
            throw new Error('Parâmetro `id` é obrigatório em criarSpritesheet()');
        }
        if (!urlImagem) {
            throw new Error('Parâmetro `urlImagem` é obrigatório em criarSpritesheet()');
        }
        const spritesheet = new Spritesheet(id, urlImagem, largura, altura);
        this.adicionarSpritesheet(spritesheet);
        return spritesheet;
    }

    adicionarSpriteGroup(spriteGroup) {
        if(!spriteGroup) {
            throw new Error('Parâmetro `spriteGroup` não fornecido para adicionarSpriteGroup()')
        }
        this.spriteGroups.push(spriteGroup);
    }

    adicionarSpritesheet(spritesheet) {
        if(!spritesheet) {
            throw new Error('Parâmetro `spritesheet` não fornecido para adicionarSpritesheet()')
        }
        this.spritesheets.push(spritesheet);
    }

    pegarSpriteGroupPorId(id) {
        return this.spriteGroups.find((sprGrp => sprGrp.id == id));
    }

    pegarSpritesheetPorId(id) {
        return this.spritesheets.find((sprsheet => sprsheet.id == id));
    }

    /**
     * @param {string} id 
     * @param {{inicioX, inicioY, largura, altura}} spriteConfig 
     * @param {number} qtdSprites
     */
    criarSpriteGroup(id, idSpritesheet, spriteConfig, qtdSprites) {
        const {inicioX, inicioY, largura, altura} = spriteConfig;
        let spriteGroup = new SpriteGroup(id);

        for(let i=0; i < qtdSprites; i++) {
            let sprite = new Sprite(this.pegarSpritesheetPorId(idSpritesheet),largura,altura,(inicioX+(largura*i)),inicioY);
            spriteGroup.sprites.push(sprite);
        }

        this.adicionarSpriteGroup(spriteGroup);
        return spriteGroup;
    }
}