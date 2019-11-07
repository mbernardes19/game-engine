import Spritesheet from './Spritesheet.js';
import Animacao from './Animacao.js';

// Cria Canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Importa imagem para spritesheet
const spritesheetImagem = new Image();
spritesheetImagem.src="./../spritesheet/spritesheet.png";

// Cria spritesheet
const spritesheet = new Spritesheet(1233, 68, spritesheetImagem);

// Define sprites de animação de andar
const spritesAndar = spritesheet.criarSprites(938,0,43,48,2);

// Cria animação de andar
const animacaoAndar = new Animacao(spritesAndar,spritesAndar.length,2,5,ctx);

// Renderiza animação
animacaoAndar.renderizar();
