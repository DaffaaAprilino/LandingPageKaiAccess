// src/App.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Smartphone, Shield, Clock, Users, Download } from 'lucide-react';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import StepsSection from './components/StepsSection';
import VideoSection from './components/VideoSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const heroRef = useRef(null);
  const benefitsRef = useRef(null);
  const stepsRef = useRef(null);

  const handleScrollToHero = () => {
    heroRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToSteps = () => {
    stepsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { number: "01", title: "Download Aplikasi", description: "Unduh aplikasi dari Play Store atau App Store", icon: <Download className="w-8 h-8 text-white" /> },
    { number: "02", title: "Buat Akun & Login", description: "Daftar dengan email atau nomor telepon", icon: <Users className="w-8 h-8 text-white" /> },
    { number: "03", title: "Pilih Menu", description: "Temukan dan pilih fitur Face Recognition", icon: <Smartphone className="w-8 h-8 text-white" /> },
    { number: "04", title: "Verifikasi Data", description: "Masukkan data diri sesuai dengan KTP", icon: <Shield className="w-8 h-8 text-white" /> },
    { number: "05", title: "Scan Wajah", description: "Ikuti panduan untuk pemindaian wajah", icon: <Clock className="w-8 h-8 text-white" /> }
  ];

  const benefits = [
    { icon: <Clock className="w-12 h-12 text-white" />, title: "Akses Lebih Cepat", description: "Tidak perlu antri panjang, cukup scan wajah." },
    { icon: <Shield className="w-12 h-12 text-white" />, title: "Keamanan Tinggi", description: "Teknologi biometrik canggih untuk keamanan." },
    { icon: <Smartphone className="w-12 h-12 text-white" />, title: "Tanpa Tiket Fisik", description: "Wajah Anda adalah tiket, praktis dan modern." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <HeroSection 
        ref={heroRef} 
        isVisible={isVisible} 
        onScrollToStepsClick={handleScrollToSteps} 
      />
      <BenefitsSection ref={benefitsRef} benefits={benefits} />
      <StepsSection ref={stepsRef} steps={steps} currentStep={currentStep} />
      <VideoSection />
      <CtaSection onScrollToHeroClick={handleScrollToHero} />
      <Footer />
    </div>
  );
}