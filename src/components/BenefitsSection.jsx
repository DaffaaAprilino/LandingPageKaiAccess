// src/components/BenefitsSection.jsx
import React, { forwardRef } from 'react';
import { Clock, Shield, Smartphone } from 'lucide-react';

const BenefitsSection = forwardRef(({ benefits }, ref) => {
  return (
    <div ref={ref} className="py-20 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Mengapa Pilih Face Recognition?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105 border border-white/20">
              <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-full w-20 h-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-blue-100 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default BenefitsSection;