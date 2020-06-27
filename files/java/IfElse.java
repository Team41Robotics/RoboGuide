class IfElse {
	public static void main(String[] args) {
		// We often only want to execute certain code if a specific condition is met
		// For example, if we had a robotic ball-grabbing arm, we only want to activate it when it will grab the ball
		boolean closeToBall = true, linedUp = false;
		// This is called an if statement. It will execute the code inside if the condition in parantheses is true
		// This condition must evaluate to a boolean value
		if(closeToBall && linedUp) {
			// Grab ball
		}
		// Let's say we're close to the ball but not lined up
		// In this case, we would use an else if statement
		// else if statements must directly follow if statements or other else if statements
		else if(closeToBall) {
			// Rotate to line up arm
		}
		else if(linedUp) {
			// Move towards ball
		}
		// An else statement will only run if none of the conditions for the if or else-if statements are true
		else {
			// Move towards ball and rotate
		}
		
		// Sometimes the code we put inside an if or else statement is only one line,
		// and it can be annoying (and reduce code ligiblity) to construct the curly braces for that
		int minValue = 10, test1 = 5, test2 = 2;
		// The following two methods also work
		if(test1 < minValue)
			minValue = test1; // Make sure this line is indented!
		if(test2 < minValue) minValue = test2; // Only use this if the code inside is short and simple
		// Else if and else statements can also be constructed the same way
		
		// If and else statements are a valuable powerful tool in any programming language!
	}
}