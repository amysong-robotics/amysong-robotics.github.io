---
layout: page
title: "SplatSLAM"
description: "Dense 3D Reconstruction from Monocular Video via Learning-based SLAM and Gaussian Splatting."
img: assets/img/teaser_classroom.jpg # 封面图建议用一张深色调、科技感强的截图
importance: 1
category: Research
---

<!-- 1. Academic Header -->
<div class="text-center mb-5">
  <h1 style="font-weight: 900; letter-spacing: -1px; color: #1a1a1a;">SplatSLAM</h1>
  <p class="lead" style="font-size: 1.25rem; color: #666;">End-to-End Indoor Scene Reconstruction Pipeline</p>
  
  <div class="authors mt-3" style="font-size: 1.1rem;">
    <span>Jiacan Li*</span> &nbsp;&middot;&nbsp; 
    <span>Yuzhen Song*</span> &nbsp;&middot;&nbsp; 
    <span>Yiming Ma*</span>
  </div>
  <div class="affiliation mt-1 text-muted" style="font-style: italic;">
    Southern University of Science and Technology (SUSTech)
  </div>

  <div class="links mt-4">
    <a href="YOUR_VIDEO_URL" class="btn btn-outline-dark btn-sm rounded-pill px-4 mx-1">Video</a>
    <a href="YOUR_CODE_URL" class="btn btn-outline-dark btn-sm rounded-pill px-4 mx-1">Code</a>
    <a href="YOUR_PDF_URL" class="btn btn-outline-dark btn-sm rounded-pill px-4 mx-1">Paper</a>
  </div>
</div>

<hr class="my-5" style="opacity: 0.1;">

<!-- 2. Teaser Section (视觉核心) -->
<div class="teaser-image text-center mb-5">
  {% include figure.html path="assets/img/teaser_classroom.jpg" class="img-fluid rounded z-depth-0" %}
  <p class="mt-3 text-muted" style="font-size: 0.9rem;">
    <em>SplatSLAM transforms standard smartphone video into high-fidelity, interactive 3D digital twins.</em>
  </p>
</div>

<!-- 3. Abstract -->
<div class="section mb-5">
  <h4 style="font-weight: 700; border-bottom: 2px solid #333; display: inline-block; margin-bottom: 20px;">Abstract</h4>
  <p style="text-align: justify; line-height: 1.7; color: #444;">
    We present <strong>SplatSLAM</strong>, an integrated pipeline designed for high-fidelity indoor reconstruction using monocular RGB input. By leveraging the <strong>MASt3R-SLAM</strong> framework for robust trajectory estimation and dense geometric priors, we bridge the gap between learning-based SLAM and <strong>3D Gaussian Splatting (3DGS)</strong>. Our approach introduces a standardized geometric refinement process using <strong>SOR denoising</strong>, effectively eliminating artifacts and accelerating convergence. Evaluated on the TUM-RGBD benchmark and self-collected datasets, our system achieves sub-10cm localization accuracy and photo-realistic novel view synthesis.
  </p>
</div>

<!-- 4. Pipeline -->
<div class="section mb-5 text-center">
  <h4 class="text-left" style="font-weight: 700; border-bottom: 2px solid #333; display: inline-block; margin-bottom: 30px; float: left; width: 100%;">Methodology</h4>
  <div style="clear: both;"></div>
  {% include figure.html path="assets/img/pipeline.svg" class="img-fluid rounded" %}
  <div class="row text-left mt-4" style="font-size: 0.95rem; color: #555;">
    <div class="col-md-3"><strong>I. Preprocessing</strong><br>10 FPS Frame Extraction</div>
    <div class="col-md-3"><strong>II. MASt3R-SLAM</strong><br>Pose & Dense Mapping</div>
    <div class="col-md-3"><strong>III. SOR Denoising</strong><br>Geometric Refinement</div>
    <div class="col-md-3"><strong>IV. 3DGS Training</strong><br>Iterative NVS Optimization</div>
  </div>
</div>

<!-- 5. Experimental Results -->
<div class="section mb-5">
  <h4 style="font-weight: 700; border-bottom: 2px solid #333; display: inline-block; margin-bottom: 30px;">Evaluation</h4>
  
  <p class="mb-4"><strong>Quantitative SLAM Performance (TUM-RGBD)</strong></p>
  <div class="table-responsive">
    <table class="table table-sm text-center" style="font-size: 0.9rem; border-top: 1px solid #eee;">
      <thead>
        <tr style="color: #888;">
          <th>Sequence</th>
          <th>ATE RMSE (m) ↓</th>
          <th>ATE Mean (m) ↓</th>
          <th>ATE Std (m)</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>fr1_room</td><td>0.0987</td><td>0.0909</td><td>0.0385</td></tr>
        <tr style="font-weight: bold; background-color: #fafafa;"><td>fr1_360</td><td>0.0717</td><td>0.0667</td><td>0.0262</td></tr>
      </tbody>
    </table>
  </div>

  <p class="mt-5 mb-4"><strong>Texture Saliency vs. Reconstruction Fidelity</strong></p>
  <div class="row">
    <div class="col-sm-4">{% include figure.html path="assets/img/pc_tea_room.jpg" title="High Saliency" class="img-fluid rounded grayscale-hover" %}</div>
    <div class="col-sm-4">{% include figure.html path="assets/img/pc_meeting.jpg" title="Medium Saliency" class="img-fluid rounded" %}</div>
    <div class="col-sm-4">{% include figure.html path="assets/img/pc_corner.jpg" title="Low Saliency" class="img-fluid rounded" %}</div>
  </div>
  <p class="mt-2 text-muted" style="font-size: 0.85rem;"><em>Analysis: Monocular reconstruction quality correlates directly with visual feature density.</em></p>
</div>

<!-- 6. Interactive Demo -->
<div class="section mb-5">
  <h4 style="font-weight: 700; border-bottom: 2px solid #333; display: inline-block; margin-bottom: 30px;">Interactive Demo</h4>
  <div class="sketchfab-embed-wrapper z-depth-1 rounded overflow-hidden">
    <iframe title="MASt3R-SLAM Dense Pointcloud" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" src="https://sketchfab.com/models/26dffeeeb1e748d386671aeb205f9081/embed?autostart=1&ui_theme=dark&ui_hint=0" style="width: 100%; height: 550px;"></iframe>
  </div>
</div>

<!-- 7. Conclusion & Acknowledgements -->
<div class="section mb-5" style="background-color: #fafafa; padding: 30px; border-radius: 8px;">
  <p style="font-size: 0.95rem; color: #444;">
    <strong>Acknowledgements:</strong> This project was developed as part of the <strong>Computer Vision</strong> course at SUSTech. We thank <strong>Prof. Feng Zheng</strong> and <strong>Prof. Weiyu Wang</strong> for their continuous support and guidance throughout the semester.
  </p>
  
  <p class="mt-4 mb-2" style="font-size: 0.8rem; font-weight: bold; color: #888; text-transform: uppercase;">Citation</p>
  <pre style="font-size: 0.75rem; background: transparent; padding: 0; border: none; color: #777;">
@article{splatslam2026,
  title={SplatSLAM: Dense 3D Reconstruction via Learning-based SLAM and 3DGS},
  author={Li, Jiacan and Song, Yuzhen and Ma, Yiming},
  journal={SUSTech CV Course Project},
  year={2026}
}</pre>
</div>
