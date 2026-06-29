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
        {% assign project_href = project.url | relative_url %}
        {% if project.redirect %}
          {% assign project_href = project.redirect %}
        {% endif %}
        <div class="paper-item">
          <!-- 左侧：图片 -->
          <div class="paper-img-box">
            <a href="{{ project_href }}">
              <img src="{{ project.img | relative_url }}" alt="project thumbnail">
            </a>
          </div>
          
          <!-- 右侧：文字内容 -->
          <div class="paper-info">
            <h3 class="paper-title">
              <a href="{{ project_href }}">{{ project.title }}</a>
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
.projects-container {
  max-width: 980px;
  margin: 0 auto;
}

.category-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.45rem;
  font-weight: 800;
  margin: 1.7rem 0 1rem;
  color: #2f2b26;
}

.category-title::after {
  content: "";
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, rgba(182, 90, 52, 0.34), transparent);
}

.project-list {
  display: grid;
  gap: 1rem;
}

.paper-item {
  display: grid !important;
  grid-template-columns: 250px minmax(0, 1fr);
  align-items: stretch;
  gap: 1.15rem;
  padding: 0.85rem;
  margin-bottom: 0;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(55, 45, 35, 0.09);
  border-radius: 18px;
  box-shadow: 0 10px 28px rgba(58, 48, 35, 0.06);
  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
}

.paper-item:hover {
  transform: translateY(-3px);
  border-color: rgba(182, 90, 52, 0.24);
  box-shadow: 0 16px 38px rgba(58, 48, 35, 0.1);
}

.paper-img-box {
  width: 250px;
  max-width: 250px;
}

.paper-img-box a {
  display: block;
  height: 100%;
}

.paper-img-box img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 13px;
  border: 1px solid rgba(55, 45, 35, 0.08);
  background: #fff;
  transition: transform 0.3s ease;
}

.paper-item:hover .paper-img-box img {
  transform: scale(1.018);
}

.paper-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  padding: 0.15rem 0.2rem;
}

.paper-title {
  margin: 0 0 0.45rem !important;
  font-size: 1.18rem !important;
  line-height: 1.25;
  font-weight: 750;
}

.paper-title a {
  color: #2f2b26 !important;
  text-decoration: none;
  transition: color 0.2s ease;
}

.paper-title a:hover {
  color: #b65a34 !important;
}

.paper-description {
  max-width: 680px;
  margin-bottom: 0.65rem;
  color: #5f584f;
  font-size: 0.93rem;
  line-height: 1.55;
}

.paper-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.paper-links a {
  display: inline-flex;
  align-items: center;
  padding: 0.22rem 0.58rem;
  border-radius: 999px;
  background: rgba(182, 90, 52, 0.09);
  color: #a84f2f;
  font-size: 0.82rem;
  font-weight: 700;
  text-decoration: none;
}

.paper-links a:hover {
  background: rgba(143, 177, 98, 0.16);
  color: #66863e;
}

@media (max-width: 768px) {
  .paper-item {
    grid-template-columns: 1fr;
  }

  .paper-img-box {
    width: 100%;
    max-width: 100%;
  }

  .paper-img-box img {
    height: auto;
    max-height: 230px;
  }
}
</style>
