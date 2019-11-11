import Spritesheet from './animacao/Spritesheet.js';
import Personagem from './Personagem.js'
import GerenciadorAnimacao from './animacao/GerenciadorAnimacao.js';
import GerenciadorCena from './GerenciadorCena.js';
import Cenario from './Cenario.js';
import GameView from './GameView.js';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

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
