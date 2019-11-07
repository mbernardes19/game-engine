export default class Sprite {
  
  constructor(
    spritesheet,
    largura = 32,
    altura = 32,
    inicioX = 0,
    inicioY = 0,
  ) {
      if (!spritesheet) {
        console.error('Sprite deve pelo menos o stylesheet preenchido nos parâmetros `Sprite(stylesheet)`');
        throw new Error('Sprite deve pelo menos o stylesheet preenchido nos parâmetros `Sprite(stylesheet)`');
      }
      this.spritesheet = spritesheet;
      this.largura = largura;
      this.altura = altura;
      this.inicioX = inicioX;
      this.inicioY = inicioY;
    }
}
