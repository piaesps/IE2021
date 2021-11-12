let levels;

function setup() {
  createCanvas(500, 500);
  fill(150, 50, 500, 30);
  noStroke();

  levels = 1;
}

function draw() {
  background(255);
  
  recursiveCircle(width / 2, height / 2, 400, levels);
}

function recursiveCircle(x, y, diam, levels) {
  ellipse(x, y, diam);
  if (levels > 1) {
    recursiveCircle(y - diam / 8, x, diam / 4, levels - 1);
    recursiveCircle(y + diam / 8, x, diam / 4, levels - 1);
    recursiveCircle(y - diam / 4, x, diam / 2, levels - 1);
    recursiveCircle(y + diam / 4, x, diam / 2, levels - 1);
  }
}
function keyTyped() {
  if (key == "n") {
    levels++;
  }
  if (key == "m") {
    levels--;
  }
  if (key == "N") {
    levels++;
  }
  if (key == "M") {
    levels--;
  }
  levels = constrain(levels, 1, 5);
}
