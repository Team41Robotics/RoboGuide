package frc.robot;

import com.revrobotics.CANEncoder;
import com.revrobotics.CANSparkMax;
import com.revrobotics.CANSparkMaxLowLevel.MotorType;

import edu.wpi.first.wpilibj.Joystick;
import edu.wpi.first.wpilibj.TimedRobot;

public class Robot extends TimedRobot {
	/* Declare your Spark Max objects and joystick here, like above */

	private CANEncoder leftEnc, rightEnc;

	@Override
	public void robotInit() {
		/* Create your joystick and Spark Max objects, like above */

		// Instantiate encoders from the Spark Max objects
		leftEnc = sparkLF.getEncoder();
		rightEnc = sparkRF.getEncoder();
	}

	public float getDistance(CANEncoder enc) {
		/*
		* We need to know the resolution of the encoder to
		* figure out how many times the wheel has turned.
		* If the encoder has a resolution of 42 counts per
		* revolution, than an encoder value of 42 means the
		* motor axel has turned one full rotation. Some
		* encoders simply return the number of motor rotations.
		*/
		double encoderRes = 1.0; // The NEO motor returns the number of rotations

		/*
		* Let's say the encoder is mounted on the motor.
		* Maybe the motor gears have a gear ratio of 12:1.
		* This means that for every 12 times the motor turns,
		* the wheel turns once.
		*/
		double gearRatio = 12.0;

		/*
		* We also need to know the radius (or diameter) of
		* the wheels the robot is using, so that we can
		* convert the number of wheel rotations into a
		* distance on the playing field. Let's say the wheel
		* has a diameter of 6 inches, or 0.1524 meters.
		*/
		double wheelDiameter = 0.1524;

		// Now we can find the distance with unit conversions
		double numMotorTurns = enc.getPosition() / encoderRes;
		double numWheelTurns = numMotorTurns / gearRatio;
		double wheelCircumference = wheelDiameter * Math.PI;
		double wheelDistance = numWheelTurns * wheelCircumference;
		return wheelDistance;
	}

	@Override
	public void teleopPeriodic() {
		/* Insert your driving code here, like above */

		double leftDistance = getDistance(leftEnc);
		double rightDistance = getDistance(rightEnc);
		System.out.println("The left wheel has driven " + leftDistance + " meters");
		System.out.println("The right wheel has driven " + rightDistance + " meters");

		// Wheel base is the width fo the robot, measured from left wheel to right wheel
		double wheelBase = 0.3048;

		/*
		* Using some trigonometry, you can estimate
		* where you are, relative to where you started.
		* Specifically, this math applies to a differential
		* drive (like tank drive).
		*/
		double arcLength = (leftDistance + rightDistance) / 2;
		double deltaTheta = (rightDistance - leftDistance) / (2 * wheelBase);
		double deltaX = arcLength * Math.cos(deltaTheta / 2);
		double deltaY = arcLength * Math.sin(deltaTheta / 2);

		System.out.println("Relative pose:");
		System.out.println("	x = " + deltaX + " meters");
		System.out.println("	y = " + deltaY + " meters");
		System.out.println("	yaw = " + Math.toDegrees(deltaTheta) + " degrees");
	}
}
