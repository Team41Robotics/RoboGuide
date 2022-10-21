import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Prism from "prismjs";
import TrackedBlockPage from "./TrackedBlockPage";

import InteractiveDriverStation from "../components/InteractiveDriverStation";

export default function(props) {
	useEffect(() => {
		Prism.fileHighlight();
		Prism.highlightAll();
	});

	return (
		<>
			<Helmet>
				<title>Driver Station | RoboGuide</title>
			</Helmet>
			<TrackedBlockPage
				id="driver-station"
				header={
					<>
						<h1>Driver Station</h1>
						<InteractiveDriverStation />
					</>
				}
				blocks={[
					{
						id: "layout",
						title: "Layout",
						content: (
							<>
								<h2 className="text-center">Layout</h2>
								The driver station is used to control the robot. It has several
								RGB buttons, dials, and switches, and two touchscreen displays.
								Each display is controlled by a{" "}
								<a href="https://www.raspberrypi.org/products/raspberry-pi-zero/">
									Raspberry Pi Zero
								</a>
								, the dials and switches are controlled by an{" "}
								<a href="https://store.arduino.cc/usa/leonardo">
									Arduino Leonardo
								</a>
								, and the buttons are controlled by an{" "}
								<a href="https://store.arduino.cc/usa/due">Arduino Due</a>.{" "}
								<br />
								<br />
								The driver station laptop plugs into the Due through a micro-usb
								cable. The Due then communicates with each Pi and the Leonardo
								through serial communication. The Due then takes all of the data
								from the station, and passes it to the computer as a USB
								Joystick.
							</>
						)
					},
					{
						id: "arduino",
						title: "Arduinos",
						content: (
							<>
								<h2 className="text-center">Programming the Arduinos</h2>
								While technically an Arduino is programmed in{" "}
								<a href="https://www.arduino.cc/reference/en">
									its own language
								</a>
								, it's basically C++ with some extra functionality to utilize
								the Arduino's features. And for the purposes we use it for in
								the Driver Station, C++ is very similar to Java. However, and
								Arduino program is set up differently than either Java or
								vanilla C++. It is actually more similar to the robot code, with
								two main sections of code. First, there is a
								<code className="inline language-arduino">setup()</code>{" "}
								function. Similar to the{" "}
								<code className="inline language-arduino">robotInit()</code>{" "}
								function from the robot code, this only runs once, at the start
								of the program. There is also a{" "}
								<code className="inline language-arduino">loop()</code>
								function that keeps running until the program is shut down,
								which is similar to the{" "}
								<code className="inline language-arduino">
									teleopPeriodic()
								</code>
								function in the robot code. Additionally, it is common practice
								to declare global constant the top of the file, and then
								initialize them inside of the function. <br />
								<br />
								To allow Arduinos to communicate with each other, we use the
								serial ports on them, and we can program them easily through the
								Arduino software. As many of the boards have several serial
								ports, there is a variety of suffixes used differentiate them in
								software. For the purposes of this website, I am going to use{" "}
								<code className="inline language-arduino">Serial</code> without
								any suffixes. The first step in serial communication is to
								initialize the serial ports with{" "}
								<code className="inline language-arduino">
									Serial.begin(9600)
								</code>
								. The number 9600 is the baudrate, or how fast the data is sent,
								and the default for Arduino is 9600. There are many ways to send
								data using the serial ports, with either bytes or strings. We
								use bytes to represent all of the data, because it is much
								easier to parse on the other end than a string. To send a byte
								via serial, just run{" "}
								<code className="inline language-arduino">
									Serial.write(VALUE)
								</code>
								, where the value is any byte. To read it on the other end,{" "}
								<code className="inline language-arduino">Serial.read()</code>{" "}
								is used.
								<br />
								<br />
								To collect information from all of the inputs on the station and
								control the RGB, we also need to know how to control the other
								pins on the board. Most Arduino boards have several digital pins
								and a few analog pins. The digital pins can (usually) send and
								receive either a 1 or a 0, while the analog pins can READ any
								analog signal (such as a dial input). In addition, some digital
								pins can send a PWM signal, with a value ranging from 0-255,
								allowing for more variable control over devices like LEDs. All
								digital pins need to be set to either input or output in the{" "}
								<code className="inline language-arduino">setup()</code>{" "}
								function, using{" "}
								<code className="inline language-arduino">
									pinMode(PIN_NUMBER, MODE)
								</code>
								. Arduino come with many constants that can be used in programs,
								such as INPUT and OUTPUT for setting the mode of the digital
								pins. To read a digital pin, the function{" "}
								<code className="inline language-arduino">
									digitalRead(PIN_NUMBER)
								</code>{" "}
								is used, and it returns either a 1 or a 0, depending on whether
								or not the pin is receiving voltage. To write to a pin, the
								function{" "}
								<code className="inline language-arduino">
									digitalWrite(PIN_NUMBER, VALUE)
								</code>{" "}
								is used, where{" "}
								<code className="inline language-arduino">VALUE</code> is either
								a 1 or a 0. To write with a PWM signal, use{" "}
								<code className="inline language-arduino">
									analogWrite(PIN_NUMBER, VALUE)
								</code>
								, where <code className="inline language-arduino">VALUE</code>{" "}
								is any number from 0-255. Note that even though we are using an
								analog function for this pin, its mode still needs to be set
								with
								<code className="inline language-arduino">pinMode</code>. To
								read from any of our analog pins, use the function{" "}
								<code className="inline language-arduino">
									analogRead(PIN_NUMBER)
								</code>
								. Here,{" "}
								<code className="inline language-arduino">PIN_NUMBER</code> is
								the analog pin, beginning with the letter A. Arduino will
								recognize this identifier as one of its built-in constants and
								read from the correct pin. For example, you might write{" "}
								<code className="inline language-arduino">analogRead(A0)</code>.
								<br />
								<br />
								This is the basics of any Arduino program, and a beginner
								program using all of these features might look like this:
								<pre
									className="line-numbers language-arduino"
									data-src="/files/driver-station/ArduinoExample.ino"
								></pre>
								<br />
								Just like in Java, sometimes we can import libraries into
								Arduino to give us more functionality. For the driver station,
								we use a library that allows our Arduino Due to act like a
								joystick, because its onboard USB controller can identify itself
								as whatever we want. Note: not all Arduino models can use this
								functionality, as only the ones with an actual USB controller
								can act as a USB device to a computer. The library is called
								Joystick, and must be downloaded from{" "}
								<a href="https://github.com/LordNuke/ArduinoLibs">
									its GitHub repository
								</a>
								, as we are using a different Joystick library than the standard
								Arduino one (it does not have enough virtual buttons for our
								needs). Once the library is installed locally, we can import
								into our code with{" "}
								<code className="inline language-arduino">
									include "Joystick.h"
								</code>
								. To use this library, a few things need to be done. First, we
								must clear any existing data from the virtual Joystick with{" "}
								<code className="inline language-arduino">
									Joystick.clearState()
								</code>
								. Next, we add each button's value into the joystick state. What
								the flow usually look like is{" "}
								<code>clear state --&gt; set state --&gt; send state --&gt; repeat</code>
								. Since the code loops through, we can just set each button's
								value as a variable and update that variable throughout the
								program. Since we have alot of buttons, we use a few arrays to
								store all of the value. To set the value of a button, change the
								value of
								<code className="inline language-arduino">
									Joystick.state.{"<"}group{">"}.{"<"}button/axis{">"}
								</code>
								. To find all of the groups and buttons/axes, look at{" "}
								<a href="https://github.com/LordNuke/ArduinoLibs/tree/master/Joystick/src">
									these files from the source code
								</a>
								, or just look at{" "}
								<a href="https://github.com/Team41Robotics/Driver-Station-2020/blob/master/Arduino_Due/JoystickSim/Functions.ino">
									the{" "}
									<code className="inline language-arduino">
										sendjoyStates()
									</code>{" "}
									function
								</a>{" "}
								in the existing code, as it is probably easier to see what
								everything does. Finally, to send the state to the computer,
								call{" "}
								<code className="inline language-arduino">
									Joystick.sendState()
								</code>
								. An example of a relatively small virtual joystick could look
								something like this:
								<pre
									className="line-numbers language-arduino"
									data-src="/files/driver-station/JoystickExample.ino"
								></pre>
								That's it for the basics of programming the Arduinos on the
								driver station. Howerver, there is still more to learn.
								<ul>
									<li>
										If you want to understand C++ more,{" "}
										<a href="https://www.w3schools.com/cpp/default.asp">this</a>{" "}
										w3schools course is really great
									</li>
									<li>
										The documentation for the Arduino library of C++ is{" "}
										<a href="http://arduino.cc/reference/en">here</a>
									</li>
									<li>
										The source code for the Joystick library we use is{" "}
										<a href="https://github.com/LordNuke/ArduinoLibs/tree/master/Joystick">
											here
										</a>
									</li>
								</ul>
							</>
						)
					},
					{
						id: "raspberry-pi",
						title: "Raspberry Pis",
						content: (
							<>
								<h2 className="text-center">Programming the Raspberry Pis</h2>
								The second important part of the driver station is the
								touchscreens that are controlled by Raspberry Pi Zeroes. We use
								these as complex touch inputs that we customize for the game
								each year. Everything is programmed in Python 3, and the file is
								automatically run py the Zeroes when they boot up. Python is
								another programming language, and it is very different from C++
								and Java. This is not a tutorial for Python, but an excellent
								one can be found{" "}
								<a href="https://www.w3schools.com/python/default.asp">
									here
								</a>. <br />
								<br />
								We use a few Python modules to code the Zeroes on the driver
								station. First, we use the Tkinter module to take touch input
								and display images on the screen. The Tkinter module is made for
								displaying graphics with Python. We only imported Tk, Canvas,
								CENTER, RIGHT, LEFT, and N from the modules.To initialize
								Tkinter, create a new variable with the value of{" "}
								<code className="inline language-python">Tk()</code>. This
								variable represents the entire Tkinter window, and various
								settings can be changed on it, but I'm not going to cover all of
								them. The most important methods are{" "}
								<code className="inline language-python">geometry</code>,{" "}
								<code className="inline language-python">bind</code>, and{" "}
								<code className="inline language-python">focus_set</code>.
								Geometry is used to set the size and position of the window, and
								the exact argument to enter is described in detail{" "}
								<a href="https://www.geeksforgeeks.org/python-geometry-method-in-tkinter/">
									here
								</a>
								. The <code className="inline language-python">bind()</code>{" "}
								method binds a key to a Tkinter function. We used it to tell
								Tkinter to quit every time the escape key was pressed (
								<code className="inline language-python">
									root.bind("{"<"}Escape{">"}" ,lambda e: root.quit())
								</code>
								. Finally,{" "}
								<code className="inline language-python">focus_set</code> makes
								sure that the window is on top and nothing is covering it.
								<br />
								<br />
								To start Tkinter, put{" "}
								<code className="inline language-python">
									root.mainloop()
								</code>{" "}
								at the end of your file. This runs everything in a loop, so that
								everything can update. What we also do its put{" "}
								<code className="inline language-python">
									root.after(delay, publish)
								</code>{" "}
								right before that line. Firstly, this sets the refresh rate, and
								secondly it runs a function every time it refreshes. In our
								publish function, we check to see if any button have been
								clicked, and if so we send that information to the Due (more on
								that later).
								<br />
								<br />
								The most important part of Tkinter, though, is the canvas. The
								canvas is where everything is drawn on the screen, and where
								most of the code is. To create a canvas, use{" "}
								<code className="inline language-python">
									Canvas(my_tk_root, width=WIDTH, height=HEIGHT,
									background=BG_COLOR
								</code>
								, where you specify the values for{" "}
								<code className="inline language-python">WIDTH</code>,{" "}
								<code className="inline language-python">HEIGHT</code>, and{" "}
								<code className="inline language-python">BG_COLOR</code>. I
								recommend setting height and width as variables, because they
								will be used again. Additionally, set the Canvas as a variable,
								because it is needed to draw everything (here, it will be
								represented as{" "}
								<code className="inline language-python">ctx</code>). On the
								canvas, you can do one of three things: create text, create a
								shape, or show an image. Additionally,{" "}
								<code className="inline language-python">ctx.pack()</code> needs
								to be somewhere in your file before
								<code className="inline language-python">root.mainloop()</code>.
								This is what actually draws everything on the screen.
								<br />
								To create text, use{" "}
								<code className="inline language-python">
									ctx.create_text(x, y)
								</code>
								, where <code className="inline language-python">x</code> and{" "}
								<code className="inline language-python">y</code> is the
								position of the button. There are also several optional
								arguments, all of which can be viewed{" "}
								<a href="https://anzeljg.github.io/rin2/book2/2405/docs/tkinter/create_text.html">
									here
								</a>
								.
								<br />
								Another use of the canvas is to create shapes. We only use the
								rectangle on the driver station, and it is the most simple. To
								make a rectangle, call
								<code className="inline language-python">
									ctx.creat_rect(x0, y0, x1, y1)
								</code>
								. Here <code className="inline language-python">x0</code> and{" "}
								<code className="inline language-python">y0</code> represent the
								top left corner, and{" "}
								<code className="inline language-python">x1</code> and{" "}
								<code className="inline language-python">y1</code>
								represent the bottom right corner. Just like with text, there
								are several optional arguments that can be seen{" "}
								<a href="https://anzeljg.github.io/rin2/book2/2405/docs/tkinter/create_rectangle.html">
									here
								</a>
								. <br />
								<br />
								The third main canvas object is an image. We mainly use this as
								background, but with enough effort, we could make the whole
								interface with custom images. To create an image on the canvas,
								use{" "}
								<code className="inline language-python">
									ctx.create_image(x, y, image=image_var)
								</code>
								. Here,{" "}
								<code className="inline language-python">image_var</code> is an
								ImageTk object. Importing an image is somewhat simple. To do so,
								import <code className="inline language-python">Image</code> and{" "}
								<code className="inline language-python">ImageTk</code> from the
								PIL module. Then create a variable with{" "}
								<code className="inline language-python">
									Image.open(full_path_to_image)
								</code>
								. We'll call this variable{" "}
								<code className="inline language-python">bg</code>. Then, set
								that variable to{" "}
								<code className="inline language-python">
									ImageTk.PhotoImage(bg)
								</code>
								. This just replaces the Image object with an ImageTk object
								that we can use on the canvas.
								<br />
								Finally, we need to know if a button has been clicked. In the
								code, I made a button class that handled everything for the
								button, but basically, we can use
								<code className="inline language-python">root.bind()</code> to
								call a function every time the left mouse button is pressed (
								<code className="inline language-python">
									ctx.bind("{"<"}Button-1{">"}", handle_click)
								</code>
								). Tkinter passed that function an object that has the x and y
								position of the click. Since the buttons are squares, we can
								just check if the click was within both the x and y boundaries
								of the button.
								<br />
								<br />
								That is everything for Tkinter, and a basic program that does
								everything I talked about would look something like this:
								<pre
									className="line-numbers"
									data-src="/files/driver-station/tkinter_ex.py"
								></pre>
								<br />
								The second main module we use in the driver station code is
								Pyserial. This is what communicates with the Due to send the
								inputs from Tkinter. To initialize the serial device, we use{" "}
								<code className="inline language-python">
									ser = serial.Serial(port, rate)
								</code>
								. The port is different depending on the device, but on the
								Raspberry Pi it is{" "}
								<code className="inline language-python">"/dev/ttyAMA0"</code>.
								The rate is the same rate that we set on the Due when that was
								programmed. Pyserial is a complicated module, but for our
								purposes it only has one more function that we care about. To
								send data over the serial port we can say
								<code className="inline language-python">
									ser.write(val)
								</code>{" "}
								where <code className="inline language-python">val</code> is any
								byte. A sample program for pyserial may look like this:
								<pre
									className="line-numbers"
									data-src="/files/driver-station/pyserial_ex.py"
								></pre>
							</>
						)
					}
				]}
			/>
		</>
	);
}
