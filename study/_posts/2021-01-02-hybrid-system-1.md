---
layout: single
title: "[Paper Reading] Stability and Robustness for Hybrid Systems"
use_math: true
---

## Paper information
**Conference**: CDC (Conference on Decision and Control) <br>
**Date**: 1996 December <br>
**Author**: Stefan Pettersson, Bengt Lennartson <br>
 **Link**: <https://ieeexplore.ieee.org/abstract/document/572653> <br>

## Purpose
General derivation of the stability and robustness of the hybrid systems is the main purpose of this paper. Additionally, the method for finding candidate Lyapunov and a simple example are also presented.

## Main Structure
1. **Hybrid model**
* Definition of the autonomous hybrid systems + difference between the switched system and the hybrid system
* Some notions required to analyze the Lyapunov stability of the system (switching set, switching sequence, etc.)
* Some assumptions required
2. **Stability**
* Some notions and definitions (**candidate Lyapunov function**, interval completion, even sequence, etc.)
* **Theorem 1**: The most general form in this paper, but a bit complicated for the engineering application
* **Collorary 1**: Restriced stability result, does not require the continuous trajectory of the system
3. **Lyapunov function generation by solving linear matrix inequalities**
* Method for finding candidate Lyapunov function
* Uses S-procedure.
4. **Robustness**
* **Acceptable switching regions**: can derive so-called "acceptable switch region" which can guarantee the stability of whole system.
* **Maximum robustness**: can enlarge the set that satisfies the sufficient conditions of the collorary 1 until the LMI problem does not have any solution.

## Contribution
There are some contributions written in this paper but this script is too old for evaluating its originality. However, **it is very readable and informative for readers who are interested in the analysis of hybrid systems.**

## References
[1] Pettersson, S., & Lennartson, B. (1996, December). Stability and robustness for hybrid systems. In Proceedings of 35th IEEE Conference on Decision and Control (Vol. 2, pp. 1202-1207). IEEE. <br>
[2] Branicky, M. S. (1994, December). Stability of switched and hybrid systems. In Proceedings of 1994 33rd IEEE Conference on Decision and Control (Vol. 4, pp. 3498-3503). IEEE. <br>
