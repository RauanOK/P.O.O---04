let bola;

function setup() {
  createCanvas(400, 400);
  bola = new Bolinha(200,200);
}

function draw() {
  background(0);
  let gravidade = createVector(0,0.3);
  bola.exibir();
  bola.aplicarForca(gravidade);
  bola.update();
  bola.colidir(); 
}