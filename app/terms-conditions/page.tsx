import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Términos y Condiciones",
    description: "Términos y condiciones de uso del sitio web de Yelloom Studio. Conocé nuestras políticas, responsabilidades y condiciones para el uso de nuestros servicios de desarrollo web.",
    keywords: [
        "términos y condiciones",
        "términos de uso",
        "condiciones de servicio",
        "yelloom studio",
        "desarrollo web",
        "políticas"
    ],
    openGraph: {
        title: "Términos y Condiciones - Yelloom Studio",
        description: "Términos y condiciones de uso del sitio web de Yelloom Studio. Conocé nuestras políticas, responsabilidades y condiciones para el uso de nuestros servicios.",
        url: "https://yelloomstudio.com/terms-conditions",
        type: "article",
    },
    twitter: {
        title: "Términos y Condiciones - Yelloom Studio",
        description: "Términos y condiciones de uso del sitio web de Yelloom Studio. Conocé nuestras políticas, responsabilidades y condiciones para el uso de nuestros servicios.",
    },
    alternates: {
        canonical: "/terms-conditions",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function TermsConditions() {
    return (
        <div className="min-h-screen bg-gray-900 overflow-hidden relative">
            {/* Elementos decorativos de fondo */}
            <div className="absolute left-0 top-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -right-64 top-20 w-96 h-96 bg-blue-500/10 rounded-full opacity-30 blur-xl"></div>
                <div className="absolute left-0 top-1/3 w-64 h-64 bg-indigo-500/10 rounded-full opacity-30 blur-xl"></div>
                <div className="absolute right-1/3 bottom-20 w-80 h-80 bg-yellow-500/5 rounded-full opacity-30 blur-xl"></div>
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
                            Términos y <span className="relative inline-block">Condiciones
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
                                    1. Aceptación de términos
                                </h2>
                                <p className="text-gray-300">
                                    Al acceder y utilizar el sitio web de Yelloom Studio, aceptás estar sujeto a estos
                                    Términos y Condiciones. Si no estás de acuerdo con alguno de estos términos,
                                    te solicitamos que no utilices nuestro sitio web.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                                    <span className="h-px w-8 bg-yellow-500 mr-3"></span>
                                    2. Servicios
                                </h2>
                                <p className="text-gray-300 mb-4">
                                    Yelloom Studio ofrece servicios de desarrollo web, incluyendo pero no limitado a:
                                </p>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>Desarrollo de sitios web y aplicaciones web</li>
                                    <li>Diseño de interfaces de usuario (UI/UX)</li>
                                    <li>Desarrollo de aplicaciones móviles</li>
                                    <li>Consultoría técnica</li>
                                    <li>Mantenimiento y soporte técnico</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                                    <span className="h-px w-8 bg-yellow-500 mr-3"></span>
                                    3. Proceso de contratación
                                </h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-lg font-medium text-blue-400 mb-2">3.1 Presupuesto</h3>
                                        <p className="text-gray-300">
                                            Todo proyecto comenzará con un presupuesto detallado que incluirá alcance,
                                            tiempos de entrega y costos. El presupuesto tendrá validez por 30 días.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-medium text-blue-400 mb-2">3.2 Contrato</h3>
                                        <p className="text-gray-300">
                                            Una vez aceptado el presupuesto, se firmará un contrato específico donde se
                                            detallarán las condiciones particulares del proyecto.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                                    <span className="h-px w-8 bg-yellow-500 mr-3"></span>
                                    4. Pagos y facturación
                                </h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-lg font-medium text-blue-400 mb-2">4.1 Condiciones de pago</h3>
                                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                                            <li>Seña del 50% al firmar el contrato</li>
                                            <li>Saldo restante al finalizar el proyecto</li>
                                            <li>Pagos por transferencia bancaria o métodos acordados</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-medium text-blue-400 mb-2">4.2 Facturación</h3>
                                        <p className="text-gray-300">
                                            Todos los pagos se facturarán según la normativa argentina vigente.
                                            Los precios incluyen IVA cuando corresponda.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                                    <span className="h-px w-8 bg-yellow-500 mr-3"></span>
                                    5. Propiedad intelectual
                                </h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-lg font-medium text-blue-400 mb-2">5.1 Derechos del cliente</h3>
                                        <p className="text-gray-300">
                                            Una vez completado el pago total, el cliente obtendrá todos los derechos
                                            sobre el código desarrollado específicamente para su proyecto.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-medium text-blue-400 mb-2">5.2 Derechos de Yelloom Studio</h3>
                                        <p className="text-gray-300">
                                            Nos reservamos el derecho de utilizar el proyecto en nuestro portafolio
                                            y material promocional, salvo acuerdo contrario por escrito.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                                    <span className="h-px w-8 bg-yellow-500 mr-3"></span>
                                    6. Garantías y soporte
                                </h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-lg font-medium text-blue-400 mb-2">6.1 Garantía</h3>
                                        <p className="text-gray-300">
                                            Ofrecemos garantía de 30 días contra defectos de funcionamiento desde
                                            la entrega del proyecto.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-medium text-blue-400 mb-2">6.2 Soporte</h3>
                                        <p className="text-gray-300">
                                            El soporte técnico post-entrega se facturará por separado según
                                            las tarifas vigentes.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                                    <span className="h-px w-8 bg-yellow-500 mr-3"></span>
                                    7. Limitación de responsabilidad
                                </h2>
                                <p className="text-gray-300">
                                    Yelloom Studio no será responsable por daños indirectos, incidentales o
                                    consecuentes que puedan surgir del uso de nuestros servicios, más allá
                                    del monto total pagado por el cliente.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                                    <span className="h-px w-8 bg-yellow-500 mr-3"></span>
                                    8. Rescisión
                                </h2>
                                <p className="text-gray-300">
                                    Cualquier parte puede rescindir el contrato con 15 días de aviso por escrito.
                                    En caso de rescisión, se facturará el trabajo realizado hasta la fecha
                                    según el porcentaje de avance del proyecto.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                                    <span className="h-px w-8 bg-yellow-500 mr-3"></span>
                                    9. Ley aplicable
                                </h2>
                                <p className="text-gray-300">
                                    Estos términos se rigen por las leyes de la República Argentina.
                                    Cualquier disputa será resuelta en los tribunales competentes de
                                    Buenos Aires, Argentina.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                                    <span className="h-px w-8 bg-yellow-500 mr-3"></span>
                                    10. Contacto
                                </h2>
                                <p className="text-gray-300 mb-4">
                                    Para consultas sobre estos Términos y Condiciones, podés contactarnos en:
                                </p>
                                <div className="bg-gray-700/50 border border-gray-600/50 p-4 rounded-lg mt-4">
                                    <p className="text-gray-300"><strong className="text-white">Email:</strong> contacto@yelloomstudio.com</p>
                                    <p className="text-gray-300"><strong className="text-white">Ubicación:</strong> Buenos Aires, Argentina</p>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 