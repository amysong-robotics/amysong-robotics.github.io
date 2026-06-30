---
layout: page
title: "SplatSLAM"
description: "Dense 3D Reconstruction from Monocular Video via Learning-based SLAM and Gaussian Splatting."
img: assets/img/splatslam_cover.png
importance: 5
category: Course Projects
---

<div class="splatslam-page">

# Dense 3D Reconstruction from Monocular Video via Learning-based SLAM and Gaussian Splatting

<div class="splatslam-meta">
  <strong>Jiacan Li*</strong> · <strong>Yuzhen Song*</strong> · <strong>Yiming Ma*</strong><br>
  Southern University of Science and Technology
</div>

<div class="splatslam-links">
  <a href="https://sites.google.com/view/splatslam/home" target="_blank" rel="noopener noreferrer">Original Google Site</a>
  <a href="#interactive-demo">Interactive Demo</a>
</div>

## Abstract

We present **SplatSLAM**, an end-to-end indoor scene reconstruction pipeline that bridges the gap between learning-based dense SLAM and photo-realistic novel view synthesis. Our method leverages **MASt3R-SLAM** to recover accurate camera trajectories and dense geometric point clouds from monocular RGB video captured by consumer smartphones.

To address the inherent noise and outliers in raw SLAM outputs, we introduce a standardized point cloud post-processing workflow—including **Statistical Outlier Removal (SOR)** and voxel downsampling—as a crucial transition module. By integrating these optimized priors, we initialize and train **3D Gaussian Splatting (3DGS)**, enabling real-time, high-fidelity rendering of complex indoor environments.

Evaluations on the **7-Scenes benchmark** and self-collected SUSTech campus datasets demonstrate that our pipeline significantly improves localization accuracy compared to traditional feature-based SLAM, while delivering superior visual reconstruction quality.

<div class="splatslam-figure">
  <img src="{{ '/assets/img/splatslam/google_site_02.png' | relative_url }}" alt="SplatSLAM overview visual">
</div>

**Highlights**

- **End-to-End Workflow:** bridging monocular mobile video input to interactive 3D digital twins.
- **High Precision:** achieving sub-10cm trajectory accuracy (ATE RMSE) on public benchmarks without camera calibration.
- **Noise Robustness:** integrating SOR denoising to eliminate floaters and SLAM artifacts.
- **Photo-realistic Rendering:** achieving PSNR up to 49.46 dB for complex indoor novel view synthesis.

## Methodology

Our pipeline integrates advanced transformer-based SLAM with explicit radiance field rendering to achieve high-fidelity reconstruction. The workflow is divided into four core modules.

### 1. Data Preprocessing & Standardization

We capture 4K monocular videos using smartphones and extract frames at a fixed rate of 10 FPS using FFmpeg. This standardized preprocessing unifies image resolution and file naming conventions, ensuring compatibility across both public benchmarks and self-collected SUSTech datasets.

### 2. Dense Tracking and Mapping with MASt3R-SLAM

The system employs **MASt3R-SLAM** as the SLAM front-end. By leveraging pixel-level transformer matching and global bundle adjustment, it simultaneously estimates accurate camera trajectories and generates a dense, colored raw point cloud without requiring depth sensors.

### 3. Standardized Point Cloud Refinement

To bridge the gap between noisy SLAM outputs and high-quality 3DGS training, we implement a post-processing workflow in CloudCompare:

- **Statistical Outlier Removal (SOR):** eliminating floating noise caused by motion blur or depth jitter.
- **Voxel Downsampling:** uniformly reducing point density to optimize training efficiency.
- **Manual Masking:** filtering irrelevant background outliers to focus on the target scene.

### 4. 3D Gaussian Splatting & Novel View Synthesis

The refined point cloud serves as a geometric prior to initialize Gaussian ellipsoids. Using the splatfacto framework, the system iteratively optimizes the position, covariance, and color of each Gaussian through photometric loss minimization. The final model supports real-time interactive rendering and smooth novel view synthesis.

<div class="splatslam-figure-grid">
  <figure>
    <img src="{{ '/assets/img/splatslam/google_site_03.png' | relative_url }}" alt="SplatSLAM methodology figure">
    <figcaption>Methodology / reconstruction pipeline figure from the project site.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/splatslam/google_site_07.png' | relative_url }}" alt="SplatSLAM experiment figure">
    <figcaption>Experiment visualization from the Google Site.</figcaption>
  </figure>
</div>

## Experiments

### Experimental Setup

**Datasets**

- **7-Scenes Dataset:** public benchmark for indoor SLAM evaluation.
- **SUSTech Scene:** self-collected videos from campus classrooms and kitchens.

