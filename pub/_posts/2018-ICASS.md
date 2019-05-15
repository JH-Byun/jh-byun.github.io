---
title: "Tracking Control of a Multirotor UAV in a Network Environment with Time-Varying Delay "
header:
  teaser: tumbnails/2018_iccas.png
conference: ICCAS
links: 
 - paper: 
   name: "Paper"
 - bibtex: 
   name: "Bibtex"
---

This paper presents a practical method to estimate and control the position of an unmanned aerial vehicle (UAV) considering a network environment with time-varying delay between a server and the UAV. The network delay entails undesirable effects to the stability of the UAV control system due to mismatch of trajectory and incorrect state observation. To deal with these problems, we propose the algorithm which consists of 1) path planner, 2) uplink delay compensator, 3) UAV controller, and 4) downlink delay compensator. We apply model predictive control (MPC) based pathplannertocalculatethereferencetrajectory. Uplinkdelaycompensatorrevisesthereferencetrajectorytocompensate forthenetworkdelaysothatthemismatchproblemissolved. TherevisedreferencetrajectoryisfedtotheUAVcontroller. It produces the predicted trajectory of the UAV and sends to the server. The downlink delay compensator estimates the UAV’s state using predicted trajectory so that the incorrect estimation problem is solved. Experimental results show improved tracking performance by the proposed delay compensation.



{% include base_path %}



