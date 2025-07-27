import React from 'react';

const WhyHire = ({ isVisible }) => {
  const reasons = [
    {
      title: "End-to-End ML Expertise",
      description: "I can manage the entire machine learning workflow—from data preprocessing and feature engineering to training, evaluation, and deployment.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7l9-4 9 4-9 4-9-4z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 17l9-4 9 4" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l9-4 9 4" />
        </svg>
      )
    },
    {
      title: "LLM & NLP Specialization",
      description: "Experienced in fine-tuning large language models, optimizing NLP pipelines, and using frameworks like Hugging Face, LangChain, and transformers.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20h9" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m0 0H3m9-16h9" />
        </svg>
      )
    },
    {
      title: "Production-Ready Deployment",
      description: "I build ML solutions that are production-ready, scalable, and robust, leveraging Docker, FastAPI, TorchServe, and Kubernetes for smooth operations.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    {
      title: "MLOps & Cloud Expertise",
      description: "Proficient in cloud platforms like AWS, GCP, and Azure, and skilled with CI/CD pipelines, MLflow, and experiment tracking for reliable ML workflows.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h10a4 4 0 004-4M12 3v12" />
        </svg>
      )
    }
  ];

  return (
    <section
      id="whyHire"
      className={`section-padding bg-white dark:bg-gray-900 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title">Why Hire Me</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
          Four reasons why I can add strong value to your AI/ML projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="card p-8 text-center group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-500 group-hover:text-white transition-colors duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHire;
