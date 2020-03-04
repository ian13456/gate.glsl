let cvs
let myShader

function preload() {
  myShader = loadShader('shaders/vert.glsl', 'shaders/frag.glsl')
}

function setup() {
  cvs = createCanvas(windowWidth, windowHeight, WEBGL)
  cvs.parent('my-cvs')
}

function draw() {
  shader(myShader)

  let mx = map(mouseX, 0, width, 0, 1)
  let my = map(mouseY, 0, height, 0, 1)

  myShader.setUniform('u_mouse', [mx, my])
  myShader.setUniform('u_resolution', [windowWidth, windowHeight])
  myShader.setUniform('u_time', performance.now())

  rect(0, 0, width, height)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
