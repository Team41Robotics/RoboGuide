import React, {useEffect} from "react";
import {Helmet} from "react-helmet";
import Prism from "prismjs";
import TrackedBlockPage from "./TrackedBlockPage";

import talonSRX from "../img/talonSRX.jpg";
import talonFX from "../img/talonFX.png";
import sparkMax from "../img/sparkMax.png";
import servoImg from "../img/servo.jpg";
import joystickImg from "../img/joystick.jpg";
import pneumaticsDiagram from "../img/pneumaticsDiagram.png";
import pcm from "../img/pcm.jpg";
import robotImg from "../img/banners/hardwareBanner.jpg";

export default function (props) {
	useEffect(() => {
		Prism.highlightAll();
	});

	return (
		<>
			<Helmet>
				<title>Robot Hardware | RoboGuide</title>
			</Helmet>
			<TrackedBlockPage
				id="hardware"
				header={
					<>
						<h1>Robot Hardware</h1>
						<img
							src={robotImg}
							className="img-fluid rounded mb-5 bannerImg"
							alt="Robot"
						/>
					</>
				}
				blocks={[
					{
						id: "talon-srx",
						title: "Talon SRX",
						content: (
							<>
								<h2 className="text-center">
									<a href="https://www.ctr-electronics.com/talon-srx.html">
										Talon SRX
									</a>
								</h2>
								<div className="row">
									<div className="col-12 col-md-3  mb-2 mb-md-0 pr-md-0 text-center">
										<img src={talonSRX} alt="Talon SRX" className="img-fluid" />
									</div>
									<div className="col-12 col-md-9 pl-0 text-break">
										<ul>
											<li>
												The Talon SRX is a motorcontroller for use with brushed
												motors
											</li>
											<li>
												Documentation:{" "}
												<a href="http://www.ctr-electronics.com/downloads/api/java/html/classcom_1_1ctre_1_1phoenix_1_1motorcontrol_1_1can_1_1_talon_s_r_x.html">
													http://www.ctr-electronics.com/downloads/api/java/html/classcom_1_1ctre_1_1phoenix_1_1motorcontrol_1_1can_1_1_talon_s_r_x.html
												</a>
											</li>
											<li>
												Specs:{" "}
												<a href="https://www.ctr-electronics.com/talon-srx.html#product_tabs_tech_specs">
													https://www.ctr-electronics.com/talon-srx.html#product_tabs_tech_specs
												</a>
											</li>
											<li>
												Firmware:{" "}
												<a href="https://www.ctr-electronics.com/talon-srx.html#product_tabs_technical_resources">
													https://www.ctr-electronics.com/talon-srx.html#product_tabs_technical_resources
												</a>
											</li>
											<li>
												Setup: Phoenix Tuner
												<ul>
													<li>Wireless: Yes</li>
												</ul>
											</li>
											<br />
											<li>
												Example from code: The shooterIntakeTalon in the{" "}
												<a href="https://github.com/Team41Robotics/2020-Robot-Code/blob/master/02_FinalRobot/src/main/java/frc/robot/Intake.java">
													Intake class
												</a>{" "}
												from 2020
											</li>
											<li>
												How to instantiate:{" "}
												<code className="inline language-java">
													TalonSRX exampleTalon = new TalonSRX(PORT)
												</code>
											</li>
											<ul>
												<li>
													The value for{" "}
													<code className="inline language-java">PORT</code> can
													be found in Phoenix Tuner
												</li>
											</ul>
											<li>
												How to import:{" "}
												<code className="inline language-java">
													import com.ctre.phoenix.motorcontrol.can.TalonSRX
												</code>
											</li>
											<li>
												Example uses:
												<ul>
													<li>
														Go forward (half speed):{" "}
														<code className="inline language-java">
															exampleTalon.set(ControlMode.PercentOutput, 0.5)
														</code>
													</li>
													<li>
														Stop:{" "}
														<code className="inline language-java">
															exampleTalon.set(ControlMode.PercentOutput, 0)
														</code>
													</li>
													<li>
														Go backward (full speed):{" "}
														<code className="inline language-java">
															exampleTalon.set(ControlMode.PercentOutput, -1)
														</code>
													</li>
												</ul>
											</li>
											<li>
												Other Notes:
												<ul>
													<li>
														You also have to import the{" "}
														<a href="http://www.ctr-electronics.com/downloads/api/java/html/enumcom_1_1ctre_1_1phoenix_1_1motorcontrol_1_1_control_mode.html">
															ControlMode
														</a>{" "}
														class:{" "}
														<code className="inline language-java">
															import com.ctre.phoenix.motorcontrol.ControlMode
														</code>
													</li>
													<li>
														Port numbers are found in the "CAN Devices" tab of
														Phoenix Tuner
													</li>
												</ul>
											</li>
										</ul>
									</div>
								</div>
							</>
						)
					},
					{
						id: "talon-fx",
						title: "Talon FX",
						content: (
							<>
								<h2 className="text-center">
									<a href="https://www.ctr-electronics.com/talon-fx.html">
										Talon FX
									</a>
								</h2>
								<div className="row">
									<div className="col-12 col-md-3  mb-2 mb-md-0 pr-md-0 text-center">
										<img src={talonFX} alt="Talon FX" className="img-fluid" />
									</div>
									<div className="col-12 col-md-9 pl-0 text-break">
										<ul>
											<li>
												The Talon FX is a motorcontroller for use with brushless
												motors. It is integrated into the Falcon 500 motor.
											</li>
											<li>
												Documentation:{" "}
												<a href="http://www.ctr-electronics.com/downloads/api/java/html/classcom_1_1ctre_1_1phoenix_1_1motorcontrol_1_1can_1_1_talon_f_x.html">
													http://www.ctr-electronics.com/downloads/api/java/html/classcom_1_1ctre_1_1phoenix_1_1motorcontrol_1_1can_1_1_talon_f_x.html
												</a>
											</li>
											<li>
												Specs:{" "}
												<a href="https://www.ctr-electronics.com/talon-fx.html#product_tabs_tech_specs">
													https://www.ctr-electronics.com/talon-fx.html#product_tabs_tech_specs
												</a>
											</li>
											<li>
												Firmware:{" "}
												<a href="https://www.ctr-electronics.com/talon-fx.html#product_tabs_technical_resources">
													https://www.ctr-electronics.com/talon-fx.html#product_tabs_technical_resources
												</a>
											</li>
											<li>
												Setup: Phoenix Tuner
												<ul>
													<li>Wireless: Yes</li>
												</ul>
											</li>
											<br />
											<li>
												Example from code: The falconTalon in the{" "}
												<a href="https://github.com/Team41Robotics/2020-Robot-Code/blob/master/02_FinalRobot/src/main/java/frc/robot/Turret.java">
													Turret class
												</a>{" "}
												from 2020
											</li>
											<li>
												How to instantiate:{" "}
												<code className="inline language-java">
													TalonFX exampleTalon = new TalonFX(PORT)
												</code>
											</li>
											<ul>
												<li>
													The value for{" "}
													<code className="inline language-java">PORT</code> can
													be found in Phoenix Tuner
												</li>
											</ul>
											<li>
												How to import:{" "}
												<code className="inline language-java">
													import com.ctre.phoenix.motorcontrol.can.TalonFX
												</code>
											</li>
											<li>
												Example uses:
												<ul>
													<li>
														Go forward (half speed):{" "}
														<code className="inline language-java">
															exampleTalon.set(ControlMode.PercentOutput, 0.5)
														</code>
													</li>
													<li>
														Stop:{" "}
														<code className="inline language-java">
															exampleTalon.set(ControlMode.PercentOutput, 0)
														</code>
													</li>
													<li>
														Go backward (full speed):{" "}
														<code className="inline language-java">
															exampleTalon.set(ControlMode.PercentOutput, -1)
														</code>
													</li>
												</ul>
											</li>
											<li>
												Other Notes:
												<ul>
													<li>
														You also have to import the{" "}
														<a href="http://www.ctr-electronics.com/downloads/api/java/html/enumcom_1_1ctre_1_1phoenix_1_1motorcontrol_1_1_control_mode.html">
															ControlMode
														</a>{" "}
														class:{" "}
														<code className="inline language-java">
															import com.ctre.phoenix.motorcontrol.ControlMode
														</code>
													</li>
													<li>
														Port numbers are found in the "CAN Devices" tab of
														Phoenix Tuner
													</li>
												</ul>
											</li>
										</ul>
									</div>
								</div>
							</>
						)
					},
					{
						id: "spark-max",
						title: "Spark Max",
						content: (
							<>
								<h2 className="text-center">
									<a href="https://www.revrobotics.com/rev-11-2158/">
										Spark Max
									</a>
								</h2>
								<div className="row">
									<div className="col-12 col-md-3  mb-2 mb-md-0 pr-md-0 text-center">
										<img src={sparkMax} alt="Spark Max" className="img-fluid" />
									</div>
									<div className="col-12 col-md-9 pl-0 text-break">
										<ul>
											<li>
												The Spark Max is a motorcontroller for use with
												brushless motors
											</li>
											<li>
												Documentation:{" "}
												<a href="https://www.revrobotics.com/content/sw/max/sw-docs/java/com/revrobotics/SparkMax.html">
													https://www.revrobotics.com/content/sw/max/sw-docs/java/com/revrobotics/SparkMax.html
												</a>
											</li>
											<li>Specs: In product description</li>
											<li>
												Firmware:{" "}
												<a href="https://www.revrobotics.com/sparkmax-software/#spark-max-firmware-updates">
													https://www.revrobotics.com/sparkmax-software/#spark-max-firmware-updates
												</a>
											</li>
											<li>
												Setup:{" "}
												<a href="https://www.revrobotics.com/sparkmax-software/#spark-max-client-application">
													Spark Max Client
												</a>
												<ul>
													<li>
														Wireless: No. Must plug into USB-C port on the
														spark. (Can configure multiple sparks at once while
														they are connected via the CAN bus. Requires client
														version ≥ 2.0)
													</li>
												</ul>
											</li>
											<br />
											<li>
												Example from code: The sparks in the{" "}
												<a href="https://github.com/Team41Robotics/2020-Robot-Code/blob/master/02_FinalRobot/src/main/java/frc/robot/Driving.java">
													Driving class
												</a>{" "}
												from 2020
											</li>
											<li>
												How to instantiate:{" "}
												<code className="inline language-java">
													SparkMax exampleSpark = new CANSparkMax(PORT,
													MotorType.kBrushless)
												</code>
											</li>
											<ul>
												<li>
													The value for{" "}
													<code className="inline language-java">PORT</code> can
													be found in the Spark Max Client
												</li>
											</ul>
											<li>
												How to import:{" "}
												<code className="inline language-java">
													import com.revrobotics.CANSparkMax
												</code>
											</li>
											<li>
												Example uses:
												<ul>
													<li>
														Go forward (half speed):{" "}
														<code className="inline language-java">
															exampleSpark.set(0.5)
														</code>
													</li>
													<li>
														Stop:{" "}
														<code className="inline language-java">
															exampleSpark.set(0)
														</code>
													</li>
													<li>
														Go backward (full speed):{" "}
														<code className="inline language-java">
															exampleSpark.set(-1)
														</code>
													</li>
												</ul>
											</li>
											<li>
												Other Notes:
												<ul>
													<li>
														You also have to import the{" "}
														<a href="https://www.revrobotics.com/content/sw/max/sw-docs/java/com/revrobotics/CANSparkMaxLowLevel.MotorType.html">
															MotorType
														</a>{" "}
														class:{" "}
														<code className="inline language-java">
															import
															com.revrobotics.CANSparkMaxLowLevel.MotorType
														</code>
													</li>
													<li>
														Port numbers are found in the main page of the Spark
														Max client while connected over USB
													</li>
												</ul>
											</li>
										</ul>
									</div>
								</div>
							</>
						)
					},
					{
						id: "servo",
						title: "Servo",
						content: (
							<>
								<h2 className="text-center">
									<a href="https://en.wikipedia.org/wiki/Servomotor">Servo</a>
								</h2>
								<div className="row">
									<div className="col-12 col-md-3  mb-2 mb-md-0 pr-md-0 text-center">
										<img src={servoImg} alt="Servo" className="img-fluid" />
									</div>
									<div className="col-12 col-md-9 pl-0 text-break">
										<ul>
											<li>
												A servo is a small motor that utilizes{" "}
												<a href="https://en.wikipedia.org/wiki/Pulse-width_modulation">
													PWM
												</a>
											</li>
											<li>
												Documentation:{" "}
												<a href="https://first.wpi.edu/FRC/roborio/beta/docs/java/edu/wpi/first/wpilibj/Servo.html">
													https://first.wpi.edu/FRC/roborio/beta/docs/java/edu/wpi/first/wpilibj/Servo.html
												</a>
											</li>
											<li>Setup: Plug into PWM port on RoboRIO</li>
											<br />
											<li>
												Example from code: The hoodServo in the{" "}
												<a href="https://github.com/Team41Robotics/2020-Robot-Code/blob/master/02_FinalRobot/src/main/java/frc/robot/Hood.java">
													Hood class
												</a>{" "}
												from 2020
											</li>
											<li>
												How to instantiate:{" "}
												<code className="inline language-java">
													Servo exampleServo = new Servo(PORT)
												</code>
											</li>
											<ul>
												<li>
													The value for{" "}
													<code className="inline language-java">PORT</code> is
													where it's plugged into the RIO
												</li>
											</ul>
											<li>
												How to import:{" "}
												<code className="inline language-java">
													import edu.wpi.first.wpilibj.Servo
												</code>
											</li>
											<li>
												Example uses:
												<ul>
													<li>
														Set the servo to the position all the way to the
														left:{" "}
														<code className="inline language-java">
															exampleServo.set(0)
														</code>
													</li>
													<li>
														Set the servo to the position halfway between its
														max left and right values:{" "}
														<code className="inline language-java">
															exampleServo.set(0.5)
														</code>
													</li>
													<li>
														Set angle of rotation to 20&#176;:{" "}
														<code className="inline language-java">
															exampleServo.setAngle(20)
														</code>
													</li>
													<li>
														Set angle of rotation to &pi;/4 rad:{" "}
														<code className="inline language-java">
															exampleServo.setAngle(Math.toDegrees(Math.PI / 4))
														</code>
													</li>
												</ul>
											</li>
										</ul>
									</div>
								</div>
							</>
						)
					},
					{
						id: "joystick",
						title: "Joystick",
						content: (
							<>
								<h2 className="text-center">Joystick</h2>
								<div className="row">
									<div className="col-12 col-md-3  mb-2 mb-md-0 pr-md-0 text-center">
										<img
											src={joystickImg}
											alt="Joystick"
											className="img-fluid"
										/>
									</div>
									<div className="col-12 col-md-9 pl-0 text-break">
										<ul>
											<li>
												The Joystick class is used to access usb game
												controllers
											</li>
											<li>
												Documentation:{" "}
												<a href="https://first.wpi.edu/FRC/roborio/release/docs/java/edu/wpi/first/wpilibj/Joystick.html">
													https://first.wpi.edu/FRC/roborio/release/docs/java/edu/wpi/first/wpilibj/Joystick.html
												</a>
											</li>
											<br />
											<li>
												Example from code: The joysticks in the{" "}
												<a href="https://github.com/Team41Robotics/2020-Robot-Code/blob/master/02_FinalRobot/src/main/java/frc/robot/Driving.java">
													Driving class
												</a>{" "}
												from 2020
											</li>
											<li>
												How to instantiate:{" "}
												<code className="inline language-java">
													Joystick exampleJoy = new Joystick(PORT)
												</code>
											</li>
											<ul>
												<li>
													The value for{" "}
													<code className="inline language-java">PORT</code> can
													be found in the FRC Driverstation USB devices tab
												</li>
											</ul>
											<li>
												How to import:{" "}
												<code className="inline language-java">
													import edu.wpi.first.wpilibj.Joystick;
												</code>
											</li>
											<li>
												Example uses:
												<ul>
													<li>
														Check if button <i>n</i> is currently pressed:{" "}
														<code className="inline language-java">
															exampleJoy.getRawButton(n)
														</code>
													</li>
													<li>
														Check if button <i>n</i> has been pressed since the
														last time you checked:{" "}
														<code className="inline language-java">
															exampleJoy.getRawButtonPressed(n)
														</code>
													</li>
													<li>
														Get the value of axis <i>n</i> (from -1 to 1):{" "}
														<code className="inline language-java">
															exampleJoy.getRawAxis(n)
														</code>
													</li>
													<li>
														Get the value of the{" "}
														<a href="https://en.wikipedia.org/wiki/Joystick#Hat_switch">
															POV hat
														</a>{" "}
														(aka D-Pad):{" "}
														<code className="inline language-java">
															exampleJoy.getPOV()
														</code>
													</li>
												</ul>
											</li>
											<li>
												Other Notes:
												<ul>
													<li>
														To find the port of the Joystick, go into the USB
														devices tab of the driverstation. You can drag the
														joysticks to the number you want. You can also
														double click on them to lock them there so they will
														have the same port number even if they're unplugged
														and replugged.
													</li>
													<li>
														To find button numbers for a Joystick, do the
														following:
														<ol>
															<li>Open control panel</li>
															<li>
																Go to "Hardware and sound" &#8594; "View devices
																and printers"
															</li>
															<li>Right click a joystick</li>
															<li>Click "Game controller settings"</li>
															<li>Select your game controller</li>
															<li>Click "Properties"</li>
															<li>Go to "Test" tab</li>
															<li>View button numbers</li>
														</ol>
													</li>
													<li>
														To find axis numbers for Joystick, either:
														<ul>
															<li>Follow the same procedure as the buttons</li>
															<li>
																Or go into the USB devices tab of the
																driverstation
															</li>
														</ul>
													</li>
												</ul>
											</li>
										</ul>
									</div>
								</div>
							</>
						)
					},
					{
						id: "pneumatics",
						title: "Pneumatics",
						children: [{id: "pcm", title: "PCM"}],
						content: (
							<>
								<h2 className="text-center">
									<a href="https://en.wikipedia.org/wiki/Pneumatics">
										Pneumatics
									</a>
								</h2>
								<div className="row">
									<div className="col-12 col-md-3  mb-2 mb-md-0 pr-md-0 text-center">
										<img
											src={pneumaticsDiagram}
											alt="Pneumatics diagram"
											className="img-fluid"
										/>
									</div>
									<div
										className="col-12 col-md-9 pl-0 text-break"
										style={{fontSize: "larger"}}
									>
										<ul>
											<li>
												Pneumatics is the use of air and pressure in making
												certain components on the robot function
											</li>
											<li>
												While it isn’t always a part of our team’s designs, it’s
												still important to learn!
											</li>
											<li>
												Pneumatics requires different materials than used on a
												standard electrical board
											</li>
											<li>
												You can think of it as electrical wiring, but with air.
												Air is taken from the environemnt, compressed, and
												stored in a tank for use. This high pressure allows it
												to perform tasks such as engaging a piston.
											</li>
										</ul>
									</div>
								</div>
								<h3 className="mt-3">Components:</h3>
								<div className="subrow p-3 rounded" id="pcm">
									<h3 className="text-center">
										<a href="http://www.ctr-electronics.com/pcm.html">PCM</a>
									</h3>
									<div className="row">
										<div className="col-12 col-md-3  mb-2 mb-md-0 pr-md-0 text-center">
											<img
												src={pcm}
												alt="Pneumatics control module"
												className="img-fluid"
											/>
										</div>
										<div className="col-12 col-md-9 pl-0 text-break">
											<ul>
												<li>
													The Pneumatics Control Module, or PCM for short, is a
													small device that regulates the voltage being sent to
													components of the robot including the compressor and
													any solenoids.
												</li>
												<li>
													Specs:{" "}
													<a href="http://www.ctr-electronics.com/pcm.html#product_tabs_tech_specs">
														http://www.ctr-electronics.com/pcm.html#product_tabs_tech_specs
													</a>
												</li>
												<li>
													Firmware:{" "}
													<a href="http://www.ctr-electronics.com/pcm.html#product_tabs_technical_resources">
														http://www.ctr-electronics.com/pcm.html#product_tabs_technical_resources
													</a>
												</li>
												<li>
													Setup: Phoenix Tuner
													<ul>
														<li>Wireless: Yes</li>
													</ul>
												</li>
												<li>
													Important Note: The port number you configure in
													Phoenix Tuner is what you will pass to your pneumatics
													devices in the code when they ask for the PCM port.
												</li>
											</ul>
										</div>
									</div>
								</div>
							</>
						)
					}
				]}
			/>
		</>
	);
}
