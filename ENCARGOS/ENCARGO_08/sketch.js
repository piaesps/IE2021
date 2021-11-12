let frames; // los fotogramas
let span, current;

function setup() {
  frames = [];
  span = 8;
  current = 0;

  createCanvas(windowWidth, windowHeight - 100);
  background(250);
  strokeWeight(5);

  sb = createButton("Guardar frames");
  sb.mousePressed(saveImage);

  clearButton = createButton("Borrar");
  clearButton.mousePressed(clearScreen);

  for (let i = 0; i < span; i++) {
    let img = get();
    frames.push(img);
  }
}

function draw() {
  background(frames[current]);

  if (mouseIsPressed) {
    point(pmouseX, pmouseY, mouseX, mouseY);
  }

  frames[current] = get();
  current++;
  current %= span;
}

function saveImage() {
  saveFrames("frame", "png", 1, 25);

  // guardar frames para hacer gif
}

function clearScreen() {
  background(250);
  frames = [];
  span = 8;
  current = 0;

  stroke(0);
  strokeWeight(5);

  for (let i = 0; i < span; i++) {
    let img = get();
    frames.push(img);
  }
}
