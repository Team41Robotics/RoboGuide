const int LED_PIN;
const int LED2_PIN;
const int LED_PWM;
const int POT_PIN;
byte input;

void setup() {
  LED_PWM = 18;
  LED_PIN = 24;
  LED2_PIN = 25;
  POT_PIN =A4;
  input = 0x0;
  Serial.begin(9600);
  pinMode(LED_PWM, OUTPUT);
  pinMode(LED_PIN, OUTPUT);
  pinMode(LED2_PIN, INPUT);
}

void loop() {
  analogWrite(LED_PWM, analogRead(POT_PIN));
  if (digitalRead(LED2_PIN)) {
    Serial.write(0xF4);
  } else {
    Serial.write(0xF5);
  if (Serial.read() == 0xFF) {
    digitalWrite(LED_PIN, HIGH);
  } else {
    digitalWrite(LED_PIN, LOW);
  }
  delay(100); // milliseconds
}
