export default class CollisionResolver {
    constructor(){}

    processarElastica(jogador, entidade) {
        let meioJogadorX = jogador.getMeioX();
        let meioJogadorY = jogador.getMeioY();
        let meioEntidadeY = entidade.getMeioY();
        let meioEntidadeX = entidade.getMeioX();

        let dX = (meioEntidadeX - meioJogadorX) / entidade.meiaLargura;
        let dY = (meioEntidadeY - meioJogadorY) / entidade.meiaAltura;
        
        let dXAbsoluto = abs(dX);
        let dYAbsoluto = abs(dY);

        if(abs(dXAbsoluto - dYAbsoluto) < .1) {
            if (dX < 0) {
                jogador.x = entidade.getDireita();
            }
            else {
                jogador.x = entidade.getEsquerda() - jogador.largura;
            }
            if (dY < 0) {
                jogador.y = entidade.getBase();
            }
            else {
                jogador.y = entidade.getTopo() - jogador.altura;
            }
        }
        
        if (Math.random() < .5) {
            jogador.vX = -jogador.vX * entidade.restituicao;
        }




    }

    processarNaoElastica(jogador, entidade) {

    }
}