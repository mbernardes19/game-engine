import Spritesheet from "./Spritesheet.js";
export default class Sprite {
  /**
   * Cria um objeto de Sprite
   * @param {Spritesheet} spritesheet 
   * @param {number} largura 
   * @param {number} altura 
   * @param {number} inicioX 
   * @param {number} inicioY 
   */
  constructor(spritesheet,largura = 32,altura = 32,inicioX = 0,inicioY = 0) {
      if (!spritesheet) {
        throw new Error('Sprite deve ter o parâmetro `spritesheet` preenchido');
      }
      this.spritesheet = spritesheet;
      this.largura = largura;
      this.altura = altura;
      this.inicioX = inicioX;
      this.inicioY = inicioY;
    }
}
