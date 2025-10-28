import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const CertificationsPage = () => {
  const certifications = [
    {
      name: 'AWS Cloud Quest: Cloud Practitioner',
      issuer: 'Amazon Web Services (AWS)',
      year: '2025',
      credentialId: '',
      credentialUrl: 'https://www.credly.com/badges/5c7f7ecc-bf45-4e73-84e0-bf81cb203970/linked_in_profile',
      description: 'Training badge demonstrating foundational knowledge of AWS Cloud services and best practices.',
    },
    {
      name: 'Java SE 8 Programmer I: Deployment & Application Enhancement',
      issuer: 'Skillsoft',
      year: '2025',
      credentialId: '158139779',
      credentialUrl: 'https://skillsoft.digitalbadges.skillsoft.com/176bcb50-36d5-4bfa-be1a-f25c755c4722#acc.tNrSPVJy', 
      description: 'Certification covering Java SE 8 programming fundamentals, deployment strategies, and application enhancement techniques.',
    },

    {
      name: 'Scrum Master: Scrum for the Team',
      issuer: 'Skillsoft',
      year: '2025',
      credentialId: '161619461',
      credentialUrl: 'https://skillsoft.digitalbadges.skillsoft.com/138310a5-84d1-4656-b437-1ebd19cf5b32#acc.GA5pesvP',
      description: 'Certification covering Scrum principles, practices, and techniques for effective team collaboration.',
    },
    {
      name: 'CompTIA Security+: Security Goals & Controls',
      issuer: 'Skillsoft',
      year: '2025',
      credentialId: '158164404',
      credentialUrl: 'https://skillsoft.digitalbadges.skillsoft.com/1973e165-b091-408b-b783-d3ad8eaf6571#acc.lm09w1LB',
      description: 'Certification covering security goals, controls, and best practices for IT professionals.',
    },
  ];

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
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Certifications</h1>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Professional certifications and training achievements.
            </p>
          </motion.div>

          {/* Certifications List */}
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
                className="p-6 bg-white dark:bg-dark border-2 border-gray-200 dark:border-gray-700 rounded-xl"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{cert.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                  <span className="text-gray-400">•</span>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{cert.year}</p>
                </div>
                {cert.credentialId && (
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
                    Credential ID: {cert.credentialId}
                  </p>
                )}
                {cert.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{cert.description}</p>
                )}
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
                  >
                    Show credential
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationsPage;
