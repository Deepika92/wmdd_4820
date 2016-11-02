//detect when the mouse enters a rectangle
var x = 100
var y = 50
var rsize = 100

function setup() {
  createCanvas(500, 240)
  background(200)
  noStroke()
}

function draw() {
  rect(x, y, rsize, rsize)
  if (mouseX > x && mouseX < x + rsize && mouseY > y && mouseY < y + rsize) {
    fill(20)
  } else {
    fill(100)
  }
}
