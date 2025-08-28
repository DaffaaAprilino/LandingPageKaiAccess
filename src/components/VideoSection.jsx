import React, { useState } from 'react';
import { Play } from 'lucide-react';

export default function VideoSection() {
  // State untuk melacak apakah video sedang ditampilkan atau tidak
  const [showVideo, setShowVideo] = useState(false);

  // Ekstrak ID video dari URL YouTube Shorts
  const videoId = "ZaX-iwGfmEk";

  return (
    // Pastikan tidak ada background di div utama ini agar menyambung
    <div className="py-20">
      <div className="container mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">
          Tutorial Lengkap
        </h2>
        <p className="text-xl text-white text-center mb-12 max-w-2xl mx-auto">
          Tonton video tutorial lengkap cara mendaftar Face Recognition di KAI Access
        </p>
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-8 border border-white/20">
            <div className="aspect-video rounded-xl overflow-hidden">
              {showVideo ? (
                // Jika showVideo true, tampilkan iframe video
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                // Jika false, tampilkan thumbnail asli dengan tombol play di atasnya
                <div 
                  className="w-full h-full relative cursor-pointer"
                  onClick={() => setShowVideo(true)} // Klik untuk mengubah state
                >
                  <img 
                    src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
                    alt="Video Tutorial Thumbnail"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gelap untuk kontras */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                      <p className="text-white font-semibold mb-2">Video Tutorial</p>
                      <p className="text-blue-200 text-sm">Klik untuk memutar panduan lengkap</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
