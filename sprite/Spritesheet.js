export default class Spritesheet {
    /**
     * Cria um objeto de Spritesheet
     * @param {number} id
     * @param {string} urlImagem 
     * @param {number} largura 
     * @param {number} altura 
     */
    constructor(id, urlImagem, largura = undefined, altura = undefined) {
        if (!id) {
            throw new Error('Spritesheet deve ter o parâmetro `id` preenchido');
        }
        if (!urlImagem) {
            throw new Error('Spritesheet deve ter o parâmetro `urlImagem` preenchido');
        }
        this.id = id;
        this.imagem = new Image();
        this.imagem.src = urlImagem;

        this.imagemExiste(this.imagem, (existe) => {
            if(!existe) {
                throw new Error('Imagem para Spritesheet não encontrada na url '+ '"' + urlImagem+ '"' +' . Verifique o argumento passado pelo parâmetro `urlImagem`');
            }
        });

        this.altura = altura == undefined ? this.imagem.naturalHeight : altura;
        this.largura = largura == undefined ? this.imagem.naturalWidth : largura;
    }

    /**
     * Verifica se elemento de imagem criado realmente existe
     * @param {HTMLImageElement} imagem
     * @param {funtion} callback
     */
    imagemExiste(imagem, callback) {
        imagem.onload = () => callback(true)
        imagem.onerror = () => callback(false)
    }
}
