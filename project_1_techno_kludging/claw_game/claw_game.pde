import processing.serial.*;
Serial myPort;  // Create object from Serial class
String val;     // Data received from the serial port


/**
 * Translate. 
 * 
 * The translate() function allows objects to be moved
 * to any location within the window. The first parameter
 * sets the x-axis offset and the second parameter sets the
 * y-axis offset. 
 */
 
float x, y;
float dim = 30.0;

void setup() {
  size(640, 360);
  noStroke();
  
  println(Serial.list());
  //String portName = Serial.list()[6]; //change the 0 to a 1 or 2 etc. to match your port
  //myPort = new Serial(this, portName, 9600);

}

void draw() {
  background(120,190,33);
  rect(320, 0, 20, 10);
  line(320, 0, 320, 360);
  stroke(255);
  line(340, 0, 340, 360);
  stroke(255);
  
  x = x + 3;
  
  if (x > width + dim) {
    x = -dim;
  } 
  
  translate(x, height/2-dim/2);
  fill(255);
  rect(-dim/2, -dim/2, dim, dim);
  
  
  //if ( myPort.available() > 0) 
  {  // If data is available,
  //val = myPort.readStringUntil('\n');         // read it and store it in val
  } 
  //println(val); //print it out in the console
  
  
  if(mousePressed){
    rect(320, 0, 20, 360);
    fill(255, 0, 0);

  }
  
  // Transforms accumulate. Notice how this rect moves 
  // twice as fast as the other, but it has the same 
  // parameter for the x-axis value
  
  //translate(x, dim);
  //fill(0);
  //rect(-dim/2, -dim/2, dim, dim);
  

}
//void claw(){
  
  
//  {
//void mouseClicked() {
  
//  //y = y + 5;
  
//  //translate(y, height/2-dim/2);
//  //fill(255);
//  //rect(-dim/2, -dim/2, dim, dim);
//}
