---
layout: page
title: Sim-to-Real Dexterous Hand
description: Simulation infrastructure for a multi-fingered robotic palm in Webots and Isaac Sim.
img: assets/img/closedloop.png
importance: 3
category: Research Projects
---

In this project, I established robust simulation environments to support future Reinforcement Learning (RL) research on a multi-fingered robotic palm.

### Simulation Demos

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img src="{{ '/assets/img/Isaacsim.gif' | relative_url }}" class="img-fluid rounded z-depth-1" alt="Isaac Sim">
    </div>
</div>
<div class="caption">
    Closed-loop simulation of the robotic palm in <b>NVIDIA Isaac Sim</b>.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img src="{{ '/assets/img/webots.gif' | relative_url }}" class="img-fluid rounded z-depth-1" alt="Webots">
    </div>
</div>
<div class="caption">
    Closed-loop simulation of the robotic palm in <b>Webots</b>.
</div>

### Work Done

- **URDF Refinement:** Optimized the URDF model's collision geometries and kinematic constraints to ensure physical accuracy.
- **Environment Setup:** Configured physics parameters (e.g., friction, joint limits) in both Isaac Sim and Webots.
- **Foundational Pipeline:** Established a simulation-to-training pipeline for future RL grasping policies.
