---
layout: page
title: "SplatSLAM"
description: "Dense 3D Reconstruction from Monocular Video via Learning-based SLAM and Gaussian Splatting."
img: https://placehold.co/800x400/1a1a1a/ffffff?text=SplatSLAM+Digital+Twin
importance: 1
category: Research
---

<!-- 1. Academic Header -->
<div class="text-center mb-5">
  <h1 style="font-weight: 900; letter-spacing: -1px; color: #1a1a1a; font-family: serif;">SplatSLAM</h1>
  <p class="lead" style="font-size: 1.2rem; color: #666;">End-to-End Indoor Scene Reconstruction Pipeline</p>
  
  <div class="authors mt-3" style="font-size: 1.1rem;">
    <span>Jiacan Li*</span> &nbsp;&middot;&nbsp; 
    <span>Yuzhen Song*</span> &nbsp;&middot;&nbsp; 
    <span>Yiming Ma*</span>
  </div>
  <div class="affiliation mt-1 text-muted" style="font-style: italic;">
    Southern University of Science and Technology (SUSTech)
  </div>

  <div class="links mt-4">
    <a href="#" class="btn btn-outline-dark btn-sm rounded-pill px-4 mx-1">Video</a>
    <a href="#" class="btn btn-outline-dark btn-sm rounded-pill px-4 mx-1">Code</a>
    <a href="#" class="btn btn-outline-dark btn-sm rounded-pill px-4 mx-1">Paper</a>
  </div>
</div>

<hr class="my-5" style="opacity: 0.1;">

<!-- 2. Teaser Section -->
<div class="teaser-image text-center mb-5">
  <img src="https://placehold.co/1200x500/000000/cccccc?text=Interactive+3DGS+Classroom+Teaser" class="img-fluid rounded shadow-sm">
  <p class="mt-3 text-muted" style="font-size: 0.9rem;">
    <em>SplatSLAM leverages MASt3R-SLAM and 3DGS to transform smartphone video into interactive 3D digital twins.</em>
  </p>
</div>

<!-- 3. Abstract -->
<div class="section mb-5">
  <h4 style="font-weight: 700; border-bottom: 2px solid #333; display: inline-block; margin-bottom: 20px;">Abstract</h4>
  <p style="text-align: justify; line-height: 1.7; color: #444;">
    We present <strong>SplatSLAM</strong>, an integrated pipeline designed for high-fidelity indoor reconstruction using monocular RGB input. By leveraging the <strong>MASt3R-SLAM</strong> framework for robust trajectory estimation and dense geometric priors, we bridge the gap between learning-based SLAM and <strong>3D Gaussian Splatting (3DGS)</strong>. Our approach introduces a standardized geometric refinement process using <strong>SOR denoising</strong>, effectively eliminating unphysical artifacts. Evaluated on the TUM-RGBD benchmark and self-collected datasets, our system achieves sub-10cm localization accuracy and photo-realistic novel view synthesis (up to 49.46 dB PSNR).
  </p>
</div>

<!-- 4. Methodology -->
<div class="section mb-5">
  <h4 style="font-weight: 700; border-bottom: 2px solid #333; display: inline-block; margin-bottom: 30px;">Methodology</h4>
  <div class="text-center mb-4">
    <img src="https://placehold.co/1200x300/f8f9fa/333333?text=System+Pipeline+SVG+Diagram" class="img-fluid rounded border">
  </div>
  <div class="row text-left" style="font-size: 0.9rem; color: #555;">
    <div class="col-md-3"><strong>I. Preprocessing</strong><br>10 FPS Frame Extraction & Standardization</div>
    <div class="col-md-3"><strong>II. MASt3R-SLAM</strong><br>Transformer-based Pose & Dense Mapping</div>
    <div class="col-md-3"><strong>III. SOR Denoising</strong><br>Statistical Geometric Refinement (nb=20)</div>
    <div class="col-md-3"><strong>IV. 3DGS Training</strong><br>Iterative Radiance Field Optimization</div>
  </div>
</div>

