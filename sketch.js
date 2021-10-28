let clicks = 0;
m = 100;

function setup() {
  createCanvas(1200,800);
  background(255);
  ellipseMode(CENTER);
}

function timbre1(x, y, t) {
  push();
  translate(x, y);

  stroke("red");
  strokeWeight(5);
  ellipse(50, 50, 60);

  beginShape();
  fill("red");
  noStroke();
  vertex(35, 35);
  vertex(65, 35);
  vertex(55, 50);
  vertex(65, 65);
  vertex(35, 65);
  vertex(45, 50);

  endShape(CLOSE);
  pop();
}

function timbre2(x, y, t) {
  push();
  translate(x, y);
  strokeWeight(1);
  fill("blue");
  arc(25, 25, 50, 50, 10, 50);

  fill("red");
  arc(25, 25, 50, 50, 50, 10);
  fill("yellow");
  beginShape();
  vertex(5, 10);
  vertex(6, 15);
  vertex(25, 27);
  vertex(25, 23);
  endShape(CLOSE);

  beginShape();
  vertex(45, 10);
  vertex(44, 15);
  vertex(25, 27);
  vertex(25, 23);
  endShape(CLOSE);

  beginShape();
  vertex(5, 15);
  vertex(6, 20);
  vertex(25, 32);
  vertex(25, 28);
  endShape(CLOSE);

  beginShape();
  vertex(45, 15);
  vertex(44, 20);
  vertex(25, 32);
  vertex(25, 28);
  endShape(CLOSE);

  beginShape();
  fill("yellow");
  vertex(25, 10);
  vertex(27, 21);
  vertex(34, 16);
  vertex(31, 22);
  vertex(40, 25);
  vertex(31, 27);
  vertex(34, 34);
  vertex(27, 30);
  vertex(25, 40);
  vertex(22, 30);
  vertex(16, 34);
  vertex(18, 27);
  vertex(10, 25);
  vertex(18, 22);
  vertex(16, 16);
  vertex(22, 21);
  vertex(25, 10);

  endShape(CLOSE);
  pop();
}

function mousePressed() {
  clicks++;
  print(clicks);
  if (clicks % 3 == 0) {
    timbre1(mouseX, mouseY, m);
  } else {
    timbre2(mouseX, mouseY, m);
  }
}

function keyTyped() {
  if (key == "d") {
    createCanvas(500, 500);
    background(255);
    rectMode(CENTER);
    clicks = 0;
  }
}
