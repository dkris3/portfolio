import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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

  const experiences = [
    {
      id: 1,
      title: 'Associate Software Engineer',
      company: 'Accenture',
      period: 'Sept 2025 - Present',
      description: 'Working on enterprise software solutions and client projects.',
    },
    {
      id: 2,
      title: 'Web Developer OJT',
      company: 'Philippine State College of Aeronautics',
      period: 'Feb 2025 - April 2025',
      description: 'PhilSCA Appointment System - Streamlined appointment booking across departments, reducing wait times by 40% and improving accessibility by 50%.',
    },
    {
      id: 3,
      title: 'Bachelor of Science in Information Technology',
      company: 'Philippine State College of Aeronautics',
      period: '2021 - 2025',
      description: 'Specialization in Aviation Information Technology. Graduated with Latin Honors - Magna Cum Laude.',
    },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="py-8 bg-white dark:bg-dark transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-4">
            <div className="flex items-center gap-3 mb-3">
              <svg className="w-5 h-5 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h2>
            </div>
          </motion.div>

          {/* Experience List */}
          <div className="space-y-3">
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="flex items-start justify-between gap-4 group cursor-pointer p-4 bg-white dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-xl hover:border-primary transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full"></div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm ml-4">
                    {exp.company}
                  </p>
                  {exp.description && (
                    <p className="text-gray-500 dark:text-gray-500 text-xs ml-4 mt-1">
                      {exp.description}
                    </p>
                  )}
                </div>
                <span className="text-gray-600 dark:text-gray-400 text-xs font-medium whitespace-nowrap">
                  {exp.period}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
