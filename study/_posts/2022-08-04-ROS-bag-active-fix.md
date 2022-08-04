---
layout: single
title: "[ROS] How to fix .bag.active file?"
use_math: true
---
While conducting a robot experiment with ROS (Robot Operating System), you usually use the [rosbag](http://wiki.ros.org/rosbag) package to collect the data from the ROS topics. 
However, if the [ROS master](http://wiki.ros.org/Maste) computer is suddenly turned off due to the undesirable situations such as strong collision or static, rosbag node does not create .bag file.
Instead, .bag.active file is automatically created, which means that the *rosbag* process is unexpectedly terminated. 
Since the .bag.active file cannot be read by the data analysis programs such as MATLAB, it is necessary to recover .bag file.

## Procedure
Recovery process is actually simple.
If the created .bag.active file's name is &&&& and the name of .bag file that you want to create it ####, the entire process is shown as below.
<pre>
<code>
rosbag fix &&&&.bag.active ####.bag
</code>
</pre>
Then, .bag file named #### is created in the same folder.

## Reference
https://answers.ros.org/question/378372/bagactive-file-creating/
