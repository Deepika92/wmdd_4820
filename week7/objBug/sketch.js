var bug
var bug2

function setup () {
  createCanvas(800, 200)
  background(200)
  // Create object and pass in parameters
  bug = new JitterBug(600, 100, 20, 123, 134, 45)
  bug2 = new JitterBug(100, 100, 25, 134, 200, 180)
}

function draw () {
  stroke(234, 134, 154)
  bug.move()
  bug.display()
  bug2.move()
  bug2.display()
}

function JitterBug (tempX, tempY, tempDiameter, cred, cgreen, cblue) {
  this.x = tempX
  this.y = tempY
  this.diameter = tempDiameter
  this.cr = cred
  this.cg = cgreen
  this.cb = cblue

  this.move = function () {
    this.x += Math.floor(Math.random() * 4) - 1.5
    this.y += Math.floor(Math.random() * 4) - 1.5
  }

  this.display = function () {
    stroke(this.cr, this.cg, this.cb)
    ellipse(this.x, this.y, this.diameter, this.diameter)
  }
}
