Perfecto 😄
Acá tenés tu **auditoría actualizada** (versión final para entregar). Mantuve tu estructura original, pero integré todos los avances técnicos, estéticos y funcionales que mencionaste, corrigiendo redacción, coherencia y formato.

---

# 🧾 Auditoría — Semana 2

### Grupo Nº: 6

### Tema asignado: Sistema de Gestión de Donaciones para ONG

### Integrantes (Nombre completo + Legajo):

- **Navarro, Víctor Leandro** — Legajo: 61550
- **Gallo, Genaro** — Legajo: 61909
- **Valdez del Pino, Tomás Manuel** — Legajo: 61447

---

## 1) RELEVAMIENTO — Antes de comenzar a trabajar

**Descripción general del estado inicial:**
Al abrir el proyecto, se observó que el sistema se encontraba en una etapa temprana de desarrollo. Existía un **login** y un **registro** funcionales de prueba, pero sin conexión a un backend real ni persistencia de datos sólida.

**Errores detectados y observaciones:**

- El login y el registro manejaban una variable `login` en `localStorage` sin autenticación real ni verificación de credenciales.
- No existía persistencia de datos para donantes, productos o entregas más allá del almacenamiento local.
- El dashboard mostraba **datos estáticos y falsos** (no provenientes de ninguna fuente real).
- No existían formularios, CRUDs ni rutas para registrar donaciones, beneficiarios o productos.
- No se habían implementado módulos clave: gestión de donantes, productos, beneficiarios ni entregas.
- La estructura de carpetas era mínima, con varios componentes vacíos.
- Se usaba React Router DOM, pero sin **rutas protegidas** (cualquier usuario podía acceder si el localStorage contenía `"login": true`).
- No se encontró un backend ni fake API funcionando.
- No había trazabilidad ni lógica de aprobación o rechazo de donaciones.

**Resumen del estado inicial:**
El proyecto presentaba solo un esqueleto básico funcional para el inicio de sesión y el registro, sin integración de backend ni lógica de negocio implementada.

---

## 2) SOLUCIONES IMPLEMENTADAS + NUEVO AGREGADO

### ✅ Soluciones aplicadas a problemas detectados

- Mantenimiento del uso de **localStorage** como mecanismo rápido de autenticación temporal, dado su utilidad en esta etapa del desarrollo.
- Creación de **builders reutilizables** para tablas, formularios y modales, mejorando la estructura general del proyecto y facilitando la extensión de nuevas funcionalidades.
- Estandarización de botones, formularios y componentes visuales para mejorar la coherencia del diseño.
- Reorganización de carpetas para distinguir módulos de usuario, administrador, componentes y helpers.
- Limpieza de código y eliminación de archivos vacíos o redundantes.
- Preparación de base para conectar con un backend real en próximas semanas.

---

### ✅ Nuevos requerimientos y funcionalidades agregadas

- Implementación de **builders dinámicos** de:

  - **Tablas:** para listar y administrar donantes, beneficiarios y entregas.
  - **Formularios:** para el login, registro y creación de entidades.
  - **Modales:** reutilizables en múltiples contextos (alta, edición, confirmaciones).

- Integración de estos builders tanto en el **usuario común** como en el **administrador**:

  - **Usuario:**

    - Puede donar a cualquier beneficiario (o comedor).
    - Accede a un **historial completo de donaciones** realizadas.

  - **Administrador:**

    - CRUD completo de **usuarios** y **beneficiarios**.
    - Gestión de **donaciones** y **entregas**, con posibilidad de **aprobar o rechazar** cada una.

- Estilo visual completamente renovado con **temática anime**, utilizando el color **“peru”** como tono principal y fondos animados con intros y endings representativos:

  - 🧡 En la pantalla de autenticación (**login/register**) se usa el **Ending 2 de Kobayashi-san no Maid Dragon**, conocido en la comunidad otaku.
  - 💚 En la interfaz de **usuario** se utiliza **Uragimono no Requiem** (_JoJo’s Bizarre Adventure_).
  - 💙 En la interfaz de **administrador**, el fondo es **Stone Ocean** (_JoJo’s Bizarre Adventure Part 6_).

---

## 3) RESULTADOS ACTUALES Y PLANES FUTUROS

- El sistema se encuentra actualmente **plenamente funcional** en sus módulos base: autenticación, donaciones, historial y panel administrativo.
- Se logró una estructura modular y visualmente atractiva.
- Se detectaron limitaciones en el manejo de **IDs con JSON-Server**, ya que su formato puede resultar incómodo para gestionar relaciones entre entidades (donante ↔ beneficiario ↔ entrega).

## Observaciones finales

El proyecto evolucionó de un prototipo básico a un sistema funcional con múltiples módulos, estética cuidada y componentes reutilizables.
El grupo demostró una mejora técnica constante, aplicando buenas prácticas de React y diseño moderno.
Se prevé que, con la integración del backend real, el sistema alcance un nivel de madurez muy cercano a un entorno de producción.
