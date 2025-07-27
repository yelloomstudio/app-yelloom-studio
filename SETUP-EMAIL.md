# Configuración del Sistema de Emails

## Variables de Entorno Requeridas

Crear un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```bash
# Resend Configuration (reemplaza Gmail para evitar bloqueos SMTP)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Email donde recibir los mensajes del formulario
CONTACT_EMAIL=contacto@yelloomstudio.com
```

## Configuración de Resend (Recomendado)

**✅ Ventajas de Resend:**

- No usa SMTP (usa HTTP API) - No puede ser bloqueado por DigitalOcean
- 3,000 emails gratis por mes permanentemente
- Excelente deliverability
- Fácil de configurar

### 1. Crear cuenta en Resend

1. Ve a [resend.com](https://resend.com)
2. Crea una cuenta gratuita
3. Verifica tu email

### 2. Obtener API Key

1. Ve al dashboard de Resend
2. Click en "API Keys" en el menú lateral
3. Click en "Create API Key"
4. Dale un nombre como "Yelloom Studio"
5. Copia la API key que empieza con `re_`

### 3. Configurar variables

- `RESEND_API_KEY`: Tu API key de Resend
- `CONTACT_EMAIL`: Email donde querés recibir los mensajes

## Ejemplo de .env.local

```bash
RESEND_API_KEY=re_123456789abcdefghijklmnopqrstuvwxyz
CONTACT_EMAIL=contacto@yelloomstudio.com
```

## ⚠️ Nota sobre Gmail/Outlook

Gmail y Outlook no funcionan en DigitalOcean porque bloquean los puertos SMTP (587/465) para prevenir spam. Por eso usamos Resend que utiliza HTTP API en lugar de SMTP.

**⚠️ IMPORTANTE:** Nunca commitees el archivo `.env.local` al repositorio.
