package frc.robot;

import com.revrobotics.CANSparkMax;
import com.revrobotics.CANSparkMaxLowLevel.MotorType;

import edu.wpi.first.wpilibj.Joystick;
import edu.wpi.first.wpilibj.TimedRobot;

import edu.wpi.first.wpilibj.controller.PIDController;

public class Robot extends TimedRobot {
	private CANSparkMax sparkLB, sparkLF, sparkRB, sparkRF;
	private Joystick joystick;
	private PIDController leftPID, rightPID;

	// Constants may vary
	private final double L_Kp = 0.5, L_Ki = 0.025, L_Kd = 0.05;
	private final double R_Kp = 0.5, R_Ki = 0.025, R_Kd = 0.05;
	private final double WHEEL_DIAMETER = 0.1524; // in meters
	private final double MAX_DRIVE_SPEED = 2.5; // in meters per second

	@Override
	public void robotInit() {
		// Instantiate joystick
		joystick = new Joystick(JOYSTICK_PORT_NUMBER);

		// Instantiate motor controllers
		sparkLB = new CANSparkMax(LB_PORT_NUMBER, MotorType.kBrushless);
		sparkLF = new CANSparkMax(LF_PORT_NUMBER, MotorType.kBrushless);
		sparkRB = new CANSparkMax(RB_PORT_NUMBER, MotorType.kBrushless);
		sparkRF = new CANSparkMax(RF_PORT_NUMBER, MotorType.kBrushless);

		// Instantiate PID controllers with correct constants
		leftPID = new PIDController(L_Kp, L_Ki, L_Kd);
		rightPID = new PIDController(R_Kp, R_Ki, R_Kd);

		// Instantiate encoders
		leftEnc = sparkLF.getEncoder();
		rightEnc = sparkRF.getEncoder();
	}

	@Override
	public void teleopPeriodic() {
		double leftJoy = joystick.getRawAxis(LEFT_Y_AXIS_NUMBER);
		double rightJoy = joystick.getRawAxis(RIGHT_Y_AXIS_NUMBER);

		// Map joystick axes to measurable speeds
		double leftGoal = leftJoy * MAX_DRIVE_SPEED;
		double rightGoal = rightJoy * MAX_DRIVE_SPEED;

		// Read current velocities
		// Encoders return velocity in RPM, so convert to m/s
		double conversionFactor = Math.PI * WHEEL_DIAMETER / 60.0;
		double leftVelocity = leftEnc.getVelocity() * conversionFactor;
		double rightVelocity = rightEnc.getVelocity() * conversionFactor;

		// Use PIDController to compute motor output
		double leftOutput = leftPID.calculate(leftVelocity, leftGoal);
		double rightOutput = rightPID.calculate(rightVelocity, rightGoal);

		// Set motor speeds
		sparkLB.set(leftOutput);
		sparkLF.set(leftOutput);
		sparkRB.set(rightOutput);
		sparkRF.set(rightOutput);
	}
}
