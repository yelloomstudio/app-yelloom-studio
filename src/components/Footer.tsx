import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-yellow-500">Yelloom</span>
              <span className="text-2xl font-medium text-white">Studio</span>
            </Link>
            <p className="mt-4 text-base text-gray-300">
              Transformamos ideas en soluciones digitales innovadoras. Nuestro equipo de expertos está listo para llevar tu proyecto al siguiente nivel.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Enlaces</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/#services" className="text-base text-gray-300 hover:text-white">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-base text-gray-300 hover:text-white">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="text-base text-gray-300 hover:text-white">
                  Portafolio
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-base text-gray-300 hover:text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="#" className="text-base text-gray-300 hover:text-white">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-gray-300 hover:text-white">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-base text-gray-300 text-center">
            &copy; {new Date().getFullYear()} Yelloom Studio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
