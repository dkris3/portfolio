import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TechStackPage from './pages/TechStackPage';
import CertificationsPage from './pages/CertificationsPage';
import ProjectsPage from './pages/ProjectsPage';
import './App.css';

function App() {
  useEffect(() => {
    // Smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-dark text-gray-900 dark:text-white transition-colors duration-300">
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <About />
                <TechStack />
                <Projects />
                <Contact />
                <Footer />
              </main>
            } />
            <Route path="/tech-stack" element={<TechStackPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
