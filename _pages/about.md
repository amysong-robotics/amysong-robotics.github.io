---
layout: about
title: About
permalink: /
nav: false            
nav_order: 1         

profile:
  align: right
  image: prof_pic.jpg
  image_circular: true
  more_info: >
    <div class="profile-contact-card" style="display: flex; flex-direction: column; align-items: center; margin-top: 0.95rem; color: #20251b; font-family: Inter, Helvetica Neue, Arial, sans-serif; line-height: 1.38; letter-spacing: -0.015em; text-align: center;">
      <div class="profile-contact-name" style="width: 100%; margin-bottom: 0.55rem; color: #20251b; font-size: 1.3rem; font-weight: 500; letter-spacing: -0.02em; text-align: center;">Yuzhen Song</div>
      <div class="profile-contact-education" style="width: 100%; max-width: 18rem; margin: 0 auto 0.7rem; color: #333; text-align: center; font-size: 0.92rem; line-height: 1.45; letter-spacing: -0.01em;">
        2023–present, B.E. in Robotics Engineering<br>Southern University of Science and Technology
      </div>
      <a class="profile-contact-email" href="mailto:12312836@mail.sustech.edu.cn" style="display: block; width: 100%; color: #20251b; text-align: center; text-decoration: none; overflow-wrap: anywhere; font-size: 0.92rem; letter-spacing: -0.01em;">12312836@mail.sustech.edu.cn</a>
    </div>

selected_papers: false 
social: true
---

<div class="about-intro">
  <p>
    I am a senior undergraduate student majoring in Robotics Engineering at
    <a class="about-link" href="https://www.sustech.edu.cn/">Southern University of Science and Technology</a>.
    I work with
    <a class="about-link" href="https://faculty.sustech.edu.cn/?tagid=fucl&iscss=1&snapid=1&orderby=date&go=2">Prof. Chenglong Fu</a>
    in the
    <a class="about-link" href="https://www.harlab.site/">Human Augmentation and Rehabilitation Laboratory (HAR Lab)</a>.
  </p>

  <p>
    I am also involved in a UC Berkeley collaboration with the
    <a class="about-link" href="https://msc.berkeley.edu/">Mechanical Systems Control Laboratory (MSC Lab)</a>,
    directed by
    <a class="about-link" href="https://me.berkeley.edu/people/masayoshi-tomizuka/">Prof. Masayoshi Tomizuka</a>,
    at
    <a class="about-link" href="https://www.berkeley.edu/">University of California, Berkeley</a>.
  </p>
</div>

<hr class="about-divider">

<div class="about-phd">
  <h3>Applying for 2027 Fall PhD Programs</h3>
  <p>I am currently applying for PhD programs starting in Fall 2027.</p>
</div>

<div class="about-actions" aria-label="Quick links">
  <a href="{{ site.baseurl }}/assets/pdf/cv.pdf" target="_blank" rel="noopener" class="flow-hover-button">Download CV</a>
  <a href="mailto:12312836@mail.sustech.edu.cn" class="flow-hover-button">Email Me</a>
</div>

<style>
.profile-contact-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.95rem;
  color: #20251b;
  font-family: "Inter", "Helvetica Neue", Arial, sans-serif;
  line-height: 1.38;
  letter-spacing: -0.015em;
  text-align: center;
}

.profile-contact-name {
  margin-bottom: 0.55rem;
  color: #20251b;
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: -0.02em;
}

.profile-contact-education {
  display: inline-block;
  margin: 0 auto 0.7rem;
  padding-left: 1rem;
  color: #333;
  text-align: left;
  font-size: 0.92rem;
  line-height: 1.45;
  letter-spacing: -0.01em;
}

.profile-contact-email {
  display: block;
  color: #20251b;
  text-decoration: none;
  overflow-wrap: anywhere;
  font-size: 0.92rem;
  letter-spacing: -0.01em;
}

.profile-contact-email:hover {
  color: #8fb162;
  text-decoration: underline;
}

.about-intro {
  margin-bottom: 2.3rem;
}

.about-intro p {
  margin-bottom: 1.1rem;
  line-height: 1.85;
}

.about-link {
  color: #8fb162 !important;
  font-weight: 400;
  text-decoration: underline !important;
  text-decoration-thickness: 1.5px;
  text-underline-offset: 2px;
}

.about-divider {
  margin: 2.2rem 0 2rem;
  border: 0;
  border-top: 1px solid rgba(143, 177, 98, 0.25);
}

.about-phd {
  margin-bottom: 1.2rem;
}

.about-phd h3 {
  margin-bottom: 0.7rem;
  font-size: 1.6rem;
  font-weight: 800;
}

.about-phd p {
  line-height: 1.8;
}

.about-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.25rem;
}

.flow-hover-button {
  position: relative;
  z-index: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-width: 7.5rem;
  overflow: hidden;
  border: 1px solid #cbd5c0;
  border-radius: 0.375rem;
  background: #f0f4ec;
  padding: 0.55rem 1rem;
  color: #30372c !important;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  line-height: 1.25;
  text-decoration: none !important;
  transition: transform 0.5s ease, color 0.5s ease;
}

.flow-hover-button::before {
  position: absolute;
  z-index: -1;
  inset: 0;
  border-radius: 100%;
  background: #30372c;
  content: "";
  transform: translate(150%, 150%) scale(2.5);
  transition: transform 1s ease;
}

.flow-hover-button:hover,
.flow-hover-button:focus-visible {
  color: #f7faF4 !important;
  transform: scale(1.05);
}

.flow-hover-button:hover::before,
.flow-hover-button:focus-visible::before {
  transform: translate(0, 0) scale(2.5);
}

.flow-hover-button:active {
  transform: scale(0.95);
}

.flow-hover-button span {
  position: relative;
  z-index: 1;
}

@media (prefers-reduced-motion: reduce) {
  .flow-hover-button,
  .flow-hover-button::before {
    transition-duration: 0.01ms;
  }
}

@media (max-width: 768px) {
  .about-intro {
    margin-bottom: 1.8rem;
  }

  .about-divider {
    margin: 1.8rem 0 1.6rem;
  }
}
</style>
