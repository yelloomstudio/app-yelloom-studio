'use client'

import Link from "next/link";
import { useState, useEffect } from "react";
import ParticlesBackground from "./ParticlesBackground";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 lg:pt-40 pb-20">
        <div className="flex flex-col items-start gap-8">
          {/* Studio tag - Removed as per previous changes */}
          <div 
            className={`overflow-hidden transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '100ms' }}
          >
            {/* <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm text-white/90 border border-white/20 transform transition-all duration-300 hover:scale-105 hover:bg-white/20">
              ✨ Yelloom Studio
            </span> */}
          </div>
          
          {/* Main headline */}
          <div 
            className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tight leading-[0.9] text-gray-900 mb-8">
              <span 
                className="block relative"
                style={{ 
                  transform: `translateY(${scrollY * 0.1}px)`,
                  textShadow: `
                    -1px -1px 0 #000,
                    1px -1px 0 #000,
                    -1px 1px 0 #000,
                    1px 1px 0 #000,
                    2px 2px 4px rgba(0,0,0,0.5)
                  `,
                  color: 'white',
                  display: 'inline-block',
                  lineHeight: '0.9',
                  padding: '0 4px'
                }}
              >
                Yelloom
              </span>
              <span 
                className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-700 pb-2"
                style={{ transform: `translateY(${scrollY * 0.15}px)` }}
              >
                Studio
              </span>
            </h1>
          </div>

          {/* Tagline */}
          <div 
            className={`transition-all duration-1000 max-w-2xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <h2 className="text-2xl md:text-3xl text-white/90 font-light mb-6">
              Hacemos florecer ideas a través de la tecnología
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Creamos un <span className="font-semibold text-white">ecosistema digital</span> donde la tecnología fortalece la conexión entre las personas y sus ideas.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div 
            className="mt-16 flex flex-wrap gap-4 sm:gap-6 transition-all duration-1000"
            style={{ transitionDelay: '400ms' }}
          >
            <Link
              href="/#contact"
              className="px-8 py-3 sm:px-10 sm:py-4 rounded-full text-base font-medium text-white bg-blue-600 hover:bg-blue-700 backdrop-blur-sm transform transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center justify-center group shadow-lg hover:shadow-blue-500/30 border border-blue-500/30"
            >
              <span>Contáctanos</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link
              href="/#services"
              className="px-8 py-3 sm:px-10 sm:py-4 rounded-full text-base font-medium text-white border-2 border-white/20 hover:bg-white/10 transform transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/30 flex items-center justify-center backdrop-blur-sm"
            >
              Nuestros servicios
            </Link>
          </div>
        </div>

        {/* Decorative element */}
        <div 
          className={`absolute bottom-10 right-10 md:bottom-20 md:right-20 w-32 h-32 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '500ms', transform: `rotate(${scrollY * 0.05}deg)` }}
        >
          <div className="w-full h-full rounded-full border-4 border-blue-400 p-2">
            <div className="w-full h-full rounded-full border-2 border-yellow-300 flex items-center justify-center text-lg font-bold text-blue-500 text-gradient-to-r from-blue-500 to-indigo-700">
              Yelloom
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center transition-opacity duration-1000 ${scrollY > 100 ? 'opacity-0' : 'opacity-100'}`}
      >
        <span className="text-sm text-gray-400 mb-2">Scroll</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
