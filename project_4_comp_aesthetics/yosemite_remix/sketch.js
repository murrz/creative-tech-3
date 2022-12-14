
let img;
let bgcolor = 0;

function preload() {
  
  img = loadImage("assets/salted_something.png");
}

function setup() {
  // disables scaling for retina screens which can create inconsistent scaling between displays
  pixelDensity(1);

  createCanvas(windowWidth, windowHeight, WEBGL);
}

//play with the parameters below!
let xspacing = 240;//horizontal grid spacing; make this 2x width you want to draw image, or width of image if no horizontal symmetry
let yspacing = 320;//vertical grid spacing; make this 2x height you want to draw image, or height of image if no vertical symmetry
let offset = 200;//horizontal amount to offset each additional row (for non-rectangular grid)
let imw = 120*0.5;//width to draw image
let imh = 160*0.5;//height to draw image

function draw() {
  background(bgcolor);
  translate(-0.5*width, -0.5*height);//WEBGL mode seems to place origin at center of window instead of upper left?
  drawpattern();
  
}

function drawpattern() {
  let startx = 0;
  let starty = 0;
  for (let j=starty;j<height;j+=yspacing) {
    for (let i=startx;i<width;i+=xspacing) {
      //draw stuff for a single grid cell here
      //(i,j) are the x/y position of the cell
      
      push();
      translate(i,j);
      
      drawmotif();
      
      //draw flipped horizontally
      push();
      scale(-1, 1.2);
      drawmotif();
      pop();
      
      
      //draw flipped vertically
      push();
      scale(1.3, -1);
      drawmotif();
      pop();
      
      //draw rotated 180 (lower right corner of motif)
      push();
      //translate(2*imw, 2*imh);
      //rotate(Math.PI);
      rotate(160);
      
      drawmotif();
      pop();
      
      pop();//keep this the last line of drawing
    }
    starty+=yspacing;
    startx-=offset;
  }
  
}

function drawmotif(){
  noStroke();
  drawImage(img, 10, 15, imw, imh);//you can also try setting the first 2 parameters to draw images at offset
  
  //draw a rotated square
  noStroke();
  fill(255, 255, 255, 40);
  push();
  rotate(Math.PI/6);
  circle(40, 20, 70, 70);
  
  pop();
  
  //draw 5 diagonal lines
  //noFill();
  stroke(color(random(225), random(255), random(255)));
  for (let k=0;k<15;k++) {     
    line(k*15, 0, k*15, k*15);
  }
  
  
  
  
}

function drawImage(i, x, y, w, h) {
  texture(i);
  rect(x, y, w, h);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseMoved() {
  let newbg = color(random(255), random(255), random(255));
   console.log("mouseMoved: "+newbg);
    bgcolor = newbg; 
  
}