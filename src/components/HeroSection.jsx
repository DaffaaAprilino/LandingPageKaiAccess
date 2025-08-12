// src/components/HeroSection.jsx
import React, { forwardRef } from 'react';
import { ChevronDown, Shield } from 'lucide-react';

const HeroSection = forwardRef(({ isVisible, onScrollToStepsClick }, ref) => {
  return (
    <div ref={ref} className="relative overflow-hidden flex items-center min-h-screen">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-violet-500/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/30 to-indigo-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Mengubah padding vertikal dari py-20 menjadi py-12 */}
      <div className="relative container mx-auto px-6 py-12 text-center">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          <div className="mb-8 flex justify-center">
            <img src="/access-logo.png" alt="Access by KAI Logo" className="h-24 w-auto" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Masa Depan <span className="block bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Perjalanan Kereta Api</span>
          </h1>
          
          {/* Mengubah margin bawah dari mb-12 menjadi mb-8 */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Daftar Face Recognition KAI Access sekarang dan rasakan pengalaman perjalanan yang lebih cepat, aman, dan modern!
          </p>

          {/* Mengubah gap dari gap-8 menjadi gap-6 */}
          <div className="flex flex-col gap-6 justify-center items-center">
            
            <button 
              onClick={onScrollToStepsClick}
              className="group bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 text-lg"
            >
              Mulai Daftarkan!
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
            
            <div className="flex flex-col items-center gap-4">
              <p className="text-blue-200">Unduh Access by KAI Sekarang!</p>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <a href="https://play.google.com/store/search?q=kai+access&c=apps&hl=id" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-105">
                  <img src="/Google Play.svg" alt="Get it on Google Play" className="h-14 w-auto"/>
                </a>
                <a href="https://apps.apple.com/id/app/access-by-kai/id901804734?l=id" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-105">
                  <img src="/App Store.svg" alt="Download on the App Store" className="h-14 w-auto"/>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
});

export default HeroSection;