import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center group">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-700 transition-transform duration-300 group-hover:scale-105">
                Yelloom 
              </span>
              <span
                className={`text-xl font-medium transition-colors duration-300 text-white drop-shadow-lg`}
              >
                Studio
              </span>
            </Link>
            <p className="mt-5 text-gray-300 leading-relaxed max-w-lg">
              Transformamos ideas en soluciones digitales innovadoras. Nuestro
              equipo de expertos está listo para llevar tu proyecto al siguiente
              nivel.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-5">
              Enlaces
            </h3>
            <ul className="space-y-3.5">
              <li>
                <Link
                  href="/#services"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span>Servicios</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span>Sobre Nosotros</span>
                </Link>
              </li>
              {/* Portafolio temporalmente deshabilitado
              <li>
                <Link href="/#portfolio" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span>Portafolio</span>
                </Link>
              </li>
              */}
              <li>
                <Link
                  href="/#contact"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span>Contacto</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-5">
              Legal
            </h3>
            <ul className="space-y-3.5">
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span>Política de Privacidad</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span>Términos y Condiciones</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Yelloom Studio. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
