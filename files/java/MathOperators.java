class MathOperators {
	public static void main(String[] args) {
		int a = 1, b = 5, c = 10;
		// These operators are pretty self explanatory:
		int d = a + b; // d = 6
		int e = a - b; // e = -5
		int f = b * c; // f = 50
		// When performing division with integer (non-floating point) numbers
		// in Java, the result gets rounded down to the nearest whole number
		// This is VERY important to remember when choosing whether to use integers or doubles for your variables
		// For example, 5 / 10 = 0.5, which gets rounded down to 0.   5 / 4 = 1.25, which gets rounded down to 1
		int g = c / b; // g = 2
		// This next operator is called modulus (mod for short)
		// What it does is find the remainder of the division of the two numbers
		// For example, 20 / 7 = 2 remainder 6, so 20 % 7 = 6
		// If the second number is bigger than the first, the result is just the first number
		// For example, 7 / 20 = 0 remainder 7, so 7 % 20 = 7
		int h = f % d; // h = 2
		
		// PEMDAS also applies in Java (and most programming languages)
		// Mod has the same level of precedence as multiplication and division
		int i = b + c * (e - f / d); // i = -125
		
		// There are also things called prefixes and postfixes in java
		// They are very useful to increment (increase by 1)
		// or decrement (decrease by 1) the values of variables
		int j = 5;
		// Prefix
		int k = ++j; // First, the program will increase the value of j to 6 and store that
		// Then, it will store its new value in k, so k = 6
		// Postfix
		int l = j++; // In this case, the program will first store j's value of 6 in l, so l = 6
		// Then, it will increase the value of j by 1 and store it, so now j = 7
		// --j and j-- would do the same thing, except they would decrease j's value by 1 instead of increasing it
		
		// To change the sign of variable while referencing it,
		// a negative sign can be placed in front. For example,
		int m = 5;
		int n = -m; // This makes n = -5, but does not change the value of m
	}
}