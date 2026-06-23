---
layout: page
title: projects
permalink: /projects/
description: My Robotics Projects！🤖
nav: true
nav_order: 3
display_categories: [Research Projects, Competitions, Course Projects ]
horizontal: true
---

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category" style="margin-top: 3rem; border-bottom: 1px solid #eee; padding-bottom: 10px; font-weight: bold;">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  
  <div class="container project-list">
    <div class="row row-cols-1">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% endfor %}
{% endif %}
</div>

<style>
/* 1. 彻底去掉卡片外框、背景和阴影 */
.project-card-horizontal {
  border: none !important;
  box-shadow: none !important;
  background-color: transparent !important;
  margin-bottom: 40px !important; /* 每个项目之间的间距 */
  padding: 0 !important;
}

.project-card-horizontal .card {
  border: none !important;
  background: none !important;
}

/* 2. 统一左侧图片的尺寸和比例 */
.project-card-horizontal .card-img {
  width: 100% !important;
  aspect-ratio: 16 / 10 !important; /* 强制图片为统一比例，防止高矮不一 */
  object-fit: contain !important;  /* contain保证图片内容不被裁剪，cover则会撑满 */
  background-color: #fff; /* 如果图片比例不一致，空白处填白色 */
  border: 1px solid #f0f0f0; /* 给图片一个很浅的边框，防止和网页背景混在一起 */
  border-radius: 4px !important;
}

/* 3. 调整右侧文字样式，向学术风格靠拢 */
.project-card-horizontal .card-title {
  color: #007bff !important; /* 标题改为蓝色，像超链接 */
  font-size: 1.5rem !important;
  font-weight: 600 !important;
  margin-bottom: 8px !important;
}

.project-card-horizontal .card-text {
  font-size: 0.95rem !important;
  color: #444 !important;
  line-height: 1.6 !important;
}

/* 4. 这里的控制很关键：调整图片和文字的左右比例 */
/* 如果你想让图片小一点，文字多一点，可以调整这里的宽度 */
@media (min-width: 768px) {
  .project-card-horizontal .row .col-md-6 { 
    flex: 0 0 35% !important; /* 图片占 35% 宽度 */
    max-width: 35% !important;
  }
  .project-card-horizontal .row .col-md-6 + .col-md-6 {
    flex: 0 0 65% !important; /* 文字占 65% 宽度 */
    max-width: 65% !important;
    padding-left: 30px !important; /* 文字距离图片的间隙 */
  }
}

/* 移除自带的 badge 样式（如果有） */
.badge {
  display: none !important;
}
</style>
