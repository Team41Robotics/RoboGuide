class Loops {
	public static void main(String[] args) {
		// We often want to repeat code
		// Instead of typing it over and over again, we can use a loop!
		// A while loop will keep repeating the code inside as long as it's condition is true
		double testNum = Math.random();
		// This loop will repeat until testNum is greater than 0.9
		// If testNum is greater than or equal to 0.9 initially, the loop will never run
		// (Side Note: For demonstrative purposes only. Don't write something like this)
		while(testNum < 0.9) {
			testNum = Math.random();
		}
		
		// If we want to make sure that a while loop runs at least once no matter, we can use a do while loop
		// These are not very common
		double testNum2 = Math.random();
		do {
			testNum2 = Math.random();
		} while(testNum2 < 0.9);
		
		// We often need to perform a task a specific number of times
		// Let's say we were writing a graphics program and wanted to draw ten stars
		// Instead of repeating the code to draw a star ten times, we can use a for loop
		// A for loop consists of three statements
		// The first is a variable initialization (can also set the value of a pre-existing variable here).
		// A variable declared here will be deleted after the loop finishes
		// The second is the end condition. The for loop will end when this condition evaluates to true
		// The third is a statement that will execute after each iteration. This is typically used to increment a variable
		for(int i = 0; i<10; i++) {
			drawStar(); // This could be a function that we create to draw a star
		}
		// For loops are also suuuuper useful in conjunction with arrays
		// Let's say that we wanted to increment each of the valeus in our array
		// A for loop makes this super easy
		int[] myNums = {3, 1, 4, 1, 5, 9};
		for(int i = 0; i<myNums.length; i++) {
			myNums[i] += 1;
		}
		
		// If you just want to print items in an array, a for each loop is useful
		// The downside is any changes made to the temporary variable in the loop will not affect the array (if it contains primitives)
		for(int num : myNums) { // For each int "num" in "myNums"
			System.out.println("My num: " + num);
		}
		
		// Some more useful tools are the break and continue commands
		// These can be used to control the flow of a loop
		for(int i = 0; i<myNums.length; i++) {
			if(myNums[i] == 3)
				// This will exit the loop immediately and will not run any more iterations
				// (or any code inside the loop that's after this statement)
				break;
			if(myNums[i] == 5)
				// This will skip to the next iteration of the loop
				// (skips any code inside the loop after this statement)
				continue;
			// This print statement will not run if a break or continue statement runs before it
			System.out.println("My num: " + num);
		}
	}
}