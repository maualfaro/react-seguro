module.exports = [
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[project]/.next-internal/server/app/login/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/login/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "60e2929d195ce42f8c55c133c366bb1d364a5b5801",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$login$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["iniciarSesion"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$login$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$login$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/login/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/login/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$login$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/login/actions.ts [app-rsc] (ecmascript)");
}),
"[project]/.next-internal/server/app/login/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/login/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$login$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/login/actions.ts [app-rsc] (ecmascript)");
;
}),
"[project]/src/app/login/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60e2929d195ce42f8c55c133c366bb1d364a5b5801":{"name":"iniciarSesion"}},"src/app/login/actions.ts",""] */ __turbopack_context__.s([
    "iniciarSesion",
    ()=>iniciarSesion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/schemas.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$password$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/password.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function iniciarSesion(_prev, formData) {
    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EsquemaLogin"].safeParse(Object.fromEntries(formData));
    // Mensaje uniforme ante cualquier fallo: no revela si el usuario existe.
    const fallo = {
        ok: false,
        error: 'Usuario o contraseña incorrectos'
    };
    if (!parsed.success) return fallo;
    const usuario = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["repo"])().buscarUsuarioPorNombre(parsed.data.usuario);
    if (!usuario) return fallo;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$password$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verificarContrasena"])(parsed.data.contrasena, usuario.hashContrasena)) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["repo"])().registrarAuditoria({
            evento: 'LOGIN_FALLIDO',
            actorId: usuario.id,
            ocurridoEn: new Date().toISOString(),
            metadatos: {
                usuario: parsed.data.usuario
            }
        });
        return fallo;
    }
    // Rotación: sesión NUEVA en cada login (previene fijación de sesión).
    const sesion = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["repo"])().crearSesion(usuario.id);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["establecerSesion"])({
        sesionId: sesion.id,
        usuarioId: usuario.id,
        rol: usuario.rol,
        sucursalId: usuario.sucursalId
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["repo"])().registrarAuditoria({
        evento: 'LOGIN_EXITOSO',
        actorId: usuario.id,
        ocurridoEn: new Date().toISOString(),
        metadatos: {}
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/solicitudes');
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    iniciarSesion
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(iniciarSesion, "60e2929d195ce42f8c55c133c366bb1d364a5b5801", null);
}),
"[project]/src/lib/db.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "repo",
    ()=>repo
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$repository$2e$sqlite$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/repository.sqlite.ts [app-rsc] (ecmascript)");
;
;
;
// Singleton del repositorio para el runtime de Next.
let instancia = null;
function repo() {
    if (!instancia) {
        const ruta = process.env.BOVEDA_DB ?? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["join"])(process.cwd(), 'boveda.db');
        instancia = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$repository$2e$sqlite$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RepositorioSqlite"](ruta);
    }
    return instancia;
}
}),
"[project]/src/lib/password.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "verificarContrasena",
    ()=>verificarContrasena
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
;
function verificarContrasena(plano, almacenado) {
    const [salt, hashHex] = almacenado.split(':');
    if (!salt || !hashHex) return false;
    const esperado = Buffer.from(hashHex, 'hex');
    const derivado = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["scryptSync"])(plano, salt, esperado.length);
    return esperado.length === derivado.length && (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["timingSafeEqual"])(esperado, derivado);
}
}),
"[project]/src/lib/repository.sqlite.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RepositorioSqlite",
    ()=>RepositorioSqlite
]);
// Implementación SQLite del repositorio (runtime). Misma interfaz que la de memoria.
// Demuestra la costura: cambiar de almacenamiento no toca servicios ni componentes.
var __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$sqlite3__$5b$external$5d$__$28$better$2d$sqlite3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$better$2d$sqlite3$29$__ = __turbopack_context__.i("[externals]/better-sqlite3 [external] (better-sqlite3, cjs, [project]/node_modules/better-sqlite3)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
;
;
;
;
class RepositorioSqlite {
    db;
    constructor(rutaArchivo){
        this.db = new __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$sqlite3__$5b$external$5d$__$28$better$2d$sqlite3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$better$2d$sqlite3$29$__["default"](rutaArchivo);
        this.db.pragma('journal_mode = WAL');
        this.db.pragma('foreign_keys = ON');
        const schema = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["readFileSync"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["join"])(process.cwd(), 'db', 'schema.sql'), 'utf-8');
        this.db.exec(schema);
    }
    async buscarUsuarioPorNombre(usuario) {
        return this.db.prepare('SELECT * FROM usuarios WHERE usuario = ?').get(usuario) ?? null;
    }
    async buscarUsuarioPorId(id) {
        return this.db.prepare('SELECT * FROM usuarios WHERE id = ?').get(id) ?? null;
    }
    async crearSesion(usuarioId) {
        const ahora = new Date().toISOString();
        const sesion = {
            id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomUUID"])(),
            usuarioId,
            creadaEn: ahora,
            ultimoAccesoEn: ahora,
            revocadaEn: null,
            refreshActual: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomUUID"])()
        };
        this.db.prepare('INSERT INTO sesiones (id,usuarioId,creadaEn,ultimoAccesoEn,revocadaEn,refreshActual) VALUES (?,?,?,?,?,?)').run(sesion.id, sesion.usuarioId, sesion.creadaEn, sesion.ultimoAccesoEn, sesion.revocadaEn, sesion.refreshActual);
        return sesion;
    }
    async buscarSesion(id) {
        return this.db.prepare('SELECT * FROM sesiones WHERE id = ?').get(id) ?? null;
    }
    async tocarSesion(id) {
        this.db.prepare('UPDATE sesiones SET ultimoAccesoEn = ? WHERE id = ?').run(new Date().toISOString(), id);
    }
    async revocarSesion(id) {
        this.db.prepare('UPDATE sesiones SET revocadaEn = ? WHERE id = ?').run(new Date().toISOString(), id);
    }
    async rotarRefresh(sesionId, nuevoRefreshId) {
        this.db.prepare('UPDATE sesiones SET refreshActual = ? WHERE id = ?').run(nuevoRefreshId, sesionId);
    }
    async listarSolicitudes(filtro) {
        if (filtro.sucursalId) {
            return this.db.prepare('SELECT * FROM solicitudes WHERE sucursalId = ? ORDER BY creadaEn DESC').all(filtro.sucursalId);
        }
        return this.db.prepare('SELECT * FROM solicitudes ORDER BY creadaEn DESC').all();
    }
    async buscarSolicitud(id) {
        return this.db.prepare('SELECT * FROM solicitudes WHERE id = ?').get(id) ?? null;
    }
    async crearSolicitud(s) {
        const solicitud = {
            ...s,
            id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomUUID"])()
        };
        this.db.prepare(`INSERT INTO solicitudes
      (id,sucursalId,creadaPor,cuentaDestino,monto,moneda,justificacion,estado,creadaEn,resueltaPor,resueltaEn)
      VALUES (@id,@sucursalId,@creadaPor,@cuentaDestino,@monto,@moneda,@justificacion,@estado,@creadaEn,@resueltaPor,@resueltaEn)`).run(solicitud);
        return solicitud;
    }
    async actualizarSolicitud(id, cambios) {
        const actual = await this.buscarSolicitud(id);
        if (!actual) throw new Error('Solicitud no encontrada');
        const next = {
            ...actual,
            ...cambios
        };
        this.db.prepare('UPDATE solicitudes SET estado=@estado, resueltaPor=@resueltaPor, resueltaEn=@resueltaEn WHERE id=@id').run(next);
        return next;
    }
    async registrarAuditoria(r) {
        this.db.prepare('INSERT INTO auditoria (id,evento,actorId,ocurridoEn,metadatos) VALUES (?,?,?,?,?)').run((0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomUUID"])(), r.evento, r.actorId, r.ocurridoEn, JSON.stringify(r.metadatos));
    }
    async listarAuditoria() {
        const filas = this.db.prepare('SELECT * FROM auditoria ORDER BY ocurridoEn DESC').all();
        return filas.map((f)=>({
                ...f,
                metadatos: JSON.parse(f.metadatos)
            }));
    }
}
}),
"[project]/src/lib/schemas.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EsquemaCrearSolicitud",
    ()=>EsquemaCrearSolicitud,
    "EsquemaLogin",
    ()=>EsquemaLogin,
    "EsquemaResolver",
    ()=>EsquemaResolver
]);
// Validación en la frontera con Zod (Tema 3 / Tema 8: validación de entrada).
// El MISMO esquema alimenta el formulario del cliente (experiencia) y la Server Action (seguridad).
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
;
// IBAN de Costa Rica: CR seguido de 20 dígitos.
const ibanCR = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^CR\d{20}$/, 'La cuenta destino debe ser un IBAN de Costa Rica válido');
const EsquemaLogin = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    usuario: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(3, 'Usuario demasiado corto').max(64),
    contrasena: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(8, 'La contraseña debe tener al menos 8 caracteres').max(256)
});
const EsquemaCrearSolicitud = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    cuentaDestino: ibanCR,
    monto: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().positive('El monto debe ser positivo').max(50_000_000, 'El monto excede el límite permitido'),
    moneda: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'CRC',
        'USD'
    ]),
    justificacion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(20, 'La justificación debe tener al menos 20 caracteres').max(1000, 'La justificación no puede exceder 1000 caracteres')
});
const EsquemaResolver = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid('Identificador inválido')
});
}),
"[project]/src/lib/session.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "destruirSesion",
    ()=>destruirSesion,
    "establecerSesion",
    ()=>establecerSesion,
    "verificarSesion",
    ()=>verificarSesion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tokens$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/tokens.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-rsc] (ecmascript)");
