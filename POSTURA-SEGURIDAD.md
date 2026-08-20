# Postura de seguridad - Boveda

Documento entregable de la Practica 3, y el mismo que pide el Proyecto Final.

No es un resumen de lo que hice: es la declaracion de que controlo cada riesgo o de que lo acepte a sabiendas.

---

## 1. Cobertura de controles

| # | Control | Donde vive (archivo) | Como se verifica (comando) | Estado |
|---|---|---|---|---|
| 1 | Sesion validada en servidor por render | `src/app/**/page.tsx` | `npm run build` | Cubierto |
| 2 | Ninguna ruta autenticada estatica | `src/app/**/page.tsx` | `npm run build` | Cubierto |
| 3 | Acceso a datos solo tras el repositorio | `src/lib/repository.ts` y rutas/Server Actions que acceden a datos | `npm run test:p3` | Cubierto |
| 4 | `ResultadoAccion` uniforme, sin filtrar detalle | Server Actions de `src/app/` y tipos de acciones | `npm run test:p3` | Cubierto |
| 5 | `error.tsx` no renderiza `error.message` | `src/app/**/error.tsx` | `npm run test:p3` | Cubierto |
| 6 | Allowlist anti-SSRF en fetch de servidor | `src/lib/outbound.ts` | `npx vitest run tests/unit/practica-3/extra/outbound.test.ts` | Cubierto |
| 7 | Autorizacion pegada al dato (sin IDOR) | `src/lib/authz.ts` y acceso a solicitudes | `npx playwright test tests/e2e/idor.spec.ts` | Cubierto |
| 8 | Doble control (el creador no aprueba) | `src/lib/authz.ts` y flujo de aprobacion | `npm run test:authz` | Cubierto |
| 9 | Cookie de sesion endurecida | `src/lib/sesion.ts` | `npx playwright test tests/e2e/auth.spec.ts` | Cubierto |
| 10 | Middleware como capa, no como borde | `src/proxy.ts` / middleware de proteccion | `npm run build` y `npx playwright test tests/e2e/auth.spec.ts` | Cubierto |

### Evidencia de rutas

El build produjo:

    Route (app)
    ┌ ƒ /
    ├ ○ /_not-found
    ├ ƒ /auditoria
    ├ ○ /login
    ├ ○ /no-autorizado
    ├ ƒ /solicitudes
    └ ƒ /solicitudes/[id]

    ƒ Proxy (Middleware)

Las rutas que dependen de la sesion aparecen como dinamicas:

- `/`
- `/auditoria`
- `/solicitudes`
- `/solicitudes/[id]`

Las rutas publicas aparecen como estaticas:

- `/_not-found`
- `/login`
- `/no-autorizado`

La ruta `/` es dinamica porque lee la sesion en servidor para decidir el destino del usuario, aunque no renderiza datos privados directamente.

---

## 2. Riesgos aceptados

| Riesgo | Por que se acepta | Que lo compensa | Cuando se revisa |
|---|---|---|---|
| DNS rebinding en el fetch saliente | La allowlist valida el hostname, pero no garantiza que una resolucion DNS posterior no termine apuntando a una direccion interna. Cerrar completamente este riesgo requiere controlar la resolucion DNS o validar la IP efectiva antes de realizar la conexion. | Allowlist estricta de hosts, bloqueo de destinos internos mediante `esHostInterno()` y bloqueo de redirects mediante `redirect: 'error'`. | Antes de pasar a produccion o al incorporar destinos controlados por DNS externo. |
| Dependencia de la configuracion de red para controlar resoluciones DNS | La aplicacion no controla por completo la resolucion DNS del sistema operativo/red. | Validacion de hostname y bloqueo de rangos privados, loopback y link-local antes del `fetch`. | Al definir la infraestructura de produccion. |
| Los mensajes internos de `validarDestino` distinguen entre protocolo, host interno y host fuera de allowlist | Los mensajes ayudan a depurar el sistema, aunque exponen algo mas de informacion que un mensaje completamente uniforme. El error no se entrega directamente al usuario final como detalle de negocio. | `fetchSeguro()` centraliza el rechazo y las Server Actions utilizan respuestas uniformes hacia el cliente. | Si el endpoint comienza a exponer directamente estos errores a usuarios externos. |

### Riesgo principal: DNS rebinding

La validacion actual protege contra destinos internos conocidos y contra URLs que intenten usar directamente direcciones privadas, loopback o link-local.

Sin embargo, una entrada como:

    https://api.banco.cr

