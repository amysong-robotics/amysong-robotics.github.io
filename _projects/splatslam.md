---
layout: page
title: "SplatSLAM"
description: "Dense 3D Reconstruction from Monocular Video via Learning-based SLAM and Gaussian Splatting."
img: assets/img/splatslam/google_site_14.png
importance: 5
category: Course Projects
---

<div class="splatslam-page">
  <header class="splatslam-header">
    <h1>Dense 3D Reconstruction from Monocular Video via Learning-based SLAM and Gaussian Splatting</h1>
    <p class="splatslam-authors"><strong>Jiacan Li*</strong> · <strong>Yuzhen Song*</strong> · <strong>Yiming Ma*</strong></p>
    <p class="splatslam-affiliation">Southern University of Science and Technology</p>
    <div class="splatslam-links">
      <a href="https://sites.google.com/view/splatslam/home" target="_blank" rel="noopener noreferrer">Original Google Site</a>
      <a href="#demo">Demo</a>
      <a href="#abstract">Abstract</a>
      <a href="#methodology">Methodology</a>
      <a href="#experiments">Experiments</a>
    </div>
  </header>

  <section id="demo" class="splatslam-section">
    <h2>Demo</h2>
    <p>
      We place the demos first so the reconstruction results can be viewed immediately. The embedded videos and interactive point-cloud viewers are migrated from the original Google Site.
    </p>

    <h3>Video Previews</h3>
    <div class="splatslam-embed-grid two-col">
      <iframe title="SplatSLAM video preview 1" src="https://drive.google.com/file/d/1_Jk0D-Ieay6yEj4jdbtbB0-NqtJbIWxC/preview" allow="autoplay; fullscreen" allowfullscreen></iframe>
      <iframe title="SplatSLAM video preview 2" src="https://drive.google.com/file/d/1cTGS4e1WadRVLa-rQGBm9sIkoHfepd4w/preview" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>

    <h3>Interactive Point-cloud / Reconstruction Viewers</h3>
    <div class="splatslam-embed-grid two-col">
      <iframe title="SplatSLAM demo 1" src="https://sketchfab.com/models/26dffeeeb1e748d386671aeb205f9081/embed?autostart=1&ui_hint=0&ui_theme=dark" allow="autoplay; fullscreen; xr-spatial-tracking" allowfullscreen></iframe>
      <iframe title="SplatSLAM demo 2" src="https://sketchfab.com/models/2bd98d5914124023a06100404945fe2f/embed?autostart=1&ui_hint=0&ui_theme=dark" allow="autoplay; fullscreen; xr-spatial-tracking" allowfullscreen></iframe>
      <iframe title="SplatSLAM demo 3" src="https://sketchfab.com/models/35db1e88d8ba4204b576b6774a51308e/embed?autostart=1&ui_hint=0&ui_theme=dark" allow="autoplay; fullscreen; xr-spatial-tracking" allowfullscreen></iframe>
      <iframe title="SplatSLAM demo 4" src="https://sketchfab.com/models/556f95d2d32645e0b144cdb9038f934b/embed?autostart=1&ui_hint=0&ui_theme=dark" allow="autoplay; fullscreen; xr-spatial-tracking" allowfullscreen></iframe>
      <iframe title="SplatSLAM demo 5" src="https://sketchfab.com/models/a2e3aa48facd46de8a9e1d70bd4858be/embed?autostart=1&ui_hint=0&ui_theme=dark&transparent=1" allow="autoplay; fullscreen; xr-spatial-tracking" allowfullscreen></iframe>
      <iframe title="SplatSLAM demo 6" src="https://sketchfab.com/models/fd0c1cbb08ef47e8b6b8e5704b4a71d8/embed?autostart=1&ui_hint=0&ui_theme=dark" allow="autoplay; fullscreen; xr-spatial-tracking" allowfullscreen></iframe>
    </div>
  </section>

  <section id="abstract" class="splatslam-section">
    <h2>Abstract</h2>
    <p>
      We present <strong>SplatSLAM</strong>, an end-to-end indoor scene reconstruction pipeline that bridges the gap between learning-based dense SLAM and photo-realistic novel view synthesis. Our method leverages <strong>MASt3R-SLAM</strong> to recover accurate camera trajectories and dense geometric point clouds from monocular RGB video captured by consumer smartphones.
    </p>
    <p>
      To address the inherent noise and outliers in raw SLAM outputs, we introduce a standardized point cloud post-processing workflow—including <strong>Statistical Outlier Removal (SOR)</strong> and voxel downsampling—as a crucial transition module. By integrating these optimized priors, we initialize and train <strong>3D Gaussian Splatting (3DGS)</strong>, enabling real-time, high-fidelity rendering of complex indoor environments.
    </p>
    <p>
      Evaluations on the <strong>7-Scenes benchmark</strong> and self-collected SUSTech campus datasets demonstrate that our pipeline significantly improves localization accuracy compared to traditional feature-based SLAM, while delivering superior visual reconstruction quality.
    </p>

    <ul class="splatslam-highlights">
      <li><strong>End-to-End Workflow:</strong> bridging monocular mobile video input to interactive 3D digital twins.</li>
      <li><strong>High Precision:</strong> achieving sub-10cm trajectory accuracy on public benchmarks without camera calibration.</li>
      <li><strong>Noise Robustness:</strong> integrating SOR denoising to eliminate floaters and SLAM artifacts.</li>
      <li><strong>Photo-realistic Rendering:</strong> achieving PSNR up to 49.46 dB for complex indoor novel view synthesis.</li>
    </ul>
  </section>

  <section id="methodology" class="splatslam-section">
    <h2>Methodology</h2>
    <p>
      Our pipeline integrates transformer-based SLAM with explicit radiance-field rendering. The workflow is divided into four core modules.
    </p>

    <ol class="splatslam-steps">
      <li>
        <strong>Data Preprocessing & Standardization.</strong>
        We capture 4K monocular videos using smartphones and extract frames at 10 FPS using FFmpeg, standardizing resolution and file naming for public benchmarks and self-collected SUSTech datasets.
      </li>
      <li>
        <strong>Dense Tracking and Mapping with MASt3R-SLAM.</strong>
        MASt3R-SLAM estimates camera trajectories and generates dense colored point clouds through pixel-level transformer matching and global bundle adjustment, without requiring depth sensors.
      </li>
      <li>
        <strong>Standardized Point Cloud Refinement.</strong>
        We apply Statistical Outlier Removal, voxel downsampling, and manual masking in CloudCompare to remove floating noise, reduce point density, and focus on the target scene.
      </li>
      <li>
        <strong>3D Gaussian Splatting & Novel View Synthesis.</strong>
        The refined point cloud initializes Gaussian ellipsoids, and the splatfacto framework optimizes position, covariance, and color through photometric loss minimization.
      </li>
    </ol>

    <div class="splatslam-figure-grid compact-reference">
      <figure>
        <img src="{{ '/assets/img/splatslam/google_site_02.png' | relative_url }}" alt="Reference figure for MASt3R-SLAM rotation-heavy motion">
        <figcaption>Reference figure used for explaining rotation-heavy motion. This is not presented as the main contribution.</figcaption>
      </figure>
      <figure>
        <img src="{{ '/assets/img/splatslam/google_site_03.png' | relative_url }}" alt="SplatSLAM methodology or pipeline figure">
        <figcaption>Pipeline / methodology illustration from the project site.</figcaption>
      </figure>
    </div>
  </section>

  <section id="experiments" class="splatslam-section">
    <h2>Experiments</h2>

    <h3>Experimental Setup</h3>
    <p><strong>Datasets:</strong> 7-Scenes public indoor SLAM benchmark and self-collected SUSTech classroom / kitchen videos.</p>
    <p><strong>Hardware:</strong> NVIDIA RTX 4090 with 24GB VRAM.</p>
    <p><strong>Software:</strong> PyTorch, Nerfstudio, CloudCompare.</p>

    <h3>Phase I: Quantitative SLAM Benchmarking</h3>
    <p>
      We evaluate MASt3R-SLAM on the TUM-RGBD benchmark. The system achieves higher precision in 360° rotation scenes due to dense feature matching compared with the larger-scale room sequence.
    </p>

    <table class="splatslam-table">
      <thead>
        <tr>
          <th>Sequence</th>
          <th>ATE RMSE ↓</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Room sequence</td>
          <td>0.098 m</td>
          <td>Larger-scale indoor trajectory with sub-10cm localization accuracy.</td>
        </tr>
        <tr>
          <td>360° rotation scene</td>
          <td>0.071 m</td>
          <td>Higher precision under rotational motion due to dense feature matching.</td>
        </tr>
      </tbody>
    </table>

    <p>
      <strong>ATE</strong> measures the absolute distance between estimated and ground-truth camera poses. Since monocular SLAM cannot recover absolute scale directly, we perform <strong>Sim(3) Umeyama alignment</strong> before calculating the error for fair comparison.
    </p>

    <div class="splatslam-figure-grid result-strip">
      <figure>
        <img src="{{ '/assets/img/splatslam/google_site_08.png' | relative_url }}" alt="Quantitative SLAM benchmarking result">
        <figcaption>Quantitative SLAM benchmarking result.</figcaption>
      </figure>
      <figure>
        <img src="{{ '/assets/img/splatslam/google_site_09.png' | relative_url }}" alt="Trajectory or metric comparison result">
        <figcaption>Trajectory / metric comparison result.</figcaption>
      </figure>
    </div>

    <h3>Phase II: Geometric Robustness & Scene Saliency</h3>
    <p>
      Reconstruction quality is strongly affected by <strong>visual saliency</strong>. Rich-texture scenes such as pantry / tea room scenes produce denser point clouds, while blank corners and texture-less walls lead to sparse geometry and floaters.
    </p>
    <p>Evaluated self-collected scenes include meeting room 360, meeting room, tea room, and corner scenes.</p>

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

    <h3>Phase III: Rendering Fidelity & Convergence</h3>
    <p>
      We analyze 3DGS training from 7k to 50k iterations. For small-scale indoor scenes, <strong>7,000 iterations</strong> provide a practical visual sweet spot, while longer training can achieve higher PSNR but may introduce high-frequency artifacts and overfitting.
    </p>
    <p>
      In the SOR ablation study, pruning <strong>7.3%</strong> of raw points—from approximately 1,000k to 927k points—effectively removes floaters. The PSNR difference is small (<strong>44.37 vs. 44.29 dB</strong>), but visual stability improves substantially.
    </p>
    <p>
      We also observe the <strong>PSNR trap</strong>: a stationary 11-frame rotation sequence can reach 49.5 dB by memorizing training views, while a 40-frame walkthrough obtains lower PSNR but reconstructs a more complete and navigable digital twin. For practical novel view synthesis, scene coverage and visual integrity are more important than raw PSNR alone.
    </p>
  </section>

  <section class="splatslam-section">
    <h2>Real-time Execution & Hardware Constraints</h2>
    <p>
      The main experiments use an NVIDIA RTX 4090 with 24GB VRAM. Real-time execution remains constrained by dense transformer matching, high-resolution point cloud processing, and 3DGS optimization. This motivates future work on lighter SLAM backbones, more efficient point cloud refinement, and faster training pipelines.
    </p>
  </section>

  <section class="splatslam-section">
    <h2>Acknowledgements</h2>
    <p>
      This project was developed as a final project for the <strong>Computer Vision</strong> course at Southern University of Science and Technology. We sincerely thank <strong>Prof. Feng Zheng</strong> and <strong>Prof. Weiyu Wang</strong> for their guidance, suggestions, and support throughout this work.
    </p>
  </section>
