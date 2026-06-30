---
layout: page
title: "SplatSLAM"
description: "Dense 3D Reconstruction from Monocular Video via Learning-based SLAM and Gaussian Splatting."
img: assets/img/scene_difficulty_comparison.png
importance: 5
category: Course Projects
---

<div class="splatslam-page">
  <header class="splatslam-header">
    <h1>Dense 3D Reconstruction from Monocular Video via Learning-based SLAM and Gaussian Splatting</h1>
    <p class="splatslam-authors"><strong>Jiacan Li*</strong> · <strong>Yuzhen Song*</strong> · <strong>Yiming Ma*</strong></p>
    <p class="splatslam-affiliation">Southern University of Science and Technology</p>
    <nav class="splatslam-links" aria-label="SplatSLAM page navigation">
      <a href="https://sites.google.com/view/splatslam/home" target="_blank" rel="noopener noreferrer">Original Google Site</a>
      <a href="#demo">Demo</a>
      <a href="#abstract">Abstract</a>
      <a href="#methodology">Methodology</a>
      <a href="#experiments">Experiments</a>
    </nav>
  </header>

  <section id="demo" class="splatslam-section">
    <h2>Demo</h2>
    <p>We place the demos first so the reconstruction results can be viewed immediately. These embedded videos and interactive viewers are migrated from the original Google Site.</p>

    <h3>Video Previews</h3>
    <div class="splatslam-embed-grid two-col">
      <iframe title="SplatSLAM video preview 1" src="https://drive.google.com/file/d/1_Jk0D-Ieay6yEj4jdbtbB0-NqtJbIWxC/preview" allow="autoplay; fullscreen" allowfullscreen></iframe>
      <iframe title="SplatSLAM video preview 2" src="https://drive.google.com/file/d/1cTGS4e1WadRVLa-rQGBm9sIkoHfepd4w/preview" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>

    <h3>Interactive Point-cloud / Reconstruction Viewers</h3>
    <div class="splatslam-embed-grid two-col">
      <iframe title="SplatSLAM interactive demo 1" src="https://sketchfab.com/models/556f95d2d32645e0b144cdb9038f934b/embed?autostart=1&ui_hint=0&ui_theme=dark" allow="autoplay; fullscreen; xr-spatial-tracking" allowfullscreen></iframe>
      <iframe title="SplatSLAM interactive demo 2" src="https://sketchfab.com/models/a2e3aa48facd46de8a9e1d70bd4858be/embed?autostart=1&ui_hint=0&ui_theme=dark&transparent=1" allow="autoplay; fullscreen; xr-spatial-tracking" allowfullscreen></iframe>
      <iframe title="SplatSLAM interactive demo 3" src="https://sketchfab.com/models/35db1e88d8ba4204b576b6774a51308e/embed?autostart=1&ui_hint=0&ui_theme=dark" allow="autoplay; fullscreen; xr-spatial-tracking" allowfullscreen></iframe>
      <iframe title="SplatSLAM interactive demo 4" src="https://sketchfab.com/models/fd0c1cbb08ef47e8b6b8e5704b4a71d8/embed?autostart=1&ui_hint=0&ui_theme=dark" allow="autoplay; fullscreen; xr-spatial-tracking" allowfullscreen></iframe>
      <iframe title="SplatSLAM interactive demo 5" src="https://sketchfab.com/models/26dffeeeb1e748d386671aeb205f9081/embed?autostart=1&ui_hint=0&ui_theme=dark" allow="autoplay; fullscreen; xr-spatial-tracking" allowfullscreen></iframe>
      <iframe title="SplatSLAM interactive demo 6" src="https://sketchfab.com/models/2bd98d5914124023a06100404945fe2f/embed?autostart=1&ui_hint=0&ui_theme=dark" allow="autoplay; fullscreen; xr-spatial-tracking" allowfullscreen></iframe>
    </div>
  </section>

  <section id="abstract" class="splatslam-section">
    <h2>Abstract</h2>
    <p>We present <strong>SplatSLAM</strong>, an end-to-end indoor scene reconstruction pipeline that bridges the gap between learning-based dense SLAM and photo-realistic novel view synthesis. Our method leverages <strong>MASt3R-SLAM</strong> to recover accurate camera trajectories and dense geometric point clouds from monocular RGB video captured by consumer smartphones.</p>
    <p>To address the inherent noise and outliers in raw SLAM outputs, we introduce a standardized point cloud post-processing workflow, including <strong>Statistical Outlier Removal (SOR)</strong> and voxel downsampling, as a crucial transition module. By integrating these optimized priors, we initialize and train <strong>3D Gaussian Splatting (3DGS)</strong>, enabling real-time, high-fidelity rendering of complex indoor environments.</p>
    <p>Evaluations on the <strong>7-Scenes benchmark</strong> and self-collected SUSTech campus datasets demonstrate that our pipeline significantly improves localization accuracy compared to traditional feature-based SLAM, while delivering superior visual reconstruction quality.</p>

    <ul class="splatslam-highlights">
      <li><strong>End-to-End Workflow:</strong> bridging monocular mobile video input to interactive 3D digital twins.</li>
      <li><strong>High Precision:</strong> achieving sub-10cm trajectory accuracy on public benchmarks without camera calibration.</li>
      <li><strong>Noise Robustness:</strong> integrating SOR denoising to eliminate floaters and SLAM artifacts.</li>
      <li><strong>Photo-realistic Rendering:</strong> achieving PSNR up to 49.46 dB for complex indoor novel view synthesis.</li>
    </ul>
  </section>

  <section id="methodology" class="splatslam-section">
    <h2>Methodology</h2>
    <p>Our pipeline integrates advanced transformer-based SLAM with explicit radiance field rendering to achieve high-fidelity reconstruction. The workflow is divided into four core modules.</p>

    <div class="splatslam-method-list">
      <article>
        <h3>1. Data Preprocessing &amp; Standardization</h3>
        <p>We capture 4K monocular videos using smartphones and extract frames at a fixed rate of 10 FPS using FFmpeg. This standardizes image resolution and naming conventions across public benchmarks and self-collected SUSTech datasets.</p>
      </article>
      <article>
        <h3>2. Dense Tracking and Mapping with MASt3R-SLAM</h3>
        <p>The system employs MASt3R-SLAM as the front-end. Pixel-level transformer matching and global bundle adjustment estimate camera trajectories and generate dense colored point clouds without requiring depth sensors.</p>
      </article>
      <article>
        <h3>3. Standardized Point Cloud Refinement</h3>
        <p>We use CloudCompare for SOR denoising, voxel downsampling, and manual masking, removing floating artifacts and improving training efficiency for 3DGS.</p>
      </article>
      <article>
        <h3>4. 3D Gaussian Splatting &amp; NVS</h3>
        <p>The refined point cloud initializes Gaussian ellipsoids. The splatfacto framework optimizes position, covariance, and color through photometric loss minimization for real-time novel view synthesis.</p>
      </article>
    </div>

    <figure class="splatslam-figure reference-small">
      <img src="{{ '/assets/img/pipeline.png' | relative_url }}" alt="SplatSLAM processing pipeline">
      <figcaption>SplatSLAM processing pipeline: video preprocessing, MASt3R-SLAM mapping, point-cloud refinement, and 3DGS rendering.</figcaption>
    </figure>
  </section>

  <section id="experiments" class="splatslam-section">
    <h2>Experiments</h2>

    <h3>Experimental Setup</h3>
    <p><strong>Datasets:</strong> 7-Scenes public indoor SLAM benchmark and self-collected SUSTech campus scenes including classrooms and kitchens.</p>
    <p><strong>Hardware:</strong> NVIDIA RTX 4090 with 24GB VRAM.</p>
    <p><strong>Software:</strong> PyTorch, Nerfstudio, and CloudCompare.</p>
  </section>

  <section class="splatslam-section">
    <h2>Phase I: Quantitative SLAM Benchmarking</h2>
    <p>We evaluate MASt3R-SLAM on the TUM-RGBD benchmark. The system achieves higher precision in 360° rotation scenes due to dense feature matching, compared with the larger-scale room sequence.</p>

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

    <p><strong>ATE</strong> measures the absolute distance between estimated and ground-truth camera poses. <strong>RMSE</strong> represents the overall average error across frames. Since monocular SLAM cannot recover absolute scale, we perform <strong>Sim(3) Umeyama alignment</strong> before calculating the error for fair comparison.</p>

    <div class="splatslam-figure-grid two-col">
      <figure>
        <img src="{{ '/assets/img/mast3r_slam_ate_tum_dataset.png' | relative_url }}" alt="TUM-RGBD SLAM benchmarking result">
        <figcaption>TUM-RGBD SLAM benchmarking result from the original project page.</figcaption>
      </figure>
      <figure>
        <img src="{{ '/assets/img/scene_comparison_table_en.png' | relative_url }}" alt="Additional SLAM benchmarking figure">
        <figcaption>Scene-level comparison table used to summarize reconstruction difficulty and visual saliency.</figcaption>
      </figure>
    </div>
  </section>

  <section class="splatslam-section">
    <h2>Phase II: Geometric Robustness &amp; Scene Saliency</h2>
    <p>By comparing self-collected scenes, we observe that reconstruction quality is highly dependent on <strong>visual saliency</strong>. The pantry yields denser point clouds due to rich textures, while blank corners and texture-less walls result in sparse geometry and floating artifacts.</p>
    <p>Evaluated scenes include meeting room 360, meeting room, tea room, and corner scenes.</p>

    <div class="splatslam-figure-grid two-col">
      <figure>
        <img src="{{ '/assets/img/scene_difficulty_comparison.png' | relative_url }}" alt="Scene saliency comparison">
        <figcaption>Scene difficulty comparison across self-collected indoor environments.</figcaption>
      </figure>
      <figure>
        <img src="{{ '/assets/img/capture_method_comparison.png' | relative_url }}" alt="Geometric robustness visualization">
        <figcaption>Capture-method comparison showing how viewpoint coverage affects reconstruction completeness.</figcaption>
      </figure>
    </div>
  </section>

  <section class="splatslam-section">
    <h2>Phase III: Rendering Fidelity &amp; Convergence</h2>
    <p>We analyze the 3DGS training evolution from 7k to 50k iterations. The visual quality reaches a practical sweet spot around <strong>7,000 iterations</strong> for small-scale indoor scenes, while 50k iterations can achieve higher PSNR and more photorealistic specular details.</p>

    <h3>Texture Sensitivity: From Pantry to Blank Wall</h3>
    <p>We evaluate environments with varying texture densities. Richly textured pantry scenes yield more complete geometry, while blank walls are a failure case for monocular SLAM because the lack of salient features leads to sparse points and floating artifacts.</p>

    <div class="splatslam-figure-grid two-col">
      <figure>
        <img src="{{ '/assets/img/test10_training_convergence.png' | relative_url }}" alt="Texture sensitivity result">
        <figcaption>Training convergence analysis for the test10 reconstruction setting.</figcaption>
      </figure>
      <figure>
        <img src="{{ '/assets/img/iteration_comparison_frame0000.png' | relative_url }}" alt="3DGS rendering fidelity result">
        <figcaption>Iteration comparison at frame 0000 under SOR and opacity reset.</figcaption>
      </figure>
      <figure>
        <img src="{{ '/assets/img/iteration_comparison_frame0017.png' | relative_url }}" alt="Training convergence visualization">
        <figcaption>Iteration comparison at frame 0017 showing consistency across different views.</figcaption>
      </figure>
    </div>

    <h3>Ablation Study: Impact of SOR Denoising</h3>
    <p>To bridge noisy SLAM outputs and high-fidelity rendering, we integrate <strong>Statistical Outlier Removal</strong> as a crucial refinement step. By pruning <strong>7.3%</strong> of raw data, reducing approximately 1,000k points to 927k points, we eliminate floaters and improve visual stability. The PSNR difference is small, but the qualitative enhancement is substantial.</p>

    <div class="splatslam-figure-grid two-col">
      <figure>
        <img src="{{ '/assets/img/sor_explanation.png' | relative_url }}" alt="SOR denoising ablation">
        <figcaption>SOR explanation: statistical outlier removal removes floaters from noisy SLAM point clouds.</figcaption>
      </figure>
      <figure>
        <img src="{{ '/assets/img/sor_comparison_5frames.png' | relative_url }}" alt="Cleaned reconstruction after SOR">
        <figcaption>Five-frame SOR comparison showing cleaner rendering after point-cloud refinement.</figcaption>
      </figure>
    </div>

    <h3>The PSNR Trap — Overfitting vs. Generalization</h3>
    <p>We compare two capture strategies in the same meeting room. A stationary rotation with 11 frames achieves high PSNR but overfits by memorizing training views. A full walkthrough with 40 frames yields lower PSNR but reconstructs a more complete and navigable digital twin.</p>

    <figure class="splatslam-figure">
      <img src="{{ '/assets/img/test10_method_comparison.png' | relative_url }}" alt="PSNR trap comparison">
      <figcaption>Capture-method comparison: high PSNR from limited views can overfit, while wider coverage improves generalization.</figcaption>
    </figure>
  </section>

  <section class="splatslam-section">
    <h2>Real-time Execution &amp; Hardware Constraints</h2>
    <p>The main experiments use an NVIDIA RTX 4090 with 24GB VRAM. Real-time execution remains constrained by dense transformer matching, high-resolution point cloud processing, and 3DGS optimization. These constraints motivate lighter SLAM backbones, more efficient point cloud refinement, and faster training pipelines.</p>

    <div class="splatslam-figure-grid two-col">
      <figure>
        <img src="{{ '/assets/img/iteration_metrics_table_en.png' | relative_url }}" alt="Real-time hardware constraint result">
        <figcaption>Iteration metrics table summarizing rendering quality across training settings.</figcaption>
      </figure>
      <figure>
        <img src="{{ '/assets/img/iteration_metrics_table.png' | relative_url }}" alt="Real-time execution result">
        <figcaption>Original iteration metrics table retained for consistency with the project analysis.</figcaption>
      </figure>
    </div>
  </section>

  <section class="splatslam-section">
    <h2>Acknowledgements</h2>
    <p>This project was developed as a final project for the <strong>Computer Vision</strong> course at Southern University of Science and Technology. We sincerely thank <strong>Prof. Feng Zheng</strong> and <strong>Prof. Weiyu Wang</strong> for their guidance, suggestions, and support throughout this work.</p>
  </section>
