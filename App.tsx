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
import { SmoothScrollProvider } from './components/SmoothScrollProvider';
import { portfolioData } from './data';

function App() {
  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-neo-bg">
        <Navbar />
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
          <Footer data={portfolioData.personalInfo} />
        </ErrorBoundary>
      </div>
    </SmoothScrollProvider>
  );
}

export default App;
