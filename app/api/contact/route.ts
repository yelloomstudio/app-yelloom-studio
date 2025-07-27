import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const { name, email, phone, message } = await request.json();

        // Validación básica
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Faltan campos requeridos' },
                { status: 400 }
            );
        }

        // Configurar transporter de nodemailer con Gmail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        // Configurar el email
        const mailOptions = {
            from: process.env.GMAIL_USER,
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
        };

        // Enviar el email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Email enviado correctamente' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error al enviar email:', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
} 