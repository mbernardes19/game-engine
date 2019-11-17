import SpriteGroup from "../sprite/SpriteGroup.js";

export default class Animacao {
    /**
     * Cria um objeto de Animação
     * @param {string} id 
     * @param {SpriteGroup} spriteGroup 
     * @param {number} duracao 
     * @param {number} fps 
     */
    constructor(id, spriteGroup, duracao=5, fps=30) {
        if (!id) {
            throw new Error('Animacao deve ter o parâmetro `id` preenchido');
        }
        if (!spriteGroup) {
            throw new Error('Animacao deve ter o parâmetro `spriteGroup` preenchido');
        }
        this.id = id;
        this.spriteGroup = spriteGroup;
        this.duracao = duracao;
        this.fps = fps;
    }
/*
    renderizar() {
        let i = 0;
        let comeco = Date.now();
        
        const loop = setInterval(() => {
            const tempo = Date.now();
            if (this.duracao !== 0) {
                if (tempo >= comeco+this.duracao*1000) {
                    clearInterval(loop);
                }
            }
            
            this.canvasCtx.clearRect(0,0, window.innerWidth, window.innerHeight);     
            this.canvasCtx.drawImage(
                this.sprites[i].spritesheet.imagem,
                this.sprites[i].inicioX,
                this.sprites[i].inicioY,
                this.sprites[i].largura,
                this.sprites[i].altura,
                0,
                0,
                this.sprites[i].largura,
                this.sprites[i].altura,
                ); 

                i++;
                i = i % this.sprites.length;

            this.duracao === 0 && !this.sprites[i] ? i = 0 : null;
            !this.sprites[i] ? clearInterval(loop) : null;

        } , (this.fps*1000));
    }
*/
}