</div>

<style>
.splatslam-page {
  max-width: 920px;
  margin: 0 auto;
}

.splatslam-header h1 {
  margin-bottom: 0.75rem;
  color: #20251b;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800 !important;
  line-height: 1.1;
}

.splatslam-authors,
.splatslam-affiliation {
  margin-bottom: 0.35rem;
  color: #4f5942;
}

.splatslam-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin: 1.1rem 0 1.8rem;
}

.splatslam-links a {
  padding: 0.32rem 0.72rem;
  border: 1px solid rgba(143, 177, 98, 0.45);
  border-radius: 999px;
  color: #6a8644;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
}

.splatslam-section {
  margin-top: 2rem;
}

.splatslam-section h2 {
  margin-bottom: 0.9rem;
  padding-bottom: 0.35rem;
  border-bottom: 2px solid rgba(143, 177, 98, 0.45);
  color: #20251b;
  font-size: 1.55rem;
  font-weight: 750 !important;
}

.splatslam-section h3 {
  margin-top: 1.35rem;
  color: #2f3428;
  font-size: 1.08rem;
  font-weight: 700 !important;
}

.splatslam-section p,
.splatslam-section li,
.splatslam-table {
  color: #444;
  line-height: 1.65;
}

.splatslam-highlights {
  padding-left: 1.15rem;
}

