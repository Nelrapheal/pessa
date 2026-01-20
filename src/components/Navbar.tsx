import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import type { NavItem } from '../types';
import logo from '../assets/Untitled design.png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-[#1A1C20]/95 backdrop-blur-md border-[#464645]/30 py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-3 group">
          <div
            className={`p-2 rounded-lg transition-colors ${
              isScrolled ? 'bg-[#1E917D]' : 'bg-[#1A1C20]'
            }`}
          >
            <img src={logo} alt="P.E.S.S.A Logo" className="w-7 h-7 object-contain" />
          </div>

          <div className="flex flex-col">
            <span
              className={`text-xl font-bold leading-none tracking-tight ${
                isScrolled ? 'text-[#F8F7EB]' : 'text-[#1A1C20]'
              }`}
            >
              P.E.S.S.A
            </span>
            <span
              className={`text-[10px] font-medium tracking-widest uppercase ${
                isScrolled ? 'text-[#ADA596]' : 'text-[#464645]'
              }`}
            >
              Univ. of Lagos
            </span>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item: NavItem) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-all duration-300 hover:tracking-wide ${
                  isActive
                    ? 'text-[#1E917D]'
                    : isScrolled
                    ? 'text-[#F8F7EB] hover:text-[#1E917D]'
                    : 'text-[#1A1C20] hover:text-[#1E917D]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <a
            href="https://studentportal.unilag.edu.ng/login"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 ${
              isScrolled
                ? 'bg-[#CD5B43] text-white hover:bg-[#b04b36]'
                : 'bg-[#1A1C20] text-[#F8F7EB] hover:bg-[#1E917D]'
            }`}
          >
            Student Login
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen((v) => !v)}
          className={`md:hidden p-2 rounded-md ${
            isScrolled ? 'text-[#F8F7EB]' : 'text-[#1A1C20]'
          }`}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1A1C20] border-t border-[#464645]"
          >
            <div className="flex flex-col p-6 space-y-4">
              {NAV_ITEMS.map((item: NavItem) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-lg font-medium transition-colors ${
                      isActive
                        ? 'text-[#1E917D]'
                        : 'text-[#F8F7EB] hover:text-[#1E917D]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <a
                href="https://studentportal.unilag.edu.ng/login"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-5 py-3 rounded-full text-sm font-bold transition-all duration-300 bg-[#CD5B43] text-white hover:bg-[#b04b36] text-center"
              >
                Student Login
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <a
            href="https://studentportal.unilag.edu.ng/login"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 ${
              isScrolled
                ? 'bg-[#CD5B43] text-white hover:bg-[#b04b36]'
                : 'bg-[#1A1C20] text-[#F8F7EB] hover:bg-[#1E917D]'
            }`}
          >
            Student Login
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen((v) => !v)}
          className={`md:hidden p-2 rounded-md ${
            isScrolled ? 'text-[#F8F7EB]' : 'text-[#1A1C20]'
          }`}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1A1C20] border-t border-[#464645]"
          >
            <div className="flex flex-col p-6 space-y-4">
              {NAV_ITEMS.map((item: NavItem) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-lg font-medium transition-colors ${
                      isActive
                        ? 'text-[#1E917D]'
                        : 'text-[#F8F7EB] hover:text-[#1E917D]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <a
                href="https://studentportal.unilag.edu.ng/login"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-5 py-3 rounded-full text-sm font-bold transition-all duration-300 bg-[#CD5B43] text-white hover:bg-[#b04b36] text-center"
              >
                Student Login
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <a
            href="https://studentportal.unilag.edu.ng/login"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 ${
              isScrolled
                ? 'bg-[#CD5B43] text-white hover:bg-[#b04b36]'
                : 'bg-[#1A1C20] text-[#F8F7EB] hover:bg-[#1E917D]'
            }`}
          >
            Student Login
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen((v) => !v)}
          className={`md:hidden p-2 rounded-md ${
            isScrolled ? 'text-[#F8F7EB]' : 'text-[#1A1C20]'
          }`}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1A1C20] border-t border-[#464645]"
          >
            <div className="flex flex-col p-6 space-y-4">
              {NAV_ITEMS.map((item: NavItem) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-lg font-medium transition-colors ${
                      isActive
                        ? 'text-[#1E917D]'
                        : 'text-[#F8F7EB] hover:text-[#1E917D]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <a
                href="https://studentportal.unilag.edu.ng/login"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-5 py-3 rounded-full text-sm font-bold transition-all duration-300 bg-[#CD5B43] text-white hover:bg-[#b04b36] text-center"
              >
                Student Login
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
