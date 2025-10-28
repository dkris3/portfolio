import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="hero"
      className="flex items-center py-8 bg-white dark:bg-dark transition-colors duration-300"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Profile Image */}
            <motion.div variants={itemVariants} className="flex-shrink-0 mx-auto md:mx-0">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden border-4 border-gray-100 dark:border-gray-800">
                <img
                  src="/DEAN.jpg"
                  alt="Dean Kristoffer Tayabas"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Info */}
            <motion.div variants={itemVariants} className="flex-1 min-w-0 w-full">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex-1 min-w-0">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    Dean Kristoffer Tayabas
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2 text-sm mb-3">
                    <FaMapMarkerAlt className="w-4 h-4 flex-shrink-0" />
                    Teresa Rizal, Philippines
                  </p>
                  <p className="text-base text-gray-900 dark:text-white font-medium mb-4">
                    Associate Software Engineer
                  </p>
                </div>
                <button
                  onClick={toggleTheme}
                  className="p-2.5 rounded-full border-2 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors flex-shrink-0"
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? (
                    <FaSun className="w-5 h-5 text-gray-900 dark:text-white" />
                  ) : (
                    <FaMoon className="w-5 h-5 text-gray-900 dark:text-white" />
                  )}
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-2">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule a Call
                </a>
                <a
                  href="mailto:tayabas.deankristoffer@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Email
                </a>
                <a
                  href="https://github.com/dkris3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-sm"
                >
                  <FaGithub className="w-4 h-4" />
                  Visit GitHub
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
