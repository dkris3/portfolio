import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-100 dark:bg-dark border-t border-gray-200 dark:border-primary/10 py-8 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* Brand */}
            <div>
              <button
                onClick={scrollToTop}
                className="text-2xl font-bold text-gray-900 dark:text-white hover:text-primary transition-colors mb-4 inline-block"
              >
                <span className="text-primary">&lt;</span>
                Dean Kristoffer Tayabas
                <span className="text-primary">/&gt;</span>
              </button>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Associate Software Engineer passionate about creating beautiful and functional web experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-gray-900 dark:text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { name: 'About', id: 'about' },
                  { name: 'Skills', id: 'skills' },
                  { name: 'Projects', id: 'projects' },
                  { name: 'Contact', id: 'contact' }
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(item.id);
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-gray-900 dark:text-white font-bold mb-4">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/dkris3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-200 dark:bg-dark-lighter rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/dean-kristoffer-tayabas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-200 dark:bg-dark-lighter rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://instagram.com/dean.kristoffer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-200 dark:bg-dark-lighter rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-gray-200 dark:border-primary/10 flex justify-center items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
              © {currentYear} Dean Kristoffer Tayabas. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
