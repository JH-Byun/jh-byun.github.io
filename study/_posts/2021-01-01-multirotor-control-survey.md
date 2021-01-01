---
layout: single
title: "Trajectory tracking control of multirotors"
header:
  image: 
---


# Linear control
1. classical PID [2]
  + easy to implement
  + hard to track fast trajectories
  + need some modifications for the aggressive manoeuver
2. LQR [3]
  + only offers an optimal solution when the multirotor is on the near-hover state
3. Robust control (H<sub>\infty</sub>) [4]
  + not limited to the near hover condition
  + can provide better performance in trajectory tracking with noise and time delay
  + still based on the linearized dynamics so still limited to non-agile manoeuvers
      
# Nonlinear control
1. Feedback linearization [5]
  + can derive linear relation between the control input and derivatives of states
  + too sensitive to sensor noise (high frequency input)
2. Backstepping control (Powerful nonlinear control) [6]
  + can obtain global stability because it can reduce the model uncertainty
3. Geometric control (Powerful nonlinear control) [7]
  + can avoid singularities in trajectory tracking
  + simpler than quaternion-based controller
  
## Blended control
1. Dynamic inversion with FL + backstepping [8]
  + backstepping process in the outer-loop(position control) stabilizes the inner-loop(angular control)
2. Backstepping on SE(3) [9]
  + avoid singularity problem in classical backstepping controller

## References
[1] Lee, H., & Kim, H. J. (2017). Trajectory tracking control of multirotors from modelling to experiments: A survey. International Journal of Control, Automation and Systems, 15(1), 281-292. <br>
[2] <br>
[3] <br>
[4] <br>
[5] <br>
[6] <br>
[7] <br>
[8] Das, A., Subbarao, K., & Lewis, F. (2009). Dynamic inversion with zero-dynamics stabilisation for quadrotor control. IET control theory & applications, 3(3), 303-314.<br>
[9] Lee, H., Kim, S., Ryan, T., & Kim, H. J. (2013, October). Backstepping control on se (3) of a micro quadrotor for stable trajectory tracking. In 2013 IEEE International Conference on Systems, Man, and Cybernetics (pp. 4522-4527). IEEE.
