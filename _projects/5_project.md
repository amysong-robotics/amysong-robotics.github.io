---
layout: page
title: Autonomous Rescue Vehicle
description: National Second Prize winner. Features YOLOv11 object detection and FSM control.
img: assets/img/YOLO.jpg
importance: 1
category: Competitions
---

As the team leader, I led our group to win the **National Second Prize** in the China Undergraduate Engineering Practice and Innovation Ability Competition. We developed an autonomous vehicle capable of real-time target recognition and precise retrieval in complex environments.

### Competition & Team

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img src="{{ '/assets/img/photo.jpg' | relative_url }}" class="img-fluid rounded z-depth-1" alt="Team Award Photo">
    </div>
</div>
<div class="caption">
    <b>Achievement:</b> The team at the award ceremony, winning the <b>National Second Prize</b> and <b>Provincial First Prize</b>.
</div>

---

### System Testing & Preparation

Due to strict competition regulations, recording was restricted during the official match. The following video demonstrates our system's autonomous logic during the intensive testing and preparation phase.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <video width="100%" controls class="rounded z-depth-1">
            <source src="{{ '/assets/video/YOLO.mp4' | relative_url }}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
</div>
<div class="caption">
    <b>Preparation Phase:</b> Testing the YOLOv11 multi-class recognition and the FSM-based autonomous retrieval logic in a simulated environment.
</div>

### Technical Key Points
- **Vision:** Trained a custom **YOLOv11** model to achieve robust real-time recognition under highly variable lighting conditions.
- **Control:** Orchestrated a complex **Finite State Machine (FSM)** to handle target alignment, servo-based grasping, and safe delivery sequences.
- **Integration:** Processed visual telemetry via STM32 (C/C++) with optimized serial communication (UART) for low-latency response.
