import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CountryPage from './pages/CountryPage';
import LandmarkPage from './pages/LandmarkPage';
import TravelAssistant from './components/TravelAssistant';
import { LanguageProvider } from './contexts/LanguageContext';

// Scroll to top helper with paint deferral to fix mobile touch-target desync
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    // Defer scroll to next frame to ensure DOM is painted.
    // This prevents Samsung Internet/Safari touch target desync bugs.
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen w-full bg-midnight text-white overflow-x-hidden">
          <Navbar />
          <main className="flex-grow pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/country/:id" element={<CountryPage />} />
              <Route path="/landmark/:id" element={<LandmarkPage />} />
            </Routes>
          </main>
          <TravelAssistant />
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;