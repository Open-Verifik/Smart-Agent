### Encabezados

| Nombre        | Valor              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer <token>`   |

### Parámetros

| Nombre           | Tipo   | Requerido | Descripción                                  |
| ---------------- | ------ | --------- | -------------------------------------------- |
| `documentType`   | string | Sí        | Uno de `CC`, `PPT`.                          |
| `documentNumber` | string | Sí        | Número de documento (sin espacios o puntos). |

### Notas

- Usa `documentType=CC` para cédula; `PPT` para Permiso por Protección Temporal.

---

### Verificación de Identidad en Colombia

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos colombianos utilizando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conoce a tu Cliente), prevenir fraudes y asegurar el cumplimiento de todos los requisitos regulatorios sin esfuerzo.

Construimos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la identidad real de usuarios, empleados o clientes.

### ¿Qué valida esta API?

Nuestra API se conecta directamente con registros oficiales para validar:

- **Nombre Completo y Número de ID**: Soporta _Cédula de Ciudadanía_ y _Cédula de Extranjería_.
- **Estado del Documento**: Verifica el estado actual en la base de datos de la _Registraduría Nacional del Estado Civil_.
- **Emisión y Validez**: Verifica la fecha de emisión y si el documento es actualmente válido.
- **Coincidencia de Identidad**: Confirma que el nombre proporcionado coincide con el número de identificación.

Al verificar estos detalles, puedes estar seguro de que la persona con la que tratas es real y posee un documento válido, reduciendo significativamente el riesgo de suplantación y fraude.

### Casos de Uso Comunes

- **Fintech y Banca**: Verifica identidades al instante durante la apertura de cuentas o solicitudes de préstamos.
- **Comercio Electrónico y Entregas**: Autentica usuarios y mensajeros antes de que se activen en tu plataforma.
- **RRHH y Reclutamiento**: Valida documentos de candidatos como parte de tu flujo de contratación.
- **Seguros y Salud**: Confirma identidades antes de emitir pólizas o proporcionar beneficios médicos.

### Fuentes Oficiales y Confiabilidad

Nos conectamos directamente con la _Registraduría Nacional del Estado Civil_ de Colombia para asegurar que recibas información verificada y actualizada al minuto.
Cada consulta se maneja con estricto apego a los estándares de seguridad y regulatorios, incluyendo:

- **Ley 1581 de 2012** (Protección de Datos Personales)
- **Circulares KYC/AML** de la UIAF y la Superintendencia Financiera de Colombia

### Beneficios Clave

- **Cumplimiento Automatizado**: Agiliza tus chequeos KYC para prevenir fraudes sin añadir fricción para tus usuarios.
- **Resultados Instantáneos**: Procesa verificaciones en segundos, perfecto para onboarding digital en tiempo real.
- **Datos Confiables**: Confía en datos obtenidos directamente del gobierno colombiano.
- **Fácil Integración**: Conecta fácilmente a través de nuestra API REST o usa nuestros SDKs compatibles.
