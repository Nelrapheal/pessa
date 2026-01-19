import React from 'react';
import Section from '../components/ui/Section';
import { Github, Linkedin, Code2, Palette, Cpu, MessageSquare } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#F8F7EB]">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* About P.E.S.S.A Section */}
        <Section className="mb-20">
          <h1 className="text-5xl font-display font-bold text-[#1A1C20] mb-6">About P.E.S.S.A</h1>

          {/* Refined Description */}
          <p className="text-lg text-[#464645] leading-relaxed mb-6">
            The Faculty of Physical and Earth Sciences Students Association (P.E.S.S.A) is the official student body representing all students within the Faculty at the University of Lagos. We exist to unify and empower our members, champion their academic and professional development, and cultivate a vibrant community where scientific curiosity, innovation, and leadership thrive.
          </p>
          <p className="text-lg text-[#464645] leading-relaxed mb-6">
            Our mission is to support, inspire, and advocate for students in the physical and earth sciences by promoting academic excellence, encouraging innovative research, prioritizing student welfare, and creating opportunities for leadership and industry exposure.
          </p>
          <p className="text-lg text-[#464645] leading-relaxed">
            Our vision is to be a leading student association within the University of Lagos, nurturing a community of critical thinkers and innovators prepared to shape scientific discourse locally and globally, while fostering inclusivity, collaboration, and personal growth.
          </p>

          {/* Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 bg-white border border-[#ADA596]/20 rounded-xl">
              <h3 className="font-bold text-[#1E917D] mb-2">Excellence</h3>
              <p className="text-sm text-[#464645]">Fostering a culture of high academic standards.</p>
            </div>
            <div className="p-6 bg-white border border-[#ADA596]/20 rounded-xl">
              <h3 className="font-bold text-[#CD5B43] mb-2">Innovation</h3>
              <p className="text-sm text-[#464645]">Encouraging scientific research and creative solutions.</p>
            </div>
            <div className="p-6 bg-white border border-[#ADA596]/20 rounded-xl">
              <h3 className="font-bold text-[#1A1C20] mb-2">Welfare</h3>
              <p className="text-sm text-[#464645]">Prioritizing the well-being of every student.</p>
            </div>
          </div>
        </Section>

        {/* Credits Section */}
        <Section delay={0.2} className="border-t border-[#ADA596]/20 pt-16">
          <div className="flex flex-col md:flex-row items-center justify-between bg-[#1A1C20] p-10 rounded-3xl text-white">
            <div className="mb-8 md:mb-0">
              <p className="text-[#ADA596] text-sm uppercase tracking-widest mb-2">Credits</p>
              <h2 className="text-3xl font-display font-bold mb-4">Designed & Built by Nelson</h2>
              <p className="text-[#ADA596] text-sm max-w-md mb-6">
                Crafted with a focus on modern aesthetics, performance, and accessibility.
              </p>

              <div className="flex space-x-3 mb-6">
                <span className="bg-white/10 px-3 py-1 rounded-full text-xs flex items-center"><Code2 size={12} className="mr-1"/> React</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-xs flex items-center"><Palette size={12} className="mr-1"/> Tailwind</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-xs flex items-center"><Cpu size={12} className="mr-1"/> Motion</span>
              </div>

              <div className="flex space-x-4">
                <a target='_blank' href="https://github.com/Nelrapheal" className="hover:text-[#1E917D] transition-colors"><Github size={20} /></a>
                <a target='_blank' href="https://www.linkedin.com/in/olafisoye-nelson-26223a385?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-[#1E917D] transition-colors"><Linkedin size={20} /></a>
                <a target='_blank' href="https://wa.me/2347067905508?text=Hello%20Nelson,%20I%20would%20like%20to%20get%20in%20touch%20with%20you" className="hover:text-[#1E917D] transition-colors"><MessageSquare size={20} /></a>
              </div>
            </div>

            {/* Abstract Avatar */}
            <div className="w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-[#1E917D] to-[#CD5B43] rounded-full flex items-center justify-center shadow-2xl animate-float">
              <span className="font-display font-bold text-4xl text-white">N</span>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default About;
