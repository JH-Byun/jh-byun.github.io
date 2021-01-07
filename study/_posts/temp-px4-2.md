---
layout: single
title: "[PX4] Direct control inputs to PX4 - actuator_control"
use_math: true
---

## Description
### Control Groups (PX4)
PX4 has total **seven** control groups for various vehicles. Look at the "Control Groups" section in the reference [2] and choose the appropriate group.

### Direct control by four inputs -  T, $\tau_{x}$, $\tau_{y}$, $\tau_{z}$
In ROS, control group can be selected by the topic named **"actuator_control"**. This topic consists of... <br>
* group_mix: the number of control group for PX4
* header: time information
* controls: an 8x1 array of *normalized command*, -1 to 1 or 0 to 1 (for multirotors)

The *normalized command* is converted to the actuators native units (e.g. UART, UAVCAN or PWM) by the process called "mixing". 
To make a custom mixer file, please read the "Syntax" section in the reference [2] and refer to the reference [4]. <br><br>
Take a look at the example of .main.mix file. (quad_x.main.mix)
<pre>
<code>
R: 4x

AUX1 Passthrough
M: 1
S: 3 5  10000  10000      0 -10000  10000

AUX2 Passthrough
M: 1
S: 3 6  10000  10000      0 -10000  10000

Failsafe outputs
The following outputs are set to their disarmed value
during normal operation and to their failsafe falue in case
of flight termination.
Z:
Z:
</code>
</pre>

## References
[1] <http://docs.ros.org/en/api/mavros_msgs/html/msg/ActuatorControl.html> <br>
[2] <https://dev.px4.io/master/en/concept/mixing.html> <br>
[3] <https://github.com/PX4/PX4-Autopilot/tree/master/ROMFS/px4fmu_common/mixers> <br>
[4] <https://dev.px4.io/master/en/airframes/adding_a_new_frame.html#mixer-file> <br>
