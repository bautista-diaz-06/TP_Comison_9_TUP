# 🧩 Planificación y Lista de Tareas — Sistema de Gestión de Donaciones para ONG

### Grupo Nº: 6

### Integrantes:

- **Navarro, Víctor Leandro**
- **Gallo, Genaro**
- **Valdez del Pino, Tomás Manuel**

---

## 📋 Estado actual del proyecto

Actualmente el proyecto cuenta únicamente con una estructura base de **React**, con un `App.jsx` que renderiza `Home`, el cual contiene las rutas principales (`/`, `/login`, `/register`) y un dashboard con datos estáticos.
El **login** y **registro** funcionan solo mediante `localStorage` y no hay persistencia real.
No existen módulos funcionales de donantes, productos ni entregas.

---

## 🚧 Objetivo general de la segunda etapa

Transformar el proyecto actual en un **sistema funcional de gestión de donaciones**, utilizando:

- **JSON-Server** como backend simulado.
- **Hooks** personalizados (`useFetch`, `useAuth`, etc.) para manejo de lógica reutilizable.
- **Services** para comunicación con la API (separación de responsabilidades).
- **Layouts** organizados (AuthLayout, DashboardLayout, etc.) para mantener orden visual y estructural.
- **Rutas protegidas** con validación de sesión.
- **Buenas prácticas de estructura de carpetas** (`src/components`, `src/hooks`, `src/services`, `src/layout`, `src/pages`, etc.).

---

## 🧱 Tareas técnicas por área

### 🗂️ 1. Reestructuración del proyecto

- [ ] Mover la gestión de rutas a un archivo dedicado (`src/routes/AppRoutes.jsx`).
- [ ] Separar las páginas (`Login`, `Register`, `Dashboard`, etc.) dentro de `/pages`.
- [ ] Crear una carpeta `/services` para centralizar las peticiones a JSON-Server.
- [ ] Crear una carpeta `/hooks` para la lógica de estado y autenticación.
- [ ] Incorporar `/layout` con componentes estructurales: `AuthLayout`, `DashboardLayout`.

---

### 🔐 2. Autenticación y rutas protegidas

- [ ] Reemplazar completamente el uso de `localStorage` con un sistema de login contra JSON-Server.
- [ ] Crear un **hook `useAuth`** que maneje el estado global del usuario.
- [ ] Implementar **rutas protegidas** que redirijan al login si el usuario no está autenticado.
- [ ] Agregar un **logout funcional**.
- [ ] Crear una **página 404 o redirección genérica** para rutas no definidas.

---

### 💾 3. Backend simulado con JSON-Server

- [ ] Configurar `db.json` con las colecciones:

  ```json
  {
    "donantes": [],
    "productos": [],
    "entregas": [],
    "usuarios": []
  }
  ```

- [ ] Definir endpoints en `/services/api.js` para cada colección.
- [ ] Crear funciones de lectura, creación, actualización y eliminación (CRUD).

---

### 🧾 4. Módulos principales

#### a) Registro de Donantes

- [ ] Crear formulario con validación.
- [ ] Conectarlo a JSON-Server (`POST /donantes`).
- [ ] Listado general de donantes (`GET /donantes`).

#### b) Registro de Productos Donados

- [ ] Formulario con tipo, cantidad y fecha.
- [ ] Asociación del producto con un donante.
- [ ] Listado con filtros por tipo o fecha.

#### c) Registro de Entregas

- [ ] Formulario para asignar productos a comedores/beneficiarios.
- [ ] Actualización automática del stock disponible.
- [ ] Registro de cada entrega con fecha y responsable.

#### d) Historial de Movimientos

- [ ] Listar historial por **donante** y por **comedor/beneficiario**.
- [ ] Mostrar trazabilidad básica (qué productos, a quién, cuándo).

---

### 🧠 5. Dashboard real

- [ ] Reemplazar datos hardcodeados por estadísticas obtenidas de JSON-Server.
- [ ] Crear componentes visuales reutilizables para métricas (donantes, fondos, entregas, etc.).
- [ ] Incorporar un **gráfico dinámico** (por ejemplo, con Recharts o Chart.js).

---

### 🎨 6. Diseño y usabilidad

- [ ] Mantener estilos con **Bootstrap**.
- [ ] Ajustar el diseño general de los formularios, tablas y dashboard.
- [ ] Implementar **layout responsive** con `container`, `row`, `col`.

---

### 🧰 7. Extras y mantenimiento

- [ ] Agregar documentación interna (comentarios, guías de endpoints).
- [ ] Configurar `.gitignore` y limpieza del repositorio.
- [ ] Controlar los warnings de React y las dependencias desactualizadas.
- [ ] Preparar base para futura integración de envío de correos o trazabilidad extendida.
