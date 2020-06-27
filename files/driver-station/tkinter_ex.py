from tkinter import Tk, Canvas, PhotoImage, CENTER
from PIL import Image, ImageTk

height = 500
width = 400
btnheight = 40
btnwidth = 80
clicked = False
delay = 10 # milliseconds

root = Tk()
root.focus_set()

ctx = Canvas(root, width=width, height=height, background="white")
ctx.pack()

ctx.create_rectangle((width/2)-(btnwidth/2), (height/2)-(btnheight/2), (width/2)+(btnwidth/2), 
                     (height/2)+(btnheight/2), fill="blue")
ctx.create_text(width/2, height/2, justify=CENTER, text="I am a button", font=("Arial", 10), fill="White")

def handle_click(event):
	global clicked
	if event.x > ((width/2)-(btnwidth/2)) and event.x < ((width/2)+(btnwidth/2)) and event.y > ((height/2)-(btnheight/2)) and event.y < ((height/2)+(btnheight/2)):
		clicked = True

def publish():
	global clicked
	if clicked:
		print("Button has been clicked")
		clicked = False
	root.after(delay, publish)

root.bind("<Escape>", lambda e: root.quit())
root.bind("<Button-1>", handle_click)
root.after(delay, publish)
root.mainloop()