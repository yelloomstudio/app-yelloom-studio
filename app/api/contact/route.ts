import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    console.log('🔍 Iniciando proceso de contacto...');

    const { name, email, phone, message } = await request.json();
    console.log('📝 Datos recibidos:', { name, email, phone: phone ? 'presente' : 'no', message: message ? 'presente' : 'no' });

    // Validación básica
    if (!name || !email || !message) {
      console.log('❌ Faltan campos requeridos');
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Validar variables de entorno
    console.log('🔑 Verificando variables de entorno...');
    console.log('RESEND_API_KEY presente:', !!process.env.RESEND_API_KEY);
    console.log('CONTACT_EMAIL presente:', !!process.env.CONTACT_EMAIL);
    console.log('CONTACT_EMAIL valor:', process.env.CONTACT_EMAIL);

    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
      console.error('❌ Variables de entorno faltantes');
      return NextResponse.json(
        { error: 'Error de configuración del servidor' },
        { status: 500 }
      );
    }

    // Inicializar Resend aquí para evitar problemas de build
    console.log('📧 Inicializando Resend...');
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Enviar email usando Resend
    console.log('🚀 Enviando email...');
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev', // Email por defecto de Resend
      to: process.env.CONTACT_EMAIL, // Email donde querés recibir los mensajes
      subject: `Nuevo mensaje de contacto - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #eab308; padding-bottom: 10px;">
            Nuevo mensaje desde Yelloom Studio
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Información del contacto:</h3>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ''}
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #eab308; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Mensaje:</h3>
            <p style="line-height: 1.6; color: #4b5563;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              Este mensaje fue enviado desde el formulario de contacto de 
              <strong>Yelloom Studio</strong>
            </p>
          </div>
        </div>
      `,
    });

    console.log('✅ Email enviado exitosamente:', result);

    return NextResponse.json(
      { message: 'Email enviado correctamente' },
      { status: 200 }
    );

  } catch (error) {
    console.error('💥 Error completo:', error);
    console.error('💥 Error mensaje:', error instanceof Error ? error.message : 'Error desconocido');
    console.error('💥 Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
} 