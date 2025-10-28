import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { techStack, certifications } from '../constants/techStack';
import { containerVariants, itemVariants } from '../utils/animations';
import { section, container, maxWidth, card, heading, link } from '../styles/classNames';

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="skills" ref={ref} className={section}>
      <div className={container}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={maxWidth}
        >
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 md:gap-6">
            {/* Tech Stack - 60% */}
            <motion.div variants={itemVariants} className={`lg:col-span-6 ${card}`}>
              {/* Section Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <h2 className={heading}>Tech Stack</h2>
                </div>
                <Link to="/tech-stack" className={link}>
                  View All
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Tech Categories */}
              <div className="space-y-4">
                {Object.entries(techStack).map(([category, technologies]) => (
                  <div key={category}>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications - 40% */}
            <motion.div variants={itemVariants} className={`lg:col-span-4 ${card} flex flex-col`}>
              {/* Section Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                  <h2 className={heading}>Certifications</h2>
                </div>
                <Link to="/certifications" className={`${link} flex-shrink-0`}>
                  View All
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Certifications List */}
              <div className="space-y-6 flex-1">
                {certifications.map((cert) => (
                  <div key={cert.id} className="pb-6 border-b border-gray-200 dark:border-gray-700 last:border-0 last:pb-0">
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 leading-snug">{cert.name}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">{cert.issuer}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">{cert.year}</p>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-md px-2 py-1 hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
                      >
                        Show credential
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
