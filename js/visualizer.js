class Visualizer {
  constructor(perceptron, myShader) {
    this.perceptron = perceptron
    this.shader = myShader

    // // point
    // this.p1 = createVector(0, 0)
    // this.p2 = createVector(0, 0)

    // // next point
    // this.np1 = createVector(0, 0)
    // this.np2 = createVector(0, 0)
  }

  draw = () => {
    shader(this.shader)

    let mx = map(mouseX, 0, width, 0, 1)
    let my = map(mouseY, 0, height, 0, 1)

    this.shader.setUniform('e', Math.E)

    this.shader.setUniform('u_mouse', [mx, my])
    this.shader.setUniform('u_resolution', [CANVAS_DIMENSION, CANVAS_DIMENSION])
    this.shader.setUniform('u_time', performance.now())

    this.shader.setUniform('u_w0', this.perceptron.w0)
    this.shader.setUniform('u_w1', this.perceptron.w1)
    this.shader.setUniform('u_w2', this.perceptron.u2)

    rect(0, 0, width, height)
  }
}
