import React from 'react';
import Section from '../components/ui/Section';
import { Map } from 'lucide-react';

const VirtualTour: React.FC = () => {
  return (
    <div className="h-screen w-full relative bg-[#F8F7EB] overflow-hidden pt-20">
      {/* Background Image with lighter overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>

      {/* Semi-transparent white layer to improve contrast */}
      <div className="absolute inset-0 bg-white/30"></div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        
        {/* Coming Soon Ribbon */}
        <div className="absolute top-6 right-6 bg-[#CD5B43] text-white px-4 py-1 rounded-bl-lg font-bold text-xs uppercase shadow-md z-20">
          Coming Soon
        </div>

        <Section>
          <div className="w-20 h-20 bg-[#1E917D] rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
            <Map size={40} className="text-white" />
          </div>

          <h1 className="text-5xl md:text-6xl font-display font-bold text-[#1A1C20] mb-6">
            Virtual Faculty Tour
          </h1>
          <p className="text-xl text-[#464645] max-w-2xl mx-auto mb-10">
            Experience the Faculty of Science complex from anywhere. Explore labs, lecture theatres, and student hubs.
          </p>
        </Section>
      </div>

      {/* Decorative UI Overlay */}
      <div className="absolute bottom-10 left-10 text-[#464645]/80 font-mono text-xs hidden md:block">
        <p>LAT: 6.5158° N</p>
        <p>LNG: 3.3898° E</p>
      </div>
    </div>
  );
};

export default VirtualTour;