</div>

<style>
.splatslam-page {
  max-width: 920px;
  margin: 0 auto;
}

.splatslam-header {
  margin-bottom: 1.8rem;
  text-align: center;
}

.splatslam-header h1 {
  margin-bottom: 0.8rem;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800 !important;
  line-height: 1.12;
}

.splatslam-authors,
.splatslam-affiliation {
  margin-bottom: 0.3rem;
  color: #555;
}

.splatslam-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.55rem;
  margin-top: 1rem;
}

.splatslam-links a {
  padding: 0.32rem 0.72rem;
  border: 1px solid rgba(143, 177, 98, 0.45);
  border-radius: 999px;
  color: #5f7f3a;
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
}

.splatslam-section {
  margin-top: 2.15rem;
}

.splatslam-section h2 {
  margin-bottom: 0.9rem;
  padding-bottom: 0.35rem;
  border-bottom: 2px solid rgba(143, 177, 98, 0.45);
  font-weight: 750 !important;
}

.splatslam-section h3 {
  margin-top: 1.35rem;
  font-size: 1.15rem;
  font-weight: 700 !important;
}

.splatslam-section p,
.splatslam-section li {
  line-height: 1.65;
}

.splatslam-highlights,
.splatslam-steps {
  padding-left: 1.25rem;
}

