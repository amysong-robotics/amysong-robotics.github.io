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

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- 按照分类显示项目 -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category" style="margin-top: 2rem; border-bottom: 1px solid #ddd; padding-bottom: 10px;">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  
  <div class="container">
    <div class="row row-cols-1"> <!-- 强制每一行只有一个项目，即一列下来 -->
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% endfor %}

{% else %}

  <!-- 如果没有分类，直接一列显示所有项目 -->
  {% assign sorted_projects = site.projects | sort: "importance" %}
  <div class="container">
    <div class="row row-cols-1">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
{% endif %}
</div>

<style>
/* 强制美化成“论文列表”风格 */
.project-card-horizontal {
  border: none !important; /* 去掉边框 */
  box-shadow: none !important; /* 去掉阴影，看起来更像论文 */
  background-color: transparent !important;
  margin-bottom: 1.5rem !important;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0,0,0,0.05) !important; /* 淡淡的底部分割线 */
}

/* 调整图片容器宽度，让它看起来更精致 */
.project-card-horizontal .card-img {
  border-radius: 8px; /* 图片圆角 */
  object-fit: cover;
}

/* 手机端适配：手机上恢复成上下排列 */
@media (max-width: 576px) {
  .project-card-horizontal .row {
    flex-direction: column;
  }
}
</style>
