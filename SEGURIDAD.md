# Seguridad — Práctica 1

## 1. Objetivo

Esta práctica implementa el flujo de autenticación y el almacenamiento seguro de la sesión de la aplicación Bóveda, utilizando Next.js 16 y TypeScript.

El objetivo principal es evitar vulnerabilidades relacionadas con:

- Enumeración de usuarios.
- Robo de sesiones mediante JavaScript.
- Fijación de sesión.
- Uso de sesiones después de realizar logout.
- Sesiones que permanezcan activas indefinidamente.
- Uso de tokens con algoritmos no permitidos.
- Robo y reutilización de refresh tokens.

La autenticación utiliza tokens firmados y una sesión respaldada en base de datos, lo que permite revocar una sesión incluso cuando el token todavía no ha expirado.

## 2. ¿Qué se guarda y dónde?

### 2.1 Contraseña

La contraseña del usuario no se almacena directamente.

En la base de datos se almacena únicamente su hash (`hashContrasena`).

Cuando el usuario inicia sesión:

1. Se recibe la contraseña.
2. Se valida la entrada utilizando Zod.
3. Se busca el usuario.
4. Se compara la contraseña recibida contra el hash almacenado.
5. Solo si la comparación es correcta se crea una nueva sesión.

### 2.2 Sesión

La sesión se almacena en la base de datos y está asociada al usuario.

Esto permite comprobar que una sesión continúa vigente y revocarla desde el servidor.

Un token válido no es suficiente: también se comprueba que la sesión correspondiente siga activa en la base de datos.

### 2.3 Access Token

El access token se genera como un JWT firmado mediante HS256.

La verificación del JWT fija explícitamente el algoritmo permitido:

```ts
jwtVerify(token, clave, {
  algorithms: ['HS256'],
});
```

El access token tiene una duración máxima de 15 minutos.

El secreto utilizado para firmar y verificar los tokens debe tener al menos 16 caracteres.

### 2.4 Cookie de sesión

El access token se almacena en una cookie de sesión con las siguientes propiedades:

```ts
{
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax',
  path: '/',
  maxAge: 60 * 15
}
```

#### `httpOnly`

Impide que JavaScript pueda acceder directamente al contenido de la cookie, reduciendo el riesgo de robo mediante XSS.

#### `secure`

En producción, la cookie solamente debe enviarse mediante HTTPS.

#### `sameSite: 'lax'`

Reduce el envío de la cookie en solicitudes realizadas desde otros sitios y proporciona una protección adicional frente a CSRF.

#### `path: '/'`

Hace que la cookie esté disponible para las rutas correspondientes de la aplicación.

#### `maxAge`

La cookie tiene una duración de 15 minutos, coincidiendo con la duración del access token.

## 3. Protección contra enumeración de usuarios

El login utiliza un único mensaje de error para cualquier fallo de autenticación:

> Usuario o contraseña incorrectos

Esto significa que el sistema responde exactamente igual cuando:

- El usuario no existe.
- El usuario existe pero la contraseña es incorrecta.
- La entrada no cumple las validaciones necesarias.

Esto evita que un atacante pueda determinar qué nombres de usuario existen en el sistema.

## 4. Protección contra fijación de sesión

Cada vez que un usuario inicia sesión correctamente se crea una sesión nueva.

El flujo es:

```text
Credenciales
     ↓
Validación Zod
     ↓
Búsqueda del usuario
     ↓
Verificación de contraseña
     ↓
Creación de nueva sesión
     ↓
Creación de cookie
     ↓
Acceso a la aplicación
```

No se reutiliza una sesión anterior para autenticar al usuario. Esto protege contra la fijación de sesión.

## 5. Expiración de la sesión

La sesión tiene dos límites de duración.

### Expiración por inactividad

El access token tiene una duración de 15 minutos.

Esto limita el tiempo durante el cual un access token obtenido de manera ilegítima podría ser utilizado.

### Expiración absoluta

La duración máxima indicada para el refresh es de 8 horas.

Esto establece un límite absoluto para la sesión.

## 6. Revocación de sesiones

La sesión es revocable desde el servidor.

Durante la verificación de la sesión no solamente se valida el JWT. También se comprueba que la sesión asociada continúe activa en la base de datos.

Por lo tanto:

```text
JWT válido
   +
Sesión activa en BD
   =
Sesión válida
```

Si la sesión fue revocada:

```text
JWT válido
   +
Sesión revocada
   =
Sesión inválida
```

Esto permite invalidar un token antes de su expiración natural.

## 7. Logout seguro

Cerrar sesión no consiste únicamente en eliminar la cookie del navegador.

El logout realiza dos acciones:

1. Revoca la sesión en la base de datos.
2. Elimina la cookie del navegador.

El flujo es:

```text
Logout
  ↓
Verificar sesión actual
  ↓
Revocar sesión en BD
  ↓
Eliminar cookie
  ↓
Redirigir a /login
```

La revocación en la base de datos es importante porque un atacante podría haber copiado previamente el valor de la cookie. Con la revocación en servidor, ese token deja de ser válido para acceder a la aplicación.

