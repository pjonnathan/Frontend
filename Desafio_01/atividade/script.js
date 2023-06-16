// Definição das constantes
const WIDTH = 800; // Largura do canvas
const HEIGHT = 600; // Altura do canvas
const TILE_SIZE = 32; // Tamanho do tile
const FPS = 60; // Frames por segundo

// Inicialização do canvas

const canvas = document.createElement('canvas');
canvas.width = WIDTH;
canvas.height = HEIGHT;
document.body.appendChild(canvas);
const context = canvas.getContext('2d');

// Definição da classe Tilemap
class Tilemap {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.layers = []; // Armazena as camadas do tilemap

    // Cria as camadas do tilemap
    for (let i = 0; i < 2; i++) {
      const layer = [];

      // Preenche a camada com tiles vazios
      for (let y = 0; y < height; y++) {
        const row = [];
        for (let x = 0; x < width; x++) {
          row.push(0);
        }
        layer.push(row);
      }

      this.layers.push(layer);
    }
  }

  // Função para renderizar o tilemap
  render() {
    for (let layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
      const layer = this.layers[layerIndex];

      for (let y = 0; y < this.height; y++) {
        for (let x = 0; x < this.width; x++) {
          const tileId = layer[y][x];

          // Renderiza o tile apenas se ele não for vazio
          if (tileId !== 0) {
            context.fillStyle = '#000'; // Cor do tile
            context.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
          }
        }
      }
    }
  }
}

// Definição da classe Player
class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 2; // Velocidade do jogador
    this.score = 0; // Pontuação do jogador
  }

  // Função para movimentar o jogador
  move(dx, dy) {
    this.x += dx * this.speed;
    this.y += dy * this.speed;
  }

  // Função para renderizar o jogador
  render() {
    context.fillStyle = '#f000'; // Cor do jogador
    context.fillRect(this.x, this.y, TILE_SIZE, TILE_SIZE);
  }
}

// Inicialização do tilemap
const tilemap = new Tilemap(WIDTH / TILE_SIZE, HEIGHT / TILE_SIZE);
tilemap.layers[0][0][0] = 1; // Define um tile na posição (0, 0) da camada 0
tilemap.layers[1][1][1] = 1; // Define um tile na posição (1, 1) da camada 1

// Inicialização do jogador
const player = new Player(0, 0);

// Função para atualizar o jogo a cada frame
function update() {
  // Limpa o canvas
  context.clearRect(0, 0, WIDTH, HEIGHT);

}
