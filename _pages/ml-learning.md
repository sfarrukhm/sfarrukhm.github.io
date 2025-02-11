---
layout: default
title: ML-Learning
permalink: ml-learning
nav: true
nav_order: 2
---


<div class="container">
  <div class="content-wrapper">
    <!-- Sidebar Table of Contents -->
    <aside class="table-of-contents">
      <!-- <h3>📌 Table of Contents</h3> -->
      <ul>
        <li><a href="#courses">📖 Courses</a></li>
        <li><a href="#certifications">🎓 Certifications</a></li>
        <li><a href="#research">🔬 Exploratory Studies</a></li>
      </ul>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
      <h2 class="text-center my-1">🚀 AI Learning Journey</h2>

      <!-- Courses Section -->
      <section id="courses">
        <h3>📖 Courses</h3>
        <div class="card">
          <h4>Machine Learning</h4>
          <p class="text-muted">SEECS, NUST | 2021</p>
          <p>Comprehensive course covering supervised learning, unsupervised learning, and model evaluation techniques.</p>
        </div>
        <div class="card">
          <h4>Deep Learning</h4>
          <p class="text-muted">SMME, NUST | 2022</p>
          <p>Focused on neural networks, optimization algorithms, and practical implementation in Python.</p>
        </div>
      </section>

      <!-- Certifications Section -->
      <section id="certifications">
        <h3>🎓 Certifications</h3>
        <div class="card">
          <h4>Probability & Statistics for ML</h4>
          <p class="text-muted">DeepLearning.AI, Coursera | 2022</p>
          <p>Covered probability concepts and statistical inference with applications in ML and data science.</p>
        </div>
        <div class="card">
          <h4>Natural Language Processing</h4>
          <p class="text-muted">DeepLearning.AI, Coursera | 2023</p>
          <p>Explored vector representations, text classification models, and foundational NLP concepts.</p>
        </div>
      </section>

      <!-- Research -->
      <section id="research">
        <h3>🔬 Exploratory Studies</h3>
        <div class="card">
          <h4>Understanding Transformer Architectures</h4>
          <p class="text-muted">Based on "Build a Large Language Model (From Scratch)"</p>
          <p>Studied transformer architectures and their role in NLP and generative AI.</p>
        </div>
        <div class="card">
          <h4>Deep Generative Models</h4>
          <p class="text-muted">Based on "Generative Deep Learning" by David Foster | 2024</p>
          <p>Explored GANs, VAEs, and diffusion models with supplementary material from Sebastian Raschka.</p>
        </div>
      </section>
    </main>
  </div>
</div>

<!-- Styles -->
<style>
  /* Layout: Sidebar on middle-left, Content on right */
  .content-wrapper {
    display: flex;
    align-items: flex-start;
    max-width: 3000px;
    margin: 0 auto;
    gap: 20px;
  }

  /* Sidebar (ToC) - Middle Left */
  .table-of-contents {
    width: 220px;
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: fixed;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  .table-of-contents h3 {
    text-align: center;
    margin-bottom: 10px;
  }

  .table-of-contents ul {
    list-style-type: none;
    padding: 0;
  }

  .table-of-contents ul li {
    margin: 8px 0;
  }

  .table-of-contents ul li a {
    text-decoration: none;
    color:rgb(163, 18, 132);
    font-weight: bold;
    transition: color 0.3s;
  }

  .table-of-contents ul li a:hover {
    color::rgb(163, 18, 132);
  }

  /* Main Content */
  .main-content {
    flex-grow: 1;
    max-width: 800px;
    margin-left: 150px; /* Adjust space for ToC */
  }

  /* Sections */
  /* Ensure section headings appear below the fixed menu */
section {
  scroll-margin-top: 100px; /* Adjust based on menu height */
  margin-bottom: 40px;
}

  section h3 {
    border-bottom: 2px solid #ddd;
    padding-bottom: 5px;
    margin-bottom: 20px;
  }

  /* Cards */
  .card {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    /* width: 800px; */
    /* margin-left:20px; */
  }

  .text-muted {
    color: #6c757d;
    font-size: 0.9em;
  }

  /* Responsive */
  @media (max-width: 900px) {
    .content-wrapper {
      flex-direction: column;
      align-items: center;
    }
    .table-of-contents {
      position: static;
      width: 100%;
      text-align: center;
      transform: none;
      margin-bottom: 20px;
    }
    .main-content {
      margin-left: 0;
    }
  }
</style>
