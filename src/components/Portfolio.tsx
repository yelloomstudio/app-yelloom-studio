'use client'

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

type ProjectCardProps = {
  title: string;
  description: string;
  category: string;
  index: number;
};

const ProjectCard = ({ title, description, category, index }: ProjectCardProps) => {
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );
    
    const currentCardRef = cardRef.current;
    
    if (currentCardRef) {
      observer.observe(currentCardRef);
    }
    
    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`group transition-all duration-700 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="overflow-hidden rounded-xl border border-gray-100 hover:border-blue-200 transition-all duration-300 bg-white hover:shadow-lg h-full flex flex-col">
        <div 
          className="relative h-64 w-full overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
            {/* Ilustración abstracta */}
            <div className="absolute w-40 h-40 bg-blue-200/50 rounded-full blur-xl transform -translate-x-10 -translate-y-10"></div>
            <div className="absolute w-32 h-32 bg-blue-300/30 rounded-full blur-lg transform translate-x-20 translate-y-10"></div>
            
            {/* Íconos representativos según categoría */}
            <div className="relative z-10 text-blue-500">
              {category === 'E-commerce' && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
              )}
              {category === 'Aplicación Móvil' && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                  <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
                  <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z" clipRule="evenodd" />
                </svg>
              )}
              {category === 'Plataforma Web' && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                  <path fillRule="evenodd" d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
                </svg>
              )}
              {category === 'IoT' && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
              )}
              {category === 'Red Social' && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                  <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
                  <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                </svg>
              )}
              {category === 'Sistema Web' && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z" clipRule="evenodd" />
                </svg>
              )}
            </div>
          </div>
        </div>
        <div className="flex-grow p-8 flex flex-col">
          <div className="mb-3">
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-blue-50 text-blue-800 border border-blue-100">
              {category}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
          <p className="text-gray-600 leading-relaxed flex-grow">{description}</p>
          <div className="mt-6 pt-4 border-t border-gray-100">
            <Link 
              href="#" 
              className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors duration-300"
            >
              <span>Ver proyecto</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [isHeadingInView, setIsHeadingInView] = useState(false);
  const headingRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeadingInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );
    
    const currentHeadingRef = headingRef.current;
    
    if (currentHeadingRef) {
      observer.observe(currentHeadingRef);
    }
    
    return () => {
      if (currentHeadingRef) {
        observer.unobserve(currentHeadingRef);
      }
    };
  }, []);

  const projects = [
    {
      title: 'E-commerce para Moda',
      description: 'Tienda online completa con sistema de pagos, inventario automatizado y análisis de datos para impulsar las ventas.',
      category: 'E-commerce',
    },
    {
      title: 'App de Gestión Financiera',
      description: 'Aplicación móvil para el control de gastos personales y empresariales con visualización intuitiva y reportes personalizados.',
      category: 'Aplicación Móvil',
    },
    {
      title: 'Plataforma Educativa',
      description: 'Sistema de gestión de cursos online con videoconferencias integradas, seguimiento de progreso y certificaciones digitales.',
      category: 'Plataforma Web',
    },
    {
      title: 'Dashboard para IoT',
      description: 'Panel de control para monitoreo de dispositivos IoT en tiempo real con alertas inteligentes y análisis predictivo.',
      category: 'IoT',
    },
    {
      title: 'Red Social Corporativa',
      description: 'Plataforma interna para la comunicación y colaboración empresarial que mejora la productividad y el trabajo en equipo.',
      category: 'Red Social',
    },
    {
      title: 'Sistema de Reservas',
      description: 'Aplicación web para gestión de citas y reservas en tiempo real con notificaciones automáticas y optimización de agendas.',
      category: 'Sistema Web',
    },
  ];

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div 
          ref={headingRef}
          className={`transition-all duration-1000 mb-20 ${isHeadingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 max-w-xl">
            Nuestro <span className="relative inline-block">Portafolio<span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500"></span></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Descubre cómo hemos ayudado a nuestros clientes a alcanzar sus objetivos tecnológicos con soluciones innovadoras y efectivas.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              category={project.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
