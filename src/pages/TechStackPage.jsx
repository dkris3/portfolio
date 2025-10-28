import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const TechStackPage = () => {
  const techStack = {
    Frontend: [ 
      'JavaScript',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'Vue',
    ],
    Backend: [
      'C#',
      'Java',
      'MongoDB',
      'MySQL',
      'Node.js',
      'PHP',
      'PostgreSQL',
      'Python',
      'Supabase',
    ],
    'DevOps & Cloud': [
      'AWS',
      'Azure',
      'Docker',
    ],
    'Development Tools': [
      'Discord',
      'intelliJ IDEA',
      'Git',
      'GitHub',
      'Microsoft Teams',
      'Visual Studio',
      'Visual Studio Code',
      
    ],
  };

  return (
    <div className="min-h-screen bg-white dark:bg-dark py-12 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors mb-8"
          >
            <FaArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>

          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-8 h-8 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Tech Stack</h1>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Technologies and tools I use to build web applications.
            </p>
          </motion.div>

          {/* Tech Stack Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-8 bg-white dark:bg-dark border-2 border-gray-200 dark:border-gray-700 rounded-xl"
          >
            <div className="space-y-6">
              {Object.entries(techStack).map(([category, technologies]) => (
                <div key={category}>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-white dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechStackPage;
