import Spritesheet from './animacao/Spritesheet.js'
import Sprite from './animacao/Sprite.js';
import SpriteGroup from './animacao/SpriteGroup.js';

export default class GerenciadorSprite {
    /**@type {Spritesheet} */
    spritesheet;
    /**@type {SpriteGroup[]} */
    spriteGroups;

    /**
     * 
     * @param {Spritesheet} spritesheet 
     */
    constructor(spritesheet) {
        this.spritesheet = spritesheet;
    }

    adicionarSpriteGroup(spriteGroup) {
        this.spriteGroups.push(spriteGroup);
    }

    pegarSpriteGroupPorId(id) {
        return this.spriteGroups.find((sprGrp => sprGrp.id == id));
    }

    /**
     * @param {string} id 
     * @param {{inicioX, inicioY, largura, altura}} spriteConfig 
     * @param {number} qtdSprites
     */
    criarSpriteGroup(id, spriteConfig, qtdSprites) {
        const {inicioX, inicioY, largura, altura} = spriteConfig;
        let spriteGroup = new SpriteGroup(id);

        for(let i=0; i < qtdSprites; i++) {
            let sprite = new Sprite(this.spritesheet,largura,altura,(inicioX+(larguraSprite*i)),inicioY);
            spriteGroup.sprites.push(sprite);
        }

        this.adicionarSpriteGroup(spriteGroup);
        return spriteGroup;
    }
}