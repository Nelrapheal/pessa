import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Atom, Globe2, ArrowUpRight } from 'lucide-react';
import Section from '../components/ui/Section';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[#F8F7EB] z-0">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1E917D]/5 rounded-full blur-3xl animate-pulse-slow mix-blend-multiply" />
           <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#CD5B43]/5 rounded-full blur-3xl animate-float mix-blend-multiply" />
           
           {/* Grid Pattern */}
           <div className="absolute inset-0 opacity-[0.03]" 
                style={{ backgroundImage: 'radial-gradient(#1A1C20 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
           />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-[#ADA596]/30 mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#1E917D] animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#464645]">Faculty of Physical & Earth Sciences</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-[#1A1C20] leading-[1.1] mb-6">
              Exploring matter, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E917D] to-[#1A7F6B]">energy</span>, and the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CD5B43] to-[#A04030]">planet.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#464645] max-w-lg mb-10 leading-relaxed">
              Advancing the frontiers of scientific knowledge through rigorous research, innovation, and academic excellence at the University of Lagos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <NavLink to="/departments" className="group relative px-8 py-4 bg-[#1A1C20] text-white rounded-lg overflow-hidden font-medium">
                <span className="absolute inset-0 w-full h-full bg-[#1E917D] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
                <span className="relative flex items-center">
                  Explore Departments <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </NavLink>
              
              <NavLink to="/about" className="px-8 py-4 bg-transparent border border-[#ADA596] text-[#1A1C20] rounded-lg font-medium hover:bg-[#ADA596]/10 transition-colors flex items-center justify-center">
                About P.E.S.S.A
              </NavLink>
            </div>
          </motion.div>

          {/* Hero Visual - Abstract Scientific Representation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative h-[500px] w-full hidden lg:flex items-center justify-center"
          >
            {/* Central Planet / Atom Core */}
            <div className="relative w-64 h-64 bg-gradient-to-tr from-[#1E917D] to-[#2FA4A9] rounded-full shadow-2xl flex items-center justify-center z-20">
               <div className="absolute inset-2 border border-white/20 rounded-full" />
               <Globe2 size={80} className="text-white opacity-80 animate-pulse-slow" />
            </div>

            {/* Orbiting Elements */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[400px] h-[400px] border border-[#ADA596]/40 rounded-full z-10"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#CD5B43] rounded-full shadow-lg flex items-center justify-center">
                <Atom size={16} className="text-white" />
              </div>
            </motion.div>

            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[550px] h-[550px] border border-[#ADA596]/20 rounded-full z-0 border-dashed"
            >
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-6 h-6 bg-[#1A1C20] rounded-full shadow-lg" />
            </motion.div>

            {/* Floating Glass Cards */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/40 z-30 max-w-[180px]"
            >
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-[#1E917D]" />
                <span className="text-xs font-bold text-[#1A1C20]">Research Focus</span>
              </div>
              <p className="text-[10px] text-[#464645] leading-snug">Analyzing seismic data for energy sustainability.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats / Features Strip */}
      <div className="border-y border-[#ADA596]/30 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Departments', value: '06' },
            { label: 'Academic Staff', value: '120+' },
            { label: 'Active Students', value: '2.5k' },
            { label: 'Research Labs', value: '18' }
          ].map((stat, i) => (
            <Section key={i} delay={i * 0.1} className="text-center md:text-left">
              <h3 className="text-4xl font-display font-bold text-[#1A1C20] mb-1">{stat.value}</h3>
              <p className="text-sm font-medium text-[#ADA596] uppercase tracking-wider">{stat.label}</p>
            </Section>
          ))}
        </div>
      </div>

      {/* Intro to Faculty */}
      <Section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1A1C20] mb-6 leading-tight">
              A hub of scientific discovery and academic rigor.
            </h2>
            <div className="w-16 h-1 bg-[#CD5B43] mb-8" />
          </div>
          <div className="md:col-span-7 space-y-6 text-[#464645] text-lg">
            <p>
              The Faculty of Physical and Earth Sciences is a cornerstone of scientific advancement at the University of Lagos. We combine theoretical understanding with practical application across six specialized departments.
            </p>
            <p>
              From understanding the quantum mechanics governing the subatomic world to exploring the geological processes shaping our planet, PESSA creates an environment where students innovate, research, and lead.
            </p>
            <NavLink to="/about" className="inline-flex items-center text-[#1E917D] font-bold hover:text-[#1A7F6B] transition-colors mt-4">
              Read Dean's Welcome <ArrowUpRight size={18} className="ml-1" />
            </NavLink>
          </div>
        </div>
      </Section>

      {/* Visual Separation */}
      <div className="h-24 bg-gradient-to-b from-[#F8F7EB] to-white" />
    </div>
  );
};

export default Home;