import Spritesheet from './animacao/Spritesheet.js';
import Personagem from './Personagem.js'
import GerenciadorAnimacao from './animacao/GerenciadorAnimacao.js';
import GerenciadorCena from './GerenciadorCena.js';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Criar um gerenciador de cena e uma cena com um objeto

const gerenciadorCenas = new GerenciadorCena(ctx);
const fase1 = gerenciadorCenas.criar('fase01',[]);
fase1.adicionarObjetos(new Personagem('mario'));

// Um gerenciador de animação só pode pegar objetos pertencentes à cena atual

// Criar um personagem com uma animação de um spritesheet
const spritesheet = new Spritesheet(320,300,'./spritesheets/images.png');
const spritesAndar = spritesheet.criarSprites(12,30,16,31,3);

const gerenciadorAnimacoes = new GerenciadorAnimacao(ctx, gerenciadorCenas);
gerenciadorAnimacoes.criar('mario-andar', spritesAndar, 'mario');
gerenciadorAnimacoes.reproduzir('mario-andar');
