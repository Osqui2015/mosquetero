# Proyecto final (sprint 1 & 2 - Producto y Frontend)

## Especificaciones Técnicas

### Sprint 1 - Diseño de producto
- Se elegirá lo siguiente:
    - Rol de Scrum Master (administra la metodología Scrum, administra las reuniones).
    - Rol de Tech Lead (el dueño del repositorio, el que aprueba los PR).
    - Nombre del equipo.

- Se diseñará el producto asignado al grupo, que saldrá de los siguientes posibles:
    - Blog - News
    - Blog - Sports
    - Blog - Films
    - Blog - Show
    - Blog - Travel

- El Scrum Master creará el tablero Trello con los siguientes requisitos (todos son obligatorios):

- Columna de info del proyecto que incluya estas cards:
    - Integrantes
    - Logo
    - Paleta de colores (máximo recomendado 4 colores)
    - Mock del diseño de la app, el formato puede ser cualquiera de imagen
    - Sitios benchmark enviados a los que se apunta en función del proyecto (ejemplo, si me toco un            ECommerce, puedo poner una captura de Mercado Libre y apuntar a ese formato y calidad)

- Columna de reuniones que incluya las siguientes cards:
    - Evidencia de cada Daily/ Reunión de equipo, detallada con fecha y contenido de la reunión
            
- Columna de tareas con los siguientes estados (todos obligatorios):
    - Backlog (de donde estarán todas las tareas inicialmente)
    - To Do (donde estarán inicialmente todas las tareas cuando ya están asignadas)
    - In Progress (donde cada integrante pondrá la tarea que haya iniciado)
    - Blocked (donde cada integrante pondrá la tarea que tenga bloqueada)
    - Ready to Test (donde cada integrante dejará las tareas para que un compañero que elija la testee) le asignará el ticket cuando lo pase a esta columna, este tester dejará en el comentario si la tarea está Ok para que el integrante la pase a Done luego del pull request.
    - Done (donde cada integrante dejará su tarea cuando ya esté el pr aprobado).
    - Se deben crear las etiquetas (con colores diferentes) para cada Sprint, lo que hice en el Sprint 1, quedará con esa etiqueta, si no lo termine y me lo lleve al Sprint 2, le agrego la segunda etiqueta sin quitar la de Sprint 1.
    - Invitar a tutor y mentor al tablero y ponerlos como colaboradores en Github.

### Sprint 2 - Desarrollo Front End

### Stack de tecnologías obligatorias:
- React con hooks
- Diseño responsive (3 breakpoints, desktop, tablet y celular)
- Referido al código, todo debe ser expresado en inglés, los comentarios pueden ser en castellano (son solo para ramas de desarrollo).
- El estilado del código debe ser hecho con la configuración básica de Prettier (2 espacios para el indentado, etc etc).
- El código final no puede tener comentarios ni mensajes por consola.
- No debe haber errores en la consola del navegador.  

### Sesión:
- Login y registro con modal.
- Recuperar Contraseña, página aparte.

### Header:
- logo + social icons + búsqueda (búsqueda debe arrojar resultados al hacer enter o click en el botón de buscar, redireccionando a una página de resultados o filtrando en forma directa).

### Nav Sticky:
   - Home
   - Destacado
   - Me gusta/ Favoritos (debería agregarse un icono con la cantidad de favoritos que se agregan -badge-, similar a función de favoritos de Mercado Libre)
   - Icono de Contacto (icono a la derecha) que nos va a llevar al formulario de contacto.
   - Mobile:
     - logo + menú hamburguesa (con buscador)

### Artículos destacados con Slider:
   - Libre
   - Deben poder ser seleccionados por el administrador

### Grilla de articulos:
   - En Web: 3 filas con 5 artículos por fila + paginación (opcional). (debe tener un tilde o alguna marca visual al hacer click en botón comprar / en fav).
   - Tablet: 4 filas con 3 productos por fila + paginación (opcional).
   - En Celular: 5 filas con 2 productos por fila + paginación (opcional).

### Publicidad:
   - Libre - ocupa el 100% de pantalla del container

### Categorías:
   - Desplegable con filtrado por categoría, y orden ascendente y descendente (a elección).
   - Publicidad ( en el panel derecho).
   - Mobile:
     - Publicidad no se muestra.

### Footer:
   - Web Logo a la izquierda. 
   - 2 columnas de links.
   - 1 columna con redes sociales + info contacto.
   - Fila con info copyright.

### Mobile:
   - Redes sociales (iconos) centrado. 
   - Logo centrado.

### Article Page:
A discreción del cliente
### Página de resultado de búsqueda de header:
Linkeado a una búsqueda por defecto
### Likes / Fav Page:
similar a la página de productos pero mostrando un listado de favoritos

**Se hereda header, footer y nav en páginas paralelas**

# Proyecto final (sprint 3 - Backend)

## Especificaciones Técnicas

- Se desarrollará lo siguiente:
    
- API con Node + Express con todos los endpoints necesarios para cubrir las necesidades del front: 
    - Proveer la información para ser consumida 
    - Proveer funcionalidades tipo CRUD (validando si el rol del usuario lo permite) 
    - Proveer funcionalidades de login/ register.

- Se debe implementar:
    - Bcrypt
    - Mongoose
    - Dotenv
    - JWT
    - Express-validator
    - Paginado (opcional)
    - Envío de mails (opcional)

## Fecha presentación
La presentación del proyecto será en forma grupal, el 5/12/2022.