**Hardware and Software**

- **GPU:** NVIDIA RTX 4090 with 24GB VRAM.
- **Software:** PyTorch, Nerfstudio, CloudCompare.

## Phase I: Quantitative SLAM Benchmarking

We evaluate MASt3R-SLAM on the TUM-RGBD benchmark. Our results show that the system achieves higher precision in 360° rotation scenes due to dense feature matching, compared to the larger-scale room sequence.

| Sequence | ATE RMSE ↓ | Notes |
| --- | ---: | --- |
| Room sequence | 0.098 m | Larger-scale indoor trajectory with sub-10cm localization accuracy. |
| 360° rotation scene | 0.071 m | Higher precision under rotational motion due to dense feature matching. |

**ATE (Absolute Trajectory Error)** measures the absolute distance between estimated and ground-truth camera poses. **RMSE** represents the overall average error across frames. Since monocular SLAM cannot recover absolute world scale, we perform **Sim(3) Umeyama alignment** before calculating the error for fair comparison.

<div class="splatslam-figure-grid wide">
  <figure>
    <img src="{{ '/assets/img/splatslam/google_site_08.png' | relative_url }}" alt="Quantitative SLAM benchmarking result">
    <figcaption>Quantitative SLAM benchmarking result.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/splatslam/google_site_09.png' | relative_url }}" alt="Trajectory or metric comparison result">
    <figcaption>Trajectory / metric comparison from the project site.</figcaption>
  </figure>
</div>

## Phase II: Geometric Robustness & Scene Saliency

By comparing three self-collected scenes, we observe that reconstruction quality is highly dependent on **visual saliency**. The pantry yields the densest point cloud due to rich textures, while blank corners and texture-less walls result in sparse geometry and floaters.

Evaluated scenes include:

- Meeting room 360
- Meeting room
- Tea room
- Corner

<div class="splatslam-figure-grid">
  <figure>
    <img src="{{ '/assets/img/splatslam/google_site_12.png' | relative_url }}" alt="Geometric robustness and scene saliency result">
    <figcaption>Geometric robustness and scene saliency result.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/splatslam/google_site_14.png' | relative_url }}" alt="Point cloud or rendering result">
    <figcaption>Point cloud / rendering result from self-collected scenes.</figcaption>
  </figure>
</div>

## Phase III: Rendering Fidelity & Convergence

We analyze the 3DGS training evolution from 7k to 50k iterations. The visual quality reaches a practical “sweet spot” around **7,000 iterations** for small-scale indoor scenes, while 50k iterations can achieve photorealistic specular details and higher PSNR values.

### Texture Sensitivity: From Pantry to Blank Wall

We evaluate our pipeline across environments with varying texture densities. The pantry, with high visual texture, yields the most complete geometry due to rich visual features. In contrast, blank walls are a failure case for monocular SLAM: the lack of salient features leads to sparse points and floating artifacts.

### Training Convergence & The “Sweet Spot”

While PSNR continues to climb up to **44.29 dB** at 50k iterations, the model begins to overfit, leading to high-frequency artifacts. The 7k-iteration model maintains more natural structural integrity.

### Ablation Study: Impact of SOR Denoising

To bridge the gap between noisy SLAM outputs and high-fidelity rendering, we integrate **Statistical Outlier Removal (SOR)** as a crucial refinement step. By pruning **7.3%** of the raw data—reducing approximately 1,000k points to 927k points—using 20 neighbors and 1.25 standard deviations, we effectively eliminate floaters.

Although the quantitative impact on PSNR is minimal (**44.37 vs. 44.29 dB**), the qualitative enhancement is substantial: the SOR-refined pipeline produces cleaner reconstruction and superior visual stability.

### The PSNR Trap — Overfitting vs. Generalization

We compare two capture strategies in the same meeting room.

- **Test 7:** stationary rotation with 11 frames. It achieves a high PSNR of **49.5 dB**, but this is a classic overfitting case: the model memorizes training images rather than learning complete geometry, leading to poor rendering from unseen viewpoints.
- **Test 9:** full walkthrough with 40 frames. It yields a lower PSNR of **42.2 dB**, but provides much better generalization and reconstructs a more complete, navigable digital twin.

For practical novel view synthesis, comprehensive scene coverage and visual integrity are more meaningful than raw PSNR alone.

## Real-time Execution & Hardware Constraints

The main experiments use an NVIDIA RTX 4090 with 24GB VRAM. Real-time execution remains constrained by dense transformer matching, high-resolution point cloud processing, and 3DGS optimization. These constraints motivate future work on lighter SLAM backbones, more efficient point cloud refinement, and faster training pipelines.

## Interactive Demo

