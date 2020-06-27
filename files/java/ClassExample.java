class Bird {
	/* This is a static variable. This means that it has a value even if 
	   an instance of a class has not been created.
	   These should only be used (in general) for things that do not depend
	   on the properties of the class or the inputs to the constructor.
	   This variable is also final meaning that its value cannot be changed */
	public static final String typeOfOrganism = "animal";
	
	/* These variables are called instance variables.
	   They get this name because they onnly exist when
	   an instance of the class is created.
	   These variables are also private, meaning that they
	   can only be accessed from within the class.
	   This is done to make sure that they're not accidentally changed
	   by code outside this class. */
	private String color, name;
	private double xPos, yPos;
	
	/* This is constructor.
	   It is a special type of function that has the same name
	   as the class. It is used to construct an instance of the class
	   with the given parameters. Multiple different constructors can be
	   created with different parameter requirements */
	public Bird(String color, String name, double x, double y) {
		this.color = color;
		this.name = name;
		this.xPos = x;
		this.yPos = y;
	}
	
	/* This method should fly to a point only 
	   if it's closer than the maxDistance.
	   This method will also return a boolean indicating that the point was
	   close enough to fly to (true) or that it was too far (false). */
	public boolean flyIfClose(double x, double y, double maxDistance) {
		double distance = distanceTo(x, y);
		if(distance < maxDistance) {
			flyTo(x, y);
			return true;
		}
		// An else statement is not needed since this will only execute
		// if the if statement did not run (since it contains a return statement)
		return false;
	}
	/* The following two function are private because they should only be used within
	   the class for calculations and utility. */
	private double distanceTo(double x, double y) {
		return Math.sqrt(Math.pow(xPos - x, 2) + Math.pow(yPos - y, 2));
	}
	/* This is a void method.
	   It does not return anything, but instead performs a
	   task when called. */
	private void flyTo(double finalX, double finalY) {
		xPos = finalX;
		yPos = finalY;
	}
	
	public String talk() {
		return "I am a Bird named " + name + ". My current position is (" + xPos + "," + yPos + ")";
	}
}