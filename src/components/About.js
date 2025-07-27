// src/components/About.js
import React from "react";
import { motion } from "framer-motion";

const skills = [
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "Natural Language Processing",
  "Model Optimization",
  "MLOps",
  "API Development",
  "Deployment (FastAPI, Docker)"
];

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
          I’m an aspiring Machine Learning Engineer passionate about building practical AI solutions.
          I enjoy exploring different areas of ML, optimizing models, and deploying them for real-world use.
        </p>

        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* LEFT SIDE - Skills */}
          <div className="lg:w-2/5">
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md">
              <h4 className="text-lg font-bold mb-4 text-center text-gray-800 dark:text-gray-200">
                Core Skills
              </h4>
              <motion.div
                className="flex flex-wrap gap-3 justify-center"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.08 } }
                }}
              >
                {skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full shadow-sm"
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 }
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>

          {/* RIGHT SIDE - Bullet Points */}
          <div className="lg:w-3/5 space-y-10">

            {/* What I've Explored */}
            <div className="flex items-start">
              <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">What I’ve Explored</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Computer Vision (image classification, object detection)</li>
                  <li>Predictive modeling for maintenance and forecasting</li>
                  <li>NLP tasks (text classification, NLI)</li>
                  <li>Model optimization (quantization, distillation)</li>
                  <li>Deployment with FastAPI, Docker, and REST APIs</li>
                </ul>
              </div>
            </div>

            {/* What Drives Me */}
            <div className="flex items-start">
              <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">What Drives Me</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Turning data into practical, real-world solutions</li>
                  <li>Continuous learning and improvement</li>
                  <li>Building efficient, deployment-ready ML systems</li>
                  <li>Exploring diverse ML domains for broad expertise</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
