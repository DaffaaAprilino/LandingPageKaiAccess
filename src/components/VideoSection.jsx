import React, { useState, forwardRef } from 'react';
import { Play } from 'lucide-react';

const VideoSection = forwardRef((props, ref) => {
  const [showVideo, setShowVideo] = useState(false);
  const videoId = "ZaX-iwGfmEk";

  return (
    <div ref={ref} className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            Masih Bingung? <span className="block sm:inline bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Lihat Cara Kerjanya.</span>
          </h2>
          <p className="text-xl text-white font-medium">
            Tonton panduan lengkap pendaftaran dan penggunaan Face Recognition agar Anda tidak salah langkah.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-4 sm:p-6 border border-white/20 shadow-2xl shadow-sky-500/10">
            <div className="aspect-video rounded-2xl overflow-hidden">
              {showVideo ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div 
                  className="w-full h-full relative cursor-pointer group"
                  onClick={() => setShowVideo(true)} 
                >
                  <img 
                    src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
                    alt="Video Tutorial Thumbnail"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src=`https://placehold.co/1600x900/0f172a/9ca3af?text=Video+Tidak+Tersedia`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 group-hover:bg-black/60">
                    <div className="text-center transform transition-transform duration-300 group-hover:scale-110">
                      <div className="w-20 h-20 bg-sky-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                      <p className="text-white font-bold text-lg">Tonton Video Panduan</p>
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
});

export default VideoSection;