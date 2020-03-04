let myShader
let perceptron
let visualizer

function preload() {
  myShader = loadShader('shaders/vert.glsl', 'shaders/frag.glsl')
}

function setup() {
  let cvs = createCanvas(CANVAS_DIMENSION, CANVAS_DIMENSION, WEBGL)
  cvs.parent('my-cvs')

  perceptron = new Perceptron(samples, targets, 0.1, 0.01, 2000)
  visualizer = new Visualizer(perceptron, myShader)
}

function draw() {
  // perceptron.step()
  visualizer.draw()
}

function windowResized() {
  resizeCanvas(CANVAS_DIMENSION, CANVAS_DIMENSION)
}

setInterval(() => perceptron.step(), 1000)
