// src/components/VideoSection.jsx
import React from 'react';
import { Play } from 'lucide-react';

export default function VideoSection() {
  return (
    <div className="py-20 bg-gradient-to-r from-blue-900/50 to-indigo-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">
          Tutorial Lengkap
        </h2>
        <p className="text-xl text-blue-100 text-center mb-12 max-w-2xl mx-auto">
          Tonton video tutorial lengkap cara mendaftar Face Recognition di KAI Access
        </p>
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="aspect-video bg-gradient-to-br from-violet-900/50 to-purple-900/50 rounded-xl flex items-center justify-center border border-white/20">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform cursor-pointer">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
                <p className="text-white font-semibold mb-2">Video Tutorial</p>
                <p className="text-blue-200 text-sm">Klik untuk memutar panduan lengkap</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}