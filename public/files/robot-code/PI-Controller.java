// Controller with just "P" and "I"
private errorSum = 0.0;

@Override
public void autonPeriodic() {
	double goal = 1.0;
	double error = goal - getDistance(leftEnc);
	errorSum += error;

	// Set speed proportionally to error (distance to goal) and integral
	double kP = 0.2; // Proportion constant
	double kI = 0.01; // Integral constant
	double speed = kP * error + kI * errorSum;

	// Limit max speed
	if (speed > 0.5) speed = 0.5;
	if (speed < -0.5) speed = -0.5;

	sparkLB.set(speed);
	sparkLF.set(speed);
	sparkRB.set(speed);
	sparkRF.set(speed);
}
