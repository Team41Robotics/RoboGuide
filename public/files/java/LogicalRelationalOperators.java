class LogicalRelationalOperators {
	public static void main(String[] args) {
		boolean a = true, b = false;
		// The exclamation point makes the value of a boolean expression the opposite
		boolean c = !false;
		boolean d = !b;
		// The '==' operator checks if two expressions or variables have the same value
		// It is VERY important that you remember the difference between '=' and '=='
		// '=' is used to assign a variable, and '==' checks if two expressions are equal
		boolean e = c == d; // This will be true
		int num1 = 10;
		boolean f = num1 == 10; // This will be true
		// The values of numbers can be compared using relational operators:
		// == (equal to), != (not equal to), < (less than), > (greater than), <= (less than or equal to), >= (greater than or equal to)
		// The relational operators above compare two values and return a boolean
		
		// But what do you if you have more than two values?
		// When comparing multiple values you'll want to use 'and' or 'or' operators
		// In Java, these are '&&' and '||', respectively
		// To type the '|' symbol, press shift -> backslash
		// For example, let's say we're deciding whether we should sleep in late
		boolean isWeekend = false, onVacation = true;
		// If it's a weekend OR we're on vacation, then we can sleep in late
		boolean sleepIn = isWeekend || onVacation;
		// Or let's say we're deciding if we should eat a cookie
		boolean haveCookie = true, hungry = false;
		// We'll only eat a cookie if we have one AND are hungry
		boolean eatCookie = haveCookie && hungry;
		
		// It's also possible to combine multiple expressions with parentheses
		boolean goodDay = onVacation || (isWeekend && eatCookie);
	}
}