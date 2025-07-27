// src/components/Testimonials.js
import React from 'react';

const Testimonials = ({ isVisible }) => {
  const testimonials = [
    {
      quote: "Working with [Name] was a game-changer for our AI initiatives. Their expertise in NLP and LLM fine-tuning delivered results beyond our expectations.",
      author: "Sarah Johnson",
      position: "CTO, Tech Innovations Inc."
    },
    {
      quote: "The predictive maintenance system [Name] developed reduced our downtime by 60%. Their technical skills and business understanding are exceptional.",
      author: "Michael Chen",
      position: "Director of Engineering, Manufacturing Solutions"
    },
    {
      quote: "I've rarely seen such a combination of technical depth and clear communication. [Name] translated complex ML concepts into actionable business solutions.",
      author: "David Rodriguez",
      position: "VP of Product, DataDriven Co."
    }
  ];

  return (
    <section
      id="testimonials"
      className={`section-padding bg-gray-50 dark:bg-gray-800 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title">Client Testimonials</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
          What industry leaders say about working with me
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card p-8 relative"
            >
              <div className="text-accent-500 text-5xl absolute top-4 right-6">â€œ</div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                {testimonial.quote}
              </p>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h4 className="font-bold">{testimonial.author}</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
