// src/components/About.js
import React from "react";
// import { motion } from "framer-motion";

// const skills = [
//   "Machine Learning",
//   "Deep Learning",
//   "Computer Vision",
//   "Natural Language Processing",
//   "Model Optimization",
//   "MLOps",
//   "API Development",
//   "Deployment (FastAPI, Docker)"
// ];

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
          About Me
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          I’m developing expertise in TinyML and its applications for low-power devices. My focus is on applying lightweight machine learning directly on tiny devices to solve real-world problems where cloud-based ML isn’t practical. With a background in mechanical engineering, I understand how physical systems behave and how AI can be seamlessly integrated into them to create practical, efficient, and intelligent solutions.
        </p>

        <div className="flex flex-col lg:flex-row gap-12 items-start">


        </div>
      </div>
    </section>
  );
};

export default About;
