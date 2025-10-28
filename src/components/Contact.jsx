import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPaperPlane, FaMapMarkerAlt, FaBriefcase, FaClock } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact: Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Open default email client
    window.location.href = `mailto:tayabas.deankristoffer@gmail.com?subject=${subject}&body=${body}`;
    
    // Reset form after a short delay
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/dkris3',
      color: '#333',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/dean-kristoffer-tayabas-9751b0290/',
      color: '#0077B5',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://instagram.com/dean.kristoffer',
      color: '#E4405F',
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:tayabas.deankristoffer@gmail.com',
      color: '#EA4335',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-4 bg-white dark:bg-dark transition-colors duration-300"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Main Container with Border */}
          <motion.div variants={itemVariants} className="p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl">
            {/* Header */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Get In Touch</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                I'm currently open to new opportunities and collaborations. Feel free to reach out!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Contact Form */}
              <div className="bg-white dark:bg-gray-900 p-3 rounded-xl border border-gray-200 dark:border-gray-700 flex flex-col">
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Send me a message</h3>
                <form onSubmit={handleSubmit} className="flex flex-col flex-1 gap-1.5">
                  <div className="flex-1 flex flex-col gap-1.5 min-h-0">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-0.5 text-sm font-medium">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-1.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white text-sm focus:outline-none focus:border-primary transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-0.5 text-sm font-medium">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-1.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white text-sm focus:outline-none focus:border-primary transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="flex-1 flex flex-col min-h-0">
                      <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-0.5 text-sm font-medium flex-shrink-0">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full flex-1 min-h-0 px-3 py-1.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 text-sm mt-1.5"
                  >
                    <span>Send Message</span>
                    <FaPaperPlane className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-2">
                <div className="bg-white dark:bg-gray-900 p-3 rounded-xl border border-gray-200 dark:border-gray-700">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Connect with me</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs mb-2 leading-relaxed">
                    Feel free to reach out through any of these platforms. I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your vision.
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 p-2 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors group"
                        >
                          <Icon className="text-sm text-gray-700 dark:text-gray-300" />
                          <span className="text-gray-700 dark:text-gray-300 text-xs font-medium">{social.name}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-900 p-3 rounded-xl border border-gray-200 dark:border-gray-700">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Quick Info</h3>
                  <div className="space-y-1.5">
                    <div className="flex items-start gap-2">
                      <FaMapMarkerAlt className="text-sm text-gray-900 dark:text-white mt-0.5 flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="font-medium text-gray-900 dark:text-white text-xs">Location</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Philippines</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <FaBriefcase className="text-sm text-gray-900 dark:text-white mt-0.5 flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="font-medium text-gray-900 dark:text-white text-xs">Availability</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Open to opportunities</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <FaClock className="text-sm text-gray-900 dark:text-white mt-0.5 flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="font-medium text-gray-900 dark:text-white text-xs">Response Time</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Usually within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
