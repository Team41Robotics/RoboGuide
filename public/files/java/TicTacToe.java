/**
 * Checks if the board is full of X's or O's
 @return True if the board is full
 */
private boolean isFull(){
	for(char[] row : occupied){
		for(char c : row){
			if (c==' '){
				return false;
			}
		}
	}
	return true;
}
