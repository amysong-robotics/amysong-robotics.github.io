---
layout: page
title: Autonomous UAV Mission Navigation
description: via Fast-Planner Framework. Real-time trajectory generation in randomized obstacle environments.
img: assets/img/UAV.png
importance: 1
category: Research Projects
---
Developed a Fast-Planner framework on ROS to generate real-time, kinodynamically feasible trajectories.
- Engineered a custom circular benchmark track in RViz.
- Validated obstacle avoidance and trajectory smoothing.

### Simulation Demo

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img src="{{ '/assets/img/fast-planner.gif' | relative_url }}" class="img-fluid rounded z-depth-1" alt="UAV Navigation">
    </div>
</div>
<div class="caption">
    <b>Replication of Fast-Planner:</b> Real-time trajectory generation and obstacle avoidance in a randomized point-cloud environment.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img src="{{ '/assets/img/round.gif' | relative_url }}" class="img-fluid rounded z-depth-1" alt="UAV Navigation">
    </div>
</div>
<div class="caption">
    <b>Autonomous Mission Logic:</b> Successfully traversed a self-designed circular benchmark circuit by engineering custom sequential waypoint navigation.
</div>
