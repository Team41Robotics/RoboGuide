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
		controller = new Joystick(Controller Port ###);
	
		sparkLB = new CANSparkMax(LB Port ###, MotorType.kBrushless);
		sparkLF = new CANSparkMax(LF Port ###, MotorType.kBrushless);
		sparkRB = new CANSparkMax(RB Port ###, MotorType.kBrushless);
		sparkRF = new CANSparkMax(RF Port ###, MotorType.kBrushless);
	}
	
	@Override
	public void teleopPeriodic() {
		double leftJoy = controller.getRawAxis(Left Y Axis ###); // From -1 (full reverse) to 1 (full forward)
		double rightJoy = controller.getRawAxis(Right Y Axis ###);

		double speedMultiplier = 0.4; // So we don't go too fast
		sparkLB.set(leftJoy*speedMultiplier); // From -1 (full reverse) to 1 (full forward)
		sparkLF.set(leftJoy*speedMultiplier);
		sparkRB.set(rightJoy*speedMultiplier);
		sparkRF.set(rightJoy*speedMultiplier);
	}
}