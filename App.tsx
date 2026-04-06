import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import { SmoothScrollProvider } from './components/SmoothScrollProvider';
import { portfolioData } from './data';

function App() {
  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-retro-bg overflow-x-hidden">
        <Navbar />
        <main>
          <ErrorBoundary>
            <Hero data={portfolioData.personalInfo} />
          </ErrorBoundary>
          
          <ErrorBoundary>
            <Skills data={portfolioData.skills} />
          </ErrorBoundary>
          
          <ErrorBoundary>
            <Projects data={portfolioData.projects} />
          </ErrorBoundary>
          
          <ErrorBoundary>
            <Experience data={portfolioData.experience} />
          </ErrorBoundary>
          
          <ErrorBoundary>
            <Education data={portfolioData.education} />
          </ErrorBoundary>
          
          <ErrorBoundary>
            <Certifications data={portfolioData.certifications} />
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
