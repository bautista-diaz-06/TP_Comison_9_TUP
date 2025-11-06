# 🧾 Auditoría — Semana 2  
### Grupo Nº:  __2_  
### Tema asignado: _Sistema de gestion de turnos de peluqueria__  
### Integrantes (Nombre completo + Legajo):
- Priscila Ruiz        61310
- Pilar Nadal          61204
- Guadalupe Santillan  61470  
- Valentina Lazarte    61534

---

## 1) RELEVAMIENTO — Antes de comenzar a trabajar

Describir brevemente lo encontrado al abrir el proyecto:

Descripcion en general:

El proyecto corresponde a un sistema de gestión de turnos para peluquería. Permite registrar clientes, servicios, asignar turnos, ver los turnos del día y consultar el historial por cliente.

Estructura encontrada:
backend/
    ├── server.js
    ├── bd.js
    ├── package.json
    └── package-lock.json

src/
|_ assets/
|   |_react.svg
|_ components/
│   ├── Clientes.jsx
│   ├── Servicios.jsx
│   ├── FormTurno.jsx
│   ├── TurnosHoy.jsx
│   └── HistorialCliente.jsx
├── api.js
├── App.css
├── App.jsx
├── index.css
├── main.jsx

Errores o problemas detectados:

Falta de modularización: no hay carpetas pages/ ni styles/.

Estilos inline en la mayoría de los componentes (style={{}}) en lugar de CSS o módulos.

Lógica de actualización usando window.location.reload().

Observación que tuvimos : al probar los botones de los componentes (Clientes, Servicios, FormTurno, TurnosHoy, HistorialCliente) no funcionan, y en la consola de navegador aparecen errores ERR_CONNECTION_REFUSED y Failed to fetch. ya que esta utilizando backend y no esta iniciado
como aun no se vio backend en clases esto no afectaria. La estructura es correcta solo hacer unos cambios.

Faltantes respecto a la semana 1:
carpetas components/ navbar y footer y en hostorial se agrago seleccion de clientes para ver cada actualizacion de clientes.
Carpetas pages/ .
Carpeta styles/ para separar CSS.


> Este apartado debe completarse **ANTES** de modificar el código.

---

## 2) SOLUCIONES IMPLEMENTADAS + NUEVO AGREGADO

### ✅ Soluciones aplicadas a problemas detectados
Se identificó la necesidad de reemplazar window.location.reload() por actualización de estado con useState.
Se creo style/ para separar y modificar en la parte estetica.

Se recomendó modularizar componentes.

Se propuso crear hooks personalizados (hooks/) y carpeta services/ para manejar las peticiones HTTP.
- …

### ✅ Nuevos requerimientos de Semana 2 agregados
- …
Documentación de los componentes existentes y cómo se comunican entre sí.

Observación de errores de fetch y dependencia del backend para dejarlo documentado en la auditoría.

Se implementó react-router-dom con rutas privadas:
/-> Página de Login
/home -> Página principal (solo si el usuario está logueado)
Se creó el componente PrivateRoute.jsx que restringe el acceso a rutas protegidas.
src/components/PrivateRoute.jsx
Creación de un servicio loginService.js que simula usuarios guardados.

pages/Home.jsx:
Manejo de datos con useState y persistencia en localStorage.
Funciones para agregar clientes, servicios y turnos.
Datos simulados (mock)

hooks/ useFetch
Creado para simular la carga de datos desde una API (aunque aún no conectado a un backend real).
 
service/ archivos clienteService.js con funciones http simuladas

---

## Observaciones finales (opcional)
- Comentarios sobre el flujo de trabajo, dificultades o acuerdos del equipo.

El proyecto está avanzado, ya que incluye backend, pero hasta Semana 2 solo se evalúa frontend.
Los botones no funcionan sin backend, pero esto no afecta los objetivos de la semana 1.