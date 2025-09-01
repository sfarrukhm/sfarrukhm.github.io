// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Mix of anchor links (same-page) and route links (Blog)
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    {/*{ name: 'Blog', href: '#blog' },*/},   // ✅
    { name: 'Contact', href: '#contact' }
  ];

  const renderLink = (link) => {
    if (link.type === 'route') {
      return (
        <Link
          key={link.name}
          to={link.href}
          className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          {link.name}
        </Link>
      );
    }
    return (
      <a
        key={link.name}
        href={link.href}
        className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
        onClick={() => setMenuOpen(false)}
      >
        {link.name}
      </a>
    );
  };

  return (
    <header className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Name */}
        <a
          href="#hero"
          className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition"
        >
          Farrukh Mehmood
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(renderLink)}
        </nav>

        {/* Dark Mode Toggle + Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <span className="text-yellow-400">☀️</span>
            ) : (
              <span className="text-gray-700">🌙</span>
            )}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded bg-gray-200 dark:bg-gray-700"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          <nav className="flex flex-col space-y-4 p-4">
            {navLinks.map(renderLink)}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
