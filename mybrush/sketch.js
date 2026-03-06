function setup() {
  createCanvas(400, 400);
  background(0);
  rectMode(CENTER);
  colorMode(HSB, 360, 100, 100, 400)
}

function draw() {

  stroke(mouseY, 100, 200, mouseX); 
  strokeWeight(5)
  noFill();
  
  circle(mouseX, mouseY, 100);
}

function mouseClicked() {
  saveCanvas("Slinky.png");
}