<!-- 5. Experimental Results -->
<div class="section mb-5">
  <h4 style="font-weight: 700; border-bottom: 2px solid #333; display: inline-block; margin-bottom: 30px;">Evaluation</h4>
  
  <p class="mb-4"><strong>I. Quantitative SLAM Benchmarking (TUM-RGBD)</strong></p>
  <div class="row align-items-center mb-5">
    <div class="col-md-6 text-center">
      <img src="https://placehold.co/600x350/ffffff/666666?text=ATE+Trajectory+Accuracy+Chart" class="img-fluid rounded">
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
      <p style="font-size: 0.9rem; color: #666;">Analysis: MASt3R-SLAM provides high-precision poses even without camera calibration, outperforming traditional feature-based methods by ~50%.</p>
    </div>
  </div>

  <p class="mb-4"><strong>II. Texture Saliency vs. Geometric Integrity</strong></p>
  <div class="row text-center">
    <div class="col-sm-4"><img src="https://placehold.co/400x300/f0f0f0/999?text=Pantry+(High+Texture)" class="img-fluid rounded shadow-sm"><p class="mt-2" style="font-size: 0.8rem;">High Saliency</p></div>
    <div class="col-sm-4"><img src="https://placehold.co/400x300/f0f0f0/999?text=Meeting+(Med+Texture)" class="img-fluid rounded shadow-sm"><p class="mt-2" style="font-size: 0.8rem;">Medium Saliency</p></div>
    <div class="col-sm-4"><img src="https://placehold.co/400x300/f0f0f0/999?text=Corner+(Low+Texture)" class="img-fluid rounded shadow-sm"><p class="mt-2" style="font-size: 0.8rem;">Low Saliency (Failure Case)</p></div>
  </div>

  <p class="mt-5 mb-4"><strong>III. 3DGS Training Evolution & The PSNR Trap</strong></p>
  <div class="row">
    <div class="col-md-6 text-center">
      <img src="https://placehold.co/600x350/ffffff/666666?text=Convergence+Curve+Chart" class="img-fluid rounded border">
    </div>
    <div class="col-md-6" style="font-size: 0.95rem; line-height: 1.6;">
      <p>While PSNR reaches <strong>44.29 dB</strong> at 50k iterations, we identify <strong>7,000 iterations</strong> as the visual "Sweet Spot." Beyond 21k, the model risks <strong>anisotropic collapse</strong>—Gaussians becoming too flat to fit training pixels while sacrificing novel view consistency.</p>
      <p><strong>Ablation:</strong> SOR denoising removes 7.3% outliers, providing a <strong>+0.41 dB</strong> PSNR gain early on and eliminating spatial "floaters."</p>
    </div>
  </div>
</div>

<!-- 6. Bonus: Real-time Analysis -->
<div class="section mb-5" style="background-color: #fafafa; padding: 25px; border-radius: 8px; border: 1px solid #eee;">
  <h4 style="font-weight: 700; color: #333; margin-bottom: 20px;">Bonus: Hardware Constraints (8GB VRAM)</h4>
  <div class="row align-items-center">
    <div class="col-md-7">
      <img src="https://placehold.co/800x450/111111/555?text=Live+Demo+Lag+Visualization" class="img-fluid rounded shadow-sm">
    </div>
    <div class="col-md-5">
      <p style="font-size: 0.95rem; color: #555;">Real-time stress tests on a local RTX 4060 laptop reveal bottlenecks in <strong>ViT-Large</strong> inference. Memory swapping led to a ~2 FPS limit, highlighting the trade-off between model complexity and edge real-time performance.</p>
    </div>
  </div>
</div>

<!-- 7. Interactive Demo -->
<div class="section mb-5">
  <h4 style="font-weight: 700; border-bottom: 2px solid #333; display: inline-block; margin-bottom: 30px;">Interactive Demo</h4>
  <div class="sketchfab-embed-wrapper rounded overflow-hidden shadow-sm">
    <iframe title="MASt3R-SLAM Dense Pointcloud" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" src="https://sketchfab.com/models/26dffeeeb1e748d386671aeb205f9081/embed?autostart=1&ui_theme=dark&ui_hint=0" style="width: 100%; height: 550px;"></iframe>
  </div>
</div>

<!-- 8. Footer -->
<div class="section mb-5" style="border-top: 1px solid #eee; padding-top: 30px;">
  <p style="font-size: 0.85rem; color: #888; text-align: center;">
    <strong>Acknowledgements:</strong> This project was developed as a final project for the <strong>Computer Vision</strong> course at Southern University of Science and Technology (SUSTech). Special thanks to <strong>Prof. Feng Zheng</strong> and <strong>Prof. Weiyu Wang</strong> for their guidance.
  </p>
</div>
