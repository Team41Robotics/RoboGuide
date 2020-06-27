import serial

ser = serial.Serial("COM5", 9600)

ser.write(b'\x5F')
ser.write(b'\x6A')