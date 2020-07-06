import React, {useEffect} from "react";
import {Helmet} from "react-helmet";
import Prism from "prismjs";
import TrackedBlockPage from "./TrackedBlockPage";

import programmingImg from "../img/banners/robotCodeBanner.jpg";
import driverStationUSB from "../img/DriverStationUSB.png";
import pidVaryingP from "../img/PID_varyingP.jpg";
import pidVaryingI from "../img/PID_varyingI.png";
import fsmFlowChart from "../img/fsm_flow_chart.jpg";

export default function (props) {
	useEffect(() => {
		Prism.fileHighlight();
		Prism.highlightAll();
	});

	return (
		<>
			<Helmet>
				<title>Robot Code | RoboGuide</title>
			</Helmet>
			<TrackedBlockPage
				id="robot-code"
				header={
					<>
						<h1>Robot Code</h1>
						<img
							src={programmingImg}
							className="img-fluid rounded mb-3 mb-md-5 bannerImg"
							alt="Robot Code"
						/>
					</>
				}
				blocks={[
					{
						id: "software-setup",
						title: "Software Setup",
						content: (
							<>
								<h1 className="text-center">Software Setup</h1>
								<h2>
									<a href="https://www.java.com/en/">Install Java</a>
								</h2>
								Press download to go to the downloads page for your respectice
								operating system. There may be multiple versions. You should use
								the version that is recommended.
								<br />
								<br />
								<h2>
									<a href="https://docs.wpilib.org/en/stable/docs/getting-started/getting-started-frc-control-system/wpilib-setup.html">
										Install WPILib & VS Code
									</a>
								</h2>
								Since the 2018-2019 season, we write our programming using
								Visual Studio Code. It is an IDE (Integrated Development
								Environment) that uses a plugin called WPILib. WPILib contains
								tons of classes that are the foundation of any FRC robot
								project. If you want detailed documentation about WPILib
								classes, go{" "}
								<a href="https://first.wpi.edu/FRC/roborio/release/docs/java/index.html">
									here
								</a>
								.
								<br />
								<br />
								<h2>
									<a href="https://docs.wpilib.org/en/stable/docs/getting-started/getting-started-frc-control-system/frc-game-tools.html">
										Install FRC Game Tools
									</a>
								</h2>
								The part of the game tools that we use most often is the{" "}
								<a href="https://docs.wpilib.org/en/stable/docs/software/driverstation/driver-station.html">
									driver station
								</a>
								. We use it to run our code as well as other things including
								checking the comms status, checking the battery voltage, and
								finding game controller ports. When installing the game tools,
								you may be asked for some identification. Ask your captain about
								that.
								<hr className="bg-white w-75" />
								All done! Now you can finally get programming. To make your
								first project, open VS Code, click the WPILib icon in the top
								right, and click "Create New Project". If you want to start
								fresh, choose template -{">"} java -{">"} Timed Robot. If you
								want to get a feel for program layout, you can choose to see an
								example project instead. (I recommend choosing the "Tank Drive"
								example. We've used Tank Drive to control the robot the past few
								years.)
							</>
						)
					},
					{
						id: "frc-programming-basics",
						title: "FRC Programming Basics",
						children: [
							{id: "file-structure", title: "File Structure"},
							{id: "basic-robot-code", title: "Basic Robot Code"},
							{id: "advanced-robot-code", title: "Advanced Robot Code"}
						],
						content: (
							<>
								<h1 className="text-center">FRC Programming Basics</h1>
								<h2 id="file-structure">File Structure</h2>
								So now you've created a new Java project using the WPILib Timed
								Robot template. Where do you go to write your code? During this
								guide I am going to reference the{" "}
								<a href="https://github.com/Team41Robotics/2020-Robot-Code/tree/master/02_FinalRobot">
									final code
								</a>{" "}
								for the 2020 robot a lot. You should open that up in another tab
								to follow along. In the <i>02_FinalRobot</i> folder, you can
								navigate to <i>src/main/java/frc/robot</i>. In that folder
								you'll see a bunch of <i>*.java</i> files, two of which your
								template project already has: <i>Main.java</i> and{" "}
								<i>Robot.java</i>. The <i>Main.java</i> file is just there to
								start your program off (it's where you're main method is). You
								don't have to modify this at all. Where you can start to write
								some code is the <i>Robot.java</i> file. Also, when you create
								any additional classes they should be placed in the same parent
								folder as <i>Main.java</i> and <i>Robot.java</i>. The only other
								folder that you need to know something about is the{" "}
								<i>vendordeps</i> folder. It contains json files which allow you
								to import dependencies that are not part of WPILib (needed for
								SparkMax and TalonSRX/FX motor controllers).
								<br />
								<br />
								<h2 id="basic-robot-code">Basic Robot Code</h2>
								In <i>Robot.java</i> you'll find multiple methods including two
								that we use very often:{" "}
								<code className="inline language-java">robotInit()</code> and{" "}
								<code className="inline language-java">teleopPeriodic()</code>.
								We use <code className="inline language-java">robotInit()</code>{" "}
								to initialize all of our variables when the program first runs.
								To control the robot, we use{" "}
								<code className="inline language-java">teleopPeriodic()</code>.
								This method runs periodically (every 20ms) and executes whatever
								is inside of it. Because of that, loops are (usually) not
								required to make the robot move or sense the environment
								repeatedly. I'm sure you've been wondering how to actually make
								a robot move. It is now time to do that! To do so, we are going
								to use two different classes:{" "}
								<a
									href="https://first.wpi.edu/FRC/roborio/release/docs/java/edu/wpi/first/wpilibj/Joystick.html"
									className="code"
								>
									Joystick
								</a>{" "}
								and{" "}
								<a
									href="https://www.revrobotics.com/content/sw/max/sw-docs/java/com/revrobotics/CANSparkMax.html"
									className="code"
								>
									CANSparkMax
								</a>
								. To initialize your Joystick object, find the port number of
								your controller in the Driver Station. The USB devices tab
								should look something like this:
								<img
									src={driverStationUSB}
									alt="Driver Station USB Menu"
									className="d-block mx-auto my-1 img-fluid"
								/>
								Your <code className="inline language-java">Joystick</code>{" "}
								object should be created at the top of your program inside the
								Robot class but outside of any method. The method you will use
								to get data from your Joystick is{" "}
								<code className="inline language-java">
									myJoystick.getRawAxis(AXIS_NUMBER)
								</code>
								. You can find the axis numbers in the same page of the Driver
								Station. You will then feed the readings from your Joystick axes
								into your spark max's. The method you will use to set the speed
								is ... shocker ...{" "}
								<code className="inline language-java">mySpark.set(SPEED)</code>
								. If you feed two Joystick axes into at least two different
								sparks you should be able to make a robot move anywhere you want
								with tank drive! Here's an example of what your program might
								look like:
								<pre
									className="line-numbers"
									data-src="/files/robot-code/TankDriveExample.java"
								></pre>
								Now you've created your first robot program! From here you can
								do so much more!
								<ul>
									<li>
										You can check out some more examples{" "}
										<a href="https://github.com/wpilibsuite/allwpilib/tree/master/wpilibjExamples/src/main/java/edu/wpi/first/wpilibj/examples">
											here
										</a>
									</li>
									<li>
										You can read up on the documentation{" "}
										<a href="https://first.wpi.edu/FRC/roborio/release/docs/java/edu/wpi/first/wpilibj/package-summary.html">
											here
										</a>
									</li>
									<li>
										You can check out all of Team 41's code{" "}
										<a href="https://github.com/Team41Robotics">here</a>
									</li>
								</ul>
								<br />
								<h2 id="advanced-robot-code">Advanced Robot Code</h2>
								In the large projects that we use for the final game code, we
								don't put all of our code in the <i>Robot.java</i> class.
								Instead, we seperate our code into seperate classes. This makes
								it easier to understand and work with. You can see the final
								code from 2020{" "}
								<a href="https://github.com/Team41Robotics/2020-Robot-Code/tree/master/02_FinalRobot/src/main/java/frc/robot">
									here
								</a>
								. Many of the classes that you see there are self-explanatory.
								One very important one is <i>Ports.java</i>. We use that class
								to organize all our port numbers for motor controllers, servos,
								and sensors as well as all button numbers. Classes are a great
								tool which you will use in the future as you build bigger and
								better projects.
							</>
						)
					},
					{
						id: "encoders",
						title: "Encoders",
						content: (
							<>
								<a href="https://en.wikipedia.org/wiki/Rotary_encoder#Absolute">
									<h1 className="text-center">Encoders</h1>
								</a>
								<p>
									An important concept in FRC is that of autonomy. This refers
									to a robot acting without any input from a human. So if you
									can't control your robot with a joystick, how can you control
									it? There are several different concepts and techniques, many
									of which can also be used to automate simple tasks that aid a
									human player.
								</p>
								<p>
									Encoders are sensors that are mounted on either a motor or
									another axle, and they are used to measure rotation. When used
									on a robot's wheels, this means they can indicate how far the
									robot has traveled with respect to wheel rotations. With some
									simple unit conversions, this can be turned into a tangible
									distance on the playing field.
								</p>
								<p>
									By the way, the idea of using wheel encoders to estimate your
									position is known as wheel odometry, and there are lots of
									good resources like{" "}
									<a href="http://www.hmc.edu/lair/ARW/ARW-Lecture01-Odometry.pdf">
										this PDF
									</a>{" "}
									on how exactly you can figure out the correct equations. Below
									is an simple example.
								</p>
								<pre
									className="line-numbers"
									data-src="/files/robot-code/Encoders.java"
								></pre>
							</>
						)
					},
					{
						id: "pid",
						title: "PID Controllers",
						children: [
							{id: "pid-p", title: "Proportional"},
							{id: "pid-i", title: "Integral"},
							{id: "pid-d", title: "Derivative"},
							{id: "pid-frc", title: "Usage in FRC"},
							{id: "pid-speed", title: "Desired Speed"}
						],
						content: (
							<>
								<a href="https://en.wikipedia.org/wiki/PID_controller">
									<h1 id="pid" className="text-center">
										PID Controllers
									</h1>
								</a>
								<p>
									A concept that is very closely related to encoders in practice
									is a PID controller, or a proportional-integral-derivative
									controller. Those are a lot of words, but it's actually not
									that complicated. The idea is that you can't instantaneously
									change your velocity. For instance, if you wanted the robot to
									drive forward 1 meter and then stop, you might be tempted to
									write code like this in your{" "}
									<code className="language-java inline">autonPeriodic()</code>{" "}
									function.
								</p>
								<pre
									className="line-numbers"
									data-src="/files/robot-code/ThresholdController.java"
								></pre>
								<br />
								<h2 id="pid-p">Proportional</h2>
								<p>
									The problem is that if your robot is moving fast, it cannot
									immediately stop. There are real-world limitations such as the
									friction between the robot's wheels and the ground. A better
									approach is to drive fast when the robot is far away from its
									goal, and slow down when you approach your goal. This is
									analogous to driving a car on the road. You may be going "full
									speed" on a road, but when you see a stop sign you slow down
									and gently come to a stop, rather than continue going full
									speed until you pass the stop sign and then slam on the
									brakes. In a PID controller, your distance from the goal is
									referred to as the error, and a simple controller using only
									the proportional term might look like the following.
								</p>
								<pre
									className="line-numbers"
									data-src="/files/robot-code/P-Controller.java"
								></pre>
								<p>
									Finding the value for this{" "}
									<code className="language-java inline">kP</code> can be
									challenging. There is no universal solution for finding the
									perfect value, although there are{" "}
									<a href="https://arduinoplusplus.wordpress.com/2017/06/21/pid-control-experiment-tuning-the-controller/">
										good practical methods
									</a>
									. Generally you start with a small value and increase it until
									the robot starts oscillating. Oscillation refers to the robot
									passing its goal and repeatedly overcorrecting. The graph
									below illustrates this tuning process, where the y axis is the
									position of the robot along some arbitrary axis and the x axis
									is time.
								</p>
								<img
									src={pidVaryingP}
									alt="PID with varying P"
									className="d-block mx-auto my-1 img-fluid"
									style={{maxHeight: "400px"}}
								/>
								<p>
									The ideal value for{" "}
									<code className="language-java inline">kP</code> is the one
									that minimizes the time it takes for the robot to reach its
									goal but doesn't cause oscillation. In the graph above, 0.5
									seems to be a good value. If it was any lower, than it
									wouldn't oscillate, but it would take longer to reach the
									goal.
								</p>
								<br />
								<a href="https://en.wikipedia.org/wiki/Integral">
									<h2 id="pid-i">Integral</h2>
								</a>
								<p>
									There is an inherent problem with this approach, which is that
									sometimes you need a minimum speed. For example, if your robot
									is only one centimeter away from its goal in the example
									above, then the target speed would be 0.002, or 0.2% power to
									the motor. In a real robot, this would be way too little power
									to surpass the friction of the wheels against the ground, so
									the robot wouldn't move at all. That's where the "I" in PID
									comes in: integration.
								</p>
								<p>
									If your robot is stuck just a little too close to its goal for
									the "P" coefficient to make the robot move, you can add up
									your cumulative error. This way, if you end up stuck, the
									robot will gain a value over time. Visually, this can look
									like the robot is slowly fine-tuning its position once it's
									close to the goal. Code for a PID controller with just P and I
									might look like this:
								</p>
								<pre
									className="line-numbers"
									data-src="/files/robot-code/PI-Controller.java"
								></pre>
								<p>
									Once again, the effect of this is best visualized with a
									graph. The integral can help the robot reach the goal faster,
									especially if the robot really starts to slow down towards the
									goal because of the proportion.
								</p>
								<img
									src={pidVaryingI}
									alt="PID with varying I"
									className="d-block mx-auto my-1 img-fluid"
									style={{maxHeight: "400px"}}
								/>
								<br />
								<a href="https://en.wikipedia.org/wiki/Derivative">
									<h2 id="pid-d">Derivative</h2>
								</a>
								<p>
									Lastly, the derivative of the error, or the rate of change in
									the error, can be used to predict the future behavior of the
									robot. In practice, this means that the controller can prevent
									overshoot. In the previous graphs, the position often
									overshoots its goal and ends up oscillating. Honestly, the
									derivative term is not always necessary, and a PI controller
									generally works well. Regardless, it is a useful thing to
									know.
								</p>
								<pre
									className="line-numbers"
									data-src="/files/robot-code/PID-Controller.java"
								></pre>
								<br />
								<h2 id="pid-frc">Usage in FRC</h2>
								<p>
									Fortunately, WPILib has a{" "}
									<a href="https://first.wpi.edu/FRC/roborio/release/docs/java/edu/wpi/first/wpilibj/controller/PIDController.html">
										PID Controller class
									</a>{" "}
									which abstracts this process for you. The code above could be
									rewritten much shorter using the tools that WPILib already
									provides.
								</p>
								<pre
									className="line-numbers"
									data-src="/files/robot-code/PIDControllerWPILib.java"
								></pre>
								<pre
									className="line-numbers"
									data-src="/files/robot-code/CaseBasedClean.java"
								></pre>
								<h2 id="pid-speed">Desired Speed</h2>
								<p>
									So far I've shown how to use PID controllers to autonomously
									go from one location to another. While this is useful, it is
									much more efficiently achieved by using a PID controller to
									set the speed of the motors, not the power on a percentage
									scale. In other words, it's arbitrary to set the motor speeds
									to 1.0, because 1.0 could cause the robot to go faster when
									the battery is fully charged than when the battery has been
									depleted.
								</p>
								<p>
									Therefore, a better experience for the teleoperated controls
									is to map joystick values to a measurable speed, like in the
									code below:
								</p>
								<pre
									className="line-numbers"
									data-src="/files/robot-code/PIDVelocityTeleop.java"
								></pre>
								<p>
									This logic can be abstracted to a function so that you can
									also use it in auton.
								</p>
								<pre
									className="line-numbers"
									data-src="/files/robot-code/PIDVelocity.java"
								></pre>
							</>
						)
					},
					{
						id: "state-machines",
						title: "State Machines",
						children: [{id: "state-machine-ex", title: "Example"}],
						content: (
							<>
								<h1 className="text-center">State Machines</h1>
								<p>
									A{" "}
									<a href="https://en.wikipedia.org/wiki/Finite-state_machine">
										finite state machine
									</a>
									, often referred to simply as a state machine, is an abstract
									machine which is good for describing how a robot can
									autonomously carry out a process. In short, it involves
									abstracting your robot's decisions to a flow chart like the
									one below.
								</p>
								<img
									src={fsmFlowChart}
									alt="FSM Flow Chart"
									className="d-block mx-auto my-1 img-fluid"
									style={{maxHeight: "400px"}}
								/>
								<br />
								<h2 id="state-machine-ex">Example</h2>
								<p>
									As an example, let's say you want the robot to drive forward 5
									meters, pick up a ball, and drive backwards 2 meters. If
									you're coming from experience with a task-based language like
									ROBOTC, you might be tempted to do something like this:
								</p>
								<pre
									className="line-numbers"
									data-src="/files/robot-code/TaskBased.java"
								></pre>
								<p>
									However, in a TimedRobot, this would block all other code from
									running. Instead, you might think of doing it like this:
								</p>
								<pre
									className="line-numbers"
									data-src="/files/robot-code/CaseBased.java"
								></pre>
								<p>
									This is, in fact, a very simple state machine. However, there
									are better ways to write it. Specifically, you'd want to use a{" "}
									<code className="language-java inline">switch</code> statement
									instead of a bunch of{" "}
									<code className="language-java inline">if</code> and{" "}
									<code className="language-java inline">else if</code>{" "}
									statements. Additionally, it's cleaner to use an{" "}
									<code className="language-java inline">enum</code> instead of
									just integers. This state machine would be best written as:
								</p>
								<pre
									className="line-numbers"
									data-src="/files/robot-code/CaseBasedClean.java"
								></pre>
							</>
						)
					}
				]}
			/>
		</>
	);
}
