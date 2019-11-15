import Animacao from "./Animacao.js";
import Objeto from "../Objeto.js";

export default class ObjetoAnimacao {
    /**
     * 
     * @param {Objeto} objeto 
     * @param {Animacao} animacao 
     */
    constructor(objeto, animacao) {
        this.objeto = objeto;
        this.animacao = animacao;
    }
}