private int state = 0;

@Override
public void autonPeriodic() {
	if (state == 0){ // Drive forward
		drive(1, 1);
		if (getDistance(leftEnc) > 5){
			state = 1;
		}
	} else if (state == 1){
		// Assume pickUpBall is some function
		// that returns a boolean when it's finished
		if (pickUpBall()){
			state = 2;
		}
	} else if (state == 3){ // Drive backwards
		drive(-1, -1);
		if (getDistance(leftEnc) < 3){
			state = 4;
		}
	} else { // Done
		drive(0,0);
	}
}
