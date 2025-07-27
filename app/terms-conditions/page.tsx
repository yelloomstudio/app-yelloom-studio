import Link from 'next/link';

export default function TermsConditions() {
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
                        Términos y Condiciones
                    </h1>
                    <p className="text-xl text-gray-600">
                        Última actualización: {new Date().toLocaleDateString('es-AR')}
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Aceptación de términos</h2>
                            <p className="text-gray-700">
                                Al acceder y utilizar el sitio web de Yelloom Studio, aceptás estar sujeto a estos
                                Términos y Condiciones. Si no estás de acuerdo con alguno de estos términos,
                                te solicitamos que no utilices nuestro sitio web.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Servicios</h2>
                            <p className="text-gray-700 mb-4">
                                Yelloom Studio ofrece servicios de desarrollo web, incluyendo pero no limitado a:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Desarrollo de sitios web y aplicaciones web</li>
                                <li>Diseño de interfaces de usuario (UI/UX)</li>
                                <li>Desarrollo de aplicaciones móviles</li>
                                <li>Consultoría técnica</li>
                                <li>Mantenimiento y soporte técnico</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Proceso de contratación</h2>
                            <div className="space-y-4">
                                <h3 className="text-lg font-medium text-gray-900">3.1 Presupuesto</h3>
                                <p className="text-gray-700">
                                    Todo proyecto comenzará con un presupuesto detallado que incluirá alcance,
                                    tiempos de entrega y costos. El presupuesto tendrá validez por 30 días.
                                </p>

                                <h3 className="text-lg font-medium text-gray-900">3.2 Contrato</h3>
                                <p className="text-gray-700">
                                    Una vez aceptado el presupuesto, se firmará un contrato específico donde se
                                    detallarán las condiciones particulares del proyecto.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Pagos y facturación</h2>
                            <div className="space-y-4">
                                <h3 className="text-lg font-medium text-gray-900">4.1 Condiciones de pago</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    <li>Seña del 50% al firmar el contrato</li>
                                    <li>Saldo restante al finalizar el proyecto</li>
                                    <li>Pagos por transferencia bancaria o métodos acordados</li>
                                </ul>

                                <h3 className="text-lg font-medium text-gray-900">4.2 Facturación</h3>
                                <p className="text-gray-700">
                                    Todos los pagos se facturarán según la normativa argentina vigente.
                                    Los precios incluyen IVA cuando corresponda.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Propiedad intelectual</h2>
                            <div className="space-y-4">
                                <h3 className="text-lg font-medium text-gray-900">5.1 Derechos del cliente</h3>
                                <p className="text-gray-700">
                                    Una vez completado el pago total, el cliente obtendrá todos los derechos
                                    sobre el código desarrollado específicamente para su proyecto.
                                </p>

                                <h3 className="text-lg font-medium text-gray-900">5.2 Derechos de Yelloom Studio</h3>
                                <p className="text-gray-700">
                                    Nos reservamos el derecho de utilizar el proyecto en nuestro portafolio
                                    y material promocional, salvo acuerdo contrario por escrito.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Garantías y soporte</h2>
                            <div className="space-y-4">
                                <h3 className="text-lg font-medium text-gray-900">6.1 Garantía</h3>
                                <p className="text-gray-700">
                                    Ofrecemos garantía de 30 días contra defectos de funcionamiento desde
                                    la entrega del proyecto.
                                </p>

                                <h3 className="text-lg font-medium text-gray-900">6.2 Soporte</h3>
                                <p className="text-gray-700">
                                    El soporte técnico post-entrega se facturará por separado según
                                    las tarifas vigentes.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitación de responsabilidad</h2>
                            <p className="text-gray-700">
                                Yelloom Studio no será responsable por daños indirectos, incidentales o
                                consecuentes que puedan surgir del uso de nuestros servicios, más allá
                                del monto total pagado por el cliente.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Rescisión</h2>
                            <p className="text-gray-700">
                                Cualquier parte puede rescindir el contrato con 15 días de aviso por escrito.
                                En caso de rescisión, se facturará el trabajo realizado hasta la fecha
                                según el porcentaje de avance del proyecto.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Ley aplicable</h2>
                            <p className="text-gray-700">
                                Estos términos se rigen por las leyes de la República Argentina.
                                Cualquier disputa será resuelta en los tribunales competentes de
                                Buenos Aires, Argentina.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contacto</h2>
                            <p className="text-gray-700">
                                Para consultas sobre estos Términos y Condiciones, podés contactarnos en:
                            </p>
                            <div className="bg-gray-50 p-4 rounded-lg mt-4">
                                <p className="text-gray-700"><strong>Email:</strong> contacto@yelloomstudio.com</p>
                                <p className="text-gray-700"><strong>Ubicación:</strong> Buenos Aires, Argentina</p>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
} 