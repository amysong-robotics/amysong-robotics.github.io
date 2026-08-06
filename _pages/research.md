---
layout: page
title: Research
permalink: /research/
description: Selected academic work.
nav: true
nav_order: 3
---

<div class="research-page">
  <h2>Academic Paper</h2>

  <article class="research-item">
    <div class="research-media">
      <video autoplay muted loop playsinline preload="metadata" aria-label="TEXEDO project teaser">
        <source src="https://jianuocao.github.io/TEXEDO/videos/optimized/teaser.webm" type="video/webm">
      </video>
    </div>

    <div class="research-content">
      <h3>
        <a href="https://arxiv.org/pdf/2606.22998" target="_blank" rel="noopener noreferrer">
          TEXEDO: Test Time Scaling for Controller-aware Language-conditioned Humanoid Motion Generation
        </a>
      </h3>
      <p class="research-authors">
        Jianuo Cao, Yuxin Chen*, <strong>Yuzhen Song</strong>, Masayoshi Tomizuka, Chenran Li, Thomas Tian
      </p>
      <p class="research-status"><em>Accepted by RSS WCBM Workshop</em><br><em>Under Review</em></p>
      <p class="research-links">
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
.research-page {
  max-width: 960px;
  margin: 0 auto;
}

.research-page > h2 {
  margin: 0 0 2rem;
  color: #20251b;
  font-size: 1.8rem;
  font-weight: 750 !important;
}

.research-item {
  display: grid;
  grid-template-columns: minmax(260px, 34%) 1fr;
  gap: 1.75rem;
  align-items: start;
}

.research-media {
  overflow: hidden;
  aspect-ratio: 16 / 9;
  background: #151812;
  border-radius: 8px;
}

.research-media video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.research-content h3 {
  margin: 0 0 0.45rem;
  font-size: 1.2rem;
  font-weight: 750 !important;
  line-height: 1.25;
}

.research-content h3 a,
.research-links a {
  color: #2879bd;
  text-decoration: none;
}

.research-content h3 a:hover,
.research-links a:hover {
  color: #1b5f95;
  text-decoration: underline;
}

.research-authors,
.research-status,
.research-links {
  margin: 0 0 0.35rem;
  line-height: 1.45;
}

.research-authors {
  color: #252525;
  font-size: 1rem;
}

.research-status {
  color: #333;
}

.research-links {
  margin-top: 0.9rem;
  color: #777;
  font-size: 1rem;
}

.research-links span {
  margin: 0 0.22rem;
  color: #777;
}

@media (max-width: 700px) {
  .research-item {
    grid-template-columns: 1fr;
  }

  .research-media {
    max-width: 520px;
  }
}
</style>
