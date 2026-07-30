# Respuesta — Jeison Muñoz (OTP por API / communication 404)

Hola Jeison,

Gracias por el análisis tan completo. Coincidimos con lo que diagnosticaron: el 404 **no** es un problema de autenticación, ni del JWT, ni del body. La ruta simplemente **no existe** como endpoint HTTP público.

---

## Su caso de uso

Entendemos que están migrando el KYC a integración por API y necesitan:

- enviar un OTP al teléfono del cliente,
- verificar ese OTP,
- desde **su propio backend**,
- **sin** SmartEnroll / UI hosted de Verifik.

Eso **sí** lo soportamos. El camino correcto no es `/v2/communication/*`, sino **Phone Validations (manual)**.

---

## Por qué `/v2/communication/whatsapp` y `/v2/communication/sms` dan 404

Esos paths aparecen en el dashboard (listados y cotizados) como **productos / códigos de facturación** (créditos SMS y WhatsApp), **no** como rutas REST montadas en `api.verifik.co`.

Por eso ven exactamente el mismo comportamiento que una ruta inventada:

- sin `Authorization` → `401` (la auth se evalúa antes),
- con token válido → `404` con cuerpo `"Not Found"`,
- otros endpoints con el mismo token (`/v2/co/cedula`, `/v2/projects`, `/v2/project-flows`) funcionan bien.

**No es que falte habilitarlos en su cuenta.** Esas URLs de “communication” **no están expuestas** como API de envío. El API Explorer también falla por la misma razón.

> Nota: el body `{ countryCode, phone, message }` que ven asociado a esos productos **no** es el contrato del API de OTP. El flujo de OTP usa plantillas de verificación (no un mensaje libre arbitrario).

---

## Respuesta a su pregunta

**1. ¿Están disponibles esos endpoints para su cuenta? ¿Requieren habilitación?**

- Como `GET/POST https://api.verifik.co/v2/communication/whatsapp` o `.../sms`: **no son endpoints disponibles** (de ahí el 404). No hay nada que “habilitar” sobre esas rutas.
- Para enviar y verificar OTP por API **sin SmartEnroll**: **sí está disponible** con los endpoints de abajo. Usan la misma lógica de créditos de mensajería SMS/WhatsApp que ven cotizada en el dashboard.

---

## Endpoints correctos (API, sin UI hosted)

### 1) Enviar OTP

```http
POST https://api.verifik.co/v2/phone-validations/manual
Authorization: Bearer YOUR_ACCESS_TOKEN
Content-Type: application/json
```

```json
{
  "phone": "3001234567",
  "countryCode": "+57",
  "phoneGateway": "whatsapp",
  "title": "SuEmpresa",
  "language": "es"
}
```

| Campo | Requerido | Descripción |
| --- | --- | --- |
| `phone` | Sí | Número nacional (solo dígitos) |
| `countryCode` | Sí | Código con `+` (ej. `+57`) |
| `phoneGateway` | Sí | `"whatsapp"` o `"sms"` |
| `title` | No | Nombre que aparece en el mensaje (máx. 15 caracteres) |
| `language` | No | Idioma de la plantilla (`es`, `en`, etc.) |

- **No** requiere `project` ni `projectFlow`.
- Traten como éxito solo si HTTP **200** y `data.sent === true`.
- Los créditos se validan antes del envío y se cobran cuando el mensaje se entrega.

Ejemplo cURL:

```bash
curl -X POST "https://api.verifik.co/v2/phone-validations/manual" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "phone": "3001234567",
    "countryCode": "+57",
    "phoneGateway": "whatsapp",
    "title": "SuEmpresa",
    "language": "es"
  }'
```

### 2) Verificar OTP

```http
PUT https://api.verifik.co/v2/phone-validations
Authorization: Bearer YOUR_ACCESS_TOKEN
Content-Type: application/json
```

```json
{
  "phone": "3001234567",
  "countryCode": "+57",
  "otp": 123456,
  "phoneGateway": "whatsapp"
}
```

- Éxito cuando HTTP **200** y `data.status === "validated"`.
- Errores frecuentes: `otp_does_not_match`, `phoneValidation_has_expired`, `phone_validation_not_found`.

Ejemplo cURL:

```bash
curl -X PUT "https://api.verifik.co/v2/phone-validations" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "phone": "3001234567",
    "countryCode": "+57",
    "otp": 123456,
    "phoneGateway": "whatsapp"
  }'
```

---

## Documentación

- Overview: [Validaciones de Teléfono](https://docs.verifik.co/verifik-es/resources/validaciones-telefono/)
- Enviar OTP: [Crear una Validación de Teléfono manual](https://docs.verifik.co/verifik-es/resources/crear-una-validacion-telefono-manual/)
- Verificar OTP: [Validar una Validación de Teléfono](https://docs.verifik.co/verifik-es/resources/validar-una-validacion-telefono/)

También pueden probar el mismo flujo en el panel: **Smart Tools → Mensajes de WhatsApp / SMS** (usa exactamente estos endpoints).

---

## Resumen

| Lo que probaron | Resultado | Motivo |
| --- | --- | --- |
| `/v2/communication/whatsapp` | 404 | No es una ruta HTTP de envío |
| `/v2/communication/sms` | 404 | No es una ruta HTTP de envío |
| `POST /v2/phone-validations/manual` | Endpoint correcto | Enviar OTP sin SmartEnroll |
| `PUT /v2/phone-validations` | Endpoint correcto | Verificar OTP |

Si al llamar `POST /v2/phone-validations/manual` reciben un error distinto al 404 (por ejemplo créditos insuficientes, cooldown, etc.), envíennos el `status`, el body completo de la respuesta y el `clientId`, y lo revisamos de inmediato.

Quedamos atentos para acompañarlos en la migración.

Saludos,  
Equipo Verifik
