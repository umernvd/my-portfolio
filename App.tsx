import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import RevealOnScroll from './components/RevealOnScroll';
import ErrorBoundary from './components/ErrorBoundary';
import { portfolioData } from './data';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-[#1a2015] font-sans transition-colors duration-300">
      <Navbar isDark={isDark} toggleDarkMode={() => setIsDark(!isDark)} />
      <main>
        <ErrorBoundary>
          <RevealOnScroll>
            <Hero data={portfolioData.personalInfo} />
          </RevealOnScroll>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <RevealOnScroll>
            <Skills data={portfolioData.skills} />
          </RevealOnScroll>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <RevealOnScroll>
            <Projects data={portfolioData.projects} />
          </RevealOnScroll>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <RevealOnScroll>
            <Experience data={portfolioData.experience} />
          </RevealOnScroll>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <RevealOnScroll>
            <Education data={portfolioData.education} />
          </RevealOnScroll>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <RevealOnScroll>
            <Certifications data={portfolioData.certifications} />
          </RevealOnScroll>
        </ErrorBoundary>
      </main>
      <ErrorBoundary>
        <RevealOnScroll>
          <Footer data={portfolioData.personalInfo} />
        </RevealOnScroll>
      </ErrorBoundary>
    </div>
  );
}

export default App;