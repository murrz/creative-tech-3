int fsrAnalogPin = 0; // FSR is connected to analog 0
int fsrReading;      // the analog reading from the FSR resistor divider
int LEDpin = LED_BUILTIN;
int LEDbrightness;
int vibration;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(LEDpin, OUTPUT);
  pinMode(D1, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  Serial.println("test");
  fsrReading = analogRead(fsrAnalogPin);
  Serial.print("Analog Reading = ");
  Serial.println(fsrReading);
  // we'll need to change the range from the analog reading (0-1023) down to the range
  // used by analogWrite (0-255) with map!
  LEDbrightness = map(fsrReading, 0, 1023, 0, 255);
  
  // Map the analog fsr to digital motor pin 
  vibration = map(fsrReading, 0, 1023, 0, 255);
  analogWrite(D1, vibration);
  Serial.println(vibration);
  
  // LED gets brighter the harder you press
  analogWrite(LEDpin, LEDbrightness);
  
  
  delay(100);
}
