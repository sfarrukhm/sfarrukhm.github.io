import React from 'react';

const skillCategories = [
  {
    title: 'TinyML & Edge AI',
    skills: [
      'TensorFlow Lite Micro',
      'Model Quantization & Pruning',
      'Embedded Systems (ESP32, ARM Cortex-M)',
      'Low-Power AI Deployment'
    ]
  },
  {
    title: 'Machine Learning Foundations',
    skills: [
      'Python',
      'NumPy & Pandas',
      'Scikit-learn',
      'TensorFlow / PyTorch (basics)'
    ]
  },
  {
    title: 'Programming & Systems',
    skills: [
      'C (CS50 basics in progress)',
      'Git & GitHub',
      'Linux',
      'Microcontroller Development'
    ]
  },
  {
    title: 'Learning in Public',
    skills: [
      'Technical Blogging',
      'Open Source Contributions',
      'Hands-on Project Building'
    ]
  }
];

const Skills = ({ isVisible }) => {
  return (
    <section
      id="skills"
      className={`section-padding bg-white dark:bg-gray-900 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Skills
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto text-lg">
          The tools and skills I’m building to explore TinyML and edge AI.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-4">
                {category.title}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {category.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
