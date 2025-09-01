import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
// import Blog from "./components/Blog";
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const newVisibility = {};

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75;
        newVisibility[section.id] = isVisible;
      });

      setIsVisible(newVisibility);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className={darkMode ? 'dark' : ''}>
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Routes>
            {/* Home Page */}
            <Route path="/" element={
              <>
                <Hero />
                <About isVisible={isVisible.about} />
                <Skills isVisible={isVisible.skills} />
                <Projects isVisible={isVisible.projects} />
                {/* <Blog isVisible={isVisible.blog} />*/}
                <Contact isVisible={isVisible.contact} />
                <Footer />
              </>
            } />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
