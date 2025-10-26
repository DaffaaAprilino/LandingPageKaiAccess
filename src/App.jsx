import React, { useState, useEffect, useRef } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import StepsSection from './components/StepsSection';
import VideoSection from './components/VideoSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  const benefitsRef = useRef(null);
  const stepsRef = useRef(null);
  const videoRef = useRef(null);

  const handleScrollToBenefits = () => {
    benefitsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const handleScrollToSteps = () => {
    stepsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const handleScrollToVideo = () => {
    videoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-slate-900">
      <Navbar 
        scrollToBenefits={handleScrollToBenefits}
        scrollToSteps={handleScrollToSteps}
        scrollToVideo={handleScrollToVideo}
      />
      <main className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        
        <HeroSection 
          isVisible={isVisible}
          onScrollToNextSection={handleScrollToBenefits} 
        />

        <BenefitsSection ref={benefitsRef} />
        <StepsSection ref={stepsRef} />
        <VideoSection ref={videoRef} />
        
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}