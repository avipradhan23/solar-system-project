 var sun,mercury,venus,earth,mars,jupiter,saturn,neptune,uranus



function setup() {
  createCanvas(400,400);
  sun = new sun(0, 0, 120, 250, 200, 0);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}