---
layout: single
title: "[ROS] How to subscribe serial messages published from Arduino board as a ROS topic?"
use_math: true
---
[Arduino](https://www.arduino.cc/) board is a type of MCU (MicroController Unit) which can transmit analog/digital sensor outputs via serial communication.

<p><a href="https://www.arduino.cc/en/hardware">
<center><img src="/images/tumbnails/arduino_nano_image.jpg" width="324" height="184"></center>
</a></p>
  
If a sensor you use does not have its own ROS node or package to communicate via ROS messages, using Arduino board might be a solution. Therefore, there needs a way to convert the **Serial messages** generated from Arduino board to their corresponding **ROS messages**. 

* Operating System: Ubuntu 18.04, 64 bits
* ROS version: melodic

## Procedure
### Installing Arduino IDE on Ubuntu
At first, download the appropriate version of .tar.gz file on your desired folder from [Arduino IDE](https://www.arduino.cc/en/software)  (usually on *Download* folder). 

Then, unzip the downloaded .tar.gz file as follows:
<pre>
<code>
tar -xf arduino-1.x.xx-linux64.tar.gz
</code>
</pre>

On the upzipped folder, proceed to install Arduino IDE as follows:
<pre>
<code>
cd arduino-1.x.xx
sudo ./install.sh
sudo chown $USER_NAME arduino
</code>
</pre>
where $USER_NAME represents the name of your computer.

### Environment setting
You can install the package which is utilized for converting serial messages generated from Arduino board to ROS message type as follows:
<pre>
<code>
sudo apt-get install ros-indigo-rosserial-arduino
sudo apt-get install ros-indigo-rosserial
</code>
</pre>
where indigo means your ROS version. In my case,
<pre>
<code>
sudo apt-get install ros-melodic-rosserial-arduino
sudo apt-get install ros-melodic-rosserial
</code>
</pre>

Then, download *ros_lib* library to ubuntu folder as follows:
<pre>
<code>
cd /path/to/arduino/libraries
rm -rf ros_lib
rosrun rosserial_arduino make_libraries.py
</code>
</pre>

### Executing some example sketches
With your arduino board connected, open your arduino IDE by typing *arduino* on your terminal. The following window will be opened:
<p>
<center><img src="/images/tumbnails/arduino_IDE_image.PNG" width="420" height="500"></center>
</a></p>
Then, check the settings of "Board" and "Port" in "tools" located at the toolbar. <br>

Let's assume that you are receiving an analog signal through A0 from a sensor (e.g., voltage sensor) and send it as a ROS topic message std_msgs/UInt16, you first write the following code on the arduino IDE.
<pre>
<code>
#include <ros.h>
#include <std_msgs/UInt16.h>

ros::NodeHandle nh;

int sensorPin = A0; 
int sensorValue = 0;  // variable to store the value coming from the sensor

std_msgs::UInt16 signal;
ros::Publihser signal_pub("/signal", &signal)
void setup() {
  // declare the ledPin as an OUTPUT:
  pinMode(ledPin, OUTPUT);
  // set baud rate as 57600
  Serial.begin(57600)
}

void loop() {
  // read the value from the sensor:
  sensorValue = analogRead(sensorPin);
  
  // publish the ROS topic
  nh.initNode();
  signal_pub.data = sensorValue;
  nh.advertise(signal_pub);
  
  // stop the program for 10 milliseconds:
  delay(10);
}
</code>
</pre>
Click on the "check" symbol to check whether there is a grammar issue or not, then click on "upward" symbol to upload the code to your board. 

Then, turn on your at least two terminal windows, then type the following commands:
<pre>
<code>
roscore
</code>
</pre>
<pre>
<code>
rosrun rosserial_python serial_node.py _port:=/dev/ttyUSB0 _baud:=57600
</code>
</pre>

Finally, check whether your topic is published via rostopic pub.

## Reference
https://www.arduino.cc/en/hardware <br>
http://wiki.ros.org/rosserial_arduino/Tutorials/Arduino%20IDE%20Setup
