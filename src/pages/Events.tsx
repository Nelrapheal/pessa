import React from 'react';
import Section from '../components/ui/Section';
import { Clock, MapPin } from 'lucide-react';

const Events: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#F8F7EB]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Page Header */}
        <Section className="text-center mb-16">
          <span className="text-[#CD5B43] font-bold tracking-widest text-xs uppercase mb-2 block">
            Stay Updated
          </span>
          <h1 className="text-5xl font-display font-bold text-[#1A1C20]">
            Events & Announcements
          </h1>
        </Section>

        {/* Timeline */}
        <div className="relative border-l-2 border-[#ADA596]/30 ml-4 md:ml-0 space-y-12">

          {/* Single Coming Soon Card */}
          <Section delay={0}>
            <div className="relative md:pl-12">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] md:left-auto md:-left-[9px] top-0 w-5 h-5 rounded-full bg-[#F8F7EB] border-4 border-[#1E917D]" />

              {/* Coming Soon Card */}
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-[#ADA596]/20 hover:border-[#1E917D]/50 transition-colors group relative">
                
                {/* Ribbon */}
                <span className="absolute top-0 right-0 bg-[#CD5B43] text-white px-3 py-1 rounded-bl-lg font-bold text-xs uppercase shadow-md">
                  Coming Soon
                </span>

                {/* Category & Date */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2 md:mb-0 bg-orange-100 text-orange-700">
                    Special
                  </span>
                  <span className="text-sm font-mono text-[#ADA596]">TBA</span>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-[#1A1C20] mb-3 group-hover:text-[#1E917D] transition-colors">
                  Exciting Event Coming Soon
                </h3>
                <p className="text-[#464645] mb-6">
                  Stay tuned for updates about this upcoming event. Details will be announced soon!
                </p>

                {/* Time & Location */}
                <div className="flex items-center space-x-6 text-sm text-[#464645]">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2 text-[#CD5B43]" /> TBA
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2 text-[#CD5B43]" /> TBA
                  </div>
                </div>
              </div>
            </div>
          </Section>

        </div>
      </div>
    </div>
  );
};

export default Events;
