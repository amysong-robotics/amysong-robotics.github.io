---
layout: page
title: "SplatSLAM"
description: "Dense 3D Reconstruction from Monocular Video via Learning-based SLAM and Gaussian Splatting."
img: assets/img/splatslam_cover.png
importance: 5
category: Course Projects
---

<div class="splatslam-page">
  <section class="splatslam-hero">
    <p class="splatslam-kicker">Computer Vision Course Project · SUSTech</p>
    <h1>Dense 3D Reconstruction from Monocular Video via Learning-based SLAM and Gaussian Splatting</h1>
    <p class="splatslam-authors">Jiacan Li* · Yuzhen Song* · Yiming Ma*</p>
    <p class="splatslam-affiliation">Southern University of Science and Technology</p>
    <div class="splatslam-links">
      <a href="https://sites.google.com/view/splatslam/home" target="_blank" rel="noopener noreferrer">Original Google Site</a>
      <a href="#interactive-demo">Interactive Demo</a>
    </div>
  </section>

  <section class="splatslam-card" id="abstract">
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

    <div class="splatslam-highlights">
      <div><strong>End-to-End Workflow</strong><span>Monocular mobile video input to interactive 3D digital twins.</span></div>
      <div><strong>High Precision</strong><span>Sub-10cm trajectory accuracy (ATE RMSE) without camera calibration.</span></div>
      <div><strong>Noise Robustness</strong><span>SOR denoising removes floaters and SLAM artifacts.</span></div>
      <div><strong>Photo-realistic Rendering</strong><span>PSNR up to 49.46 dB for complex indoor novel view synthesis.</span></div>
    </div>
  </section>

  <section class="splatslam-card" id="methodology">
    <h2>Methodology</h2>
    <p>
      Our pipeline integrates transformer-based SLAM with explicit radiance-field rendering. The workflow is divided into four core modules.
    </p>

    <div class="pipeline-grid">
      <article>
        <span>01</span>
        <h3>Data Preprocessing & Standardization</h3>
        <p>We capture 4K monocular videos using smartphones and extract frames at a fixed rate of 10 FPS using FFmpeg. This standardizes image resolution and naming conventions across public benchmarks and self-collected SUSTech datasets.</p>
      </article>
      <article>
        <span>02</span>
        <h3>Dense Tracking and Mapping</h3>
        <p>The system employs MASt3R-SLAM as the front-end. Pixel-level transformer matching and global bundle adjustment estimate accurate camera trajectories and generate dense colored point clouds without depth sensors.</p>
      </article>
      <article>
        <span>03</span>
        <h3>Point Cloud Refinement</h3>
        <p>We implement a post-processing workflow in CloudCompare, including Statistical Outlier Removal, voxel downsampling, and manual masking to remove floating noise, reduce point density, and focus on the target scene.</p>
      </article>
      <article>
        <span>04</span>
        <h3>3D Gaussian Splatting & NVS</h3>
        <p>The refined point cloud initializes Gaussian ellipsoids. Using the splatfacto framework, the system optimizes Gaussian position, covariance, and color through photometric loss minimization for real-time novel view synthesis.</p>
      </article>
    </div>
  </section>

  <section class="splatslam-card" id="experiments">
    <h2>Experiments</h2>

    <h3>Experimental Setup</h3>
    <div class="setup-grid">
      <div><strong>Datasets</strong><span>7-Scenes public indoor SLAM benchmark; self-collected SUSTech classrooms and kitchens.</span></div>
      <div><strong>Hardware</strong><span>NVIDIA RTX 4090 with 24GB VRAM.</span></div>
      <div><strong>Software</strong><span>PyTorch, Nerfstudio, CloudCompare.</span></div>
    </div>

    <h3>Phase I: Quantitative SLAM Benchmarking</h3>
    <p>
      We evaluate MASt3R-SLAM on the TUM-RGBD benchmark. The system achieves higher precision in 360° rotation scenes because dense feature matching remains stable under large viewpoint changes.
    </p>
    <div class="table-responsive">
      <table class="table table-sm splatslam-table">
        <thead>
          <tr>
            <th>Sequence</th>
            <th>ATE RMSE ↓</th>
            <th>Interpretation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Room sequence</td>
            <td>0.098 m</td>
            <td>Larger-scale room trajectory with sub-10cm localization accuracy.</td>
          </tr>
          <tr>
            <td>360° rotation scene</td>
            <td>0.071 m</td>
            <td>Higher precision from dense matching under rotational motion.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      <strong>ATE</strong> measures the absolute distance between estimated and ground-truth camera poses. <strong>RMSE</strong> summarizes the average error across frames. Because monocular SLAM cannot recover absolute scale directly, we apply <strong>Sim(3) Umeyama alignment</strong> before calculating error for fair comparison.
    </p>

    <h3>Phase II: Geometric Robustness & Scene Saliency</h3>
    <p>
      By comparing three self-collected scenes, we observe that reconstruction quality is highly dependent on <strong>visual saliency</strong>. The pantry yields the densest point cloud due to rich textures, while blank corners and texture-less walls lead to sparse points and floaters.
    </p>
    <ul>
      <li>Meeting room 360</li>
      <li>Meeting room</li>
      <li>Tea room</li>
      <li>Corner</li>
    </ul>

    <h3>Phase III: Rendering Fidelity & Convergence</h3>
    <p>
      We analyze 3DGS training from 7k to 50k iterations. For small-scale indoor scenes, <strong>7,000 iterations</strong> provide a practical visual sweet spot, maintaining natural structural integrity. Although PSNR continues to increase up to approximately 44.29 dB at 50k iterations, excessive training can introduce high-frequency artifacts and overfitting.
    </p>
    <p>
      We further evaluate texture sensitivity from pantry scenes to blank-wall scenes. Richly textured environments produce more complete geometry, while texture-less scenes are failure cases for monocular SLAM because they lack stable visual features.
    </p>
  </section>

  <section class="splatslam-card" id="ablation">
    <h2>Ablation Studies</h2>

    <h3>Impact of SOR Denoising</h3>
    <p>
      SOR refinement is a crucial transition step between noisy SLAM outputs and high-fidelity rendering. By pruning <strong>7.3%</strong> of the raw data—from approximately 1,000k to 927k points—using a threshold of 20 neighbors and 1.25 standard deviations, the pipeline eliminates floaters and improves visual stability. While the PSNR difference is small (44.37 vs. 44.29 dB), the qualitative improvement is substantial.
    </p>

    <h3>The PSNR Trap: Overfitting vs. Generalization</h3>
    <p>
      We compare two capture strategies in the same meeting room. <strong>Test 7</strong>, a stationary rotation with 11 frames, achieves a high PSNR of 49.5 dB but overfits by memorizing the training views. It performs poorly when rendered from unseen viewpoints. In contrast, <strong>Test 9</strong>, a full walkthrough with 40 frames, obtains a lower PSNR of 42.2 dB but reconstructs a more complete and navigable digital twin.
    </p>
    <p>
      This shows that for practical novel view synthesis, comprehensive scene coverage and visual integrity are more meaningful than raw numerical metrics alone.
    </p>
  </section>

  <section class="splatslam-card" id="hardware">
    <h2>Real-time Execution & Hardware Constraints</h2>
    <p>
      The Google Site reports the main experiments on an RTX 4090 with 24GB VRAM. In practical deployment, real-time performance remains constrained by the computational cost of dense transformer matching, high-resolution point cloud processing, and 3DGS optimization. This motivates future work on lighter SLAM backbones, more efficient point cloud refinement, and streamlined training pipelines.
    </p>
  </section>

  <section class="splatslam-card" id="interactive-demo">
    <h2>Interactive Demo</h2>
    <p>
      The reconstructed point cloud can be explored interactively below. This embedded viewer demonstrates the dense geometric output produced by the reconstruction pipeline.
    </p>
    <div class="sketchfab-embed-wrapper splatslam-demo">
      <iframe title="MASt3R-SLAM Dense Pointcloud" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" src="https://sketchfab.com/models/26dffeeeb1e748d386671aeb205f9081/embed?autostart=1&ui_theme=dark&ui_hint=0"></iframe>
    </div>
  </section>

  <section class="splatslam-acknowledgements">
    <p>
      This project was developed as a final project for the <strong>Computer Vision</strong> course at Southern University of Science and Technology (SUSTech). We sincerely thank <strong>Prof. Feng Zheng</strong> and <strong>Prof. Weiyu Wang</strong> for their guidance, suggestions, and support throughout this work.
    </p>
  </section>
