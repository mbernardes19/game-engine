export default class CollisionDetector {
    constructor(){}

    colidirRet(colisor, colidido) {
        let esq1 = colisor.getEsquerda();
        let top1 = colisor.getTopo();
        let dir1 = colisor.getDireita();
        let bas1 = colisor.getBase();
        
        let esq2 = colidido.getEsquerda();
        let top2 = colidido.getTopo();
        let dir2 = colidido.getDireita();
        let bas2 = colidido.getBase();
        
        if (bas1 < top2 || top1 > bas2 || dir1 < esq2 || esq1 > dir2) {
            return false;
        }
        
        return true;
        }
}