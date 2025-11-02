# 🧾 Auditoría — Semana 2  
### Grupo Nº: 1  
### Tema asignado: Sistema de Gestión de Biblioteca Escolar
### Integrantes (Nombre completo + Legajo):
- Cabanellas Rúben - 61123
- Díaz Bautista - 61586
- Salvatierra Facundo - 61738 
- Velardez Iván - 61061

---

## 1) RELEVAMIENTO — Antes de comenzar a trabajar

Describir brevemente lo encontrado al abrir el proyecto:

- Errores detectados (bugs, warnings, import fallidos, rutas rotas, etc.)
- Faltantes respecto a Semana 1 (carpetas vacías, componentes incompletos, etc.)
- Problemas de estructura, naming, uso de git o dependencias

> Este apartado debe completarse **ANTES** de modificar el código.

-En los errores detectados, fue más un error local, ya que debiamos utilizar "npm install" para instalar todas las dependencias necesarias. El error que nos saltaba era sobre react-router-dom

-En cuanto a los faltantes, vimos que la estructura de carpetas no era la pedida, ya que faltaban todas las carpetas excepto "Components", y también el sistema no contenia un Login con localstorage

-En cuanto a la estructura, es una estructura bastante entendible para nosotros que estamos empezando con React, pero que puede mejorarse a futuro con una mejor destructuracion

## 2) SOLUCIONES IMPLEMENTADAS + NUEVO AGREGADO

### ✅ Soluciones aplicadas a problemas detectados
- No se detectaron problemas en cuanto a funcionalidades sino las estructuras de carpetas

### ✅ Nuevos requerimientos de Semana 2 agregados
- react-router-dom ya estaba implementado, y se modularizaron las rutas internas
- Login simulado obteniendo los datos de "Admins" de json-server
- Hooks personalizados para permitir que las peticiones HTTP funciones desde el frontend
- Instalacion de json-server y su script, asi como tambien la carpeta "data"
- json-server configurado
- Carpeta /services configurada
- El proyecto se siguió sin modificar la estructura de carpetas anterior

## Observaciones finales (opcional)
- Comentarios sobre el flujo de trabajo, dificultades o acuerdos del equipo.

En ciertas funcionalidades sobre los servicios, al empezar a hacerlo fueron medio confusas ya que no solemos controlar todo un "crud" desde el frontend con JSX puro. Pero a medida que fuimos avanzando, se hizo más entendible ya que pudimos lograr implementar alguna estructura de carpetas asi como tambien dejar comentadas ciertas partes del codigo para que los proximos pudiesen entender.
Por ejemplo, algo que nos quedó pendiente fueron las funcionalidades de editar y eliminar, si bien al presionar en editar te lleva a un formulario para editar, este no funciona. Y en cuanto a la eliminacion, tambien, no fuimos capaces de lograr que se pudiera eliminar al presionar dicho botón.