# 🧾 Auditoría — Semana 2

### Grupo Nº: 6

### Tema asignado: Sistema de Gestión de Donaciones para ONG

### Integrantes (Nombre completo + Legajo):

- **Navarro, Víctor Leandro** — Legajo: _(completar)_
- **Gallo, Genaro** — Legajo: _(completar)_
- **Valdez del Pino, Tomás Manuel** — Legajo: _(completar)_

---

## 1) RELEVAMIENTO — Antes de comenzar a trabajar

**Descripción general del estado inicial:**
Al abrir el proyecto, se encontró que la mayor parte del sistema solicitado aún no se encontraba implementada. Solo estaban presentes un **login** y un **registro** básicos, sin conexión a ningún backend real.

**Errores detectados y observaciones:**

- El login y registro guardan únicamente una variable `login` en `localStorage`, sin manejar usuarios reales ni autenticación segura.
- No existe persistencia de datos ni estructura para donantes, productos o entregas.
- El dashboard muestra **métricas falsas y hardcodeadas** en pantalla (datos estáticos mes a mes).
- No hay formularios ni rutas que permitan registrar donaciones, productos o beneficiarios.
- Faltan completamente los módulos principales: gestión de donantes, productos, entregas e historial.
- La página principal muestra un “dashboard” con datos inventados, pero no cumple ninguna de las funcionalidades solicitadas.
- No se detectaron errores graves en consola, aunque hay **carpetas vacías** y **componentes sin contenido**.
- No hay trazabilidad de movimientos ni estructura para el envío de correos.
- La organización de carpetas es mínima, sin división clara entre componentes, servicios o hooks.
- Se usa **React Router DOM**, pero no existen **rutas protegidas** (cualquiera puede acceder si el localStorage contiene `"login": true"`).
- No hay uso de ningún backend ni fake API, solo localStorage.

**Resumen del estado inicial:**
El proyecto está en una etapa muy temprana, con un esqueleto funcional básico de login/registro de prueba, pero sin ninguna implementación real de la gestión de donaciones.

---

## 2) SOLUCIONES IMPLEMENTADAS + NUEVO AGREGADO

### ✅ Soluciones aplicadas a problemas detectados

- Eliminación del uso de `localStorage` para manejar sesiones de prueba.
- Sustitución de la lógica de login/register falsa por una estructura que permita trabajar con **JSON-Server** como backend simulado.
- Reorganización mínima de carpetas para preparar el uso de **rutas protegidas** y futuros módulos de gestión.
- Limpieza de componentes vacíos y archivos innecesarios.
- Configuración base del entorno de **React Router DOM** para permitir navegación controlada.
- Ajustes menores en el dashboard para evitar warnings y mejorar la lectura del código.

### ✅ Nuevos requerimientos de Semana 2 agregados

- Implementación de **JSON-Server** como base de datos local simulada para manejar donantes, productos y entregas.
- Preparación de rutas y componentes iniciales para los siguientes módulos:

  - **Registro de donantes**
  - **Registro de productos**
  - **Registro de entregas**
  - **Historial por comedor o donante**

- Creación de estructura inicial para **rutas protegidas** mediante verificación de sesión.
- Adaptación del flujo de login y registro para interactuar con los endpoints del JSON-Server.
- Planificación del módulo de **trazabilidad de movimientos** para su futura integración.
- Documentación interna de los endpoints base (`/donantes`, `/productos`, `/entregas`).

---

## Observaciones finales (opcional)

- El proyecto recibido presentaba un desarrollo inicial muy limitado, por lo que fue necesario replantear la estructura base antes de continuar.
- Se decidió trabajar con **JSON-Server** en lugar de `localStorage` para lograr una simulación más realista de la persistencia de datos.
- El equipo acordó distribuir tareas en base a los nuevos requerimientos:

  - **Navarro Víctor:** Configuración de JSON-Server, rutas y autenticación.
  - **Gallo Genaro:** Componentes de registro y formularios.
  - **Valdez del Pino Tomás:** Estilos y diseño del dashboard funcional.

- El flujo de trabajo se centrará en completar los módulos faltantes y asegurar que todas las operaciones (crear, listar, asignar, entregar) estén conectadas al backend simulado.
