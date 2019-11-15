import Sprite from "./Sprite.js";

export default class SpriteGroup {
    /**
     * Cria um agrupamento de sprites
     * @param {string} id 
     * @param {Sprite[]} sprites 
     */
    constructor(id, sprites=[]){
        if(!id) {
            throw new Error('SpriteGroup deve ter o parâmetro `id` preenchido');
        }
        this.id = id;
        this.sprites = sprites;
    }
}