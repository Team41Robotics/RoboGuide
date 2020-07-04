private void driveTargetVelocity(leftTarget, rightTarget) {
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

@Override
public void teleopPeriodic() {
	double leftJoy = joystick.getRawAxis(LEFT_Y_AXIS_NUMBER);
	double rightJoy = joystick.getRawAxis(RIGHT_Y_AXIS_NUMBER);
	driveTargetVelocity(leftJoy * MAX_DRIVE_SPEED, rightJoy * MAX_DRIVE_SPEED);
}
