---
layout: page
title: "Replicating DDAT: Diffusion Policies for Robot Trajectories"
description: An independent reproduction of DDAT in MuJoCo, evaluating the necessity of projection operators across four underactuated robotic systems.
img: assets/img/hopper_proj.gif
importance: 4
category: Research Projects
---

Inspired by the ICON Lab's research, I independently replicated the **DDAT (Diffusion Dynamic Allocation Task)** framework. This evaluation analyzes how projection operators enforce dynamical admissibility during open-loop execution in high-dimensional state-action spaces.

---

### 🦿 Agent 1: Hopper (12 states, 3 actions)
The projection layer is vital for the Hopper's vertical stability. Without it, the agent fails to maintain its single-legged equilibrium.

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        <img src="{{ '/assets/img/hopper_proj.gif' | relative_url }}" class="img-fluid rounded z-depth-1">
        <div class="caption"><b>With Projection:</b> Stable periodic gait.</div>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <img src="{{ '/assets/img/hopper_none.gif' | relative_url }}" class="img-fluid rounded z-depth-1">
        <div class="caption"><b>Without Projection:</b> Immediate collapse.</div>
    </div>
</div>

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        <img src="{{ '/assets/img/h_p1.jpg' | relative_url }}" class="img-fluid rounded">
        <img src="{{ '/assets/img/h_p2.jpg' | relative_url }}" class="img-fluid rounded mt-2">
        <div class="caption">Projected plots showing bounded state variables.</div>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <img src="{{ '/assets/img/h_n1.jpg' | relative_url }}" class="img-fluid rounded">
        <img src="{{ '/assets/img/h_n2.jpg' | relative_url }}" class="img-fluid rounded mt-2">
        <div class="caption">Unprojected plots showing rapid divergence.</div>
    </div>
</div>

---

### 🏃 Agent 2: Walker2d (18 states, 6 actions)
For the multi-link Walker2d, the DDAT framework prevents the "drifting" effect common in standard generative policies.

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        <img src="{{ '/assets/img/walker_proj.gif' | relative_url }}" class="img-fluid rounded z-depth-1">
        <div class="caption"><b>With Projection:</b> Continuous forward locomotion.</div>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <img src="{{ '/assets/img/walker_none.gif' | relative_url }}" class="img-fluid rounded z-depth-1">
        <div class="caption"><b>Without Projection:</b> Loss of gait coordination.</div>
    </div>
</div>

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        <img src="{{ '/assets/img/w_p1.jpg' | relative_url }}" class="img-fluid rounded">
        <img src="{{ '/assets/img/w_p2.jpg' | relative_url }}" class="img-fluid rounded mt-2">
        <div class="caption">Stable joint trajectories (Projected).</div>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <img src="{{ '/assets/img/w_n1.jpg' | relative_url }}" class="img-fluid rounded">
        <img src="{{ '/assets/img/w_n2.jpg' | relative_url }}" class="img-fluid rounded mt-2">
        <div class="caption">Unstable joint space divergence (None).</div>
    </div>
</div>

---

### 🐆 Agent 3: HalfCheetah (18 states, 6 actions)
The HalfCheetah agent demonstrates the scalability of DDAT to high-velocity movement patterns.

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        <img src="{{ '/assets/img/cheetah_proj.gif' | relative_url }}" class="img-fluid rounded z-depth-1">
        <div class="caption">Successful high-speed running.</div>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <img src="{{ '/assets/img/cheetah_none.gif' | relative_url }}" class="img-fluid rounded z-depth-1">
        <div class="caption">Immediate diving/failure.</div>
    </div>
</div>

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        <img src="{{ '/assets/img/c_p.jpg' | relative_url }}" class="img-fluid rounded">
        <div class="caption">Projected performance curve.</div>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <img src="{{ '/assets/img/c_n.jpg' | relative_url }}" class="img-fluid rounded">
        <div class="caption">Non-projected divergence curve.</div>
    </div>
</div>

---

### 🚁 Agent 4: Quadcopter (17 states, 4 actions)
While MuJoCo rendering is omitted for trajectory focus, the quantitative analysis shows DDAT's ability to maintain dynamically admissible flight paths during open-loop control.

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        <img src="{{ '/assets/img/u_p.jpg' | relative_url }}" class="img-fluid rounded">
        <div class="caption"><b>Projected Trajectory:</b> Successful waypoint tracking.</div>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <img src="{{ '/assets/img/u_n.jpg' | relative_url }}" class="img-fluid rounded">
        <div class="caption"><b>Unprojected Trajectory:</b> Violation of dynamics constraints.</div>
    </div>
</div>

### 🔍 Technical Insights
- **Projection Mechanism:** My results confirm that the differentiable projection operator is the cornerstone of DDAT, ensuring that diffusion-generated samples remain within the feasible physics manifold.
- **Generative Training:** I curated and trained diffusion-based datasets for each agent, experiencing the complexities of multi-modal task allocation.
- **Stability Analysis:** Comparative plots highlight that without projection, high-dimensional open-loop systems suffer from accumulated error and rapid loss of equilibrium.

  ---

### ⚠️ Note on Variations
Minor discrepancies in performance compared to the original DDAT paper may arise from differences in **MuJoCo engine versions** and subtle variations in **hyper-parameter tuning** during the independent replication process. Despite these minor deviations, the fundamental role of the projection operator in ensuring open-loop stability remains consistently verified across all tested agents.