</div>

<style>
.splatslam-page {
  max-width: 920px;
  margin: 0 auto;
}

.splatslam-hero {
  margin-bottom: 1.75rem;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(252, 253, 249, 0.96), rgba(238, 245, 223, 0.88));
  border: 1px solid rgba(143, 177, 98, 0.22);
  border-radius: 18px;
  box-shadow: 0 15px 35px rgba(143, 177, 98, 0.13);
}

.splatslam-kicker,
.splatslam-affiliation {
  margin-bottom: 0.45rem;
  color: #6d7d54;
  font-size: 0.86rem;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.splatslam-hero h1 {
  max-width: 820px;
  margin-bottom: 0.85rem;
  color: #20251b;
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 800 !important;
  line-height: 1.08;
}

.splatslam-authors {
  margin-bottom: 0.25rem;
  color: #39402f;
  font-weight: 700;
}

.splatslam-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.1rem;
}

.splatslam-links a {
  display: inline-flex;
  padding: 0.42rem 0.8rem;
  border: 1px solid rgba(143, 177, 98, 0.38);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.58);
  color: #5f7f3a;
  font-size: 0.86rem;
  font-weight: 700;
  text-decoration: none;
}

.splatslam-card {
  margin-bottom: 1.25rem;
  padding: 1.35rem 1.45rem;
  background: rgba(255, 255, 255, 0.62);
  border: 1px solid rgba(143, 177, 98, 0.16);
  border-left: 4px solid #8fb162;
  border-radius: 16px;
  box-shadow: 0 10px 26px rgba(143, 177, 98, 0.07);
}

