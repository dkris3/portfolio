import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../constants/personalInfo';
import { containerVariants, itemVariants } from '../utils/animations';
import { section, container, maxWidth, card, heading, link } from '../styles/classNames';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="projects" ref={ref} className={section}>
      <div className={container}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={maxWidth}
        >
          <motion.div variants={itemVariants} className={card}>
            {/* Section Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                <h2 className={heading}>Recent Projects</h2>
              </div>
              <Link to="/projects" className={link}>
                View All
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {projects.map((project) => (
                <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gray-50 dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                >
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    {project.description}
                  </p>
                  <p className="text-gray-900 dark:text-white text-xs font-mono bg-white dark:bg-gray-900 px-2 py-1 rounded inline-block border border-gray-200 dark:border-gray-700">
                    {project.url}
                  </p>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
