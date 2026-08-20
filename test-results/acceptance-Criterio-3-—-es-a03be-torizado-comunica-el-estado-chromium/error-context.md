# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: acceptance.spec.ts >> Criterio 3 — estados y retroalimentación >> [c3] la página de no autorizado comunica el estado
- Location: grading/acceptance.spec.ts:89:3

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/login
Call log:
  - navigating to "http://localhost:3000/login", waiting until "load"

```

# Test source

```ts
  1   | // Suite de aceptación para calificación. Prueba comportamiento observable en la UI real,
  2   | // así funciona contra cualquier entrega que respete el contrato (grading/contract.md).
  3   | // Cada test lleva su criterio oficial en el título: [c1]..[c5].
  4   | import { test, expect, type Page } from '@playwright/test';
  5   | import { USUARIOS, SOLICITUD_A, SOLICITUD_B } from './config.mjs';
  6   | 
  7   | async function login(page: Page, u: { usuario: string; contrasena: string }) {
> 8   |   await page.goto('/login');
      |              ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/login
  9   |   await page.getByLabel(/usuario/i).fill(u.usuario);
  10  |   await page.getByLabel(/contraseña/i).fill(u.contrasena);
  11  |   await page.getByRole('button', { name: /ingresar/i }).click();
  12  |   await expect(page).toHaveURL(/\/solicitudes/);
  13  | }
  14  | 
  15  | test.describe('Criterio 1 — flujo de autenticación', () => {
  16  |   test('[c1] login válido crea sesión con cookie httpOnly', async ({ page, context }) => {
  17  |     await login(page, USUARIOS.analistaA);
  18  |     const cookies = await context.cookies();
  19  |     const sesion = cookies.find((c) => /access|sesion/i.test(c.name));
  20  |     expect(sesion, 'debe existir cookie de sesión').toBeTruthy();
  21  |     expect(sesion!.httpOnly, 'la cookie debe ser httpOnly').toBe(true);
  22  |   });
  23  | 
  24  |   test('[c1] credenciales inválidas no autentican y dan mensaje uniforme', async ({ page }) => {
  25  |     await page.goto('/login');
  26  |     await page.getByLabel(/usuario/i).fill(USUARIOS.analistaA.usuario);
  27  |     await page.getByLabel(/contraseña/i).fill('incorrecta-xyz');
  28  |     await page.getByRole('button', { name: /ingresar/i }).click();
  29  |     await expect(page.getByRole('alert')).toBeVisible();
  30  |     await expect(page).toHaveURL(/\/login/);
  31  |   });
  32  | 
  33  |   test('[c1] logout invalida la sesión', async ({ page }) => {
  34  |     await login(page, USUARIOS.analistaA);
  35  |     await page.getByRole('button', { name: /cerrar sesión/i }).click();
  36  |     await expect(page).toHaveURL(/\/login/);
  37  |     await page.goto('/solicitudes');
  38  |     await expect(page).toHaveURL(/\/login/);
  39  |   });
  40  | });
  41  | 
  42  | test.describe('Criterio 2 — rutas privadas y validación por rol', () => {
  43  |   test('[c2] ruta protegida sin sesión redirige a login', async ({ page }) => {
  44  |     await page.goto('/solicitudes');
  45  |     await expect(page).toHaveURL(/\/login/);
  46  |   });
  47  | 
  48  |   test('[c2] el auditor accede a la bitácora', async ({ page }) => {
  49  |     await login(page, USUARIOS.auditor);
  50  |     await page.goto('/auditoria');
  51  |     await expect(page.getByRole('heading', { name: /bitácora/i })).toBeVisible();
  52  |   });
  53  | 
  54  |   test('[c2] un analista NO accede a la bitácora', async ({ page }) => {
  55  |     await login(page, USUARIOS.analistaA);
  56  |     await page.goto('/auditoria');
  57  |     await expect(page).toHaveURL(/\/no-autorizado|\/login/);
  58  |   });
  59  | 
  60  |   test('[c2] el analista no ve el botón de aprobar', async ({ page }) => {
  61  |     await login(page, USUARIOS.analistaA);
  62  |     await page.goto(`/solicitudes/${SOLICITUD_A}`);
  63  |     await expect(page.getByRole('button', { name: /^aprobar$/i })).toHaveCount(0);
  64  |   });
  65  | });
  66  | 
  67  | test.describe('Criterio 4 — buenas prácticas de seguridad', () => {
  68  |   test('[c4] IDOR: analista de A no abre solicitud de B (se comporta como inexistente)', async ({ page }) => {
  69  |     await login(page, USUARIOS.analistaA);
  70  |     await page.goto(`/solicitudes/${SOLICITUD_B}`);
  71  |     await expect(page.getByRole('heading', { name: /no encontrado/i })).toBeVisible();
  72  |   });
  73  | 
  74  |   test('[c4] el listado de un analista no incluye datos de otra sucursal', async ({ page }) => {
  75  |     await login(page, USUARIOS.analistaA);
  76  |     // la solicitud de B no debe aparecer en el listado de A
  77  |     await expect(page.locator(`a[href*="${SOLICITUD_B}"]`)).toHaveCount(0);
  78  |   });
  79  | 
  80  |   test('[c4] doble control: el aprobador no aprueba su propia solicitud', async ({ page }) => {
  81  |     // beto crea una solicitud (si el formulario está disponible para su rol se omite);
  82  |     // aquí verificamos vía UI que la acción de aprobar sobre una propia no cambia el estado.
  83  |     // Requiere una solicitud creada por beto; si no existe en el seed, este test se marca skip.
  84  |     test.skip(true, 'Requiere solicitud creada por el propio aprobador en el seed extendido.');
  85  |   });
  86  | });
  87  | 
  88  | test.describe('Criterio 3 — estados y retroalimentación', () => {
  89  |   test('[c3] la página de no autorizado comunica el estado', async ({ page }) => {
  90  |     await login(page, USUARIOS.analistaA);
  91  |     await page.goto('/auditoria'); // debería mandar a no-autorizado
  92  |     const enNoAutorizado = /\/no-autorizado/.test(page.url());
  93  |     if (enNoAutorizado) {
  94  |       await expect(page.getByRole('alert')).toBeVisible();
  95  |     }
  96  |   });
  97  | 
  98  |   test('[c3] recorrido con teclado: el formulario de login es navegable', async ({ page }) => {
  99  |     await page.goto('/login');
  100 |     await page.keyboard.press('Tab');
  101 |     const activo = await page.evaluate(() => document.activeElement?.tagName.toLowerCase());
  102 |     expect(['input', 'button', 'a']).toContain(activo);
  103 |   });
  104 | });
  105 | 
```