import React, { forwardRef } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

const SpeedIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;
const SecurityIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>;
const PunctualityIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>;

const BenefitCard = ({ icon, title, duluText, sekarangText, summaryText }) => {
  return (
    <div className="flex flex-col h-full bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-white/70 transition-all hover:scale-105 shadow-xl">
      <div>
        <div className="w-20 h-20 bg-sky-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg">{icon}</div>
        <h3 className="text-2xl font-black text-white mb-6 min-h-16">{title}</h3>
      </div>
      <div className="mb-6">
        <div className="bg-slate-700/50 border border-slate-600/50 rounded-xl h-24 p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <X className="w-5 h-5 text-slate-400" />
            <span className="text-white font-semibold text-sm">DULU</span>
          </div>
          <p className="text-white font-medium">{duluText}</p>
        </div>
        <div className="bg-sky-500/10 border border-sky-500/30 rounded-xl h-24 p-4">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="w-5 h-5 text-sky-400" />
            <span className="text-white font-semibold text-sm">SEKARANG</span>
          </div>
          <p className="text-white font-medium">{sekarangText}</p>
        </div>
      </div>
      <div className="bg-sky-500/20 border border-sky-500/50 rounded-xl p-3 text-center mt-auto">
        <p className="text-white font-bold text-lg">{summaryText}</p>
      </div>
    </div>
  );
};

const BenefitsSection = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            Perjalanan Dulu vs Sekarang
          </h2>
          <p className="text-xl text-white font-medium">
            Lihat perbandingan nyata sebelum dan sesudah memakai Face Recognition.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <BenefitCard 
            icon={<SpeedIcon />}
            title="Masuk Gate Super Cepat"
            duluText="Antre 15-30 menit, cari tiket/QR."
            sekarangText="Scan wajah hanya 5 detik."
            summaryText="LEBIH HEMAT WAKTU"
          />
          <BenefitCard 
            icon={<SecurityIcon />}
            title="Anti Kehilangan Tiket"
            duluText="Risiko tiket hilang atau HP low-batt."
            sekarangText="Wajah Anda adalah tiketnya."
            summaryText="100% AMAN & PRAKTIS"
          />
          <BenefitCard 
            icon={<PunctualityIcon />}
            title="Pasti Tepat Waktu"
            duluText="Terburu-buru karena proses lama."
            sekarangText="Boarding santai dan bebas stres."
            summaryText="SELALU TEPAT WAKTU"
          />
        </div>
      </div>
    </div>
  );
});

export default BenefitsSection;

