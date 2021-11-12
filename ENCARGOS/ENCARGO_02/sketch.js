function setup() {
  createCanvas(500, 500); 
  background(1000);  
  noFill();
  
 


}

function draw() {
 strokeWeight(3);
 rect(3,3,496,496); 
circle(250,250,496);  


beginShape();
  vertex(3,3)
   vertex(250,496)
  vertex(496,3)
endShape(CLOSE);
  
beginShape();
  vertex(3,496)
  vertex(496,496)
  vertex(250,3)
endShape(CLOSE);
  
beginShape();
 vertex(3,250)
 vertex(250,3)
  vertex(496,250) 
  vertex(250,496)
 endShape(CLOSE);

  
beginShape();
 vertex(200,250)
 vertex(250,3)
 vertex(300,250)
  vertex(250,500) 
  
 
 endShape(CLOSE);
  

  
  
  
}