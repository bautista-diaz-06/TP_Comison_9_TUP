# 🧾 Auditoría — Semana 2  
### Grupo Nº: ___  
### Tema asignado: ___  
### Integrantes (Nombre completo + Legajo):
- …
- …
- …

---

## 1) RELEVAMIENTO — Antes de comenzar a trabajar

Dashboard:
1- La sección dashboard no es un dashboard.

Pacientes:
Vulnerabilidades encontradas en cuanto a imputs: 

1- En el campo nombre se pueden introducir espacios que quedan guardados.

2- No hay un limite de caracteres.

3- No hay un eliminado de espacios.

Medicos: 

Encontramos las mismas vulnerabilidades que en pacientes.

Turnos:

1- En el campo paciente se puede introducir numeros.

2- Podemos pedir turnos en fechas que ya pasaron.

3- No hay limite para sacar fechas.

4- Podemos ingresar cualquier horario, no se maneja con rangos de horas.

5- En la edicion del turno tiene las mismas vulnerabilidades que en turnos en si.

Estilos:

1- Podemos encontrar estilos en los archivos css y jsx de una misma seccion a la vez lo cual a nuestro aprecer quizas no es una buena practica.

Carpetas:

1- Encontramos carpetas vacias en las cuales no encontramos utilidad alguna quiza para esta fase del tp. (dashboard, constantes, store, layout, endpoints, utils )

---

## 2) SOLUCIONES IMPLEMENTADAS + NUEVO AGREGADO

1- Solucionamos la vulnerabilidad de los input

2- Creamos componentes para tener una mayor modularidad, diviendo en components y pages

3- Aplicamos la logica de Login que valida usuarios a traves de db.json

4- Quitamos todos los estilos que se encontraban sueltos en Components y los pasamos a un .css

### ✅ Nuevos requerimientos de Semana 2 agregados

1- axios

2- dotenv

## Observaciones finales (opcional)

Los unicos inconvenientes que ocurrieron en el flujo de trabajo fueron algunos problemas con git pero nada mas.

Quizas en cuanto estetica y experiencia de usuario puede ser mejorada la pagina pero decidimos no tocar ya que eso es un criterio personal.
