import React from "react";
import { Helmet } from "react-helmet";
import TrackedBlockPage from "./TrackedBlockPage";

import talonSRX from "../img/talonSRX.jpg";
import talonFX from "../img/talonFX.png";
import sparkMax from "../img/sparkMax.png";
import servoImg from "../img/servo.jpg";
import joystickImg from "../img/joystick.jpg";
import robotImg from "../img/blur.jpg";

export default function(props) {
  return (
    <>
      <Helmet>
        <title>Hardware Guide</title>
      </Helmet>
      <TrackedBlockPage
        id="hardware"
        header={
          <>
            <h1>Hardware</h1>
            <img
              src={robotImg}
              className="img-fluid rounded mb-5"
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
                        <span className="code">
                          TalonSRX exampleTalon = new TalonSRX(
                          <span
                            data-toggle="popover"
                            data-content="Found in Phoenix Tuner"
                            data-placement="top"
                          >
                            PORT
                          </span>
                          )
                        </span>
                      </li>
                      <li>
                        How to import:{" "}
                        <span className="code">
                          import com.ctre.phoenix.motorcontrol.can.TalonSRX
                        </span>
                      </li>
                      <li>
                        Example uses:
                        <ul>
                          <li>
                            Go forward (half speed):{" "}
                            <span className="code">
                              exampleTalon.set(ControlMode.PercentOutput, 0.5)
                            </span>
                          </li>
                          <li>
                            Stop:{" "}
                            <span className="code">
                              exampleTalon.set(ControlMode.PercentOutput, 0)
                            </span>
                          </li>
                          <li>
                            Go backward (full speed):{" "}
                            <span className="code">
                              exampleTalon.set(ControlMode.PercentOutput, -1)
                            </span>
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
                            <span className="code">
                              import com.ctre.phoenix.motorcontrol.ControlMode
                            </span>
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
                        <span className="code">
                          TalonFX exampleTalon = new TalonFX(
                          <span
                            data-toggle="popover"
                            data-content="Found in Phoenix Tuner"
                            data-placement="top"
                          >
                            PORT
                          </span>
                          )
                        </span>
                      </li>
                      <li>
                        How to import:{" "}
                        <span className="code">
                          import com.ctre.phoenix.motorcontrol.can.TalonFX
                        </span>
                      </li>
                      <li>
                        Example uses:
                        <ul>
                          <li>
                            Go forward (half speed):{" "}
                            <span className="code">
                              exampleTalon.set(ControlMode.PercentOutput, 0.5)
                            </span>
                          </li>
                          <li>
                            Stop:{" "}
                            <span className="code">
                              exampleTalon.set(ControlMode.PercentOutput, 0)
                            </span>
                          </li>
                          <li>
                            Go backward (full speed):{" "}
                            <span className="code">
                              exampleTalon.set(ControlMode.PercentOutput, -1)
                            </span>
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
                            <span className="code">
                              import com.ctre.phoenix.motorcontrol.ControlMode
                            </span>
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
                        <span className="code">
                          SparkMax exampleSpark = new CANSparkMax(
                          <span
                            data-toggle="popover"
                            data-content="Found in Spark Max Client"
                            data-placement="top"
                          >
                            PORT
                          </span>
                          , MotorType.kBrushless)
                        </span>
                      </li>
                      <li>
                        How to import:{" "}
                        <span className="code">
                          import com.revrobotics.CANSparkMax
                        </span>
                      </li>
                      <li>
                        Example uses:
                        <ul>
                          <li>
                            Go forward (half speed):{" "}
                            <span className="code">exampleSpark.set(0.5)</span>
                          </li>
                          <li>
                            Stop:{" "}
                            <span className="code">exampleSpark.set(0)</span>
                          </li>
                          <li>
                            Go backward (full speed):{" "}
                            <span className="code">exampleSpark.set(-1)</span>
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
                            <span className="code">
                              import
                              com.revrobotics.CANSparkMaxLowLevel.MotorType
                            </span>
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
                        <span className="code">
                          Servo exampleServo = new Servo(
                          <span
                            data-toggle="popover"
                            data-content="Where it's plugged into the RIO"
                            data-placement="top"
                          >
                            PORT
                          </span>
                          )
                        </span>
                      </li>
                      <li>
                        How to import:{" "}
                        <span className="code">
                          import edu.wpi.first.wpilibj.Servo
                        </span>
                      </li>
                      <li>
                        Example uses:
                        <ul>
                          <li>
                            Set the servo to the position all the way to the
                            left:{" "}
                            <span className="code">exampleServo.set(0)</span>
                          </li>
                          <li>
                            Set the servo to the position halfway between its
                            max left and right values:{" "}
                            <span className="code">exampleServo.set(0.5)</span>
                          </li>
                          <li>
                            Set angle of rotation to 20&#176;:{" "}
                            <span className="code">
                              exampleServo.setAngle(20)
                            </span>
                          </li>
                          <li>
                            Set angle of rotation to &pi;/4 rad:{" "}
                            <span className="code">
                              exampleServo.setAngle(Math.toDegrees(Math.PI / 4))
                            </span>
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
                        <span className="code">
                          Joystick exampleJoy = new Joystick(
                          <span
                            data-toggle="popover"
                            data-content="Found in FRC Driverstation USB devices tab"
                            data-placement="top"
                          >
                            PORT
                          </span>
                          )
                        </span>
                      </li>
                      <li>
                        How to import:{" "}
                        <span className="code">
                          import edu.wpi.first.wpilibj.Joystick;
                        </span>
                      </li>
                      <li>
                        Example uses:
                        <ul>
                          <li>
                            Check if button <i>n</i> is currently pressed:{" "}
                            <span className="code">
                              exampleJoy.getRawButton(n)
                            </span>
                          </li>
                          <li>
                            Check if button <i>n</i> has been pressed since the
                            last time you checked:{" "}
                            <span className="code">
                              exampleJoy.getRawButtonPressed(n)
                            </span>
                          </li>
                          <li>
                            Get the value of axis <i>n</i> (from -1 to 1):{" "}
                            <span className="code">
                              exampleJoy.getRawAxis(n)
                            </span>
                          </li>
                          <li>
                            Get the value of the{" "}
                            <a href="https://en.wikipedia.org/wiki/Joystick#Hat_switch">
                              POV hat
                            </a>{" "}
                            (aka D-Pad):{" "}
                            <span className="code">exampleJoy.getPOV()</span>
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
          }
        ]}
      />
    </>
  );
}
