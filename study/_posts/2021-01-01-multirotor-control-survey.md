---
layout: single
title: "[Paper Reading] Trajectory tracking control of multirotors from modelling to experiments: A survey"
use_math: true
---

## Paper information
**Journal**: IJCAS (International Journal of Control, Automation and System) <br>
**Date**: 2017 <br>
**Author**: Hyeonbeom Lee, H.Jin Kim <br>
 **Link**: <https://scholar.google.com/scholar?hl=ko&as_sdt=0%2C5&q=Trajectory+tracking+control+of+multirotors&btnG=> <br>
 
## Main structure
1. Linear control
* classical PID [2]: easy to implement, but hard to track fast trajectories and need some modifications for the aggressive manoeuver
* LQR [3]: only offers an optimal solution when the multirotor is on the near-hover state
* Robust control (H<sub>&infin;</sub>) [4]: not limited to the near hover condition and can provide better performance in trajectory tracking with noise and time delay, but still based on the linearized dynamics so still limited to non-agile manoeuvers
2. Nonlinear control
* Feedback linearization [5]: can derive linear relation between the control input and derivatives of states but too sensitive to sensor noise (high frequency input)
* **Backstepping control** [6]: can obtain global stability because it can reduce the model uncertainty
* **Geometric control** [7]: can avoid singularities in trajectory tracking and simpler than quaternion-based controller
3. Blended control
* Dynamic inversion with FL + backstepping [8]: backstepping process in the outer-loop(position control) stabilizes the inner-loop(angular control)
* Backstepping on SE(3) [9]: can avoid singularity problem in classical backstepping controller

## References
[1] Lee, H., & Kim, H. J. (2017). Trajectory tracking control of multirotors from modelling to experiments: A survey. International Journal of Control, Automation and Systems, 15(1), 281-292. <br>
[2] Hoffmann, G., Waslander, S., & Tomlin, C. (2008, August). Quadrotor helicopter trajectory tracking control. In AIAA guidance, navigation and control conference and exhibit (p. 7410).<br>
[3] Cowling, I. D., Yakimenko, O. A., Whidborne, J. F., & Cooke, A. K. (2010). Direct method based control system for an autonomous quadrotor. Journal of Intelligent & Robotic Systems, 60(2), 285-316.<br>
[4] Mokhtari, A., Benallegue, A., & Daachi, B. (2005, August). Robust feedback linearization and GH/sub/spl infin//controller for a quadrotor unmanned aerial vehicle. In 2005 IEEE/RSJ International Conference on Intelligent Robots and Systems (pp. 1198-1203). IEEE.<br>
[5] Lee, D., Kim, H. J., & Sastry, S. (2009). Feedback linearization vs. adaptive sliding mode control for a quadrotor helicopter. International Journal of control, Automation and systems, 7(3), 419-428.<br>
[6] Madani, T., & Benallegue, A. (2006, October). Backstepping control for a quadrotor helicopter. In 2006 IEEE/RSJ International Conference on Intelligent Robots and Systems (pp. 3255-3260). IEEE. <br>
[7] Mahony, R., Kumar, V., & Corke, P. (2012). Multirotor aerial vehicles: Modeling, estimation, and control of quadrotor. IEEE Robotics and Automation magazine, 19(3), 20-32.<br>
[8] Das, A., Subbarao, K., & Lewis, F. (2009). Dynamic inversion with zero-dynamics stabilisation for quadrotor control. IET control theory & applications, 3(3), 303-314.<br>
[9] Lee, H., Kim, S., Ryan, T., & Kim, H. J. (2013, October). Backstepping control on se (3) of a micro quadrotor for stable trajectory tracking. In 2013 IEEE International Conference on Systems, Man, and Cybernetics (pp. 4522-4527). IEEE.
