---
title: "Stable contact guaranteeing motion/force control for an aerial manipulator on an arbitrarily tilted surface"
header:
  teaser: tumbnails/wire_pulling_aerial_manipiulator.png
conference: IROS
authors: <u>Jeonghyun Byun</u>, Dongjae Lee, Hoseong Seo, Inkyu Jang, Jeongjun Choi, and H. Jin Kim
links:
comment: true
---

**Abstract**: This study aims to design a motion/force controller for an aerial manipulator which guarantees the tracking of time-varying motion/force trajectories as well as the stability during the transition between free and contact motions. To this end, we model the force exerted on the end-effector as the Kelvin-Voigt linear model and estimate its parameters by recursive least-squares estimator. Then, the gains of the disturbance-observer (DOB)-based motion/force controller are calculated based on the stability conditions considering both the model uncertainties in the dynamic equation and switching between the free and contact motions. To validate the proposed controller, we conducted the time-varying motion/force tracking experiments with different approach speeds and orientations of the surface. The results show that our controller enables the aerial manipulator to track the time-varying motion/force trajectories.

{% include base_path %}


<center><img src="/images/tumbnails/wire_pulling_aerial_manipiulator.png" width="649" height="369"></center>


## Bibtex <a id="bibtex"></a>
```
@misc{https://doi.org/10.48550/arxiv.2301.08078,
  doi = {10.48550/ARXIV.2301.08078},
  
  url = {https://arxiv.org/abs/2301.08078},
  
  author = {Byun, Jeonghyun and Kim, Byeongjun and Kim, Changhyeon and Oh, Donggeon David and Kim, H. Jin},
  
  keywords = {Robotics (cs.RO), Systems and Control (eess.SY), FOS: Computer and information sciences, FOS: Computer and information sciences, FOS: Electrical engineering, electronic engineering, information engineering, FOS: Electrical engineering, electronic engineering, information engineering},
  
  title = {Stable Contact Guaranteeing Motion/Force Control for an Aerial Manipulator on an Arbitrarily Tilted Surface},
  
  publisher = {arXiv},
  
  year = {2023},
  
  copyright = {arXiv.org perpetual, non-exclusive license}
}

```
