import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: 'PhilSCA Appointment System',
      description: 'Streamlined appointment booking system reducing wait times by 40%. Built with HTML, CSS, JavaScript, PHP, MySQL, REST API (OJT Project)',
      fullDescription: 'A comprehensive web-based appointment booking system developed during my On-the-Job Training at Philippine State College of Aeronautics. The system streamlines the appointment process across multiple departments, significantly reducing wait times by 40% and improving accessibility by 50%. Features include real-time booking, automated notifications, and an intuitive admin dashboard.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'REST API','Bootstrap'],
      url: 'github.com/dkris3',
      link: 'https://app.philsca.edu.ph/poas/',
      category: 'OJT Project',
    },
    {
      id: 2,
      title: 'Library Depository System',
      description: 'Web-based library management system for cataloging, borrowing, and returning books (Capstone Project)',
      fullDescription: 'A complete library management solution developed as my capstone project. The system provides comprehensive features for cataloging books, managing borrower records, tracking book circulation, and generating reports. Includes user authentication, search functionality, and an admin panel for library staff.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'HTML', 'CSS', 'REST API'],
      url: 'https://github.com/dkris3',
      link: 'https://github.com/dkris3',
      category: 'Capstone Project',
    },
    {
      id: 3,
      title: 'BILIPAY PH',
      description: 'Payment processing platform for online transactions (TESDA Training Project)',
      fullDescription: 'A secure payment processing platform developed during TESDA training. The system enables users to process online payments, manage transactions, and track payment history. Implements modern security practices and provides a user-friendly interface for both customers and administrators.',
      technologies: ['TypeScript','Supabase', 'Vite', 'React', 'Tailwind CSS', 'shadcn-ui','Payment Gateway Integration'],
      url: 'https://github.com/dkris3',
      link: 'https://github.com/dkris3',
      category: 'TESDA Training Project - Prototype',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Personal portfolio showcasing projects and skills built with React, Vite, and Tailwind CSS',
      fullDescription: 'A modern, responsive portfolio website built with the latest web technologies. Features smooth animations, dark mode support, and a clean design. Showcases my projects, skills, and professional experience in an engaging and accessible format.',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'JavaScript'],
      url: 'https://github.com/dkris3',
      link: 'https://github.com/dkris3',
      category: 'Personal Project',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-dark py-12 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
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
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">All Projects</h1>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              A collection of projects I've worked on, showcasing my skills and experience in web development.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
                className="p-6 bg-white dark:bg-dark border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-gray-300 dark:hover:border-gray-600 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    <FaExternalLinkAlt className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.fullDescription}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-full text-xs text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Link */}
                <div className="flex items-center gap-2">
                  <FaGithub className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-900 dark:text-white font-mono hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    {project.url}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
