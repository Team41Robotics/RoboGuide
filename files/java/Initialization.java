class Initialization {
	public static void main(String[] args) {		
		// To initialize (instantiate, delcare) a variable in Java, we use the equals sign
		// The variable must have a type first, then a name, then a value on the other side of equals sign
		// Every line in Java also HAS to end with a semicolon
		boolean bool = true; // *
		byte byteTest = 127;
		short shorty = -1000;
		char iAmAnA = 'a';
		// "char iAmAnA = 97;" does the same thing as the line above
		// If you are typing out long numbers, it can often become hard to read them
		// You can place underscores anywhere in the number to make it more legible (not required at all though)
		int intTest = 1_000_000; // *
		long longTest = 1_000_000_000;
		float floatPi = 3.14159265358979f; // When declaring a float, you have to put the 'f' after the number
		double doublePi = 3.14159265358979; // *
		String words = "I am String. I have to have quotation marks around me so that the compiler can recognize what I am."; //*
		
		// * - The data types we use most frequently for our robotics programming
	}
}