.splatslam-table {
  width: 100%;
  margin: 1rem 0;
  border-collapse: collapse;
  font-size: 0.92rem;
}

.splatslam-table th,
.splatslam-table td {
  padding: 0.55rem 0.65rem;
  border: 1px solid rgba(0, 0, 0, 0.12);
  vertical-align: top;
}

.splatslam-table th {
  background: rgba(143, 177, 98, 0.12);
}

.splatslam-figure-grid,
.splatslam-embed-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin: 1.2rem 0;
}

.splatslam-figure-grid figure {
  margin: 0;
}

.splatslam-figure-grid img {
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 6px;
}

.splatslam-figure-grid figcaption {
  margin-top: 0.35rem;
  color: #777;
  font-size: 0.82rem;
  text-align: center;
}

.splatslam-figure-grid.compact-reference {
  grid-template-columns: 0.78fr 1fr;
  align-items: start;
}

.splatslam-figure-grid.compact-reference figure:first-child img {
  max-height: 230px;
  object-fit: contain;
  background: #fff;
}

.splatslam-figure-grid.result-strip {
  grid-template-columns: 1fr;
}

.splatslam-embed-grid iframe {
  width: 100%;
  height: 340px;
  border: 0;
  border-radius: 6px;
  background: #000;
}

@media (max-width: 768px) {
  .splatslam-figure-grid,
  .splatslam-figure-grid.compact-reference,
  .splatslam-embed-grid {
    grid-template-columns: 1fr;
  }

  .splatslam-embed-grid iframe {
    height: 310px;
  }
}
</style>