;
;
;
;
;
// Prefijo __Host- omitido en dev (requiere HTTPS). En producción usar '__Host-boveda_access'.
const COOKIE_ACCESS = 'boveda_access';
const COOKIE_REFRESH = 'boveda_refresh';
function secreto() {
    const s = process.env.SESSION_SECRET;
    if (!s) throw new Error('SESSION_SECRET no configurado');
    return s;
}
const opcionesBase = {
    httpOnly: true,
    secure: ("TURBOPACK compile-time value", "development") === 'production',
    sameSite: 'lax',
    path: '/'
};
async function establecerSesion(id) {
    const store = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const [access, refresh] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tokens$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["firmarAccess"])(id, secreto()),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tokens$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["firmarRefresh"])(id, secreto())
    ]);
    store.set(COOKIE_ACCESS, access, {
        ...opcionesBase,
        maxAge: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tokens$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ACCESS_TTL_SEGUNDOS"]
    });
    store.set(COOKIE_REFRESH, refresh, {
        ...opcionesBase,
        maxAge: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tokens$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["REFRESH_TTL_SEGUNDOS"]
    });
}
async function destruirSesion() {
    const store = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const token = store.get(COOKIE_ACCESS)?.value ?? store.get(COOKIE_REFRESH)?.value;
    if (token) {
        const id = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tokens$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verificar"])(token, 'access', secreto()) ?? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tokens$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verificar"])(token, 'refresh', secreto());
        if (id) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["repo"])().revocarSesion(id.sesionId);
    }
    store.delete(COOKIE_ACCESS);
    store.delete(COOKIE_REFRESH);
}
const verificarSesion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])(async ()=>{
    const store = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const access = store.get(COOKIE_ACCESS)?.value;
    if (!access) return null;
    const id = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tokens$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verificar"])(access, 'access', secreto());
    if (!id) return null;
    const sesion = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["repo"])().buscarSesion(id.sesionId);
    if (!sesion || sesion.revocadaEn) return null;
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["repo"])().tocarSesion(id.sesionId);
    return id;
});
}),
"[project]/src/lib/tokens.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACCESS_TTL_SEGUNDOS",
    ()=>ACCESS_TTL_SEGUNDOS,
    "REFRESH_TTL_SEGUNDOS",
    ()=>REFRESH_TTL_SEGUNDOS,
    "firmarAccess",
    ()=>firmarAccess,
    "firmarRefresh",
    ()=>firmarRefresh,
    "verificar",
    ()=>verificar
]);
// Emisión y verificación de tokens (Tema 1: JWT, ciclo de vida, access vs refresh).
//
// Modelo de banca: sesión REVOCABLE. Usamos JWT firmados de vida corta, pero
// respaldados por un registro de sesión en base — el token válido no basta si la
// sesión fue revocada. Así se combina la ergonomía del JWT con la revocabilidad
// que un entorno regulado exige.
//
// - ACCESS token:  vida corta (minutos). Autoriza cada request. Se renueva seguido.
// - REFRESH token: vida más larga (horas). Solo sirve para emitir un nuevo access.
//   Se ROTA en cada uso (detección de reuso).
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/sign.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/verify.js [app-rsc] (ecmascript)");
;
const ACCESS_TTL_SEGUNDOS = 60 * 15; // 15 min (inactividad)
const REFRESH_TTL_SEGUNDOS = 60 * 60 * 8; // 8 h (vida absoluta)
function clave(secreto) {
    if (!secreto || secreto.length < 16) {
        throw new Error('SESSION_SECRET ausente o demasiado corto');
    }
    return new TextEncoder().encode(secreto);
}
async function firmar(identidad, tipo, ttl, secreto) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SignJWT"]({
        tipo,
        sesionId: identidad.sesionId,
        usuarioId: identidad.usuarioId,
        rol: identidad.rol,
        sucursalId: identidad.sucursalId
    }).setProtectedHeader({
        alg: 'HS256'
    }).setIssuedAt().setExpirationTime(Math.floor(Date.now() / 1000) + ttl).sign(clave(secreto));
}
function firmarAccess(id, secreto) {
    return firmar(id, 'access', ACCESS_TTL_SEGUNDOS, secreto);
}
function firmarRefresh(id, secreto) {
    return firmar(id, 'refresh', REFRESH_TTL_SEGUNDOS, secreto);
}
async function verificar(token, tipoEsperado, secreto) {
    try {
        const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jwtVerify"])(token, clave(secreto), {
            algorithms: [
                'HS256'
            ]
        });
        const p = payload;
        if (p.tipo !== tipoEsperado) return null;
        return {
            sesionId: p.sesionId,
            usuarioId: p.usuarioId,
            rol: p.rol,
            sucursalId: p.sucursalId
        };
    } catch  {
        return null; // firma inválida, expirado o malformado
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1wel23_._.js.map