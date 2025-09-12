// src/components/Header.js
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Add scroll shadow effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  const servicesLinks = [
    { href: '/services/import-export', label: 'Import & Export' },
    { href: '/services/petroleum', label: 'Petroleum Products' },
    { href: '/services/machinery', label: 'Machinery Hire' },
    
    { href: '/services/real-estate', label: 'Real Estate' },
    { href: '/services/construction', label: 'Construction Materials' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-3'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-1"
          aria-label="KG Multi Dynamic Home"
        >
          <Image
            src="/images/logo.png"
            alt="KG Multi Dynamic Logo"
            width={150}
            height={50}
            className="w-auto h-12 transition-all duration-300"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative px-3 py-2 transition-all duration-200 rounded-lg ${
                pathname === href 
                  ? 'text-blue-700 font-semibold bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              {label}
              {pathname === href && (
                <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-blue-700 rounded-full"></span>
              )}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
              className={`px-3 py-2 flex items-center gap-1 transition-all duration-200 rounded-lg ${
                activeDropdown === 'services' || servicesLinks.some(link => pathname === link.href)
                  ? 'text-blue-700 font-semibold bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
              aria-expanded={activeDropdown === 'services'}
              aria-haspopup="true"
            >
              Services
              <motion.span
                animate={{ rotate: activeDropdown === 'services' ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                ▾
              </motion.span>
            </button>

            <AnimatePresence>
              {activeDropdown === 'services' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 bg-white shadow-xl rounded-lg w-56 overflow-hidden z-50 border border-gray-100"
                >
                  {servicesLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className={`block px-4 py-3 transition-colors duration-150 ${
                        pathname === href
                          ? 'bg-blue-50 text-blue-700 font-medium'
                          : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                      }`}
                    >
                      {label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <motion.div
            animate={isMenuOpen ? "open" : "closed"}
            variants={{
              open: { rotate: 90 },
              closed: { rotate: 0 }
            }}
            transition={{ duration: 0.2 }}
          >
            {isMenuOpen ? '✕' : '☰'}
          </motion.div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-inner border-t overflow-hidden"
          >
            <div className="px-4 py-2">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`block px-4 py-3 rounded-lg my-1 transition-colors ${
                    pathname === href 
                      ? 'bg-blue-100 text-blue-700 font-semibold' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              
              <div className="px-4 py-3 font-medium text-gray-700">Services</div>
              {servicesLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`block px-6 py-3 rounded-lg my-1 transition-colors ${
                    pathname === href 
                      ? 'bg-blue-100 text-blue-700 font-semibold' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;