@Override
public void autonPeriodic() {
	while (getDistance(leftEnc) < 5){
		drive(1, 1);
	}
	pickUpBall();
	while (getDistance(leftEnc) > 3){
		drive(-1, -1);
	}
}
