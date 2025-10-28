import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { aboutMe, experiences } from '../constants/personalInfo';
import { containerVariants, itemVariants } from '../utils/animations';
import { section, container, maxWidth, gridTwoCol, card, heading } from '../styles/classNames';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" ref={ref} className={section}>
      <div className={container}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={`${maxWidth} ${gridTwoCol}`}
        >
          {/* About Section */}
          <motion.div variants={itemVariants} className={card}>
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <h2 className={heading}>About</h2>
            </div>

            <div className="space-y-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {aboutMe.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div variants={itemVariants} className={card}>
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
              <h2 className={heading}>Experience</h2>
            </div>

            <div className="space-y-4">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-700">
                  <div className={`absolute -left-[5px] top-0 w-2 h-2 rounded-full ${exp.current ? 'bg-gray-900 dark:bg-white' : 'bg-gray-400 dark:bg-gray-600'}`}></div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{exp.company}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">{exp.period}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
