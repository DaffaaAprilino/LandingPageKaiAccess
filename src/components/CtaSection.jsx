import React, { useState, useEffect, useRef } from 'react';
import { Download } from 'lucide-react';

const APPLE_STORE_LINK = "https://apps.apple.com/id/app/access-by-kai/id901804734?l=id";
const GOOGLE_PLAY_LINK = "https://play.google.com/store/search?q=kai+access&c=apps&hl=id";

const CtaSection = () => {
  const [os, setOs] = useState('unknown');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const ua = navigator.userAgent;
    if (/android/i.test(ua)) {
      setOs('android');
    } else if (/iPad|iPhone|iPod/i.test(ua)) {
      setOs('ios');
    } else {
      setOs('desktop');
    }
  }, []); 

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    if (os === 'desktop') {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [os]);

  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            7.4 Juta Pelanggan Sudah Beralih. Anda Kapan?
          </h2>
          
          <p className="text-xl text-white font-medium mb-12">
            Jangan buang waktu Anda untuk mengantre. Coba boarding via wajah sekarang dan ubah cara Anda bepergian selamanya.
          </p>

          <div className="mb-16"> 
            
            {(os === 'ios' || os === 'android') && (
              <a 
                href={os === 'ios' ? APPLE_STORE_LINK : GOOGLE_PLAY_LINK}
                target="_blank" 
                rel="noopener noreferrer" 
                className="group inline-flex items-center justify-center gap-4 bg-sky-600 hover:bg-sky-700 text-white font-black text-2xl py-6 px-12 rounded-2xl shadow-xl shadow-sky-500/20 hover:shadow-sky-400/30 transform hover:scale-105 transition-all duration-300"
                aria-label={os === 'ios' ? 'Unduh di App Store' : 'Unduh di Google Play'}
              >
                <Download className="w-8 h-8" />
                Unduh
              </a>
            )}

            {os === 'desktop' && (
              <div className="relative inline-block" ref={dropdownRef}> 
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="group inline-flex items-center justify-center gap-4 bg-sky-600 hover:bg-sky-700 text-white font-black text-2xl py-6 px-12 rounded-2xl shadow-xl shadow-sky-500/20 hover:shadow-sky-400/30 transform hover:scale-105 transition-all duration-300"
                >
                  <Download className="w-8 h-8" />
                  Unduh Aplikasi
                </button>
                
                {isDropdownOpen && (
                  <div 
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-40 bg-slate-800 border border-slate-700 rounded-lg shadow-xl p-2 space-y-2 z-[60]"
                  >
                    <a 
                      href={APPLE_STORE_LINK}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block opacity-90 hover:opacity-100 transition-opacity"
                    >
                      <img src="/app-store-badge.png" alt="Download on the App Store" className="w-full" />
                    </a>
                    <a 
                      href={GOOGLE_PLAY_LINK}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block opacity-90 hover:opacity-100 transition-opacity"
                    >
                      <img src="/google-play-badge.png" alt="Get it on Google Play" className="w-full" />
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-black text-sky-300 mb-2">5 detik</div>
              <div className="text-white opacity-80 font-semibold">Waktu Masuk Gate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-sky-300 mb-2">&lt; 2 menit</div>
              <div className="text-white opacity-80 font-semibold">Waktu Daftar</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-sky-300 mb-2">7.4 Jt+</div>
              <div className="text-white opacity-80 font-semibold">Pengguna Puas</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}; 

export default CtaSection;