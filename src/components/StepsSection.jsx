// src/components/StepsSection.jsx
import React, { forwardRef } from 'react';

const StepsSection = forwardRef(({ steps, currentStep }, ref) => {
  return (
    <div ref={ref} className="py-20 bg-gradient-to-b from-purple-900/30 to-indigo-900/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Langkah Mudah Pendaftaran
        </h2>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 hover:scale-105 ${
                currentStep === index 
                  ? 'border-violet-400 bg-white/20 shadow-2xl shadow-violet-500/25' 
                  : 'border-white/20 hover:border-violet-300'
              }`}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <div className="text-3xl font-bold text-violet-300 mb-3 text-center">{step.number}</div>
              <h3 className="text-lg font-bold text-white mb-3 text-center">{step.title}</h3>
              <p className="text-blue-100 text-sm text-center leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default StepsSection;