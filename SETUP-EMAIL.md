# Configuración del Sistema de Emails

## Variables de Entorno Requeridas

Crear un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```bash
# Gmail Configuration para envío de emails
GMAIL_USER=tu-email@gmail.com
GMAIL_APP_PASSWORD=tu-app-password-de-16-caracteres

# Email donde recibir los mensajes del formulario
CONTACT_EMAIL=contacto@yelloomstudio.com
```

## Configuración de Gmail

### 1. Activar autenticación de 2 factores

- Ve a tu cuenta de Google
- Activa la verificación en 2 pasos

### 2. Generar App Password

1. Ve a [myaccount.google.com](https://myaccount.google.com)
2. Seguridad → Verificación en 2 pasos
3. Contraseñas de aplicaciones
4. Selecciona "Otra (nombre personalizado)"
5. Escribe "Yelloom Studio Contact Form"
6. Copia la contraseña de 16 caracteres generada

### 3. Configurar variables

- `GMAIL_USER`: Tu email de Gmail
- `GMAIL_APP_PASSWORD`: La contraseña de 16 caracteres
- `CONTACT_EMAIL`: Email donde querés recibir los mensajes

## Ejemplo de .env.local

```bash
GMAIL_USER=miestudio@gmail.com
GMAIL_APP_PASSWORD=abcd efgh ijkl mnop
CONTACT_EMAIL=contacto@yelloomstudio.com
```

**⚠️ IMPORTANTE:** Nunca commitees el archivo `.env.local` al repositorio.
