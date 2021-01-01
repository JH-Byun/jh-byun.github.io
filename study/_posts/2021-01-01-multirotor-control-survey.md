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
## classical PID
## LQR
## Robust control (H<sub>\infin</sub>)
<ul><ul> characteristics
  - LQR  
</ul>
- characteristics
<ul>
  - one of the most well-known control law <br>
  - based on the transfer function between the control input and Euler angles <br>
  - assuming that the multirotor is on the hovering state <br>
  </ul>
- advantages
<ul>
  - easy to implement
  </ul>
- disadvantages
<ul>
  - hard to track fast trajectories
  - need some modifications for the aggressive manoeuver
  </ul>
      
  + LQR controller
    - characteristics
      - 
    - advantages
      -
    - disadvantages
      - only offers an optimal solution when the multirotor is near hover state

# Nonlinear control
