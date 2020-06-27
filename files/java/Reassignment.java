class Reassignment {
	public static void main(String[] args) {
		int carl = 5;
		int joe = 20;
		// After a variable has already been instantiated,
		// you don't need to put its type before it whenever
		// you set it or reference it
		carl = joe; // This gives Carl Joe's value. Joe's number does not change
		// Carl's number is now 20
		joe = 100; // This sets Joe's value to 100. This ONLY affects his value, and not Carl's
		
		// It is also possible to combine reassignment with math ... CRAZY
		// The operators are: +=, -=, *=, /=, and %=
		int a = 5;
		int b = 10;
		a += b; // a = a + b = 15
		a *= b; // a = a * b = 150
		a -= b; // a = a - b = 140
		a /= b; // a = a / b = 14
		a %= b; // a = a % b = 4
	}
}