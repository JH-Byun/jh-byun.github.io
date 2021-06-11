---
layout: single
title: "Terminologies and Concepts used in Control and Estimation Theory - 1"
use_math: true
---

1. **Control methods** <br>
    1) Impedance control: A dynamic control method which relates force and position.
    * Mechanical impedance: The ratio of force output to motion input
    * Purpose of this method is to regulate the relationship between force and position. Thus, it requires a position, velocity or acceleration input to control the force output value. 
    * It is a conventional control method we use, which makes an actuator input using desired position, velocity or acceleration. <br>
    2) Admittance control: A dynamic control method which relates force and position, but in the inverse way of impedance control.
    * Mechanical admittance: The ratio of motion output to force input
    * It requires a force input to control the position, velocity or acceleration. <br>
    3) Bang-singular control: It is a control method which consists of both bang-bang portion and singular portion.
    * Bang-bang control: A kind of feedback controller which abruptly switches its control law between two discrete phases.
    * Singular control: An optimal control problem which cannot be solved by Pontryagin's minimum principle.
        - Pontyagin's maximum principle is a sort of optimal control theory. 
        - This principle is a way to design the control law which enables a dynamical system to switch from one phase to another phase under some constraints on both state and input.
    * According to the optimal control theory, it is proven that **the time-optimal trajectory of the input-affined system is bang singular.** <br>
    4) Event-triggered control: A control system which do not send any actuator signal unless the "event-triggering condition" is invoked.

2. **Control Systems** <br>
    1) Networked control system (NCS): The closed-loop system which is controlled by communication networks.
    * There are four crucial elements: sensor + controller + actuator + **communication network**
    * It facilitates the system to conduct some specific tasks which require the comminication between two places wihch are far from each other.
    * It can reduce its communication load while using event-triggered control. <br>
    2) Fuzzy control system: A control system based on fuzzy logic, which is a mathematical system that analyzes analog input values in terms of logical variables that take on discrete values, 0 or 1.

3. **Sets** <br>
    1) Convex hull: The smallest convex set which contains a dot or a region which are given in the form of set.
    * Convex set: For a set $A$ in Euclidean space, $A$ is called a **convex set** if we pick two arbitrary points inside $A$, then a segment which connects the two points is always the element of $A$. <br>
    2) Compact set
    * $S$ is covered by *a collection of open sets*, $O$ ($S \subset $ (at least one member of) $O$), and said to compact if $S$ is covered by some finite set of members of $O$ for every covering $O$ of $S$ by open sets. 
    * In Euclidean space ($\mathbb{R}^{n}$), it is defined as a **closed** and **bounded** subset of Euclidean space, e.g. closed interval, rectagnle, finite set of points. This property is proved in detail in [4].

4. **Functions** <br>
    1) Class $K$ function
    * a continuous function $\alpha$: [0,a) $\rightarrow$ [0,$\infty$)
    * a strictly increasing function
    * $\alpha(0)$ =$0$
    * cf) class $K_{\infty}$ function: a class $K$ function which is radially unbounded <br>
    2) Class $KL$ function
    * a continuous function $\beta$: [0,a) x $[0,\infty]$ $\rightarrow$ [0,$\infty$)
    * for each fixed $s$, the function $\beta(r,s)$ belongs to class $K$
    * for each fixed $r$, the function $\beta(r,s)$ is decreasing with respect to $s$ and is s.t. $\beta(r,s)$ $\rightarrow$ 0 for $s$ $\rightarrow$ $\infty$

## Reference
[1] <https://en.wikipedia.org/wiki/Convex_set> <br>
[2] <https://en.wikipedia.org/wiki/Impedance_control> <br>
[3] <https://en.wikipedia.org/wiki/Bang%E2%80%93bang_control> <br>
[4] <https://en.wikipedia.org/wiki/Singular_control> <br>
[5] <https://en.wikipedia.org/wiki/Pontryagin%27s_maximum_principle> <br>
[6] <https://en.wikipedia.org/wiki/Networked_control_system> <br>
[7] <https://en.wikipedia.org/wiki/Fuzzy_control_system#Fuzzy_control_in_detail> <br>
[8] <a href = "https://www.diva-portal.org/smash/get/diva2:586391/FULLTEXT02">Heemels, W. P. M. H., Karl Henrik Johansson, and Paulo Tabuada. "An introduction to event-triggered and self-triggered control." 2012 ieee 51st ieee conference on decision and control (cdc). IEEE, 2012.</a> <br>
[9] <https://en.wikipedia.org/wiki/Class_kappa_function> <br>
[10] <https://en.wikipedia.org/wiki/Class_kappa-ell_function> <br>
[11] <https://en.wikipedia.org/wiki/Compact_space> <br>
[12] <http://www-math.mit.edu/~djk/calculus_beginners/chapter16/section02.html> <br>
