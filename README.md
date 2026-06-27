# MDP-Estudio

Sitio web estatico para estudiar **Metodologia de Pruebas** desde celular o escritorio.

## Objetivo

Crear una mini app de estudio responsive con modulos de lectura, indice completo, buscador de temas, modo claro/oscuro, progreso de lectura y navegacion anterior/siguiente.

## Tecnologias

- HTML5
- CSS3
- JavaScript Vanilla
- Bootstrap 5 por CDN
- Sin backend
- Sin base de datos
- Compatible con Netlify y GitHub Pages

## Estructura

```text
MDP-Estudio/
|-- index.html
|-- style.css
|-- script.js
|-- documentos/
|   |-- PDF-Profe/
|   `-- Resumenes/
|-- infografias/
`-- README.md
```

## Contenido inicial

La app incluye 13 modulos:

- Validacion, Verificacion y Testing
- Principios del Testing
- Desarrollo de Software
- Agile, Scrum y Kanban
- Historias de Usuario
- ISO 25010
- Testing Agile
- Proceso de Pruebas
- Plan de Pruebas
- Casos de Prueba
- Escenarios para Examen
- Resumen General
- Preguntas Modelo

## Biblioteca de documentos

La app tiene un panel separado de **Documentos** con:

- PDF-Profe
- Resumenes compartidos
- Infografias

Los recursos se cargan desde `resources.js`. Para sumar nuevas infografias, PDFs, videos o resumenes:

1. Copiar el archivo en la carpeta correspondiente.
2. Agregar una entrada en `resources.js` con `title`, `path` y `type`.

Tipos soportados por el visor interno:

- `pdf`
- `image`
- `video`
- `docx` abre como documento externo/descarga

## Deploy en Netlify

No requiere instalacion ni build.

- Build command: dejar vacio
- Publish directory: raiz del proyecto

## Deploy en GitHub Pages

1. Subir este proyecto a un repositorio de GitHub.
2. Ir a `Settings > Pages`.
3. Elegir la rama principal.
4. Usar la raiz del proyecto como carpeta de publicacion.

## Como agregar temas

Copiar una seccion con `class="study-card"` en `index.html`, cambiar el `id`, el numero de tema y el contenido. El indice se genera automaticamente desde las secciones existentes.
