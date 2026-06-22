---
layout: page
title: "SplatSLAM"
description: "End-to-End Indoor Scene Reconstruction from Monocular Video via MASt3R-SLAM and 3DGS."
img: https://placehold.co/800x400/1a1a1a/ffffff?text=SplatSLAM+Digital+Twin
importance: 1
category: Course Projects
---

<!-- 1. Header (科技感按钮区) -->
<div class="text-center mb-5">
  <h1 style="font-weight: 800; letter-spacing: -1px; color: #1a1a1a; font-family: serif;">SplatSLAM</h1>
  <p class="lead" style="font-size: 1.15rem; color: #666; max-width: 800px; margin: 0 auto;">
    An integrated pipeline for high-fidelity indoor scene reconstruction bridging transformer-based SLAM and 3D Gaussian Splatting.
  </p>
  
  <div class="affiliation mt-3 text-muted" style="font-size: 0.95rem;">
    Computer Vision Course Project | Southern University of Science and Technology
  </div>

  <div class="links mt-4">
    <!-- 这里插入了你的 Google Sites 链接 -->
    <a href="https://sites.google.com/view/splatslam/home" class="btn btn-outline-dark btn-sm rounded-pill px-4 mx-1" target="_blank">🌐 Project Page (Interactive)</a>
    <a href="#" class="btn btn-outline-dark btn-sm rounded-pill px-4 mx-1">🎥 Demo Video</a>
    <a href="#" class="btn btn-outline-dark btn-sm rounded-pill px-4 mx-1">💻 GitHub Code</a>
  </div>
</div>

<hr class="my-5" style="opacity: 0.1;">

<!-- 2. Teaser Section -->
<div class="teaser-image text-center mb-5">
  <img src="https://placehold.co/1200x500/000000/cccccc?text=Interactive+3DGS+Classroom+Teaser" class="img-fluid rounded shadow-sm">
  <p class="mt-3 text-muted" style="font-size: 0.85rem;">
    <em>SplatSLAM leverages MASt3R-SLAM and 3DGS to transform smartphone video into interactive 3D digital twins.</em>
  </p>
</div>

<!-- 3. Abstract -->
<div class="section mb-5">
  <h4 style="font-weight: 700; border-bottom: 2px solid #333; display: inline-block; margin-bottom: 20px;">Abstract</h4>
  <p style="text-align: justify; line-height: 1.6; color: #444;">
    We present <strong>SplatSLAM</strong>, an integrated pipeline designed for high-fidelity indoor reconstruction using monocular RGB input. By leveraging the <strong>MASt3R-SLAM</strong> framework for robust trajectory estimation and dense geometric priors, we bridge the gap between learning-based SLAM and <strong>3D Gaussian Splatting (3DGS)</strong>. Our approach introduces a standardized geometric refinement process using <strong>SOR denoising</strong>, effectively eliminating unphysical artifacts. Evaluated on the TUM-RGBD benchmark and self-collected datasets, our system achieves sub-10cm localization accuracy and photo-realistic novel view synthesis.
  </p>
</div>

<!-- 4. Methodology -->
<div class="section mb-5">
  <h4 style="font-weight: 700; border-bottom: 2px solid #333; display: inline-block; margin-bottom: 30px;">Methodology</h4>
  <div class="text-center mb-4">
    <img src="https://placehold.co/1200x350/f8f9fa/333333?text=Technical+Pipeline+Diagram" class="img-fluid rounded border">
  </div>
  <div class="row text-left" style="font-size: 0.9rem; color: #555;">
    <div class="col-md-3"><strong>1. Preprocessing</strong><br>10 FPS Frame Extraction</div>
    <div class="col-md-3"><strong>2. MASt3R-SLAM</strong><br>Pose & Dense Mapping</div>
    <div class="col-md-3"><strong>3. SOR Denoising</strong><br>Geometric Refinement</div>
    <div class="col-md-3"><strong>4. 3DGS Training</strong><br>NVS Optimization</div>
  </div>
