let pg1, pg2, pg3, ang1, ang2, ang3;
let x, y;
let bg;

function setup() {
  createCanvas(windowWidth, windowHeight - 80);
  ang2 = createSlider(2, 18, 6, 2);
  ang1 = createSlider(2, 22, 6, 2);
  ang3 = createSlider(2, 30, 6, 2);

  pg1 = createGraphics(800, 800);
  pg2 = createGraphics(800, 800);
  pg3 = createGraphics(800, 800);
  sb = createButton("Cambiar colores");
  sb.mousePressed(changeColors);
  init();
}

function init() {
  pg1.blendMode(OVERLAY);
  pg1.blendMode(BLEND);
  pg1.ellipseMode(CENTER);
  pg1.rectMode(CENTER);
  pg1.noStroke();

  pg2.blendMode(OVERLAY);
  pg2.blendMode(BLEND);
  pg2.ellipseMode(CENTER);
  pg2.rectMode(CENTER);
  pg2.noStroke();

  pg3.blendMode(OVERLAY);
  pg3.blendMode(BLEND);
  pg3.ellipseMode(CENTER);
  pg3.rectMode(CENTER);
  pg3.noStroke();

  for (let i = 0; i < 10; i++) {
    let col = color(random(0), random(255), random(255), 100);
    let tam = random(30, 100);

    pg2.fill(color(random(0), random(255), random(255), 100));
    pg2.ellipse(random(10, 150), random(10, 150), tam - 40, tam - 40);
    pg2.rect(random(10, 150), random(10, 150), tam - 40, tam - 40);
    pg1.fill(col);
    pg1.ellipse(random(150, 300), random(150, 300), tam - 20, tam - 20);
    pg1.rect(random(150, 300), random(150, 300), tam - 20, tam - 20);

    pg3.fill(color(random(0), random(255), random(255), 100));
    pg3.ellipse(random(300, 600), random(300, 600), tam, tam);
    pg3.rect(random(300, 600), random(300, 600), tam, tam);
  }
}

function draw() {
  background(250);

  let a = PI / ang1.value();
  let b = PI / ang2.value();
  let c = PI / ang3.value();

  let count = 0;
  translate(width / 2, height / 2);

  for (let i = 0; i < TWO_PI; i += c) {
    if (count % 2 == 0) {
      image(pg3, 0, 0);
    } else {
      scale(-1, 1);
      translate(pg3.width, 0);
      image(pg3, 0, 0);
      translate(-pg3.width, 0);
      scale(-1, 1);
    }

    rotate(c);
    count++;
  }

  for (let i = 0; i < TWO_PI; i += a) {
    if (count % 2 == 0) {
      image(pg1, 0, 0);
    } else {
      scale(-1, 1);
      translate(pg1.width, 0);
      image(pg1, 0, 0);
      translate(-pg1.width, 0);
      scale(-1, 1);
    }

    rotate(a);
    count++;
  }
  for (let i = 0; i < TWO_PI; i += b) {
    if (count % 2 == 0) {
      image(pg2, 0, 0);
    } else {
      scale(-1, 1);
      translate(pg2.width, 0);
      image(pg2, 0, 0);
      translate(-pg2.width, 0);
      scale(-1, 1);
    }

    rotate(b);
    count++;
  }
}
function changeColors() {
  pg1.clear();
  pg2.clear();
  pg3.clear();
  init();
}
