---
title: "[PERSONAL RESEARCH] Review on haptics-based aerial manipulation"
use_math: true
---
Aerial manipulation is one of the rising topics which can simultaneously leverage versatility of the robotic manipulator and maneuverability of the unmanned aerial vehicle (UAV). 

## Haptics-based aerial manipulation

Haptic integration could provide important feedback for tasks such as valve-turning, sensor insertion, and object pick-and-place.

The worker performing the task can leverage the haptic feedback assessment of object properties to collaboratively perform manipulation using drones.

### Examples
Drilling: People generally use their sense of touch when drilling.

## Central problems
### 1. Beyond haptics - Sound, smell, temperature and vision

### 2. Technical challenges

Communication issue: Time delays, Packet loss, Jitters -> Can be solved by Time Domain Passivity Approach (TDPA)

### 3. Implementation of the virtual fixtures

Virtual fixtures are implemented as artificial wall that guide the motion of the slave to the desired target point.

If the teleoperator tries to move the slave device outside these walls, artificial forces are activated to limit the motion of TCP (slave) and also to provide haptic feedback to the teleoperator.

<figure class="video_container">
    <center><video width = "700" height="500" controls="true" allowfullscreen="true" poster="">
    <source src="/videos/main_proposed.mp4" type="video/mp4">
  </video></center>
</figure>

Source code of a MATLAB simulation based on <a href="https://jh-byun.github.io/pub/ICCAS/">[2021, ICCAS, Byun]</a> is uploaded on my private <a href="https://github.com/JH-Byun/aerial_manipulator_with_a_fixed_end-effector_position-matlab">Github repository</a>.
