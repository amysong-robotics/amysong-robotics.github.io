---
layout: page
title: ROS2 Mobile Manipulator
description: A 4-DOF autonomous robot integrated with SLAM, Nav2, and Multimodal Human-Robot Interaction.
img: assets/img/ROS2.png
importance: 1
category: Course Projects
---

This project features a ROS2-based autonomous mobile manipulator capable of environment mapping, autonomous navigation, and vision-guided grasping. It supports multimodal interaction via voice and hand gestures.

[GitHub Repository](https://github.com/amysong-robotics/ros2-mobile-manipulator)

### 🤖 Full System Demonstration

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img src="{{ '/assets/img/navigation_and_grasp.gif' | relative_url }}" class="img-fluid rounded z-depth-1" alt="Main Demo">
    </div>
</div>
<div class="caption">
    <b>Full Autonomous Mission:</b> Navigating to a target area and performing precision grasping using Image-Based Visual Servoing (IBVS).
</div>

---

### 🗺️ Navigation & Mapping

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        <img src="{{ '/assets/img/slam_mapping.gif' | relative_url }}" class="img-fluid rounded z-depth-1" alt="SLAM">
        <div class="caption">2D SLAM and environment mapping in Gazebo/RViz.</div>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <img src="{{ '/assets/img/autonomous_navigation.gif' | relative_url }}" class="img-fluid rounded z-depth-1" alt="Navigation">
        <div class="caption">Autonomous point-to-point navigation using Nav2 stack.</div>
    </div>
</div>

---

### 🗣️ Multimodal Interaction

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        <img src="{{ '/assets/img/voice_control_grasp.gif' | relative_url }}" class="img-fluid rounded z-depth-1" alt="Voice Control">
        <div class="caption">Voice-activated retrieval task using offline Vosk API.</div>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <img src="{{ '/assets/img/gesture_control.gif' | relative_url }}" class="img-fluid rounded z-depth-1" alt="Gesture Control">
        <div class="caption">Touchless control and task triggering via MediaPipe hand gestures.</div>
    </div>
</div>

### Key Technical Implementation
- **Hardware Integration:** URDF modeling in SolidWorks and Gazebo physics simulation.
- **Sensor Fusion:** Deployed EKF to fuse IMU and wheel odometry, effectively eliminating rotational drift.
- **Vision Pipeline:** HSV color segmentation and dual-loop PID control for pixel-perfect object alignment.
- **Multithreading:** Decoupled I/O operations (audio/vision) from the high-frequency control loop to ensure real-time response.
