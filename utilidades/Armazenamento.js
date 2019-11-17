export default class Armazenamento {
    constructor() {}

    guardar(id, item) {
        const itemString = JSON.stringify(item);
        localStorage.setItem(id, itemString);
    }

    pegar(id) {
        return JSON.parse(localStorage.getItem(id));
    }

    deletar(id) {
        localStorage.removeItem(id);
    }

    limpar() {
        localStorage.clear();
    }
}