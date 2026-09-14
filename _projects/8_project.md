---
layout: page
title: "BEAT: Posture-Independent Wrist Blood Pressure Monitor"
description: A barometric-inertial sensing system for compensating hydrostatic errors in wrist blood pressure measurement.
img: assets/img/pressure_with_different_postures-cover.png
importance: 5
category: Research Projects
---

## Overview

<figure class="beat-cover-figure">
  <img src="{{ '/assets/img/pressure_with_different_postures-cover.png' | relative_url }}" alt="BEAT posture-independent blood pressure measurement workflow">
  <figcaption>Two-phase BEAT workflow: heart-level calibration followed by posture-independent wrist blood pressure measurement.</figcaption>
</figure>

BEAT (Barometric Elevation and Attitude Tracking) is a wrist blood pressure monitoring system designed to reduce posture-related measurement errors. Wrist-worn monitors are convenient, but a vertical offset between the wrist and heart can introduce a hydrostatic pressure error of approximately 0.77 mmHg per centimeter.

The system uses a detachable sensing module. First, the module is placed at heart level to record a zero-reference atmospheric pressure. It is then re-attached to the wrist cuff, where barometric and inertial sensing tracks the wrist's elevation and orientation during measurement. The system applies a real-time hydrostatic compensation to the oscillometric blood-pressure estimate.

## Demonstration

<video width="100%" controls muted playsinline preload="metadata" class="rounded z-depth-1" aria-label="BEAT blood pressure monitoring demonstration">
  <source src="{{ '/assets/video/beat-blood-pressure-demo.mp4' | relative_url }}" type="video/mp4">
  Your browser does not support the video tag.
</video>

<div class="caption">
  Demonstration of the BEAT wrist blood pressure monitoring prototype.
</div>

<div class="beat-project-links">
  <a class="beat-project-button" href="{{ '/assets/pdf/beat-paper.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">Paper</a>
  <span class="beat-project-button beat-project-button-disabled" aria-label="GitHub repository placeholder">GitHub (coming soon)</span>
</div>

## System Design

<figure class="beat-figure">
  <img src="{{ '/assets/img/beat-hardware-architecture.png' | relative_url }}" alt="BEAT hardware architecture diagram">
  <figcaption>Hardware architecture showing the pneumatic measurement unit, detachable sensing module, and ESP-NOW wireless link.</figcaption>
</figure>

- **Detachable sensing module:** DPS310 barometric pressure sensor and MPU6050 inertial measurement unit for elevation and attitude tracking.
- **Pneumatic measurement unit:** ESP32-controlled micro-air pump, solenoid valve, cuff, and piezoresistive pressure sensor.
- **Wireless synchronization:** ESP-NOW provides low-latency communication between the sensing and pneumatic units.
- **Signal processing:** Cuff pressure is filtered to extract pulse oscillations, followed by envelope reconstruction and oscillometric SBP/DBP estimation.
- **Hydrostatic compensation:** The stored heart-level pressure baseline is compared with wrist pressure to estimate vertical displacement and correct the blood-pressure reading.

## Signal Processing

<figure class="beat-figure">
  <img src="{{ '/assets/img/beat-fig3-signal-processing.png' | relative_url }}" alt="BEAT oscillometric signal processing pipeline">
  <figcaption>Signal-processing pipeline from raw cuff pressure to filtered pulse oscillations and SBP/DBP estimation.</figcaption>
</figure>

The cuff signal is filtered to isolate pulsatile components, pulse peaks are detected, and an oscillometric envelope is reconstructed to estimate systolic and diastolic pressure.

## Preliminary Results

<figure class="beat-figure">
  <img src="{{ '/assets/img/beat-fig5-compensation-results.png' | relative_url }}" alt="BEAT posture compensation results">
  <figcaption>Comparison of Omron, uncompensated BEAT, and compensated BEAT measurements across three arm postures.</figcaption>
</figure>

<figure class="beat-figure">
  <img src="{{ '/assets/img/beat-fig4-bland-altman-agreement.png' | relative_url }}" alt="BEAT Bland-Altman agreement analysis">
  <figcaption>Bland-Altman agreement analysis comparing BEAT measurements with the Omron heart-level reference.</figcaption>
</figure>

In a pilot feasibility study, the compensated systolic blood pressure measurement achieved an overall mean absolute error of **3.33 mmHg** across tested arm postures, compared with **7.61 mmHg** before compensation. The heart-level baseline comparison produced a mean bias of **1.40 mmHg** against an Omron reference device.

These results suggest that barometric-inertial fusion can reduce posture-induced bias without requiring the user to hold the wrist in a strict heart-level position. The current study is preliminary, with a small sample size, and future work will focus on larger-scale validation and automatic zero-reference calibration.

## Project Context

This project was developed for the **Fundamentals of Sensing Technology** course at Southern University of Science and Technology.

<style>
.beat-project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 1.25rem 0 2rem;
}

.beat-project-button {
  display: inline-block;
  padding: 0.55rem 1.2rem;
  border: 1px solid #8fb162;
  border-radius: 999px;
  background: #8fb162;
  color: #fff !important;
  font-weight: 600;
  text-decoration: none !important;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.beat-project-button:hover {
  background: #6f8f45;
  transform: translateY(-2px);
}

.beat-cover-figure {
  max-width: 920px;
  margin: 1rem auto 1.75rem;
  text-align: center;
}

.beat-cover-figure img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
  background: #f7f8f5;
  border: 1px solid rgba(143, 177, 98, 0.2);
  border-radius: 8px;
}

.beat-cover-figure figcaption {
  margin-top: 0.5rem;
  color: #777;
  font-size: 0.88rem;
  line-height: 1.45;
}

.beat-figure {
  max-width: 860px;
  margin: 1.5rem auto;
  text-align: center;
}

.beat-figure img {
  display: block;
  width: 100%;
  max-height: 520px;
  object-fit: contain;
  background: #f7f8f5;
  border: 1px solid rgba(143, 177, 98, 0.2);
  border-radius: 8px;
}

.beat-figure figcaption {
  margin-top: 0.5rem;
  color: #777;
  font-size: 0.88rem;
  line-height: 1.45;
}
</style>
