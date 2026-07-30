# Respuesta — Jeison Muñoz (feedback SMS OTP / plantillas WhatsApp)

Hola Jeison,

Gracias por el detalle y por las pruebas con el número `+573043293912`. Respondemos punto por punto.

---

## 1) SMS: `409 otp_not_sent` aunque el SMS llega / validar da `412` “expirado”

**No era un tema de créditos SMS faltantes en su cuenta.** Había un defecto en el backend al interpretar la confirmación del proveedor de SMS: el mensaje se aceptaba y llegaba al teléfono, pero el wrapper trataba el envío como error → guardábamos `status: failed`, respondíamos `409 otp_not_sent` y **no cobrábamos**. Al validar, ese `failed` se mapeaba de forma engañosa a `412 phoneValidation_has_expired`.

**Ya está corregido** (post-deploy):

- Envío SMS exitoso → HTTP **200**, `sent: true`, cobro normal.
- Un envío fallido real → `409 otp_not_sent` (sin cobro).
- Validar contra un registro que falló al enviar → `409 otp_send_failed` (ya no `412` de expiración).
- `412 phoneValidation_has_expired` solo cuando el OTP **sí** expiró por TTL.

Por favor reprobar SMS con el mismo flujo después del deploy.

---

## 2) Códigos `409` al enviar

| Código | Significado |
| --- | --- |
| `otp_recently_sent` | Ya hay un OTP **sent** para ese teléfono + `phoneGateway` en la ventana de ~**2 minutos**. No es un fallo del proveedor. |
| `otp_not_sent` | El proveedor **no** aceptó el mensaje. |

Son distintos a propósito: cooldown ≠ fallo de envío.

---

## 3) Plantillas de WhatsApp (elección explícita)

En `POST /v2/phone-validations/manual` con `phoneGateway: "whatsapp"` pueden elegir:

| `whatsappTemplate` | Plantilla Meta | Notas |
| --- | --- | --- |
| `authentication` (**por defecto**) | `authentication` | OTP en cuerpo + botón URL (estilo auth / default). |
| `flow2` | `flow2_es` / `flow2_en` | Con marca (`title` como sección) + código + acción; el idioma elige la variante. |

Ejemplo con `flow2`:

```json
{
  "phone": "3043293912",
  "countryCode": "+57",
  "phoneGateway": "whatsapp",
  "title": "SuEmpresa",
  "language": "es",
  "whatsappTemplate": "flow2"
}
```

Si omiten `whatsappTemplate`, se usa `authentication`. En SMS el campo se ignora. `title` (máx. 15) y `language` se mantienen igual.

---

## 4) Reenvío e intentos

**Reenviar antes de que expire el OTP**

- Por defecto, un segundo envío al mismo teléfono + gateway dentro de ~2 minutos responde `otp_recently_sent`.
- Para el botón “Reenviar”: envíen el mismo body con `"force": true`. Eso omite el cooldown y genera/envía un código nuevo (sujeto a créditos y al proveedor).

```json
{
  "phone": "3043293912",
  "countryCode": "+57",
  "phoneGateway": "sms",
  "force": true
}
```

**Intentos con OTP incorrecto**

- Hoy **no hay tope de intentos en el servidor**. Cada código incorrecto responde `403 otp_does_not_match` hasta que expire el registro o se envíe uno nuevo.
- Si necesitan limitar intentos o bloquear, háganlo en su cliente/backend. Podemos evaluar un contador/lockout en servidor en un ticket aparte si lo priorizan.

---

## Documentación

- EN: [Create a Manual Phone Validation](https://docs.verifik.co/resources/create-a-manual-phone-validation/)
- ES: [Crear una Validación de Teléfono manual](https://docs.verifik.co/verifik-es/resources/crear-una-validacion-telefono-manual/)
- Validar: [Validar una Validación de Teléfono](https://docs.verifik.co/verifik-es/resources/validar-una-validacion-telefono/)

Quedamos atentos a su retest de SMS post-deploy y a cualquier duda con las dos plantillas de WhatsApp.

Saludos,  
Equipo Verifik
