import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700/50">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <p className="text-slate-400 font-medium text-center">
            © 2025 Divisi Angkutan Penumpang DAOP 2 Bandung.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;