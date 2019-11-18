export default class Tile {
    tamanho;
    sprite;
    constructor(tamanho=32, sprite=undefined) {
        this.tamanho = tamanho;
        this.sprite = sprite;
    }
}