puede pasar la allowlist aunque un atacante consiga controlar temporalmente la resolucion DNS del dominio para que resuelva hacia una direccion interna.

Por eso se acepta el riesgo de DNS rebinding de forma consciente.

La mitigacion actual es:

1. Allowlist exacta de nombres permitidos.
2. Solo se permite `https`.
3. Se bloquean hosts internos mediante `esHostInterno()`.
4. Se bloquean redirects automáticos mediante `redirect: 'error'`.

El cierre completo del riesgo requeriria una politica adicional de resolucion/conexion que valide tambien la direccion IP efectiva antes de realizar la peticion.

---

## 3. Evidencia

### Pruebas unitarias de la Practica 3 y regresion

Comando:

    npm run test:p3

Resultado:

    Test Files  7 passed (7)
    Tests       58 passed (58)

Los 58 tests incluyen:

- Practica 1
- Practica 2
- Practica 3
- Validacion anti-SSRF
- Autorizacion
- Esquemas
- Tokens
- Refresh
- SSR y costura

Resultado: **58/58 pruebas verdes.**

---

### Prueba especifica anti-SSRF

Comando:

    npx vitest run tests/unit/practica-3/extra/outbound.test.ts

Resultado:

    ✓ allowlist anti-SSRF (6)
      ✓ permite un host de la allowlist por https
      ✓ bloquea http (no https)
      ✓ bloquea el endpoint de metadata de la nube
      ✓ bloquea localhost y rangos privados
      ✓ bloquea un host que no está en la allowlist
      ✓ rechaza una URL inválida

    Test Files  1 passed (1)
    Tests       6 passed (6)

Resultado: **6/6 pruebas anti-SSRF verdes.**

---

### Pruebas E2E

Comando:

    npx playwright test tests/e2e

Las pruebas ejecutadas previamente dieron:

    ✓ las cookies de sesión tienen los flags correctos
    ✓ credenciales inválidas muestran mensaje uniforme y no autentican
    ✓ cerrar sesión invalida el acceso a rutas protegidas
    ✓ una ruta protegida sin sesión redirige a login
    ✓ el auditor puede ver la bitácora; el analista no
    ✓ un analista que fuerza /auditoria es redirigido a no-autorizado
    ✓ analista de sucursal A no puede abrir una solicitud de sucursal B (IDOR)
    ✓ analista no ve el botón de aprobar
    ✓ el listado de un analista no incluye solicitudes de otra sucursal

Resultado observado: **9/9 pruebas E2E verdes.**

---

### Pruebas de autorizacion

Comando:

    npm run test:authz

Resultado observado:

    ✓ tests/unit/practica-2/extra/authz-efecto.test.ts (5 tests)
    ✓ tests/unit/practica-2/base/authz.test.ts (13 tests)

    Test Files  2 passed (2)
    Tests       18 passed (18)

Resultado: **18/18 pruebas de autorizacion verdes.**

---

### Build

Comando:

    npm run build

Resultado relevante:

    Route (app)
    ┌ ƒ /
    ├ ○ /_not-found
    ├ ƒ /auditoria
    ├ ○ /login
    ├ ○ /no-autorizado
    ├ ƒ /solicitudes
    └ ƒ /solicitudes/[id]

    ƒ Proxy (Middleware)

Las rutas que utilizan sesion y datos privados aparecen como dinamicas (`ƒ`), evitando que el contenido autenticado quede prerenderizado como contenido estatico.

---

## 4. Hallazgo de la Practica 4

Durante la practica se identifico que una allowlist puede ser modificada incorrectamente.

Si se agregan:

    '10.0.1.50'
    'metrics.interno'

a `HOSTS_PERMITIDOS`, ambos destinos pueden quedar permitidos si la unica defensa es la allowlist.

El problema no esta solamente en la funcion de validacion. El problema es que la allowlist es un dato editable y una modificacion aparentemente inocente puede ampliar el alcance de red disponible para una URL controlada por un usuario.

Por eso `esHostInterno()` debe ejecutarse antes de consultar la allowlist.

---

## 5. Defensa contra redirects

`fetchSeguro()` utiliza:

    redirect: 'error'

Esto evita que una URL inicialmente permitida redirija automaticamente hacia otro destino que no haya pasado la validacion.

La responsabilidad se mantiene separada:

- `validarDestino()` decide si el destino inicial es permitido.
- `fetchSeguro()` controla el comportamiento del `fetch`, incluyendo los redirects.

El control de redirects no debe colocarse dentro de `validarDestino()` porque un redirect ocurre despues de que la URL inicial ya fue validada y es un comportamiento propio de la solicitud HTTP.

---
