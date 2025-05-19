'use client'

import { useState, useEffect } from 'react';

const ValueCard = ({ icon, title, description, index }: { icon: React.ReactNode, title: string, description: string, index: number }) => {
  const [isInView, setIsInView] = useState(false);
  
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
    
    const currentElement = document.getElementById(`value-card-${index}`);
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [index]);

  return (
    <div 
      id={`value-card-${index}`}
      className={`transition-all duration-700 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex items-start space-x-6">
        <div className="flex-shrink-0 pt-1">
          <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-100 text-blue-600">
            {icon}
          </div>
        </div>
        <div>
          <h4 className="text-xl font-medium text-gray-900 mb-2">{title}</h4>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const [isHeadingInView, setIsHeadingInView] = useState(false);
  const [isMissionInView, setIsMissionInView] = useState(false);
  const [isVisionInView, setIsVisionInView] = useState(false);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const headingObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeadingInView(true);
          headingObserver.disconnect();
        }
      },
      observerOptions
    );
    
    const missionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMissionInView(true);
          missionObserver.disconnect();
        }
      },
      observerOptions
    );
    
    const visionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisionInView(true);
          visionObserver.disconnect();
        }
      },
      observerOptions
    );
    
    const headingElement = document.getElementById('about-heading');
    const missionElement = document.getElementById('about-mission');
    const visionElement = document.getElementById('about-vision');
    
    if (headingElement) headingObserver.observe(headingElement);
    if (missionElement) missionObserver.observe(missionElement);
    if (visionElement) visionObserver.observe(visionElement);
    
    return () => {
      if (headingElement) headingObserver.unobserve(headingElement);
      if (missionElement) missionObserver.unobserve(missionElement);
      if (visionElement) visionObserver.unobserve(visionElement);
    };
  }, []);

  return (
    <section id="about" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Background element */}
        <div className="absolute -right-64 top-0 w-96 h-96 bg-blue-50 rounded-full opacity-70 z-0"></div>
        
        {/* Heading */}
        <div 
          id="about-heading"
          className={`relative z-10 mb-20 transition-all duration-1000 ${isHeadingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 max-w-xl">
            Sobre <span className="relative inline-block">Nosotros<span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500"></span></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Yelloom Studio nace con la visión de transformar ideas en soluciones tecnológicas innovadoras
            que generan un impacto positivo en el mundo digital.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
          {/* Misión */}
          <div 
            id="about-mission"
            className={`transition-all duration-1000 ${isMissionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
          >
            <div className="flex items-center space-x-3 mb-8">
              <span className="h-px w-8 bg-yellow-500"></span>
              <h3 className="text-2xl font-semibold text-gray-900">Nuestra Misión</h3>
            </div>
            
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              Nuestra misión es crear soluciones tecnológicas de calidad que impulsen el éxito de nuestros clientes. 
              Nos comprometemos a entregar productos que superen expectativas, combinando la excelencia técnica con 
              una profunda comprensión de las necesidades del negocio.
            </p>

            <div className="space-y-12">
              <ValueCard
                index={0}
                title="Innovación constante"
                description="Nos mantenemos a la vanguardia de las tecnologías emergentes para ofrecer soluciones innovadoras que marquen la diferencia."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                }
              />

              <ValueCard
                index={1}
                title="Enfoque en el cliente"
                description="Trabajamos en estrecha colaboración con nuestros clientes para entender sus necesidades y superar sus expectativas en cada proyecto."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                }
              />

              <ValueCard
                index={2}
                title="Excelencia técnica"
                description="Nuestro equipo de profesionales altamente cualificados garantiza la máxima calidad en cada línea de código que escribimos."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                }
              />
            </div>
          </div>

          {/* Visión */}
          <div 
            id="about-vision"
            className={`transition-all duration-1000 ${isVisionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="h-full flex flex-col">
              <div className="flex items-center space-x-3 mb-8">
                <span className="h-px w-8 bg-blue-500"></span>
                <h3 className="text-2xl font-semibold text-gray-900">Nuestra Visión</h3>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-10 rounded-xl border border-gray-100 h-full">
                <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                  Aspiramos a ser líderes en la industria del desarrollo de software, reconocidos por nuestra capacidad para transformar 
                  desafíos complejos en soluciones elegantes y eficientes. Buscamos crear un impacto positivo en el mundo a través de la tecnología.
                </p>
                
                <h4 className="text-lg font-medium text-gray-900 mb-6 flex items-center">
                  <span className="block h-1 w-6 bg-yellow-400 mr-3"></span>
                  Lo que nos distingue
                </h4>
                
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="flex-shrink-0 p-1">
                      <svg className="h-5 w-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      Equipo multidisciplinario con experiencia en diversas tecnologías
                    </p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="flex-shrink-0 p-1">
                      <svg className="h-5 w-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      Metodologías ágiles para una entrega eficiente y consistente
                    </p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="flex-shrink-0 p-1">
                      <svg className="h-5 w-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      Compromiso con la calidad y la mejora continua de nuestros procesos
                    </p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="flex-shrink-0 p-1">
                      <svg className="h-5 w-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      Enfoque en soluciones escalables que crecen con tu negocio
                    </p>
                  </li>
                </ul>
                
                <div className="mt-10 flex justify-end">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full border-2 border-yellow-400 p-1">
                    <div className="w-full h-full rounded-full flex items-center justify-center text-xs font-medium text-yellow-700 bg-yellow-50">
                      Yelloom
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
