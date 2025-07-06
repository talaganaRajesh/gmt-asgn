'use client';

import React, { useState, useEffect } from 'react';

const drBlakeData = {
  name: "Dr. Blake Smith, MD"
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About', icon: '👤' },
    { href: '#services', label: 'Services', icon: '🏥' },
    { href: '#faq', label: 'FAQ', icon: '❓' },
    { href: '#contact', label: 'Contact', icon: '📞' },
  ];

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-slate-200/20 py-4'
            : 'bg-gradient-to-b from-white/80 via-white/60 to-transparent backdrop-blur-md py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <a href="#hero" className="group relative transition-all duration-300">
            <div className="flex items-center space-x-3">
              <div className="hidden sm:block">
                <div className="text-2xl font-serif font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  {drBlakeData.name.split(',')[0]}
                </div>
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative text-slate-700 hover:text-indigo-600 font-medium transition-all duration-300"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.icon}
                  </span>
                  <span className="relative">
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:w-full transition-all duration-500"></span>
                  </span>
                </div>
              </a>
            ))}
            <div className="relative group">
              <div className="absolute inset-0 cursor-pointer bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

                <span className="flex items-center space-x-2 ">
                  <span>Book Appointment</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleMobileMenuToggle}
            className="lg:hidden relative w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute top-1 left-0 w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 top-2.5' : ''}`}></span>
              <span className={`absolute top-2.5 left-0 w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`absolute top-4 left-0 w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 top-2.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Decorative Line */}
        <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />
      </nav>

      {/* Mobile Menu Slide Panel */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transform`}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={handleMobileMenuToggle}></div>
        {/* Menu panel */}
        <div className="absolute top-0 right-0 w-80 max-w-full h-full bg-white/95 backdrop-blur-xl shadow-2xl p-6 space-y-6">
          <div className="pt-14">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="group flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-slate-50 to-indigo-50 hover:from-indigo-100 hover:to-purple-100 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                  {item.icon}
                </div>
                <div>
                  <div className="text-lg font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">
                    {item.label}
                  </div>
                  <div className="text-sm text-slate-500">
                    {item.label === 'About' && 'Learn about Dr. Blake'}
                    {item.label === 'Services' && 'Our specialties'}
                    {item.label === 'FAQ' && 'Common questions'}
                    {item.label === 'Contact' && 'Get in touch'}
                  </div>
                </div>
              </a>
            ))}

            <a
              href="#contact"
              onClick={handleLinkClick}
              className="mt-8 block text-center w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
