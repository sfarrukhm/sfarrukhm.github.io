import React from 'react';

const Contact = ({ isVisible }) => {
  return (
    <section
      id="contact"
      className={`section-padding bg-white dark:bg-gray-900 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-title">Get In Touch</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          You can reach me via email or connect with me on LinkedIn.
        </p>

        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold">Email</h4>
            <p className="text-primary-600 dark:text-primary-400 text-xl font-bold">
              <a href="mailto:sfarrukhm@gmail.com" className="hover:underline">
                sfarrukhm@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">LinkedIn</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/sfarrukhm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 dark:text-primary-400 hover:underline"
              >
                linkedin.com/in/sfarrukhm
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
