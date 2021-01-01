---
layout: single
title: "Trajectory tracking control of multirotors"
header:
  image: 
---
<br>
Reference paper: Lee, H., & Kim, H. J. (2017). Trajectory tracking control of multirotors from modelling to experiments: A survey. International Journal of Control, Automation and Systems, 15(1), 281-292. 
<br>
<br>
# Linear control
1. classical PID
1. LQR
1. Robust control (H<sub>/infin</sub>)

  - one of the most well-known control law <br>
  - based on the transfer function between the control input and Euler angles <br>
  - assuming that the multirotor is on the hovering state <br>
- advantages
  - easy to implement
- disadvantages
  - hard to track fast trajectories
  - need some modifications for the aggressive manoeuver
      

# Nonlinear control
