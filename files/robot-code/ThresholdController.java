// Simple threshold controller
@Override
public void autonPeriodic() {
	double distance = getDistance(leftEnc);

	// If we haven't driven 1 meter, keep driving
	if (distance < 1.0){
		sparkLB.set(0.4);
		sparkLF.set(0.4);
		sparkRB.set(0.4);
		sparkRF.set(0.4);
	}
	// We've driven 1 meter, so stop
	else {
		sparkLB.set(0.0);
		sparkLF.set(0.0);
		sparkRB.set(0.0);
		sparkRF.set(0.0);
	}
}
