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
With your arduino board connected, open your arduino IDE by typing *arduino* on your terminal.

## Example

## Reference
https://www.arduino.cc/en/hardware
http://wiki.ros.org/rosserial_arduino/Tutorials/Arduino%20IDE%20Setup
