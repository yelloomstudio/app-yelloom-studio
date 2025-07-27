import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Política de Privacidad",
    description: "Conocé cómo Yelloom Studio protege y maneja tu información personal. Política de privacidad completa sobre recopilación, uso y protección de datos según la Ley 25.326 de Argentina.",
    keywords: [
        "política de privacidad",
        "protección de datos",
        "privacidad",
        "ley 25.326",
        "yelloom studio",
        "datos personales"
    ],
    openGraph: {
        title: "Política de Privacidad - Yelloom Studio",
        description: "Conocé cómo Yelloom Studio protege y maneja tu información personal. Política de privacidad completa sobre recopilación, uso y protección de datos.",
        url: "https://yelloomstudio.com/privacy-policy",
        type: "article",
    },
    twitter: {
        title: "Política de Privacidad - Yelloom Studio",
        description: "Conocé cómo Yelloom Studio protege y maneja tu información personal. Política de privacidad completa sobre recopilación, uso y protección de datos.",
    },
    alternates: {
        canonical: "/privacy-policy",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-900 overflow-hidden relative">
            {/* Elementos decorativos de fondo */}
            <div className="absolute left-0 top-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -left-64 top-20 w-96 h-96 bg-blue-500/10 rounded-full opacity-30 blur-xl"></div>
                <div className="absolute right-0 top-1/3 w-64 h-64 bg-indigo-500/10 rounded-full opacity-30 blur-xl"></div>
                <div className="absolute left-1/2 bottom-20 w-80 h-80 bg-yellow-500/5 rounded-full opacity-30 blur-xl"></div>
            </div>

            <div className="relative z-10 py-16">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-12">
                        <Link
                            href="/"
                            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 mb-6"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Volver al inicio
                        </Link>

                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Política de <span className="relative inline-block">Privacidad
                                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-300 to-yellow-600"></span>
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300">
                            Última actualización: {new Date().toLocaleDateString('es-AR')}
                        </p>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8 space-y-8 hover:border-blue-500/30 transition-colors duration-300">

                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                                    <span className="h-px w-8 bg-yellow-500 mr-3"></span>
                                    1. Información que recopilamos
                                </h2>
                                <p className="text-gray-300 mb-4">
                                    En Yelloom Studio recopilamos la siguiente información cuando nos contactás a través de nuestro formulario:
                                </p>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>Nombre completo</li>
                                    <li>Dirección de correo electrónico</li>
                                    <li>Número de teléfono (opcional)</li>
                                    <li>Mensaje o consulta que nos enviés</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                                    <span className="h-px w-8 bg-yellow-500 mr-3"></span>
                                    2. Cómo usamos tu información
                                </h2>
                                <p className="text-gray-300 mb-4">
                                    Utilizamos la información recopilada para:
                                </p>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>Responder a tus consultas y comunicarnos contigo</li>
                                    <li>Brindarte información sobre nuestros servicios</li>
                                    <li>Elaborar presupuestos personalizados</li>
                                    <li>Mejorar nuestros servicios y experiencia del cliente</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                                    <span className="h-px w-8 bg-yellow-500 mr-3"></span>
                                    3. Protección de datos
                                </h2>
                                <p className="text-gray-300">
                                    Nos comprometemos a proteger tu información personal. Implementamos medidas de seguridad
                                    técnicas y organizativas apropiadas para proteger tus datos contra acceso no autorizado,
                                    alteración, divulgación o destrucción.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                                    <span className="h-px w-8 bg-yellow-500 mr-3"></span>
                                    4. Compartir información
                                </h2>
                                <p className="text-gray-300">
                                    No vendemos, intercambiamos ni transferimos tu información personal a terceros sin tu
                                    consentimiento, excepto cuando sea necesario para brindarte nuestros servicios o cuando
                                    la ley lo requiera.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                                    <span className="h-px w-8 bg-yellow-500 mr-3"></span>
                                    5. Cookies y tecnologías similares
                                </h2>
                                <p className="text-gray-300">
                                    Nuestro sitio web puede utilizar cookies para mejorar tu experiencia de navegación y
                                    analizar el tráfico del sitio. Podés configurar tu navegador para rechazar las cookies,
                                    aunque esto puede afectar algunas funcionalidades del sitio.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                                    <span className="h-px w-8 bg-yellow-500 mr-3"></span>
                                    6. Tus derechos
                                </h2>
                                <p className="text-gray-300 mb-4">
                                    De acuerdo con la Ley de Protección de Datos Personales de Argentina (Ley 25.326), tenés derecho a:
                                </p>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>Acceder a tu información personal</li>
                                    <li>Rectificar datos incorrectos o incompletos</li>
                                    <li>Solicitar la eliminación de tus datos</li>
                                    <li>Oponerte al tratamiento de tus datos</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                                    <span className="h-px w-8 bg-yellow-500 mr-3"></span>
                                    7. Contacto
                                </h2>
                                <p className="text-gray-300 mb-4">
                                    Si tenés preguntas sobre esta Política de Privacidad o querés ejercer tus derechos,
                                    podés contactarnos en:
                                </p>
                                <div className="bg-gray-700/50 border border-gray-600/50 p-4 rounded-lg mt-4">
                                    <p className="text-gray-300"><strong className="text-white">Email:</strong> contacto@yelloomstudio.com</p>
                                    <p className="text-gray-300"><strong className="text-white">Ubicación:</strong> Buenos Aires, Argentina</p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                                    <span className="h-px w-8 bg-yellow-500 mr-3"></span>
                                    8. Cambios en esta política
                                </h2>
                                <p className="text-gray-300">
                                    Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos sobre
                                    cambios significativos publicando la nueva política en nuestro sitio web con una fecha
                                    de actualización revisada.
                                </p>
                            </section>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 