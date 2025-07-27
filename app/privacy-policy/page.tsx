import Link from 'next/link';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-300 mb-6"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Volver al inicio
                    </Link>

                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Política de Privacidad
                    </h1>
                    <p className="text-xl text-gray-600">
                        Última actualización: {new Date().toLocaleDateString('es-AR')}
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Información que recopilamos</h2>
                            <p className="text-gray-700 mb-4">
                                En Yelloom Studio recopilamos la siguiente información cuando nos contactás a través de nuestro formulario:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Nombre completo</li>
                                <li>Dirección de correo electrónico</li>
                                <li>Número de teléfono (opcional)</li>
                                <li>Mensaje o consulta que nos enviés</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Cómo usamos tu información</h2>
                            <p className="text-gray-700 mb-4">
                                Utilizamos la información recopilada para:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Responder a tus consultas y comunicarnos contigo</li>
                                <li>Brindarte información sobre nuestros servicios</li>
                                <li>Elaborar presupuestos personalizados</li>
                                <li>Mejorar nuestros servicios y experiencia del cliente</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Protección de datos</h2>
                            <p className="text-gray-700">
                                Nos comprometemos a proteger tu información personal. Implementamos medidas de seguridad
                                técnicas y organizativas apropiadas para proteger tus datos contra acceso no autorizado,
                                alteración, divulgación o destrucción.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Compartir información</h2>
                            <p className="text-gray-700">
                                No vendemos, intercambiamos ni transferimos tu información personal a terceros sin tu
                                consentimiento, excepto cuando sea necesario para brindarte nuestros servicios o cuando
                                la ley lo requiera.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookies y tecnologías similares</h2>
                            <p className="text-gray-700">
                                Nuestro sitio web puede utilizar cookies para mejorar tu experiencia de navegación y
                                analizar el tráfico del sitio. Podés configurar tu navegador para rechazar las cookies,
                                aunque esto puede afectar algunas funcionalidades del sitio.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Tus derechos</h2>
                            <p className="text-gray-700 mb-4">
                                De acuerdo con la Ley de Protección de Datos Personales de Argentina (Ley 25.326), tenés derecho a:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Acceder a tu información personal</li>
                                <li>Rectificar datos incorrectos o incompletos</li>
                                <li>Solicitar la eliminación de tus datos</li>
                                <li>Oponerte al tratamiento de tus datos</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contacto</h2>
                            <p className="text-gray-700">
                                Si tenés preguntas sobre esta Política de Privacidad o querés ejercer tus derechos,
                                podés contactarnos en:
                            </p>
                            <div className="bg-gray-50 p-4 rounded-lg mt-4">
                                <p className="text-gray-700"><strong>Email:</strong> contacto@yelloomstudio.com</p>
                                <p className="text-gray-700"><strong>Ubicación:</strong> Buenos Aires, Argentina</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Cambios en esta política</h2>
                            <p className="text-gray-700">
                                Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos sobre
                                cambios significativos publicando la nueva política en nuestro sitio web con una fecha
                                de actualización revisada.
                            </p>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
} 