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


You can install [Arduino IDE](https://www.arduino.cc/en/software) on Ubuntu via terminal as follows:


### Installing ROS-Arduino serial message communication package 
You can install [Arduino IDE](https://www.arduino.cc/en/software) on Ubuntu via terminal as follows:
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

### Environment setting


### Hello
Recovery process is actually simple.
If the created .bag.active file's name is &&&& and the name of .bag file that you want to create it ####, the entire process is shown as below.
<pre>
<code>
rosbag reindex &&&&.bag.active
rosbag fix &&&&.bag.active ####.bag
</code>
</pre>
Then, .bag file named #### is created in the same folder.

## Example

## Reference
https://www.arduino.cc/en/hardware
http://wiki.ros.org/rosserial_arduino/Tutorials/Arduino%20IDE%20Setup