.splatslam-card h2 {
  margin-bottom: 0.9rem;
  color: #20251b;
  font-size: 1.45rem;
  font-weight: 800 !important;
}

.splatslam-card h3 {
  margin-top: 1.1rem;
  color: #2c3324;
  font-size: 1.05rem;
  font-weight: 800 !important;
}

.splatslam-card p,
.splatslam-card li {
  color: #4d5544;
  line-height: 1.65;
}

.splatslam-highlights,
.setup-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.7rem;
  margin-top: 1.1rem;
}

.splatslam-highlights div,
.setup-grid div,
.pipeline-grid article {
  padding: 0.9rem;
  background: rgba(238, 193, 77, 0.11);
  border: 1px solid rgba(143, 177, 98, 0.16);
  border-radius: 12px;
}

.splatslam-highlights strong,
.setup-grid strong {
  display: block;
  margin-bottom: 0.25rem;
  color: #5f7f3a;
}

.splatslam-highlights span,
.setup-grid span {
  color: #59614f;
  font-size: 0.9rem;
}

.pipeline-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;
  margin-top: 1rem;
}

.pipeline-grid span {
  color: #8fb162;
  font-weight: 800;
}

.pipeline-grid h3 {
  margin-top: 0.2rem;
}

.splatslam-table {
  background: rgba(255, 255, 255, 0.72);
}

.splatslam-demo {
  overflow: hidden;
  background: #000;
  border-radius: 14px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.14);
}

.splatslam-demo iframe {
  width: 100%;
  height: 520px;
}

.splatslam-acknowledgements {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(143, 177, 98, 0.2);
  color: #777;
  text-align: center;
  font-size: 0.88rem;
}

@media (max-width: 768px) {
  .splatslam-hero,
  .splatslam-card {
    padding: 1rem;
  }

  .splatslam-highlights,
  .setup-grid,
  .pipeline-grid {
    grid-template-columns: 1fr;
  }

  .splatslam-demo iframe {
    height: 360px;
  }
}
</style>
