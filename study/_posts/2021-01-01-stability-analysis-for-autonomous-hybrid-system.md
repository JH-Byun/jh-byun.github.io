---
layout: single
title: "Lyapunov-based stability analysis of the autonomous hybrid systems"
header:
  image: 
use_math: true
---

## Autonomous hybrid systems
Differential equation which describes the system changes with the continuous state and the discrete state (a.k.a. "mode"). For example, a robotic manipulator which can interact with various environments such as wall, operating surface, etc. has two modes, the free mode (end-effector not interacting with environment) and the contact mode (end-effector interacting with environment). <br>
Autonomous hybrid system can be formulated as <br>
$\dot{x}(t) = f(x(t),m(t))$ <br>
$m(t) = \phi(x(t),m(t^{-}))$ <br>
<br>
Switched system vs. Hybrid system <br>
Switched system: for each $x$, only one $m$ is available <br>
Hybrid system: there are some $x$ for each $m$
<br><br>

## Crucial notes
Steps for showing the stability of autonomous hybrid systems <br>
1. To guarantee that a solution exists for all possible initial conditions <br>
2. No mode overlapping (there are finitely many switches of the discrete states in finite time) <br>
3. (Assumption) All the equilibrium points are equivalent regardless of the operating modes. <br>
<br>
All possible cases: <br>
Each mode is stable -> whole system is unstable <br>
One of the mode is unstable -> whole system is stable (depending on the switching policy) <br>

## General theorems

## Example: Multi DOF robotic manipulator

## References
[1] Pettersson, S., & Lennartson, B. (1996, December). Stability and robustness for hybrid systems. In Proceedings of 35th IEEE Conference on Decision and Control (Vol. 2, pp. 1202-1207). IEEE. <br>
[2] Doulgeri, Z., & Iliadis, G. (2007). Stability of a contact task for a robotic arm modelled as a switched system. IET Control Theory & Applications, 1(3), 844-853.
