// Controller with just "P"
@Override
public void autonPeriodic() {
	double error = getDistance(leftEnc);

	// Set speed proportionally to error (distance to goal)
	double kP = 0.2; // Proportion constant
	double speed = kP * error;

	// Limit max speed
	if (speed > 0.5) speed = 0.5;
	if (speed < -0.5) speed = -0.5;

	sparkLB.set(speed);
	sparkLF.set(speed);
	sparkRB.set(speed);
	sparkRF.set(speed);
}
