export default class Animacao {

    constructor(sprites, qtdSprites=0, duracao=5, fps=1/30, canvasCtx=new CanvasRenderingContext2D()) {
        this.sprites = sprites;
        this.qtdSprites = qtdSprites;
        this.duracao = duracao;
        this.fps = 1/fps;
        this.canvasCtx = canvasCtx;
    }

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


}
