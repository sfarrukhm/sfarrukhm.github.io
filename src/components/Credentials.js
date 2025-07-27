// src/components/Credentials.js
import React from 'react';

const credentials = [
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "2023",
    description: "Advanced neural networks, CNNs, RNNs, and transformer models",
    credentialId: "DL-12345",
    link: "#"
  },
  {
    title: "Natural Language Processing",
    issuer: "Stanford University",
    date: "2022",
    description: "State-of-the-art NLP techniques with transformers and BERT",
    credentialId: "NLP-67890",
    link: "#"
  },
  {
    title: "Machine Learning Engineering",
    issuer: "Google Cloud",
    date: "2022",
    description: "Production ML systems, deployment, and MLOps best practices",
    credentialId: "MLE-54321",
    link: "#"
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "TensorFlow",
    date: "2021",
    description: "Advanced ML modeling with TensorFlow 2.x",
    credentialId: "TF-98765",
    link: "#"
  },
  {
    title: "AWS Machine Learning Specialty",
    issuer: "Amazon Web Services",
    date: "2021",
    description: "Building, training, and deploying ML models on AWS",
    credentialId: "AWS-ML-13579",
    link: "#"
  },
  {
    title: "Hugging Face Transformers",
    issuer: "Hugging Face",
    date: "2023",
    description: "Fine-tuning and deploying transformer models",
    credentialId: "HF-24680",
    link: "#"
  }
];

const Credentials = ({ isVisible }) => {
  return (
    <section
      id="credentials"
      className={`section-padding bg-gray-50 dark:bg-gray-800 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title">Credentials</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
          Professional certifications and advanced coursework in AI/ML
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {credentials.map((credential, index) => (
            <div
              key={index}
              className="card p-6 group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 group-hover:text-accent-500 transition-colors">
                  {credential.title}
                </h3>
                <span className="text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 px-2 py-1 rounded">
                  {credential.date}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">
                {credential.issuer}
              </p>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {credential.description}
              </p>

              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  ID: {credential.credentialId}
                </span>
                <a
                  href={credential.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:text-accent-500 font-medium text-sm flex items-center"
                >
                  View Credential
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credentials;
