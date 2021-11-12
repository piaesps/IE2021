let m, mSlider;
let e, eSlider;


function setup() {
   createCanvas(500, 450);
 
  
  mSlider = createSlider(0, 100, 20, 1);
  eSlider = createSlider(0, 100, 20, 1);
}

function draw() {
  m = mSlider.value();
  e = eSlider.value();
   background("lightblue");
 
  
  for (var x = m; x < height; x +=e){
  for (var y = m; y < width; y +=e){
      square(x,y,m/3)
    }
  }
}

