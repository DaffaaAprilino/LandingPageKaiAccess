import React, { forwardRef, useState, useEffect, useRef } from 'react';
import { Smartphone, Users, Check } from 'lucide-react';

const APPLE_STORE_LINK = "https://apps.apple.com/id/app/access-by-kai/id901804734?l=id";
const GOOGLE_PLAY_LINK = "https://play.google.com/store/search?q=kai+access&c=apps&hl=id";

const MethodCard = ({ icon, title, subtitle, steps, isRecommended, showStoreBadges }) => {
  const [os, setOs] = useState('unknown');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (showStoreBadges) {
      const ua = navigator.userAgent;
      if (/android/i.test(ua)) {
        setOs('android');
      } else if (/iPad|iPhone|iPod/i.test(ua)) {
        setOs('ios');
      } else {
        setOs('desktop');
      }
    }
  }, [showStoreBadges]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    if (os === 'desktop' && showStoreBadges) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [os, showStoreBadges]);

  return (
    <div className={`flex flex-col h-full bg-white/5 backdrop-blur-md rounded-3xl p-8 border transition-all shadow-xl hover:scale-105
      ${isRecommended 
        ? 'border-white/20 hover:border-white/70' 
        : 'border-white/20 hover:border-white/70'}`
    }>
      <div className="flex-grow">
        
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg bg-sky-600">
            {icon}
          </div>
          <div>
            <h4 className="text-2xl font-black text-white">{title}</h4>
            <p className={`font-semibold ${isRecommended ? 'text-sky-300' : 'text-white-400'}`}>{subtitle}</p>
          </div>
        </div>
        
        <ul className="space-y-4 text-white text-lg">
          {steps.map((step, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className={`mt-1 flex-shrink-0 ${isRecommended ? 'text-sky-400' : 'text-slate-400'}`}>
                <Check className="w-5 h-5" />
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {showStoreBadges && (
        <div className="mt-8">

          {(os === 'ios' || os === 'android') && (
            <a 
              href={os === 'ios' ? APPLE_STORE_LINK : GOOGLE_PLAY_LINK}
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full text-center inline-flex items-center justify-center gap-3 bg-sky-600 hover:bg-sky-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
              aria-label={os === 'ios' ? 'Unduh di App Store' : 'Unduh di Google Play'}
            >
              Unduh Aplikasi 
            </a>
          )}

          {os === 'desktop' && (
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full text-center inline-flex items-center justify-center gap-3 bg-sky-600 hover:bg-sky-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
              >
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
      )}
    </div>
  );
};

const StepsSection = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            Aktifkan Dalam 2 Menit, Nikmati Selamanya.
          </h2>
          <p className="text-xl text-white font-medium">
            Pilih cara pendaftaran yang paling nyaman untuk Anda. Cukup sekali daftar untuk selamanya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <MethodCard 
            icon={<Smartphone size={32} />}
            title="Daftar via Aplikasi"
            subtitle="Paling Cepat & Direkomendasikan"
            steps={[
              "Unduh/perbarui Access by KAI.",
              "Pilih menu 'Akun' > 'Registrasi Face Recognition'.",
              "Setujui syarat dan ketentuan.",
              "Isi data diri dan unggah foto selfie.",
              "Klik 'Daftar Sekarang' untuk menyelesaikan."
            ]}
            isRecommended={true}
            showStoreBadges={true}
          />
          <MethodCard 
            icon={<Users size={32} />}
            title="Dibantu Petugas Stasiun"
            subtitle="Jika Anda butuh bantuan langsung"
            steps={[
              "Kunjungi stasiun yang menyediakan fasilitas.",
              "Serahkan e-KTP Anda kepada petugas kami.",
              "Biarkan petugas yang mendaftarkan untuk Anda."
            ]}
            isRecommended={false}
          />
        </div>
      </div>
    </div>
  );
});

export default StepsSection;