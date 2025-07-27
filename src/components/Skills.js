import React from 'react';

const skillCategories = [
  {
    title: 'Programming & Data',
    skills: ['Python', 'NumPy', 'Pandas', 'SQL', 'Apache Spark', 'Dask']
  },
  {
    title: 'Machine Learning & AI',
    skills: ['Scikit-learn', 'XGBoost', 'LightGBM', 'PyTorch', 'TensorFlow', 'Keras', 'OpenCV']
  },
  {
    title: 'LLMs & NLP',
    skills: [
      'Hugging Face', 'LangChain', 'LangGraph', 'Sentence Transformers',
      'Embeddings', 'RAG', 'Vector Databases (FAISS, Chroma, Weaviate)'
    ]
  },
  {
    title: 'Deployment & Optimization',
    skills: [
      'FastAPI', 'TorchServe', 'ONNX', 'TensorRT', 'TorchScript',
      'Knowledge Distillation', 'Pruning', 'Quantization'
    ]
  },
  {
    title: 'MLOps & Experimentation',
    skills: [
      'Docker', 'Git', 'Linux', 'Weights & Biases', 'MLflow', 'DVC',
      'CI/CD for ML', 'Kubeflow'
    ]
  },
  {
    title: 'Cloud & Scaling',
    skills: [
      'AWS (SageMaker, EC2, S3)', 'GCP (Vertex AI, BigQuery)', 'Azure ML',
      'Ray', 'Kubernetes'
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
          Technical Skills
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto text-lg">
          A well-rounded stack for Machine Learning, LLMs, and MLOps
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
