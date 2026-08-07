---
layout: page
title: Academic
permalink: /academic/
description: Selected academic work.
nav: true
nav_order: 3
---

<div class="academic-page">
  <h2>Academic Paper</h2>

  <article class="academic-item">
    <div class="academic-media">
      <video autoplay muted loop playsinline preload="metadata" aria-label="TEXEDO project teaser">
        <source src="https://jianuocao.github.io/TEXEDO/videos/optimized/teaser.webm" type="video/webm">
      </video>
    </div>

    <div class="academic-content">
      <h3>
        <a href="https://arxiv.org/abs/2606.22998" target="_blank" rel="noopener noreferrer">
          TEXEDO: Test Time Scaling for Controller-aware Language-conditioned Humanoid Motion Generation
        </a>
      </h3>
      <p class="academic-authors">
        Jianuo Cao*, Yuxin Chen*, <strong>Yuzhen Song</strong>, Masayoshi Tomizuka, Chenran Li, Thomas Tian
      </p>
      <p class="academic-status"><em>Accepted by RSS WCBM Workshop</em><br><em>Under Review</em></p>
      <p class="academic-links">
        <a href="https://arxiv.org/pdf/2606.22998" target="_blank" rel="noopener noreferrer">arXiv</a>
        <span>/</span>
        <a href="https://github.com/JianuoCao/TEXEDO" target="_blank" rel="noopener noreferrer">code</a>
        <span>/</span>
        <a href="https://jianuocao.github.io/TEXEDO/" target="_blank" rel="noopener noreferrer">website</a>
        <span>/</span>
        <a href="https://huggingface.co/JianuoCao/TEXEDO-Checkpoint" target="_blank" rel="noopener noreferrer">model</a>
        <span>/</span>
        <a href="https://huggingface.co/datasets/JianuoCao/TEXEDO" target="_blank" rel="noopener noreferrer">dataset</a>
      </p>
    </div>
  </article>
</div>

<style>
.academic-page {
  max-width: 960px;
  margin: 0 auto;
}

.academic-page > h2 {
  margin: 0 0 2rem;
  color: #20251b;
  font-size: 1.8rem;
  font-weight: 750 !important;
}

.academic-item {
  display: grid;
  grid-template-columns: minmax(260px, 34%) 1fr;
  gap: 1.75rem;
  align-items: start;
}

.academic-media {
  overflow: hidden;
  aspect-ratio: 16 / 9;
  background: #151812;
  border-radius: 8px;
}

.academic-media video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.academic-content h3 {
  margin: 0 0 0.45rem;
  font-size: 1.2rem;
  font-weight: 750 !important;
  line-height: 1.25;
}

.academic-content h3 a,
.academic-links a {
  color: #8fb162;
  text-decoration: none;
}

.academic-content h3 a:hover,
.academic-links a:hover {
  color: #6f8f45;
  text-decoration: underline;
}

.academic-authors,
.academic-status,
.academic-links {
  margin: 0 0 0.35rem;
  line-height: 1.45;
}

.academic-authors {
  color: #252525;
  font-size: 1rem;
}

.academic-status {
  color: #333;
}

.academic-links {
  margin-top: 0.9rem;
  color: #777;
  font-size: 1rem;
}

.academic-links span {
  margin: 0 0.22rem;
  color: #777;
}

@media (max-width: 700px) {
  .academic-item {
    grid-template-columns: 1fr;
  }

  .academic-media {
    max-width: 520px;
  }
}
</style>
