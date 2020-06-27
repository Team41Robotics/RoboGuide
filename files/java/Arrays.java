class Arrays {
	public static void main(String[] args) {
		// An array is a list of variables
		// There are multiple ways to declare an array
		// First way: declare it without values
		// When initializing an array like this, you will typically declare the array's values later in array
		// (type)[] name = new (type)[# of items];
		int[] nums = new int[10]; // Creates an array of 10 ints
		String[] words = new String[5];
		// When initializing an array like this, the items in it will
		// have the default value for their respective datatype
		// Default Values -> https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html
		
		// An array can also be initialized with specific values
		int[] piNums = {3, 1, 4, 1, 5, 9};
		String[] sentenceWords = {"My", "favorite", "thing", "is", "to", "code"};
		
		// To reference an array element do the following
		// arrayName[index of item]
		int three = piNums[0];
		// A very important note about arrays in Java is that they are zero indexed
		// That means that the first element has an index of 0, not 1
		// Values of an array can also be set just like any other variable
		piNums[0]++;
		sentenceWords[0] = "Your";
		
		// If you want to find the length of an array, you can do that using arrayName.length
		String newFavThing = "eat";
		int sentenceWordsLength = sentenceWords.length;
		sentenceWords[sentenceWordsLength - 1] = newFavThing;
		// The element at arrayName.length - 1 is the last element in the array
	}
}