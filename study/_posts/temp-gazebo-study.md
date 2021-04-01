---
layout: single
title: "[Gazebo] Make and spawn .sdf file to the gazebo simulator"
tag: Gazebo
use_math: true
---

## Check whether .sdf file is configured appropriately
To check whether the given .sdf file is valid, type `gz sdf -k` in front of the sdf file name (xxx.sdf). 
For example, if example.sdf file is located in ~/catkin_ws/src/gazebo_pkg/models/, you can check the validity of the given file by typing
```bash
gz sdf -k ~/catkin_ws/src/gazebo_pkg/models/example.sdf 
```
