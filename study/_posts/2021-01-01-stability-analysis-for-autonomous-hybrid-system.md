---
layout: single
title: "Lyapunov-based stability analysis of the autonomous hybrid systems"
header:
  image: 
use_math: true
---

## Autonomous hybrid systems
Differential equation which describes the system changes with the continuous state and the discrete state (a.k.a. "mode"). For example, a robotic manipulator which can interact with various environments such as wall, operating surface, etc. has two modes, the free mode (end-effector not interacting with environment) and the contact mode (end-effector interacting with environment). <br>
$$\dot{x}(t) = f(x(t),m(t))$$ <br>
$$m(t) = \phi(x(t),m(t^{-}))$$ <br>
<br>

## General theorems

## Example: Multi DOF robotic manipulator

## References
[1] Pettersson, S., & Lennartson, B. (1996, December). Stability and robustness for hybrid systems. In Proceedings of 35th IEEE Conference on Decision and Control (Vol. 2, pp. 1202-1207). IEEE. <br>
[2] Doulgeri, Z., & Iliadis, G. (2007). Stability of a contact task for a robotic arm modelled as a switched system. IET Control Theory & Applications, 1(3), 844-853.
