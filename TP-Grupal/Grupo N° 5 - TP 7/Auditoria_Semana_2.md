# Auditoria - Semana 2
Grupo N: 5  
Tema asignado: TP 7  
Integrantes (Carrascosa Suarez Francisco Eduardo - 61469):
- ___
- ___
- ___

---

## REPORTE ANTES DE TRABAJAR
Que encontraron (errores, bugs, omisiones, faltantes de la semana pasada):
- Al ejecutar npm run dev no se inicia el proyecto
- Las listas insertadas tanto en socios como en actividades aparecían en texto blanco y eran "invisibles"
-La imagen de fondo del index no cubría el 100% del fondo
-El footer al crear socios en la sección de gestión de socios tapaba las listas insertadas
-Malas practicas en la sección de crear socio y crear actividad: no existía un select para seleccionar socios y actividades ya creadas

---

## REPORTE DE SOLUCIONES + NUEVO AGREGADO
Que corrigieron + que añadieron de esta semana:
- Se instalaron dependencias y ya funciona `npm run dev` 
- Nuevos agregados de Semana 2: 
- Se lograron todas las metas planteadas para la semana 2
- Se hizo que el footer no tape el contenido del body en todo el proyecto
-Se corrigieron todos los errores mencionados en el reporte previo al trabajo
-Se modificó el css de los textos ya que eliminé el overlay que hacía muy poco estético el index y le puse sombras a los textos para que sean fáciles de leer (ya que si no tienen las sombras algunos textos se pierden en los colores del fondo)
-Se añadió la api fake y funciona correctamente, el proyecto ahora funciona con dos terminales

la primera funciona con: npm run dev
la segunda funciona con: npm run server

los endpoints de json están en el puerto 3001 y son los siguientes:

  http://localhost:3001/users
  http://localhost:3001/socios
  http://localhost:3001/actividades
  http://localhost:3001/reservas