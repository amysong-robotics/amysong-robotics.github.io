---
layout: page
title: "SplatSLAM: Dense 3D Reconstruction"
description: End-to-End Indoor Scene Reconstruction Pipeline Based on Learning-based SLAM and 3D Gaussian Splatting.
img: assets/img/teaser_classroom.jpg
importance: 1
category: Course Projects
---

We present **SplatSLAM**, an end-to-end pipeline bridging learning-based dense SLAM and photo-realistic NVS. Our system recovers camera trajectories via **MASt3R-SLAM** and achieves high-fidelity rendering through **3D Gaussian Splatting (3DGS)**.

---

### 📍 Phase I: Quantitative SLAM Benchmarking
We evaluate trajectory accuracy on the TUM-RGBD benchmark. MASt3R-SLAM demonstrates high robustness even without camera calibration.

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        <img src="{{ '/assets/img/mast3r_slam_ate_tum_dataset.png' | relative_url }}" class="img-fluid rounded z-depth-1">
        <div class="caption"><b>ATE Analysis:</b> Average RMSE < 0.1m.</div>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <div class="card p-3" style="font-size: 0.9rem; background-color: #f8f9fa;">
            <b>Evaluation Command:</b><br>
            <code>evo_ape tum gt.txt est.txt -as</code>
            <p class="mt-2">Sim(3) Umeyama alignment is applied to compensate for the monocular scale ambiguity.</p>
        </div>
    </div>
</div>

---

### ☁️ Phase II: Geometric Robustness & Saliency
Reconstruction quality is highly correlated with **Visual Saliency**. Blank corners represent the physical limit of monocular SLAM.

<div class="row">
    <div class="col-sm-4 mt-3 mt-md-0">
        <img src="{{ '/assets/img/pc_tea_room.jpg' | relative_url }}" class="img-fluid rounded z-depth-1">
        <div class="caption">High Texture: <b>Pantry</b></div>
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        <img src="{{ '/assets/img/pc_meeting.jpg' | relative_url }}" class="img-fluid rounded z-depth-1">
        <div class="caption">Medium Texture: <b>Meeting</b></div>
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        <img src="{{ '/assets/img/pc_corner.jpg' | relative_url }}" class="img-fluid rounded z-depth-1">
        <div class="caption">Low Texture: <b>Corner</b></div>
    </div>
</div>

---

### ✨ Phase III: Rendering Fidelity & The PSNR Trap
We identify **7,000 iterations** as the "Visual Sweet Spot." Beyond 21k, the model risks anisotropic collapse (overfitting).

<div class="row">
    <div class="col-sm-12 mt-3 mt-md-0">
        <img src="{{ '/assets/img/test10_training_convergence.png' | relative_url }}" class="img-fluid rounded z-depth-1">
        <div class="caption"><b>Convergence Curve:</b> Visual quality vs. PSNR metrics.</div>
    </div>
</div>

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        <img src="{{ '/assets/img/capture_method_comparison.png' | relative_url }}" class="img-fluid rounded">
        <div class="caption">Stationary vs. Walkthrough capture.</div>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <img src="{{ '/assets/img/test10_method_comparison.png' | relative_url }}" class="img-fluid rounded">
        <div class="caption">Ablation: With vs. Without SOR Denoising.</div>
    </div>
</div>

---

### 🎮 Interactive Demo
Explore the dense reconstruction results of the SUSTech Classroom.

<div class="sketchfab-embed-wrapper">
    <iframe title="MASt3R-SLAM Dense Pointcloud" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" src="https://sketchfab.com/models/26dffeeeb1e748d386671aeb205f9081/embed?autostart=1&ui_theme=dark" style="width: 100%; height: 500px; border-radius: 8px;"></iframe>
</div>

---

### 🔍 Technical Insights
- **SOR Denoising:** Removes 7.3% outliers, eliminating spatial "floaters" and improving 3DGS stability.
- **Hardware Bottleneck:** Stress tests on 8GB VRAM reveal significant latency during ViT-Large dense mapping.
- **Acknowledgements:** Special thanks to **Prof. Feng Zheng** and **Prof. Weiyu Wang** for their guidance in this Computer Vision course project.
