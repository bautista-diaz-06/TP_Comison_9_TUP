# 🧾 Auditoría — Semana 2  
### Grupo Nº: 7
### Tema asignado: TP 6- Sistema de Actividades Culturales para Municipalidad
### Integrantes (Nombre completo + Legajo):
- Almiron Camila 61329
- Hernández Solana 61451
- Pérez María Gimena 61023
---
 
## 1) RELEVAMIENTO — Antes de comenzar a trabajar
 
Describir brevemente lo encontrado al abrir el proyecto:
 
- Errores detectados:
● En FormularioLogin.jsx, se guarda la contraseña en localStorage con la clave "constraseña", lo que puede generar inconsistencias.
- Faltantes respecto a Semana 1:
● Carpeta vacía: Index CSS, aunque no afecta en el proyecto.
 
## 2) SOLUCIONES IMPLEMENTADAS + NUEVO AGREGADO
 
1. Relevamiento de errores detectados
● En FormularioLogin.jsx, la contraseña se estaba guardando en localStorage con la clave "constraseña", lo que podría generar inconsistencias al momento de autenticar al usuario.
● Necesidad de organizar correctamente las rutas públicas y privadas para asegurar que sólo los usuarios logueados puedan acceder a ciertas secciones del dashboard.
● Configuración inicial del backend simulado (json-server) y manejo de datos aún no implementada al momento de recibir el proyecto.
 
2. Soluciones aplicadas
● Configuración completa del backend simulado utilizando json-server con un archivo db.json que contiene datos de prueba de usuarios, eventos, artistas y asistentes.
● Creación del hook personalizado useUser.js para manejar login, registro y logout de usuarios, manteniendo la sesión en localStorage y redirigiendo automáticamente al Dashboard después de iniciar sesión o registrarse.
● Modificación de FormularioLogin.jsx y FormularioRegistro.jsx para que funcionen con el hook y se comuniquen correctamente con el backend simulado, asegurando consistencia en la gestión de la contraseña y los datos de usuario.
● Implementación de rutas públicas (/ y /registro) y privadas (/dashboard, /tabla-eventos, /tabla-artistas, /tabla-asistentes) usando PrivateRoute.jsx para proteger la navegación según el estado de sesión del usuario.
● Desarrollo de Header.jsx que muestra dinámicamente el nombre del usuario logueado, enlaces de navegación y la opción de cerrar sesión, eliminando los datos de localStorage y redirigiendo al login.
● Actualización de App.jsx y dependencias (react-router-dom) para garantizar el correcto funcionamiento de las rutas, así como la inclusión de scripts en package.json para levantar el servidor simulado con json-server.
● Creación de la carpeta services/ para centralizar las peticiones HTTP simuladas hacia json-server, facilitando el manejo de datos de usuarios, eventos, artistas y asistentes.
 
3. Nuevos requerimientos agregados (Semana 2)
● Uso de react-router-dom para la navegación de la aplicación.
● Diferenciación y protección de rutas públicas y privadas.
● Implementación de un hook personalizado (useUser) para el manejo simulado de la API.
● Inclusión de json-server con datos simulados (db.json) y scripts de ejecución en package.json.
● Peticiones HTTP centralizadas en services/ para mantener la lógica de interacción con el backend simulado organizada y reutilizable.
 
4. Estilos y mejoras en CSS
● Creación de la carpeta styles/ para centralizar todos los archivos de estilos y mantener una estructura más organizada dentro del proyecto.
● Estructuración y organización del CSS para unificar estilos entre las distintas vistas de la aplicación, garantizando coherencia visual y una experiencia de usuario fluida.
● Diseño del layout principal del Dashboard, aplicando flexbox y grid para lograr una distribución equilibrada entre el contenido y la barra de navegación lateral.
● Estilización de los formularios de Login y Registro, incorporando colores, tipografías y espaciados coherentes con la identidad visual del proyecto.
● Implementación de clases reutilizables (botones, inputs, tarjetas, títulos) para mantener la consistencia y facilitar futuras modificaciones.
● Adaptación responsiva de las vistas principales mediante media queries, asegurando una correcta visualización en distintos tamaños de pantalla.
● Optimización del Header y la navegación, aplicando estilos dinámicos que cambian según el estado del usuario (logueado/no logueado).
 
## Observaciones finales (opcional)
Como grupo, trabajamos de manera colaborativa para analizar el código y posteriormente dividir las tareas con el fin de completar el trabajo a tiempo. En general, no tuvimos mayores dificultades, salvo algunos inconvenientes al momento de trabajar en el repositorio de otra integrante.