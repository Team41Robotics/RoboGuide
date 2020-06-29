package frc.robot;

import com.revrobotics.CANSparkMax;
import com.revrobotics.CANSparkMaxLowLevel.MotorType;

import edu.wpi.first.wpilibj.Joystick;
import edu.wpi.first.wpilibj.TimedRobot;

public class Robot extends TimedRobot {
	private CANSparkMax sparkLB, sparkLF, sparkRB, sparkRF;
	private Joystick controller;

	@Override
	public void robotInit() {
		controller = new Joystick(JOYSTICK_PORT_NUMBER);

		sparkLB = new CANSparkMax(LB_PORT_NUMBER, MotorType.kBrushless);
		sparkLF = new CANSparkMax(LF_PORT_NUMBER, MotorType.kBrushless);
		sparkRB = new CANSparkMax(RB_PORT_NUMBER, MotorType.kBrushless);
		sparkRF = new CANSparkMax(RF_PORT_NUMBER, MotorType.kBrushless);
	}

	@Override
	public void teleopPeriodic() {
		double leftJoy = controller.getRawAxis(LEFT_Y_AXIS_NUMBER); // From -1 (full reverse) to 1 (full forward)
		double rightJoy = controller.getRawAxis(RIGHT_Y_AXIS_NUMBER);

		double speedMultiplier = 0.4; // So we don't go too fast
		sparkLB.set(leftJoy*speedMultiplier); // From -1 (full reverse) to 1 (full forward)
		sparkLF.set(leftJoy*speedMultiplier);
		sparkRB.set(rightJoy*speedMultiplier);
		sparkRF.set(rightJoy*speedMultiplier);
	}
}
