import React from 'react';
import { NavLink } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1C20] text-[#F8F7EB] pt-20 pb-10 border-t-4 border-[#1E917D]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-display font-bold mb-4 tracking-tight">P.E.S.S.A</h2>
            <p className="text-[#ADA596] text-sm leading-relaxed mb-6">
              The Faculty of Physical and Earth Sciences Students Association. Fostering academic excellence, scientific innovation, and student welfare at the University of Lagos.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/pessaunilag?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-[#ADA596] hover:text-[#CD5B43] transition-colors" target='_blank'><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#1E917D]">Quick Links</h3>
            <ul className="space-y-3 text-sm text-[#ADA596]">
              <li><NavLink to="/departments" className="hover:text-white transition-colors">Departments</NavLink></li>
              <li><NavLink to="/events" className="hover:text-white transition-colors">Events</NavLink></li>
              <li><NavLink to="/tour" className="hover:text-white transition-colors">Virtual Tour</NavLink></li>
              <li><NavLink to="/portal" className="hover:text-white transition-colors">Student Portal</NavLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#CD5B43]">Contact</h3>
            <ul className="space-y-4 text-sm text-[#ADA596]">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 shrink-0" />
                <span>Faculty of Science Complex,<br/>University of Lagos, Akoka</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} />
                <span>info@pessa-unilag.edu.ng</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} />
                <span>+234 800 SCIENCE</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#464645] pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#ADA596]">
          <p>&copy; {new Date().getFullYear()} P.E.S.S.A Unilag. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <NavLink to="/about" className="text-[#CD5B43] font-medium hover:text-white transition-colors">
              Designed & Built by Nelson
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;