</div>

<!-- 5. Evaluation -->
<div class="section mb-5">
  <h4 style="font-weight: 700; border-bottom: 2px solid #333; display: inline-block; margin-bottom: 30px;">Experiments</h4>
  
  <p class="mb-3"><strong>SLAM Benchmarking (TUM-RGBD)</strong></p>
  <div class="row align-items-center mb-5">
    <div class="col-md-6 text-center">
      <img src="https://placehold.co/600x350/ffffff/999999?text=ATE+Accuracy+Chart" class="img-fluid rounded">
    </div>
    <div class="col-md-6">
      <div class="table-responsive">
        <table class="table table-sm" style="font-size: 0.85rem;">
          <thead>
            <tr style="color: #888;">
              <th>Sequence</th>
              <th>ATE RMSE (m) ↓</th>
              <th>ATE Mean (m)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>fr1_room</td><td>0.0987</td><td>0.0909</td></tr>
            <tr style="font-weight: bold; background-color: #fafafa;"><td>fr1_360</td><td>0.0717</td><td>0.0667</td></tr>
          </tbody>
        </table>
      </div>
      <p style="font-size: 0.85rem; color: #777;">Analysis: Sub-10cm accuracy achieved without prior camera calibration.</p>
    </div>
  </div>

  <p class="mb-3"><strong>3DGS Fidelity: Iteration & Denoising Analysis</strong></p>
  <div class="row">
    <div class="col-md-6 text-center">
      <img src="https://placehold.co/600x350/ffffff/999999?text=Convergence+Curve" class="img-fluid rounded border">
    </div>
    <div class="col-md-6" style="font-size: 0.9rem; color: #444;">
      <p>We found that <strong>7,000 iterations</strong> provide the best visual balance. Excessive iterations lead to overfitting artifacts. Additionally, our <strong>SOR refinement</strong> (removing 7.3% outliers) effectively eliminates "floaters," ensuring cleaner geometric surfaces.</p>
    </div>
  </div>
</div>

<!-- 6. Real-time Analysis -->
<div class="section mb-5" style="background-color: #fcfcfc; padding: 25px; border-radius: 8px; border: 1px solid #f0f0f0;">
  <h5 style="font-weight: 700; color: #333;">Hardware Constraints (8GB VRAM Stress Test)</h5>
  <div class="row align-items-center mt-3">
    <div class="col-md-7">
      <img src="https://placehold.co/800x450/222222/666?text=Real-time+Demo+Visualization" class="img-fluid rounded shadow-sm">
    </div>
    <div class="col-md-5">
      <p style="font-size: 0.9rem; color: #666;">Testing on a local RTX 4060 laptop showed a bottleneck with the <strong>ViT-Large</strong> backbone, resulting in ~2 FPS limit due to VRAM overflow and memory swapping.</p>
    </div>
  </div>
</div>

<!-- 7. Interactive Demo -->
<div class="section mb-5">
  <h4 style="font-weight: 700; border-bottom: 2px solid #333; display: inline-block; margin-bottom: 30px;">Interactive Demo</h4>
  <div class="sketchfab-embed-wrapper rounded overflow-hidden shadow-sm" style="background: #000;">
    <iframe title="MASt3R-SLAM Dense Pointcloud" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" src="https://sketchfab.com/models/26dffeeeb1e748d386671aeb205f9081/embed?autostart=1&ui_theme=dark&ui_hint=0" style="width: 100%; height: 500px;"></iframe>
  </div>
</div>

<!-- 8. Footer Acknowledgements -->
<div class="section mb-5" style="border-top: 1px solid #eee; padding-top: 30px;">
  <p style="font-size: 0.85rem; color: #888; text-align: center;">
    This project was developed as a final project for the <strong>Computer Vision</strong> course at Southern University of Science and Technology (SUSTech). <br>Special thanks to <strong>Prof. Feng Zheng</strong> and <strong>Prof. Weiyu Wang</strong> for their professional guidance.
  </p>
</div>
