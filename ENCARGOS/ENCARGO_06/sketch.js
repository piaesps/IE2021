

let sa, a;
let r = 150

function setup() {
  createCanvas(400, 400);
  sa = createSlider(3,48,3,1);
  
}

function draw() {
  a = sa.value(); 
  background(1000);
  noStroke();
  fill("pink");
  translate(width/2, height/2); 
  rotate(-HALF_PI)
  let incT = TWO_PI / a;
  
  beginShape();
  for(let t = 0 ; t < TWO_PI; t += incT ) {
    vertex(cos(t) * r, sin(t)* r)
  }
   endShape (CLOSE)
  
}