The Google Site includes several embedded point-cloud / reconstruction viewers. They are embedded below so the project can be explored directly from this personal website.

<div id="interactive-demo" class="splatslam-demo-grid">
  <iframe title="SplatSLAM demo 1" src="https://sketchfab.com/models/26dffeeeb1e748d386671aeb205f9081/embed?autostart=1&ui_hint=0&ui_theme=dark" allow="autoplay; fullscreen; xr-spatial-tracking" allowfullscreen></iframe>
  <iframe title="SplatSLAM demo 2" src="https://sketchfab.com/models/2bd98d5914124023a06100404945fe2f/embed?autostart=1&ui_hint=0&ui_theme=dark" allow="autoplay; fullscreen; xr-spatial-tracking" allowfullscreen></iframe>
  <iframe title="SplatSLAM demo 3" src="https://sketchfab.com/models/35db1e88d8ba4204b576b6774a51308e/embed?autostart=1&ui_hint=0&ui_theme=dark" allow="autoplay; fullscreen; xr-spatial-tracking" allowfullscreen></iframe>
  <iframe title="SplatSLAM demo 4" src="https://sketchfab.com/models/556f95d2d32645e0b144cdb9038f934b/embed?autostart=1&ui_hint=0&ui_theme=dark" allow="autoplay; fullscreen; xr-spatial-tracking" allowfullscreen></iframe>
  <iframe title="SplatSLAM demo 5" src="https://sketchfab.com/models/a2e3aa48facd46de8a9e1d70bd4858be/embed?autostart=1&ui_hint=0&ui_theme=dark&transparent=1" allow="autoplay; fullscreen; xr-spatial-tracking" allowfullscreen></iframe>
  <iframe title="SplatSLAM demo 6" src="https://sketchfab.com/models/fd0c1cbb08ef47e8b6b8e5704b4a71d8/embed?autostart=1&ui_hint=0&ui_theme=dark" allow="autoplay; fullscreen; xr-spatial-tracking" allowfullscreen></iframe>
</div>

## Video Previews

<div class="splatslam-demo-grid">
  <iframe title="SplatSLAM video preview 1" src="https://drive.google.com/file/d/1_Jk0D-Ieay6yEj4jdbtbB0-NqtJbIWxC/preview" allow="autoplay; fullscreen" allowfullscreen></iframe>
  <iframe title="SplatSLAM video preview 2" src="https://drive.google.com/file/d/1cTGS4e1WadRVLa-rQGBm9sIkoHfepd4w/preview" allow="autoplay; fullscreen" allowfullscreen></iframe>
</div>

## Acknowledgements

This project was developed as a final project for the **Computer Vision** course at Southern University of Science and Technology. We sincerely thank **Prof. Feng Zheng** and **Prof. Weiyu Wang** for their guidance, suggestions, and support throughout this work.

</div>

<style>
.splatslam-page {
  max-width: 920px;
  margin: 0 auto;
}

.splatslam-page h1 {
  margin-bottom: 0.75rem;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800 !important;
  line-height: 1.1;
}

.splatslam-page h2 {
  margin-top: 2.2rem;
  padding-bottom: 0.35rem;
  border-bottom: 2px solid rgba(143, 177, 98, 0.45);
  font-weight: 750 !important;
}

.splatslam-page h3 {
  margin-top: 1.35rem;
  font-weight: 700 !important;
}

.splatslam-meta {
  margin-bottom: 1rem;
  color: #555;
  line-height: 1.7;
}

.splatslam-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin: 1rem 0 1.8rem;
}

.splatslam-links a {
  padding: 0.35rem 0.75rem;
  border: 1px solid rgba(143, 177, 98, 0.45);
  border-radius: 999px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
}

.splatslam-figure {
  margin: 1.5rem 0;
}

.splatslam-figure img,
.splatslam-figure-grid img {
  width: 100%;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.splatslam-figure-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin: 1.4rem 0;
}

.splatslam-figure-grid.wide {
  grid-template-columns: 1fr;
}

.splatslam-figure-grid figure {
  margin: 0;
}

.splatslam-figure-grid figcaption {
  margin-top: 0.4rem;
  color: #777;
  font-size: 0.85rem;
  text-align: center;
}

.splatslam-demo-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin: 1.25rem 0;
}

.splatslam-demo-grid iframe {
  width: 100%;
  height: 360px;
  border: 0;
  border-radius: 8px;
  background: #000;
}

@media (max-width: 768px) {
  .splatslam-figure-grid,
  .splatslam-demo-grid {
    grid-template-columns: 1fr;
  }

  .splatslam-demo-grid iframe {
    height: 320px;
  }
}
</style>
