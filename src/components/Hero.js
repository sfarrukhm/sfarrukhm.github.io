import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaKaggle, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Intro */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I’m <span className="text-blue-600">Farrukh</span>
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Emerging TinyML Specialist
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            I’m building expertise TinyML and edge AI with a mechanical engineering mindset for real-world problem-solving.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            className="flex space-x-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href="https://www.linkedin.com/in/sfarrukhm/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-3xl transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/sfarrukhm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-3xl transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.kaggle.com/sayyedfarrukhmehmood"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-3xl transition-colors"
            >
              <FaKaggle />
            </a>
            <a
              href="mailto:sfarrukhm@gmail.com"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-3xl transition-colors"
            >
              <FaEnvelope />
            </a>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
          {/* Remove this button:
            <a
              href="#contact"
              className="btn-primary inline-block text-center"
            >
              Hire Me
            </a>
            */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition text-lg font-medium"
            >
              View Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
