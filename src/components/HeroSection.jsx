import React from 'react';

const ProblemCard = ({ icon, title, description, iconBgClass }) => (
  <div className="flex flex-col h-full bg-white/5 backdrop-blur-md border border-white/20 hover:border-white/50 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
    <div className="flex items-start gap-4">
      <div className={`w-12 h-12 ${iconBgClass} rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg`}>
        {icon}
      </div>
      <div>
        <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
        <p className="text-white text-sm">{description}</p>
      </div>
    </div>
  </div>
);

const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
const TicketIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>;
const AlertTriangleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>;

const HeroSection = ({ onScrollToNextSection, isVisible }) => {
  return (
    <div className="relative overflow-hidden min-h-screen flex items-center">

      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-violet-500/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/30 to-indigo-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16 md:py-24 pt-28">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center max-w-5xl mx-auto">

            <div className="inline-block bg-sky-200/20 border border-sky-200/50 text-white px-5 py-2 rounded-full mb-6 font-bold text-sm">
              ⚠️ Masih Repot Cari Tiket & Antre Panjang?
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
              Lewati Antrean Boarding.
              <span className="block bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent mt-2">
                Wajah Anda Tiketnya.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white leading-relaxed max-w-3xl mx-auto font-medium drop-shadow-lg mb-12">
              Gunakan <strong className="text-white font-semibold">Face Recognition</strong> dan masuk gerbang hanya dalam <strong className="text-white font-semibold">5 detik</strong>. Lebih cepat, praktis, dan bebas khawatir.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <ProblemCard 
                icon={<ClockIcon />} 
                iconBgClass="bg-sky-500"
                title="Stop Buang Waktu Antre" 
                description="Masuk gate instan tanpa perlu berhenti untuk scan tiket." 
              />
              <ProblemCard 
                icon={<TicketIcon />} 
                iconBgClass="bg-yellow-500"
                title="Tak Perlu Cek Tiket/QR" 
                description="Wajah Anda adalah tiketnya. Bebas panik cari HP atau tiket fisik." 
              />
              <ProblemCard 
                icon={<AlertTriangleIcon />} 
                iconBgClass="bg-red-500"
                title="Bebas Cemas Ketinggalan" 
                description="Proses boarding yang cepat memberi Anda waktu lebih untuk bersantai." 
              />
            </div>

            <div className="flex flex-col items-center gap-6">
              <button 
                onClick={onScrollToNextSection}
                className="group bg-sky-600 hover:bg-sky-700 text-white font-bold text-xl py-5 px-10 rounded-2xl shadow-lg shadow-sky-500/20 hover:shadow-sky-700/30 transform hover:scale-110 transition-all duration-300 flex items-center gap-4"
              >
                Lihat Solusinya
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 group-hover:translate-y-1 transition-transform"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
              </button>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/20">
                <p className="text-white font-bold text-center text-sm">
                  ✓ Proses Cepat  •  ✓ Gratis Selamanya  •  ✓ Dipercaya 7,4 Juta+ Penumpang
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;