.splatslam-method-list article {
  margin-bottom: 1rem;
}

.splatslam-figure,
.splatslam-figure-grid {
  margin: 1.35rem 0;
}

.splatslam-figure img,
.splatslam-figure-grid img {
  width: 100%;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.reference-small {
  max-width: 520px;
}

.reference-small img {
  max-height: 230px;
  object-fit: contain;
  background: #fff;
}

.splatslam-figure-grid.two-col {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.splatslam-figure-grid figure,
.splatslam-figure figure {
  margin: 0;
}

.splatslam-figure-grid figcaption,
.splatslam-figure figcaption {
  margin-top: 0.42rem;
  color: #777;
  font-size: 0.84rem;
  line-height: 1.45;
  text-align: center;
}

.splatslam-embed-grid {
  display: grid;
  gap: 1rem;
  margin: 1rem 0 1.4rem;
}

.splatslam-embed-grid.two-col {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.splatslam-embed-grid iframe {
  width: 100%;
  height: 360px;
  border: 0;
  border-radius: 8px;
  background: #000;
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
  border: 1px solid rgba(143, 177, 98, 0.25);
  vertical-align: top;
}

.splatslam-table th {
  background: rgba(143, 177, 98, 0.11);
  color: #2f3428;
}

@media (max-width: 768px) {
  .splatslam-figure-grid.two-col,
  .splatslam-embed-grid.two-col {
    grid-template-columns: 1fr;
  }

  .splatslam-embed-grid iframe {
    height: 320px;
  }
}
</style>
