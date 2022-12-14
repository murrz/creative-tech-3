//variables for each image
let mak 
let mak_floor
let chair

function setup() {
  pixelDensity(1);
  createCanvas(600, 600);
  //drawgrid();
}

function preload(){
  //loading all three images
mak = loadImage ('assets/mak.jpg');
mak_floor = loadImage ('assets/mak_floor.png');
chair = loadImage ('assets/mak_chair_2.png');
}
  function draw() {
    //first image (sky) is used as background
    background (mak,600,400); 
    
    //the x,y axis coordinates
    text(mouseX + "," + mouseY, 20, 20);
    
    //eagle image moving. Only the x axis is able to move freely
    image(chair,351/2,mouseY,300,300);
    
    //the cloud image placement in the corner. 
    image (mak_floor,-100,-105);
    
    
  
  
}