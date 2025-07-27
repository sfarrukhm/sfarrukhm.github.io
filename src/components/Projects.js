// src/components/Projects.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectsData = [
  {
    title: "Knowledge Distillation for Intel Image Classification",
    description:
      "Compressed a VisionEagle-based teacher model into a lightweight CNN, reducing model size by 99.6% with minimal accuracy drop.",
    tags: ["Computer Vision"],
    github: "#",
    impact: "81% accuracy with 246× size reduction",
  },
  {
    title: "RUL Inference Engine",
    description:
      "Microservice-based Remaining Useful Life prediction system using LSTM on NASA C-MAPSS data. Deployed with FastAPI and Streamlit.",
    tags: ["Deployment"],
    github: "#",
    impact: "Enabled early failure prediction for equipment",
  },
  {
    title: "Predict Calories",
    description:
      "Microservice app predicting calories burned using XGBoost, with FastAPI backend and Streamlit UI.",
    tags: ["ML", "Deployment"],
    github: "#",
    impact: "Accurate calorie estimation for fitness tracking",
  },
  {
    title: "ModernBERT for NLI",
    description:
      "Fine-tuned ModernBERT on MNLI dataset for Natural Language Inference using Hugging Face Transformers.",
    tags: ["NLP"],
    github: "#",
    impact: "Improved sentence relationship classification",
  },
  {
    title: "BERT for NER",
    description:
      "Fine-tuned BERT on CoNLL-2003 achieving 94% F1-score for Named Entity Recognition.",
    tags: ["NLP"],
    github: "#",
    impact: "94% F1-score on NER task",
  },
  {
    title: "Amazon Product Listing Optimizer",
    description:
      "Agentic AI application for optimizing Amazon product listings using LangChain and LLMs. Deployed via Streamlit.",
    tags: ["Deployment", "NLP"],
    github: "#",
    impact: "Enhanced product listing quality for sellers",
  },
];

const allTags = ["All", "Computer Vision", "NLP", "ML", "Deployment"];

const Projects = ({ isVisible }) => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((project) => project.tags.includes(filter));

  return (
    <section
      id="projects"
      className={`section-padding bg-gray-50 dark:bg-gray-900 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-center mb-6 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Real-world projects showcasing applied AI and ML solutions
        </motion.p>

        {/* Tag Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {allTags.map((tag) => (
            <motion.button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === tag
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
              }`}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              {tag}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-xl transition-all overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
              >
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 group-hover:text-indigo-500 transition-colors mb-2">
                    {project.title}
                  </h3>

                  {/* Impact */}
                  <span className="block text-sm font-semibold text-green-600 dark:text-green-300 mb-4">
                    {project.impact}
                  </span>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Link */}
                  <div className="flex">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-indigo-500 font-medium flex items-center"
                    >
                      <svg
                        className="w-5 h-5 mr-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                        ></path>
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
