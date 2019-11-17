import Spritesheet from './Spritesheet.js'
import Sprite from './Sprite.js';
import SpriteGroup from './SpriteGroup.js';

export default class GerenciadorSprite {
    /**@type {Spritesheet[]} */
    spritesheets = [];
    /**@type {SpriteGroup[]} */
    spriteGroups = [];

    constructor() {}

    /**
     * Cria um objeto de Spritesheet
     * @param {string} id 
     * @param {string} urlImagem 
     * @param {number} largura 
     * @param {number} altura 
     * @returns {Spritesheet} spritesheet
     */
    criarSpritesheet(id, urlImagem, largura=undefined, altura=undefined) {
        if (!id) {
            throw new Error('Parâmetro `id` é obrigatório em criarSpritesheet()');
        }
        if (!urlImagem) {
            throw new Error('Parâmetro `urlImagem` é obrigatório em criarSpritesheet()');
        }
        if(this.spritesheetExiste(id)) {
            throw new Error(`Já existe uma Spritesheet com o id: ${id}`);
        }

        const spritesheet = new Spritesheet(id, urlImagem, largura, altura);
        this.adicionarSpritesheet(spritesheet);
        return spritesheet;
    }
    /**
     * Adiciona um SpriteGroup na array 'spriteGroups' do GerenciadorSprite 
     * @param {SpriteGroup} spriteGroup 
     */
    adicionarSpriteGroup(spriteGroup) {
        if(!spriteGroup) {
            throw new Error('Parâmetro `spriteGroup` não fornecido para adicionarSpriteGroup()')
        }
        this.spriteGroups.push(spriteGroup);
    }

    /**
     * Adiciona um Spritesheet na array 'spritesheets' do GerenciadorSprite 
     * @param {Spritesheet} spritesheet 
     */
    adicionarSpritesheet(spritesheet) {
        if(!spritesheet) {
            throw new Error('Parâmetro `spritesheet` não fornecido para adicionarSpritesheet()')
        }
        this.spritesheets.push(spritesheet);
    }

    /**
     * Procura por um SpriteGroup na array 'spritegroups' a partir do seu id. Se encontrar,
     * retornará o SpriteGroup, senão, lançará um erro.
     * @param {string} id 
     * @throws {Error} 'SpriteGroup não encontrado'
     */
    pegarSpriteGroupPorId(id) {
        const spriteGroupEncontrado = this.spriteGroups.find((sprGrp => sprGrp.id == id));
        if(!spriteGroupEncontrado) {
            throw new Error('SpriteGroup não encontrado');
        } else {
            return spriteGroupEncontrado;
        }
    }

    /**
     * Procura por uma Spritesheet na array 'spritesheets' a partir do seu id. Se encontrar,
     * retornará o Spritesheet, senão, lançará um erro.
     * @param {string} id 
     * @throws {Error} 'SpriteGroup não encontrado'
     */
    pegarSpritesheetPorId(id) {
        const spritesheetEncontrada = this.spritesheets.find((sprsheet => sprsheet.id == id));
        if (!spritesheetEncontrada) {
            throw new Error('Spritesheet não encontrada');
        } else {
            return spritesheetEncontrada;
        }
    }

    /**
     * Verifica se um determinado SpriteGroup existe na array 'spriteGroups' a partir de seu id.
     * Se existir, retorna true, senão, retorna false.
     * @param {*} id 
     */
    spriteGroupExiste(id) {
        try {
            this.pegarSpriteGroupPorId(id);
            return true;
        }
        catch(err) {
            return false;
        }
    }

    /**
     * Verifica se uma determinada Spritesheet existe na array 'spritesheets' a partir de seu id.
     * Se existir, retorna true, senão, retorna false.
     * @param {*} id 
     */
    spritesheetExiste(id) {
        try {
            this.pegarSpritesheetPorId(id);
            return true;
        }
        catch(err) {
            return false;
        }
    }

    /**
     * Cria um objeto de SpriteGroup
     * @param {string} id 
     * @param {{inicioX, inicioY, largura, altura}} spriteConfig 
     * @param {number} qtdSprites
     * @returns {SpriteGroup} spritegroup
     */
    criarSpriteGroup(id, idSpritesheet, spriteConfig, qtdSprites) {
        let {inicioX, inicioY, largura, altura} = spriteConfig;
        inicioX = inicioX == undefined ? 0 : inicioX;
        inicioY = inicioY == undefined ? 0 : inicioY;

        if(!largura) {
            throw new Error('criarSpriteGroup() deve ter a propriedade `largura` do parâmetro `spriteConfig` preenchida');
        }
        if(!altura) {
            throw new Error('criarSpriteGroup() deve ter a propriedade `altura` do parâmetro `spriteConfig` preenchida');
        }
        if(!qtdSprites) {
            throw new Error('criarSpriteGroup() deve ter o parâmetro `qtdSprites` preenchido');
        }

        if(this.spriteGroupExiste(id)) {
            throw new Error(`Já existe um SpriteGroup com o id: ${id}`);
        }


        let spriteGroup = new SpriteGroup(id);

        for(let i=0; i < qtdSprites; i++) {
            let sprite = new Sprite(this.pegarSpritesheetPorId(idSpritesheet),largura,altura,(inicioX+(largura*i)),inicioY);
            spriteGroup.sprites.push(sprite);
        }

        this.adicionarSpriteGroup(spriteGroup);
        return spriteGroup;
    }

    removerSpriteGroup(id) {
        if(this.spriteGroupExiste(id)) {
            const spriteGroup = this.pegarSpriteGroupPorId(id);
            const spriteGroupIdx = this.spriteGroups.findIndex(spriteGroup => spriteGroup.id == id)
            this.spriteGroups.splice(spriteGroupIdx,1);
        }
        else {
            throw Error ('SpriteGroup não existe')
        }
    }

    removerSpritesheet(id) {
        if(this.spritesheetExiste(id)) {
            const spritesheet = this.pegarSpritesheetPorId(id);
            const spritesheetIdx = this.spritesheets.findIndex(spritesheet => spritesheet.id == id)
            this.spritesheets.splice(spritesheetIdx,1);
        }
        else {
            throw Error ('Spritesheet não existe')
        }
    }
}