var x1 = 0;
var x2;

var scrollSpeed = 2;

var pixelsize = 30;

let img;
let bgcolor = 0;

function preload() {
  img = loadImage("assets/colors.jpg");
}

function setup() {
  // disables scaling for retina screens which can create inconsistent scaling between displays
  pixelDensity(1);

  createCanvas(600, 600);
  
  image(img,0,0);

  drawgrid();
  
  x2 = width;

}

function drawgrid() {
  image(img, 0, 0, width, height);
  
  loadPixels();
  
  background(255);
  noStroke();
  for (var i=0;i<img.width;i+=pixelsize) {
    for (var j=0;j<img.height;j+=pixelsize) {
      let index = 4*(i+j*img.width);
      let r = pixels[index];
      let g = pixels[index+1];
      let b = pixels[index+2];
      fill(r, g, b, 255);
      
      
      //rect(i, j, pixelsize, pixelsize);
      //ellipse(i, j, pixelsize, pixelsize);
      arc(i, j, pixelsize, pixelsize, PI, TWO_PI)
      
    }
  }
}

function keyPressed() {
  if (key=='+' || key=='=') {
    pixelsize++;
  }
  if (key=='-'||key=='_') {
    if (pixelsize>1)
      pixelsize--;
  
  }
  //drawgrid();
  
function draw() {
  //background(220);
  image(drawgrid(), x1, 0, width, height);
  image(drawgrid(), x2, 0, width, height);
  
  x1 -= scrollSpeed;
  x2 -= scrollSpeed;
  
  if (x1 < -width){
    x1 = width;
  }
  if (x2 < -width){
    x2 = width;
  }
  
}
    
}