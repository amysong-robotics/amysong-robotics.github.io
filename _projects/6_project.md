---
layout: page
title: 6-DOF Robotic Sketching & 3D Projection
description: A complete closed-loop robotic drawing system integrating computer vision, analytical IK, and compliant hardware design.
img: assets/img/final_sketch1.jpg
importance: 3
category: Course Projects
---

This project implements a complete closed-loop pipeline for high-precision robotic sketching. It bridges the gap between digital image processing and physical hardware execution on both planar and non-planar surfaces.

### 🎥 Physical Execution (Real-World Demo)
<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        <img src="{{ '/assets/img/Drawing_video1.gif' | relative_url }}" class="img-fluid rounded z-depth-1" alt="Drawing Demo 1">
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <img src="{{ '/assets/img/Drawing_video2.gif' | relative_url }}" class="img-fluid rounded z-depth-1" alt="Drawing Demo 2">
    </div>
</div>
<div class="caption">
    6-DOF manipulator performing continuous-path sketching with consistent stroke quality and passive pressure regulation.
</div>

---

### 🌐 Advanced Feature: 3D Surface Projection
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img src="{{ '/assets/img/projection_3d.gif' | relative_url }}" class="img-fluid rounded z-depth-1" alt="3D Projection">
    </div>
</div>
<div class="caption">
    <b>Non-planar Sketching:</b> Mapping 2D contours onto a cylindrical surface using coordinate transformation and dynamic pose adjustment.
</div>

---

### 🔍 Vision Pipeline & Final Results
<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        <img src="{{ '/assets/img/cv_skeleton1.jpg' | relative_url }}" class="img-fluid rounded z-depth-1">
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <img src="{{ '/assets/img/cv_skeleton2.jpg' | relative_url }}" class="img-fluid rounded z-depth-1">
    </div>
</div>
<div class="caption">OpenCV-based skeletonization and path node extraction for human figures.</div>

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        <img src="{{ '/assets/img/final_sketch1.png' | relative_url }}" class="img-fluid rounded z-depth-1">
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <img src="{{ '/assets/img/final_sketch2.png' | relative_url }}" class="img-fluid rounded z-depth-1">
    </div>
</div>
<div class="caption">Final sketching outputs showcasing high reconstruction fidelity on paper.</div>

---

### 📉 Simulink Simulation & Trajectory Plots
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img src="{{ '/assets/img/sim_video.gif' | relative_url }}" class="img-fluid rounded z-depth-1" alt="Simulink Simulation">
    </div>
</div>
<div class="caption">Dynamic simulation in <b>Simscape Multibody</b> to verify kinematic feasibility and joint limits.</div>

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        <img src="{{ '/assets/img/sim_plot1.png' | relative_url }}" class="img-fluid rounded z-depth-1">
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <img src="{{ '/assets/img/sim_plot2.png' | relative_url }}" class="img-fluid rounded z-depth-1">
    </div>
</div>
<div class="caption">Simulated trajectory data and joint-space movement analysis.</div>

---

### 🛠️ Hardware: Compliant Gripper & Setup
<div class="row">
    <div class="col-sm-4 mt-3 mt-md-0">
        <img src="{{ '/assets/img/gripper_detail.png' | relative_url }}" class="img-fluid rounded z-depth-1">
        <div class="caption">Detailed view of the <b>spring-buffered compliant gripper</b>.</div>
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        <img src="{{ '/assets/img/real_setup1.jpg' | relative_url }}" class="img-fluid rounded z-depth-1">
        <div class="caption">Experimental platform setup and robot workspace.</div>
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        <img src="{{ '/assets/img/real_setup2.jpg' | relative_url }}" class="img-fluid rounded z-depth-1">
        <div class="caption">Physical calibration of the drawing tools.</div>
    </div>
</div>

---

### Technical Highlights
- **Compliance Control:** The custom 3D-printed gripper provides passive pressure regulation, ensuring line continuity across uneven surfaces.
- **IK Solver:** Derived and implemented an analytical Inverse Kinematics (IK) solver using D-H parameters in MATLAB.
- **Path Optimization:** Employed a greedy Euclidean search for optimal waypoint sequencing to minimize air-time and improve drawing efficiency.
