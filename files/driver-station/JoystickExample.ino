const int NUM_BUTTONS;
int buttonPins[];
int buttonStates[];

void setup() {
  NUM_BUTTONS = 5;
  buttonPins[NUM_BUTTONS] = {1, 2, 3, 4, 5};
  buttonStates[NUM_BUTTONS];
  Joystick.clearState();
  for (int i : buttonPins) {
    pinMode(i, INPUT);
  }
}

void loop() {
  for (int i; i < NUM_BUTTONS; i++) {
    buttonStates[i] = digitalRead(buttonPins[i]);
  }
  Joystick.clearState();
  // This sets the state for all button states
  // Ex: Joystick.state.buttons["b03"] = buttonStates[i]
  // Note: this will only work with the first 10 buttons, because I added the 0 to the front of the button call as the padding is needed by the library
  for (int i; i < NUM_BUTTONS; i++) {
    Joystick.state.buttons["b0" + String(i)] = buttonStates[i];  // Here I use the String() func to turn i into a string
  }
  joystick.sendState();
}