import React, { useState, useEffect, useRef } from 'react';

const APPLE_STORE_LINK = "https://apps.apple.com/id/app/access-by-kai/id901804734?l=id";
const GOOGLE_PLAY_LINK = "https://play.google.com/store/search?q=kai+access&c=apps&hl=id";

const Navbar = ({ scrollToBenefits, scrollToSteps, scrollToVideo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [os, setOs] = useState('unknown'); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    
    const ua = navigator.userAgent;
    if (/android/i.test(ua)) {
      setOs('android');
    } else if (/iPad|iPhone|iPod/i.test(ua)) {
      setOs('ios');
    } else {
      setOs('desktop');
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b
        ${isScrolled 
          ? 'bg-indigo-950/80 backdrop-blur-lg border-slate-700' 
          : 'bg-transparent border-transparent'
        }`
      }
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          
          <a 
            href="#" 
            className="flex items-center" 
            onClick={(e) => { 
              e.preventDefault(); 
              window.scrollTo({ top: 0, behavior: 'smooth' }); 
            }}
          >
            <img 
              src="/access-logo.png" 
              alt="Access by KAI Logo" 
              className="h-12 w-auto" 
              onError={(e) => e.target.style.display = 'none'} 
            />
          </a>
          
          <div className="hidden md:flex gap-8 font-semibold text-white">
            <button onClick={scrollToBenefits} className="hover:text-sky-400 transition-colors">Keunggulan</button>
            <button onClick={scrollToSteps} className="hover:text-sky-400 transition-colors">Cara Daftar</button>
            <button onClick={scrollToVideo} className="hover:text-sky-400 transition-colors">Tutorial</button>
          </div>
          
          <div className="relative" ref={dropdownRef}> 
            
            {(os === 'ios' || os === 'android') && (
              <a 
                href={os === 'ios' ? APPLE_STORE_LINK : GOOGLE_PLAY_LINK}
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
                aria-label={os === 'ios' ? 'Unduh di App Store' : 'Unduh di Google Play'}
              >
                Unduh 
              </a>
            )}

            {os === 'desktop' && (
              <> 
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
                >
                  Unduh 
                </button>

                {isDropdownOpen && (
                  <div 
                    className="absolute top-full right-0 mt-2 w-40 bg-slate-800 border border-slate-700 rounded-lg shadow-xl p-2 space-y-2 z-[60]"
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
              </>
            )}
            
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;