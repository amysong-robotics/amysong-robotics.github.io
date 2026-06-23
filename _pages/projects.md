---
layout: page
title: projects
permalink: /projects/
description: My Robotics Projects！🤖
nav: true
nav_order: 3
display_categories: [Research Projects, Competitions, Course Projects ]
---

<div class="projects-container">
  {% if site.enable_project_categories and page.display_categories %}
    {% for category in page.display_categories %}
      <h2 class="category-title">{{ category }}</h2>
      <div class="project-list">
        {% assign categorized_projects = site.projects | where: "category", category %}
        {% assign sorted_projects = categorized_projects | sort: "importance" %}
        
        {% for project in sorted_projects %}
        <div class="paper-item">
          <!-- 左侧：图片 -->
          <div class="paper-img-box">
            <a href="{{ project.url | relative_url }}">
              <img src="{{ project.img | relative_url }}" alt="project thumbnail">
            </a>
          </div>
          
          <!-- 右侧：文字内容 -->
          <div class="paper-info">
            <h3 class="paper-title">
              <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
            </h3>
            <p class="paper-description">{{ project.description }}</p>
            
            {% if project.links %}
            <div class="paper-links">
              {% for link in project.links %}
                <a href="{{ link.url }}" class="btn-link">[{{ link.name }}]</a>
              {% endfor %}
            </div>
            {% endif %}
          </div>
        </div>
        {% endfor %}
      </div>
    {% endfor %}
  {% endif %}
</div>

<style>
/* 强制样式重置 */
.projects-container {
  max-width: 900px;
  margin: 0 auto;
}

.category-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 40px 0 20px 0;
  border-bottom: 2px solid #333;
  padding-bottom: 10px;
}

/* 论文式列表项：左图右文 */
.paper-item {
  display: flex !important;
  flex-direction: row;
  margin-bottom: 40px;
  align-items: flex-start;
  gap: 30px; /* 左右间距 */
}

/* 图片容器：强制统一大小 */
.paper-img-box {
  flex: 0 0 280px; /* 强制图片宽度为 280px */
  max-width: 280px;
}

.paper-img-box img {
  width: 100%;
  height: 180px;   /* 强制图片高度统一为 180px */
  object-fit: cover; /* 裁剪多余部分，保证不缩放变形 */
  border-radius: 4px;
  border: 1px solid #eee;
  transition: transform 0.3s ease;
}

.paper-img-box img:hover {
  transform: scale(1.02);
}

/* 文字区域 */
.paper-info {
  flex: 1;
}

.paper-title {
  margin: 0 0 10px 0 !important;
  font-size: 1.4rem !important;
  font-weight: 600;
}

.paper-title a {
  color: #333 !important; /* 换成深灰色 */
  text-decoration: none;
  transition: color 0.2s ease; /* 增加一个平滑过渡 */
}

.paper-title a:hover {
  color: #007bff !important; /* 鼠标悬停时变成蓝色，提醒这是个链接 */
  text-decoration: none;
}

.paper-description {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.5;
  margin-bottom: 12px;
}

.paper-links a {
  font-size: 0.9rem;
  color: #007bff;
  margin-right: 10px;
  text-decoration: none;
  font-weight: 500;
}

/* 手机端适配：改为上下排列 */
@media (max-width: 768px) {
  .paper-item {
    flex-direction: column;
  }
  .paper-img-box {
    flex: 0 0 auto;
    width: 100%;
    max-width: 100%;
  }
  .paper-img-box img {
    height: auto;
  }
}
</style>
