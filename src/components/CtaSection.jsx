// src/components/CtaSection.jsx
import React from 'react';
import { ChevronDown, Shield } from 'lucide-react';

export default function CtaSection({ onScrollToHeroClick }) {
  return (
    <div className="py-20 bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Siap untuk Masa Depan?
          </h2>
          <p className="text-xl text-violet-100 mb-12 leading-relaxed">
            Bergabunglah dengan ribuan penumpang yang sudah merasakan kemudahan Face Recognition KAI Access. Perjalanan Anda akan lebih cepat, aman, dan modern!
          </p>
          <div className="space-y-6">
            <button
              onClick={onScrollToHeroClick}
              className="group bg-gradient-to-r from-white to-violet-100 hover:from-violet-100 hover:to-white text-violet-900 font-bold py-6 px-12 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 text-xl inline-block"
            >
              <span className="flex items-center gap-3 justify-center">
                Unduh Access by KAI Sekarang!
                <ChevronDown className="w-5 h-5 group-hover:-translate-y-1 transition-transform transform rotate-180" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}