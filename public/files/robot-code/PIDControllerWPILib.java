// Do all your imports here
// Then import PIDController
import edu.wpi.first.wpilibj.controller.PIDController;

public class Robot extends TimedRobot {
	// Create your other member variables here
	// Then create a PIDController
	private PIDController drivePID;

	@Override
	public void robotInit() {
		// Instantiate your other variables
		// Then instantiate your PIDController
		double kP = 0.2; // Proportion constant
		double kI = 0.01; // Integral constant
		double kD = 0.5; // Derivative constant
		drivePID = new PIDController(kP, kI, kD);
	}

	@Override
	public void autonPeriodic() {
		double goalPos = 1.0;
		double currentPos = getDistance(leftEnc);

		// Use PIDController to compute optimal speed
		// Call the calculate method with the measurement and the goal
		double speed = drivePID.calculate(currentPos, goalPos);

		// Limit max speed
		if (speed > 0.5) speed = 0.5;
		if (speed < -0.5) speed = -0.5;

		sparkLB.set(speed);
		sparkLF.set(speed);
		sparkRB.set(speed);
		sparkRF.set(speed);
	}
}
