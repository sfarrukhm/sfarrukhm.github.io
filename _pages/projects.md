---
layout: default
permalink: /projects/
title: Projects
description: 
nav: true
nav_order: 4
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Projects - Card Grid Layout</title>
  <!-- Bootstrap CSS for styling -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    .project-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      padding: 20px;
    }

    .project-card {
      background: #fff;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .project-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    .project-card h3 {
      font-size: 1.5rem;
      margin-bottom: 10px;
      color: #333;
    }

    .project-card p {
      font-size: 1rem;
      color: #555;
      flex-grow: 1; /* Ensures description takes up available space */
    }

    .project-card .btn {
      align-self: flex-start; /* Align button to the left */
      margin-top: 15px;
      background-color: #007bff;
      color: #fff;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      text-decoration: none;
      transition: background-color 0.3s ease;
    }

    .project-card .btn:hover {
      background-color: #0056b3;
    }
  </style>
</head>
<body>
  <div class="project-grid">
    <!-- Project 1 -->
    <div class="project-card">
      <h3>Fine-Tuning DistilBERT for Medical Reasoning</h3>
      <p>
        Fine-tuned DistilBERT on the medical-o1-reasoning-SFT dataset to enhance reasoning capabilities in the medical domain.
      </p>
      <a href="https://huggingface.co/sfarrukhm/distilbert-med-v2" class="btn">View Model →</a>
    </div>

    <!-- Project 2 -->
    <div class="project-card">
      <h3>Fine-Tuning BERT for Named Entity Recognition (NER)</h3>
      <p>
        Fine-tuned a BERT model on the CoNLL-2003 dataset for Named Entity Recognition (NER), classifying entities like names, organizations, and locations.
      </p>
      <a href="https://huggingface.co/sfarrukhm/bert-conll-ner" class="btn">View Model →</a>
    </div>

    <!-- Project 3 -->
    <div class="project-card">
      <h3>Fine-Tuning ModernBERT for Natural Language Inference (NLI)</h3>
      <p>
        Fine-tuned ModernBERT on a subset of the SetFit/mnli dataset for Natural Language Inference (NLI), determining relationships between text inputs (e.g., entailment, contradiction, or neutrality).
      </p>
      <a href="https://huggingface.co/sfarrukhm/modernbert-setfit-nli" class="btn">View Model →</a>
    </div>
  </div>
</body>
</html>