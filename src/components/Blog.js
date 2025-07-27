// src/components/Blog.js
import React from 'react';

const blogPosts = [
  {
    title: 'Understanding Transformers in NLP',
    summary: 'An introduction to transformer models and their applications in natural language processing.',
    link: '#',
  },
  {
    title: 'Fine-Tuning LLMs with Hugging Face',
    summary: 'A step-by-step guide to fine-tuning large language models using Hugging Face Transformers.',
    link: '#',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="mb-4">{post.summary}</p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
