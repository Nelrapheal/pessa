import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Atom, FlaskConical, Globe2, Waves, Sigma, BarChart3 } from 'lucide-react';
import Section from '../components/ui/Section';
import { DEPARTMENTS } from '../constants';

const iconMap: Record<string, React.ReactNode> = {
  'Atom': <Atom size={32} />,
  'FlaskConical': <FlaskConical size={32} />,
  'Globe2': <Globe2 size={32} />,
  'Waves': <Waves size={32} />,
  'Sigma': <Sigma size={32} />,
  'BarChart3': <BarChart3 size={32} />,
};

const Departments: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#F8F7EB]">
      <div className="max-w-7xl mx-auto px-6">
        <Section className="mb-16">
          <h1 className="text-5xl font-display font-bold text-[#1A1C20] mb-4">Our Departments</h1>
          <p className="text-xl text-[#464645] max-w-2xl">
            Specialized fields of study driving innovation in physical and earth sciences.
          </p>
        </Section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DEPARTMENTS.map((dept, index) => (
            <Section key={dept.id} delay={index * 0.1}>
              <Link 
                to={`/departments/${dept.id}`}
                className="group block h-full bg-white border border-[#ADA596]/20 rounded-2xl p-8 hover:shadow-2xl hover:shadow-[#1E917D]/10 transition-all duration-500 relative overflow-hidden"
              >
                {/* Hover Gradient Background */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                  style={{ backgroundColor: dept.color }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
                    style={{ backgroundColor: `${dept.color}15`, color: dept.color }}
                  >
                    {iconMap[dept.iconName]}
                  </div>

                  <h2 className="text-2xl font-bold text-[#1A1C20] mb-3 group-hover:text-[#1E917D] transition-colors">
                    {dept.name}
                  </h2>
                  
                  <p className="text-[#464645] text-sm leading-relaxed mb-8 flex-grow">
                    {dept.description}
                  </p>

                  <div className="flex items-center text-sm font-bold uppercase tracking-wider transition-colors group-hover:translate-x-2 duration-300" style={{ color: dept.color }}>
                    View Details <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </Link>
            </Section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Departments;