## 8. ¿Qué pasa si se filtra un refresh token sin rotación?

Si un atacante obtiene un refresh token y el sistema no utiliza rotación, el atacante puede intentar utilizar ese mismo token mientras continúe siendo válido.

El servidor no tendría una forma efectiva de diferenciar entre el usuario legítimo y un atacante que posee una copia del mismo refresh token.

El atacante podría utilizar el refresh token para obtener nuevos access tokens mientras el refresh continúe siendo válido.

En esta práctica:

- Access token: 15 minutos.
- Refresh: hasta 8 horas.

Sin rotación:

```text
Refresh robado
      ↓
Atacante lo reutiliza
      ↓
Obtiene nuevos access tokens
      ↓
Puede mantener el acceso mientras el refresh sea válido
```

## 9. ¿Qué pasa si se filtra un refresh token con rotación?

Con rotación, cada vez que se utiliza un refresh token se genera uno nuevo y el anterior deja de ser válido.

El flujo esperado es:

```text
Refresh A
   ↓
Se utiliza
   ↓
Se genera Refresh B
   ↓
Refresh A queda inválido
```

Si un atacante intenta utilizar posteriormente el Refresh A que había robado, el sistema detecta que se trata de un refresh token reutilizado.

La reutilización de un refresh token previamente rotado se considera una señal de posible robo.

En ese caso se debe:

1. Detectar el reuso.
2. Revocar la sesión completa.
3. Registrar el evento en la bitácora.

```text
Refresh A
   ↓
Rotación
   ↓
Refresh B válido
Refresh A inválido
   ↓
Atacante intenta usar Refresh A
   ↓
Detección de reuso
   ↓
Revocación de la sesión completa
   ↓
Registro en bitácora
```

La rotación reduce la ventana de reutilización de un refresh token robado y permite detectar el intento de reutilización.

## 10. Comparación

| Característica | Sin rotación | Con rotación |
|---|---|---|
| Refresh token reutilizable | Sí, mientras sea válido | No |
| Detecta reutilización | No | Sí |
| Detecta posible robo | Limitado | Sí |
| Revocación ante reuso | No | Sí |
| Riesgo ante filtración | Mayor | Menor |
| Registro del incidente | No necesariamente | Sí |

## 11. Secretos

Los secretos de la aplicación no deben exponerse mediante variables de entorno públicas.

No se deben utilizar variables `NEXT_PUBLIC_` para almacenar:

- `SESSION_SECRET`.
- Claves criptográficas.
- Tokens privados.
- Credenciales.
- Cualquier otro secreto utilizado por el servidor.

El `SESSION_SECRET` debe permanecer únicamente del lado del servidor.

Además, el token de sesión no debe viajar dentro del payload de RSC.

## 12. Controles de seguridad implementados

- Validación de login mediante Zod.
- Mensaje de error uniforme.
- Protección contra enumeración de usuarios.
- JWT firmado mediante HS256.
- Validación explícita del algoritmo.
- Access token con duración de 15 minutos.
- Refresh con duración de hasta 8 horas.
- Cookie `httpOnly`.
- Cookie `Secure` en producción.
- Cookie `SameSite=Lax`.
- Sesiones almacenadas y verificadas en base de datos.
- Sesiones revocables.
- Creación de una nueva sesión después de un login exitoso.
- Logout con revocación en servidor.
- Eliminación de la cookie durante logout.
- No exposición de secretos mediante `NEXT_PUBLIC_`.
- Rotación de refresh tokens como mecanismo adicional de seguridad.
- Detección de reutilización de refresh tokens.
- Revocación completa de la sesión ante detección de reuso.

## 13. Ataques considerados

### Credenciales inválidas

**Resultado esperado:** mensaje uniforme y ausencia de una cookie de sesión válida.

### Enumeración de usuarios

**Resultado esperado:** un usuario inexistente y una contraseña incorrecta producen exactamente el mismo mensaje.

### Reutilización de cookie después del logout

**Resultado esperado:** el token copiado deja de funcionar porque la sesión fue revocada en el servidor.

### Inspección de la cookie

**Resultado esperado:** la cookie tiene `HttpOnly` y JavaScript no puede acceder a ella mediante `document.cookie`.

## 14. Conclusión

La seguridad de la autenticación no depende únicamente de firmar correctamente un JWT. La aplicación combina varias capas de protección.

El token tiene una duración limitada, se almacena en una cookie protegida y la sesión se respalda en la base de datos para permitir su revocación.

Además, el login evita la enumeración de usuarios utilizando un mensaje uniforme y crea una sesión nueva después de una autenticación exitosa, evitando la fijación de sesión.

Finalmente, la rotación del refresh token agrega una capa adicional de seguridad: si un refresh token previamente utilizado vuelve a presentarse, el sistema puede detectar el posible robo y revocar la sesión completa.

De esta forma, la seguridad se basa en la combinación de tokens de corta duración, cookies seguras, sesiones revocables, validación estricta y rotación de refresh tokens.
