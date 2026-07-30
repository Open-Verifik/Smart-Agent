# Nota técnica — Satrack / DIAN contribuyente (nombres cruzados)

**Para:** Manuel / Satrack  
**Asunto:** Corrección en campos de nombre estructurados de `GET /v2/co/company/dian`

---

Verifik identificó que los campos estructurados de nombre (`firstName`, `lastName`, `fullName`, `person`) se estaban llenando desde una fuente secundaria HTML de publicaciones DIAN (Muisca), que bajo carga concurrente puede devolver datos de identidad que no corresponden al NIT consultado. Mientras tanto, `nombreRazon` y `nit` provenientes de la API oficial de contribuyente DIAN se mantuvieron correctos.

Como medida correctiva, eliminamos esa fuente secundaria del armado de la respuesta y ahora derivamos los nombres estructurados únicamente a partir del `nombreRazon` oficial (orden apellido-primero de DIAN → nombre/apellido legibles en la respuesta).

**Recomendación:** reconsultar los NITs afectados después del despliegue, antes de la próxima transmisión masiva a DIAN. Los campos oficiales `nombreRazon` / `nit` / `estado` no requieren corrección por este incidente.

**Nota sobre NIT 80808991:** si el `nombreRazon` oficial de DIAN no coincide con el titular esperado por Satrack, eso corresponde a un tema de registro/titularidad en DIAN, no al cruce de nombres de la fuente secundaria.
