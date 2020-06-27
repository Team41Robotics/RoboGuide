class Bird {
	private String color, name;
	private int xPos, yPos;

	public Bird(String color, String name, int x, int y) {
		this.color = color;
		this.name = name;
		this.xPos = x;
		this.yPos = y;
	}

	public void flyTo(int finalX, int finalY) {
		xPos = finalX;
		yPos = finalY;
	}
	public String talk() {
		return "I am a Bird named " + name + ". My current position is (" + xPos + "," + yPos + ")";
	}
}
