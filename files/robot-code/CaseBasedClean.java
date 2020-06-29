private enum AUTON_STATE {
	RESET, DRIVING_FORWARDS, PICKING_UP_BALL, DRIVING_BACKWARDS, DONE
};
private AUTON_STATE state = AUTON_STATE.RESET;

@Override
public void autonPeriodic() {
	switch (state){
		// Best practice is to have some "do nothing" state
		case AUTON_STATE.RESET:
			state = AUTON_STATE.DRIVING_FORWARDS;
			break;
		case AUTON_STATE.DRIVING_FORWARDS:
			drive(1, 1);
			if (getDistance(leftEnc) > 5){
				state = AUTON_STATE.PICKING_UP_BALL;
			}
			break;
		case AUTON_STATE.PICKING_UP_BALL:
			drive(0, 0);
			if (pickUpBall()){
				state = AUTON_STATE.DRIVING_BACKWARDS;
			}
			break;
		case AUTON_STATE.DRIVING_BACKWARDS:
			drive(-1, -1);
			if (getDistance(leftEnc) < 3){
				state = AUTON_STATE.DONE;
			}
			break;
		case AUTON_STATE.DEFAULT:
			drive(0, 0);
			break;
	}
}
