---
layout: page
title: "BEAT: Posture-Independent Wrist Blood Pressure Monitor"
description: A barometric-inertial sensing system for compensating hydrostatic errors in wrist blood pressure measurement.
img: assets/img/pressure_with_different_postures-cover.png
importance: 5
category: Research Projects
---

## Overview

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

## System Design

- **Detachable sensing module:** DPS310 barometric pressure sensor and MPU6050 inertial measurement unit for elevation and attitude tracking.
- **Pneumatic measurement unit:** ESP32-controlled micro-air pump, solenoid valve, cuff, and piezoresistive pressure sensor.
- **Wireless synchronization:** ESP-NOW provides low-latency communication between the sensing and pneumatic units.
- **Signal processing:** Cuff pressure is filtered to extract pulse oscillations, followed by envelope reconstruction and oscillometric SBP/DBP estimation.
- **Hydrostatic compensation:** The stored heart-level pressure baseline is compared with wrist pressure to estimate vertical displacement and correct the blood-pressure reading.

## Preliminary Results

In a pilot feasibility study, the compensated systolic blood pressure measurement achieved an overall mean absolute error of **3.33 mmHg** across tested arm postures, compared with **7.61 mmHg** before compensation. The heart-level baseline comparison produced a mean bias of **1.40 mmHg** against an Omron reference device.

These results suggest that barometric-inertial fusion can reduce posture-induced bias without requiring the user to hold the wrist in a strict heart-level position. The current study is preliminary, with a small sample size, and future work will focus on larger-scale validation and automatic zero-reference calibration.

## Project Context

This project was developed for the **Fundamentals of Sensing Technology** course at Southern University of Science and Technology.
