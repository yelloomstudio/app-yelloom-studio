'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setIsScrolled(position > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-sm py-2 shadow-sm' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center group">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-700 transition-transform duration-300 group-hover:scale-105">
              Yelloom
            </span>
            <span className={`text-xl font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white drop-shadow-lg'}`}>
              Studio
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-10">
            <Link href="/#services"
              className={`px-2 py-1 text-sm font-medium transition-all duration-300 relative group ${isScrolled ? 'text-gray-800' : 'text-white drop-shadow-lg'}`}
            >
              Servicios
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/#about"
              className={`px-2 py-1 text-sm font-medium transition-all duration-300 relative group ${isScrolled ? 'text-gray-800' : 'text-white drop-shadow-lg'}`}
            >
              Sobre Nosotros
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/#contact"
              className={`ml-2 px-5 py-2 rounded-full text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:shadow`}
            >
              Contacto
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-full transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white drop-shadow-lg'}`}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Menú</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="h-full flex flex-col justify-center items-center space-y-8 px-4 text-center">
          <Link
            href="/#services"
            className="text-3xl font-light text-gray-800 hover:text-yellow-500 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Servicios
          </Link>
          <Link
            href="/#about"
            className="text-3xl font-light text-gray-800 hover:text-yellow-500 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Sobre Nosotros
          </Link>
          <Link
            href="/#contact"
            className="text-3xl font-light text-gray-800 hover:text-yellow-500 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
