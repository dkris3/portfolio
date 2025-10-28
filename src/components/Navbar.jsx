import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'techstack', 'projects', 'experience', 'contact'];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'techstack', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-dark/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-primary/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold text-gray-900 dark:text-white hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-primary">&lt;</span>
            DT
            <span className="text-primary">/&gt;</span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`text-sm font-medium transition-colors relative group ${
                  activeSection === item.id ? 'text-primary' : 'text-gray-600 dark:text-gray-300 hover:text-primary'
                }`}
              >
                <span className="font-mono text-primary text-xs mr-1">{String(index + 1).padStart(2, '0')}.</span>
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </motion.button>
            ))}
            
            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-gray-200 dark:bg-dark-light text-gray-800 dark:text-yellow-300 hover:bg-gray-300 dark:hover:bg-dark transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button & Dark Mode */}
          <div className="flex items-center gap-4 md:hidden">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-gray-200 dark:bg-dark-light text-gray-800 dark:text-yellow-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </motion.button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-900 dark:text-white text-2xl z-50"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-gray-50 dark:bg-dark-lighter md:hidden shadow-2xl"
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : 50 }}
              transition={{ delay: index * 0.1 }}
              className={`text-xl font-medium transition-colors ${
                activeSection === item.id ? 'text-primary' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              <span className="font-mono text-primary text-sm mr-2">{String(index + 1).padStart(2, '0')}.</span>
              {item.label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 md:hidden backdrop-blur-sm"
          style={{ zIndex: 40 }}
        ></motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
