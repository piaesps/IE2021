function setup() {
  createCanvas(450, 450);

}

function draw() {
  stroke(random(255))
  background(random(255));
  circle(height/2,width/2,random(height));
  circle(height/4,width/4,random(height));
  circle(height/4,width,random(height));
  circle(height,width/4,random(height));
  circle(height,width,random(height));
  
  
}



