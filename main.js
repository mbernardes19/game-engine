import Spritesheet from './sprite/Spritesheet.js';
import Personagem from './cena/Personagem.js'
import GerenciadorAnimacao from './animacao/GerenciadorAnimacao.js';
import GerenciadorCena from './cena/GerenciadorCena.js';
import Cenario from './cenario/Cenario.js';
import GameView from './GameView.js';
import Game from './Game.js';

// Setar contexto 2d do canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Criar jogo com o contexto do canvas
const game = new Game(ctx);

// Criar Palco
    // Criar cena
    game.gerenciadorCenas.criarCena('lvl1');
    
    // Criar objetos da cena

    // Criar cenário da cena

// Criar Animação
    // Criar spritesheet

    // Criar spriteGroup

    // Criar animação

// Reproduzir animação no objeto
// game.view.reproduzirAnimacao()






/*
let db;
let request = indexedDB.open("TestDB");

request.onerror = (ev) => console.log('deu ruim');
request.onsuccess = (ev) => {
    console.log('foi');
    db = ev.target.result;
    console.log(db)
}

let pessoas = [{nomeMeu: 'José'}, {nomeMeu: 'Ricardo'}, {nomeMeu: 'Maria'}];

request.onupgradeneeded = (ev) => {
    let db = ev.target.result;
    let objStore = db.createObjectStore('nome',{keyPath: 'nomeMeu'});
    objStore.transaction.oncomplete = (ev) => {
        let pessoasObjStore = db.transaction('nome', 'readwrite').objectStore('nome');
        pessoas.forEach(pessoa => {
            pessoasObjStore.add(pessoa);
        });
        console.log(db);
    }
}

    let req = indexedDB.open("TestDB");
    req.onsuccess = (ev) => {
        let db = ev.target.result;
        let transaction = db.transaction(['nome']);
        let objStore = transaction.objectStore('nome');
        let req = objStore.get('José');
    
        req.onerror = (ev) => console.log('não foi');
        req.onsuccess = (ev) => {
            document.writeln(req.result.nomeMeu)
        }
    }
*/

/*
let request = indexedDB.deleteDatabase("TestDB");
request.onsuccess = (ev) => console.log('foi')
*/


/*
// Criar um gerenciador de cena e uma cena com um objeto

// Cria gerenciadores
const gerenciadorCenas = new GerenciadorCena(ctx);
const gerenciadorAnimacoes = new GerenciadorAnimacao(ctx, gerenciadorCenas);
const fase1 = gerenciadorCenas.criarCena('fase01',[]);
fase1.adicionarObjetos(new Personagem('mario',0,0,16,31));
fase1.mudarCenario(new Cenario('fase1','./images.png'));

// Um gerenciador de animação só pode pegar objetos pertencentes à cena atual

// Criar um personagem com uma animação de um spritesheet
const spritesheet = new Spritesheet(320,300,'./spritesheets/images.png');
const spritesAndar = spritesheet.criarSprites(12,30,16,31,3);

gerenciadorAnimacoes.criar('mario-andar', spritesAndar, 'mario');

const gameView = new GameView(ctx, gerenciadorCenas, gerenciadorAnimacoes);
gameView.renderizar();
*/