import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DEPARTMENTS } from '../constants';
import Section from '../components/ui/Section';
import { ArrowLeft, BookOpen, User, Briefcase, Microscope } from 'lucide-react';
import type { Department } from '../types';

const DepartmentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dept = DEPARTMENTS.find((d: Department) => d.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!dept) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 bg-[#F8F7EB]">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Department Not Found</h2>
          <Link to="/departments" className="text-[#1E917D] underline">Back to List</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F7EB] min-h-screen">
      {/* Header */}
      <div className="relative pt-32 pb-20 px-6 overflow-hidden bg-[#2d2e30] text-white">
        <div 
            className="absolute inset-0 opacity-20"
            style={{ 
                background: `radial-gradient(circle at 80% 50%, ${dept.color}, transparent 70%)` 
            }} 
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/departments" className="inline-flex items-center text-[#ADA596] hover:text-white mb-6 transition-colors">
            <ArrowLeft size={16} className="mr-2" /> All Departments
          </Link>
          <Section>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">{dept.name}</h1>
            <p className="text-xl md:text-2xl text-[#ADA596] max-w-3xl leading-relaxed border-l-4 border-white/20 pl-6">
              {dept.description}
            </p>
          </Section>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-16">
          
          <Section>
            <div className="flex items-center space-x-3 mb-6">
              <BookOpen className="text-[#1A1C20]" size={24} />
              <h2 className="text-2xl font-bold text-[#1A1C20]">Key Courses</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dept.courses.map((course: string, idx: number) => (
                <div key={idx} className="bg-white p-4 rounded-lg border border-[#ADA596]/30 hover:border-[#1E917D] transition-colors shadow-sm">
                  <span className="font-medium text-[#464645]">{course}</span>
                </div>
              ))}
            </div>
          </Section>

          <Section delay={0.1}>
            <div className="flex items-center space-x-3 mb-6">
              <Microscope className="text-[#1A1C20]" size={24} />
              <h2 className="text-2xl font-bold text-[#1A1C20]">Research Areas</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {dept.research.map((area: string, idx: number) => (
                <span key={idx} className="px-4 py-2 bg-[#1A1C20]/5 text-[#1A1C20] rounded-full text-sm font-medium border border-[#1A1C20]/10">
                  {area}
                </span>
              ))}
            </div>
          </Section>

           <Section delay={0.2}>
            <div className="flex items-center space-x-3 mb-6">
              <Briefcase className="text-[#1A1C20]" size={24} />
              <h2 className="text-2xl font-bold text-[#1A1C20]">Career Paths</h2>
            </div>
            <ul className="space-y-3">
              {dept.careers.map((career: string, idx: number) => (
                <li key={idx} className="flex items-center text-[#464645]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CD5B43] mr-3" />
                  {career}
                </li>
              ))}
            </ul>
          </Section>

        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-1">
          <Section delay={0.3}>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4" style={{ borderColor: dept.color }}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded bg-[#F8F7EB]">
                   <User size={20} className="text-[#1A1C20]" />
                </div>
                <h3 className="text-lg font-bold text-[#1A1C20]">Head of Department</h3>
              </div>
              <p className="text-xl font-display font-medium text-[#1A1C20] mb-1">{dept.headOfDept}</p>
              <p className="text-sm text-[#ADA596] mb-6">Ph.D, M.Sc, B.Sc</p>
              
              <button 
                className="w-full py-3 rounded-lg text-white font-medium transition-all hover:scale-[1.02]"
                style={{ backgroundColor: dept.color }}
              >
                Contact Department
              </button>

              <hr className="my-6 border-[#ADA596]/20" />

              <h4 className="text-sm font-bold text-[#464645] mb-4">Quick Stats</h4>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-[#ADA596]">Faculty Staff</span>
                  <span className="font-medium text-[#1A1C20]">24</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-[#ADA596]">Undergrads</span>
                    <span className="font-medium text-[#1A1C20]">450+</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-[#ADA596]">Postgrads</span>
                    <span className="font-medium text-[#1A1C20]">80+</span>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetail;